import { z } from 'zod'

import { APIResponse } from '@/lib/api'
import { getNowPlaying } from '@/lib/spotify'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export const GET = async () => {
    try {
        const response = await getNowPlaying()

        if (response.status === 204 || response.status > 400 || response?.data?.item === null || !response.data) {
            return APIResponse.success({ isPlaying: false })
        }

        const song = response.data

        if (song.is_playing === false) {
            return APIResponse.success({ isPlaying: false })
        }

        const isPlaying = song.is_playing
        const name = song.item.name
        const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
        const album = song.item.album.name
        const albumImage = song.item.album.images[0].url
        const songUrl = song.item.external_urls.spotify

        return APIResponse.success({
            isPlaying,
            name,
            artist,
            album,
            albumImage,
            songUrl,
        })
    } catch (error: any) {
        console.error('[API] Error creating PayPal order', error)

        if (error instanceof z.ZodError) {
            return APIResponse.error('Invalid data', 422, error.errors)
        }

        return APIResponse.error(error.message)
    }
}
