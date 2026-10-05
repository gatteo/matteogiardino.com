/**
 * Proposal tooling. Runs with Node ≥ 22.18 (native TypeScript stripping).
 *
 *   pnpm proposal new <client-slug> [--locale it|en]   scaffold <slug>-<random>.json from template.json
 *   pnpm proposal check                                 validate every proposal against the schema
 *   pnpm proposal url <token>                           print the shareable URL
 *
 * Files live in $PROPOSALS_DIR (read from .env.local), a clone of the private
 * proposals repository. Nothing here touches the public website repo.
 */
import { randomBytes } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { proposalSchema } from '../lib/proposals/schema.ts'

loadDotEnv('.env.local')

const dir = process.env.PROPOSALS_DIR
if (!dir) fail('PROPOSALS_DIR is not set (add it to .env.local)')

const [command, ...rest] = process.argv.slice(2)

switch (command) {
    case 'new':
        await scaffold(rest)
        break
    case 'check':
        await check()
        break
    case 'url':
        await url(rest[0])
        break
    default:
        console.log('usage: pnpm proposal <new <client-slug> [--locale it|en] | check | url <token>>')
        process.exit(command ? 1 : 0)
}

async function scaffold(args: string[]) {
    const slug = args.find((a) => !a.startsWith('--'))
    if (!slug || !/^[a-z0-9-]+$/.test(slug)) fail('client slug: lowercase letters, digits and dashes (e.g. acme-srl)')
    const locale = args.includes('--locale') ? args[args.indexOf('--locale') + 1] : 'it'
    if (locale !== 'it' && locale !== 'en') fail('--locale must be it or en')

    const token = `${slug}-${randomToken(12)}`
    const file = path.join(dir!, `${token}.json`)

    const templatePath = path.join(dir!, '..', 'template.json')
    if (!existsSync(templatePath)) fail(`template.json not found at ${templatePath}`)
    const template = JSON.parse(await readFile(templatePath, 'utf8'))

    const today = new Date()
    const validUntil = new Date(today)
    validUntil.setDate(validUntil.getDate() + 21)
    const existing = (await readdir(dir!)).filter((f) => f.endsWith('.json')).length
    const reference = `MG-${today.getFullYear()}-${String(existing + 1).padStart(3, '0')}`

    const proposal = {
        ...template,
        token,
        locale,
        status: 'draft',
        reference,
        issuedAt: isoDate(today),
        validUntil: isoDate(validUntil),
    }

    await writeFile(file, JSON.stringify(proposal, null, 2) + '\n')
    console.log(`created ${file}`)
    console.log(`token   ${token}`)
    console.log(`url     ${publicUrl(token, locale)}`)
    console.log('next    edit the file, then run: pnpm proposal check')
}

async function check() {
    const files = (await readdir(dir!)).filter((f) => f.endsWith('.json')).sort()
    if (files.length === 0) fail(`no proposals found in ${dir}`)

    let errors = 0
    for (const file of files) {
        const token = file.replace(/\.json$/, '')
        let data: unknown
        try {
            data = JSON.parse(await readFile(path.join(dir!, file), 'utf8'))
        } catch (error) {
            errors++
            console.log(`✗ ${file}: invalid JSON (${(error as Error).message})`)
            continue
        }
        const result = proposalSchema.safeParse(data)
        if (!result.success) {
            errors++
            console.log(`✗ ${file}`)
            for (const issue of result.error.issues) {
                console.log(`    ${issue.path.join('.') || '(root)'}: ${issue.message}`)
            }
            continue
        }
        if (result.data.token !== token) {
            errors++
            console.log(`✗ ${file}: token "${result.data.token}" does not match the file name`)
            continue
        }
        const expired = new Date(`${result.data.validUntil}T23:59:59`) < new Date()
        console.log(
            `✓ ${file}  ${result.data.client.name} · ${result.data.status}${expired ? ' · EXPIRED' : ''} · ${publicUrl(token, result.data.locale)}`,
        )
    }
    if (errors) fail(`${errors} invalid proposal${errors > 1 ? 's' : ''}`)
}

async function url(token?: string) {
    if (!token) fail('usage: pnpm proposal url <token>')
    const file = path.join(dir!, `${token}.json`)
    if (!existsSync(file)) fail(`${file} does not exist`)
    const data = JSON.parse(await readFile(file, 'utf8'))
    console.log(publicUrl(token, data.locale ?? 'it'))
}

function publicUrl(token: string, locale: string) {
    return `https://matteogiardino.com${locale === 'en' ? '/en' : ''}/p/${token}`
}

function randomToken(length: number) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const bytes = randomBytes(length)
    let out = ''
    for (let i = 0; i < length; i++) out += alphabet[bytes[i] % alphabet.length]
    return out
}

function isoDate(date: Date) {
    return date.toISOString().slice(0, 10)
}

/** Minimal .env reader: KEY=value lines, optional quotes, no interpolation. */
function loadDotEnv(file: string) {
    if (!existsSync(file)) return
    for (const line of readFileSync(file, 'utf8').split('\n')) {
        const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/i)
        if (!match || line.trim().startsWith('#')) continue
        const value = match[2].replace(/^(['"])(.*)\1$/, '$2')
        if (!(match[1] in process.env)) process.env[match[1]] = value
    }
}

function fail(message: string): never {
    console.error(`error: ${message}`)
    process.exit(1)
}
