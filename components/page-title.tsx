'use client'

type Props = {
    title: string
    description: string
    fromColor: string
    toColor: string
}

export function PageTitle({ title, description, fromColor, toColor }: Props) {
    return (
        <>
            <h1
                className={`my-4 bg-gradient-to-r ${fromColor} ${toColor} bg-clip-text text-5xl font-extrabold text-transparent`}>
                {title}
            </h1>
            <p className='mb-8 text-muted-foreground'>{description}</p>
        </>
    )
}
