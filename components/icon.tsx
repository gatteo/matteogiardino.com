import React from 'react'
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTiktok,
    IconBrandTwitch,
    IconBrandTwitter,
    IconDeviceDesktop,
    IconFlame,
    IconInfoSquareRounded,
    IconListDetails,
    IconMessageCircle,
    IconPencil,
    IconSchool,
    IconSeeding,
    IconStars,
} from '@tabler/icons-react'
import { ChevronRightSquare, Shrub, Target, type LucideIcon } from 'lucide-react'
import { EmailIcon } from 'react-share'

export const Icons = {
    developmentService: ChevronRightSquare,
    productGrowthAdvisoryService: Shrub,
    ctoService: Target,

    instagram: IconBrandInstagram,
    tiktok: IconBrandTiktok,
    github: IconBrandGithub,
    linkedin: IconBrandLinkedin,
    twitter: IconBrandTwitter,
    twitch: IconBrandTwitch,
    email: EmailIcon,

    servicesPage: IconDeviceDesktop,
    learningProductsPage: IconSeeding,
    projectsPage: IconFlame,
    contactsPage: IconMessageCircle,
    blogPage: IconPencil,

    plWhatIsSection: IconInfoSquareRounded,
    plIsForYouSection: IconFlame,
    plWhatIsIncludedSection: IconListDetails,
    plTestimonialsSection: IconStars,

    tclWhatIsSection: IconInfoSquareRounded,
    tclMentorSection: IconSchool,
    tclIsForYouSection: IconFlame,
    tclWhatIsIncludedSection: IconListDetails,
}

export const Icon = React.forwardRef<
    React.ElementRef<LucideIcon>,
    React.ComponentPropsWithoutRef<LucideIcon> & {
        name: keyof typeof Icons
    }
>(({ name, className, ...props }, ref) => {
    // Assuming the icon name is valid
    const IconComponent = Icons[name]

    if (!IconComponent) {
        console.error(`Icon '${name}' not found.`)
        return null
    }

    return <IconComponent ref={ref} className={className} {...props} />
})

Icon.displayName = 'Icon'
