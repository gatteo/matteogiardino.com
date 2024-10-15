import React from "react"

interface ListProps {
  children?: React.ReactNode
  typo?: 'ul' | 'ol'
}


export function List({ children, typo = 'ul' }: ListProps) {
  const ListTag = typo as keyof JSX.IntrinsicElements

  return (
    <ListTag className="pl-2 space-y-2 [&>li]:relative [&>li]:pl-4 ">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === 'li') {
          return React.cloneElement(child, {
            // @ts-ignore
            className: `${child.props.className || ''} before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground prose list-none`,
          })
        }
        return child
      })}
    </ListTag>
  )
}