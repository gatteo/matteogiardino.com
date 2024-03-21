'use client'

import React from 'react'
import { IconSearch } from '@tabler/icons-react'

import { type BlogPostPreview } from '@/types/blog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { PostCard } from './post-card'

export function FilteredPosts({ posts }: { posts: BlogPostPreview[] }) {
    const [searchValue, setSearchValue] = React.useState('')

    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <>
            <div className='relative mb-8'>
                <Input
                    type='text'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder='cerca un articolo'
                    aria-label='cerca un articolo'
                    className='w-full pl-12'
                    id='search'
                />
                <Label htmlFor='search'>
                    <IconSearch className='absolute left-4 top-1/2 -translate-y-1/2' size={20} />
                </Label>
            </div>

            {filteredPosts.length === 0 && (
                <div className='text-center text-xl'>Non ci sono articoli per il momento</div>
            )}

            <div className='-mx-4 grid gap-4 sm:grid-cols-2'>
                {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    )
}
