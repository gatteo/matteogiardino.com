import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { IconExternalLink } from '@tabler/icons-react'

import { Routes } from '@/config/routes'

import { Button } from './ui/button'

export function ProjectCollabCard({ project }: { project: any }) {
    return (
        <Link
            href={UtmUrl(Routes.Project(project.slug), {
                content: 'project_card',
            })}
            target='_blank'
            className='group relative flex flex-row space-x-4 rounded-md border bg-muted p-4 transition-all duration-150 hover:bg-accent'>
            {project.icon && (
                <Image
                    src={project.icon}
                    alt='null'
                    height={48}
                    width={48}
                    className='border-accent-3 mr-1 size-12 rounded-xl border'
                />
            )}

            <div className='flex-1 flex-row'>
                <h2 className='text-xl font-bold'>{project.name}</h2>
                <div className='mt-2 text-sm leading-tight text-muted-foreground md:text-base'>
                    {project.description}
                </div>
                <Button variant='link' className='mt-3 p-0' size='sm'>
                    scopri di più
                </Button>
            </div>

            <IconExternalLink className='absolute right-4 text-accent-foreground opacity-0 transition-opacity group-hover:opacity-100' />
        </Link>
    )
}
