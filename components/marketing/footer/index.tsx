'use client'

const Footer = () => {
    return (
        <footer className='mx-auto flex max-w-5xl flex-col px-8 pb-8'>
            <div className='mx-auto mt-20 text-sm'>&copy; Matteo Giardino, {new Date().getFullYear()}</div>
        </footer>
    )
}

export default Footer
