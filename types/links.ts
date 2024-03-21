import { Icons } from '@/components/icon'

export type HeaderLinks = {
    icon: keyof typeof Icons
    href: string
    text: string
}[]

export enum UtmMediums {
    Blog = 'blog',
    Homepage = 'home',
    Projects = 'projects',
    Services = 'services',
    LearningProducts = 'learning_products',
    NotFound = 'not_found',
    Navbar = 'navbar',
    Footer = 'footer',
    NotificationPopup = 'notification_popup',
}

export type UtmSource = 'matteogiardino.com'
