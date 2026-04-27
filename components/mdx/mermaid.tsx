'use client'

import { useMemo, useState } from 'react'
import { IconArrowsMaximize, IconFocusCentered, IconMinus, IconPlus } from '@tabler/icons-react'
import { useTheme } from 'next-themes'

import { Mermaid as McnMermaid, type MermaidConfig } from '@/components/mermaidcn/mermaid'
import { ZoomPan } from '@/components/mermaidcn/zoom-pan'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

type MermaidProps = {
    children: string
    caption?: string
}

type ZoomPanApi = {
    zoomIn: () => void
    zoomOut: () => void
    resetZoom: () => void
    centerView: () => void
    scalePercent: number
}

const svgToDataUrl = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const ControlBar = ({ api, onFullscreen }: { api: ZoomPanApi; onFullscreen?: () => void }) => (
    <div className='bg-card/40 absolute top-2 right-2 z-10 flex items-center gap-1 rounded-md border p-1 backdrop-blur'>
        <span className='text-muted-foreground mr-1 ml-1 font-mono text-[10px] tabular-nums'>
            {api.scalePercent}%
        </span>
        <Button
            size='icon'
            variant='ghost'
            className='h-6 w-6'
            onClick={api.zoomOut}
            aria-label='Zoom out'>
            <IconMinus className='size-3.5' />
        </Button>
        <Button size='icon' variant='ghost' className='h-6 w-6' onClick={api.zoomIn} aria-label='Zoom in'>
            <IconPlus className='size-3.5' />
        </Button>
        <Button
            size='icon'
            variant='ghost'
            className='h-6 w-6'
            onClick={api.centerView}
            aria-label='Reset view'>
            <IconFocusCentered className='size-3.5' />
        </Button>
        {onFullscreen && (
            <Button
                size='icon'
                variant='ghost'
                className='h-6 w-6'
                onClick={onFullscreen}
                aria-label='Fullscreen'>
                <IconArrowsMaximize className='size-3.5' />
            </Button>
        )}
    </div>
)

export const Mermaid = ({ children, caption }: MermaidProps) => {
    const { resolvedTheme } = useTheme()
    const [svg, setSvg] = useState<string>('')
    const [fullscreen, setFullscreen] = useState(false)

    const config: MermaidConfig = useMemo(
        () => ({
            darkMode: resolvedTheme === 'dark',
            fontFamily: 'inherit',
            fontSize: 13,
            flowchart: { curve: 'cardinal', padding: 16, htmlLabels: true },
        }),
        [resolvedTheme],
    )

    const imageSrc = svg ? svgToDataUrl(svg) : undefined

    return (
        <figure className='not-prose mx-auto my-6 max-w-2xl'>
            <div className='bg-card/30 relative overflow-hidden rounded-xl border'>
                <ZoomPan
                    imageSrc={imageSrc}
                    className='h-[24rem]'
                    controls={(api) => <ControlBar api={api} onFullscreen={() => setFullscreen(true)} />}>
                    <McnMermaid chart={children.trim()} config={config} onSuccess={setSvg} />
                </ZoomPan>
            </div>
            {caption && (
                <figcaption className='text-muted-foreground mt-2 text-center text-sm'>{caption}</figcaption>
            )}

            <Dialog open={fullscreen} onOpenChange={setFullscreen}>
                <DialogContent className='h-[92vh] max-w-[95vw] gap-0 p-0 sm:max-w-[95vw]'>
                    <DialogTitle className='sr-only'>{caption ?? 'Diagram'}</DialogTitle>
                    <div className='bg-card/30 relative h-full w-full overflow-hidden rounded-lg'>
                        <ZoomPan
                            imageSrc={imageSrc}
                            className='h-full w-full'
                            controls={(api) => <ControlBar api={api} />}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </figure>
    )
}
