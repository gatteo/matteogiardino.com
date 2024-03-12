import { BlogPostSource, type BlogPostPreview } from '@/types/blog'
import { BlogAuthors } from '@/config/blog'
import { Routes } from '@/config/routes'

type SubstackPostPreview = {
    id: number
    editor_v2: boolean
    publication_id: number
    title: string
    social_title: unknown
    search_engine_title: unknown
    search_engine_description: unknown
    type: string
    slug: string
    post_date: string
    audience: string
    podcast_duration: unknown
    video_upload_id: unknown
    podcast_upload_id: unknown
    write_comment_permissions: string
    should_send_free_preview: boolean
    free_unlock_required: boolean
    default_comment_sort: unknown
    canonical_url: string
    section_id: unknown
    top_exclusions: unknown[]
    pins: unknown[]
    is_section_pinned: boolean
    section_slug: unknown
    section_name: unknown
    reactions: {
        '❤': number
    }
    restacked_post_id: unknown
    restacked_pub_name: unknown
    restacked_pub_logo_url: unknown
    subtitle?: string
    cover_image?: string
    cover_image_is_square: boolean
    cover_image_is_explicit: boolean
    podcast_url?: string
    videoUpload: unknown
    podcastFields: unknown
    podcast_preview_upload_id: unknown
    podcastUpload: unknown
    podcastPreviewUpload: unknown
    voiceover_upload_id: unknown
    voiceoverUpload: unknown
    has_voiceover: boolean
    description: string
    body_json: unknown
    body_html: unknown
    longer_truncated_body_json: unknown
    longer_truncated_body_html: unknown
    truncated_body_text: string
    wordcount: number
    postTags: {
        id: string
        pubblication_id: string
        name: string
        slug: string
        hidden: boolean
    }[]
    publishedBylines: Array<{
        id: number
        name: string
        handle: string
        previous_name: unknown
        photo_url: string
        bio: unknown
        profile_set_up_at: string
        publicationUsers: Array<{
            id: number
            user_id: number
            publication_id: number
            role: string
            public: boolean
            is_primary: boolean
            publication: {
                id: number
                name: string
                subdomain: string
                custom_domain: unknown
                custom_domain_optional: boolean
                hero_text: string
                logo_url: string
                author_id: number
                theme_var_background_pop: string
                created_at: string
                rss_website_url: unknown
                email_from_name: unknown
                copyright: string
                founding_plan_name: unknown
                community_enabled: boolean
                invite_only: boolean
                payments_state: string
                language: string
                explicit: boolean
            }
        }>
        is_guest: boolean
        bestseller_tier: unknown
    }>
    reaction: unknown
    reaction_count: number
    comment_count: number
    child_comment_count: number
    hasCashtag: boolean
}

export async function getSubstackPosts(): Promise<BlogPostPreview[]> {
    try {
        const rawPosts: SubstackPostPreview[] = await fetch(
            'https://matteogiardino.substack.com/api/v1/archive?sort=new',
        ).then((res) => res.json())

        return rawPosts.map((post) => ({
            id: post.id.toString(),
            slug: post.slug,
            title: post.title,
            summary: post.description,
            date: new Date(post.post_date),
            image: post.cover_image || '',
            source: BlogPostSource.Substack,
            url: Routes.SubstackBlogPost(post.slug),
            reactionsCount: post.reaction_count,
            tags: post.postTags.map((tag) => tag.name),
            author: BlogAuthors[0],
        }))
    } catch (error) {
        console.error(error)
        return []
    }
}

