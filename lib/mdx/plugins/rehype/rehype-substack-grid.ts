export function rehypeTransformGrid() {
    // @ts-ignore
    return function transformer(tree) {
        const galleryDiv = tree.children.find(
            // @ts-ignore
            (node) => node.tagName === 'div' && node.properties.className.includes('image-gallery-embed'),
        )

        if (galleryDiv) {
            const dataAttrs = galleryDiv.properties['dataAttrs']

            const galleryData = JSON.parse(dataAttrs)

            // @ts-ignore
            const images = galleryData.gallery.images.map((image) => ({
                type: image.type,
                src: image.src,
            }))

            // Create a grid of images
            const gridContainer = {
                type: 'element',
                tagName: 'div',
                properties: { className: 'grid grid-cols-3 gap-4' },
                // @ts-ignore
                children: images.map((image) => ({
                    type: 'element',
                    tagName: 'img',
                    properties: {
                        src: image.src,
                        alt: galleryData.caption,
                        className: 'col-span-1 rounded-md aspect-square object-cover',
                    },
                })),
            }

            // Replace the original div with the grid container
            const index = tree.children.indexOf(galleryDiv)
            tree.children.splice(index, 1, gridContainer)
        }
    }
}
