'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { usePathname } from 'next/navigation'

const CustomLink = ({ href, arialabel, children }) => {
    const pathname = usePathname()
    useEffect(() => {
        return () => {
            NProgress.done().configure({ showSpinner: false, minimum: 0.7, easing: 'ease', speed: 1000 })
        }
    }, [])

    if (pathname == pathname)
        return (
            <a href={href} aria-label={arialabel ? arialabel : 'no-label'} onClick={() => NProgress.configure({ showSpinner: false }).start()}>
                {children}
            </a>
        )

    return (
        <Link href={href} aria-label={arialabel ? arialabel : 'no-label'} onClick={() => NProgress.configure({ showSpinner: false }).start()}>
            {children}
        </Link>
    )
}

export default CustomLink;