type SubstackPost = {
    id: number
    editor_v2: boolean
    publication_id: number
    type: string
    title: string
    social_title: unknown
    section_id: unknown
    search_engine_title: unknown
    search_engine_description: unknown
    subtitle: string
    slug: string
    post_date: string
    podcast_url: string
    podcast_art_url: unknown
    podcast_duration: unknown
    video_upload_id: unknown
    podcast_upload_id: unknown
    podcast_preview_upload_id: unknown
    audience: string
    should_send_free_preview: boolean
    write_comment_permissions: string
    show_guest_bios: boolean
    free_unlock_required: boolean
    default_comment_sort: unknown
    canonical_url: string
    audience_before_archived: unknown
    exempt_from_archive_paywall: boolean
    restacks: number
    reactions: {
        '❤': number
    }
    top_exclusions: unknown[]
    pins: unknown[]
    section_pins: unknown[]
    previous_post_slug: string
    next_post_slug: unknown
    cover_image: string
    cover_image_is_square: boolean
    cover_image_is_explicit: boolean
    videoUpload: unknown
    podcastFields: unknown
    podcastUpload: unknown
    podcastPreviewUpload: unknown
    voiceover_upload_id: unknown
    voiceoverUpload: unknown
    has_voiceover: boolean
    description: string
    body_html: string
    longer_truncated_body_json: unknown
    longer_truncated_body_html: unknown
    truncated_body_text: string
    wordcount: number
    postTags: {
        id: string
        pubblication_id: string
        name: string
        slug: string
        hidden: boolean
    }[]
    publishedBylines: Array<{
        id: number
        name: string
        handle: string
        previous_name: unknown
        photo_url: string
        bio: unknown
        profile_set_up_at: string
        publicationUsers: Array<{
            id: number
            user_id: number
            publication_id: number
            role: string
            public: boolean
            is_primary: boolean
            publication: {
                id: number
                name: string
                subdomain: string
                custom_domain: unknown
                custom_domain_optional: boolean
                hero_text: string
                logo_url: string
                author_id: number
                theme_var_background_pop: string
                created_at: string
                rss_website_url: unknown
                email_from_name: unknown
                copyright: string
                founding_plan_name: unknown
                community_enabled: boolean
                invite_only: boolean
                payments_state: string
                language: string
                explicit: boolean
            }
        }>
        is_guest: boolean
        bestseller_tier: unknown
    }>
    reaction: unknown
    reaction_count: number
    comment_count: number
    child_comment_count: number
    hasCashtag: boolean
    themeVariables: {
        color_theme_bg_pop: string
        background_pop: string
        color_theme_bg_web: unknown
        cover_bg_color: string
        background_pop_darken: string
        print_on_pop: string
        color_theme_bg_pop_darken: string
        color_theme_print_on_pop: string
        border_subtle: string
        background_subtle: string
        print_pop: string
        color_theme_accent: string
        cover_print_primary: string
        cover_print_secondary: string
        cover_border_color: string
        home_hero: string
        home_posts: string
        background_contrast_1: string
        background_contrast_2: string
        background_contrast_3: string
        background_contrast_4: string
        background_contrast_5: string
        background_contrast_pop: string
        color_theme_bg_contrast_pop: string
        input_background: string
        cover_input_background: string
        tooltip_background: string
        background_pop_rgb: string
        color_theme_bg_pop_rgb: string
        color_theme_accent_rgb: string
    }
    comments: unknown[]
}

export async function getSubstackPost(slug: string) {
    try {
        const rawPost: SubstackPost = await fetch(`https://matteogiardino.substack.com/api/v1/posts/${slug}`).then(
            (res) => res.json(),
        )

        return {
            id: rawPost.id.toString(),
            slug: rawPost.slug,
            title: rawPost.title,
            summary: rawPost.description,
            date: new Date(rawPost.post_date),
            image: rawPost.cover_image || '',
            url: Routes.SubstackBlogPost(rawPost.slug),
            originalUrl: rawPost.canonical_url,
            reactionsCount: rawPost.reaction_count,
            body: rawPost.body_html,
            tags: rawPost.postTags.map((tag) => tag.name),
            author: BlogAuthors[0],
        }
    } catch (error) {
        console.error(error)
        return null
    }
}
