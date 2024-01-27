'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function CustomLink({ href, children }) {

    useEffect(() => {
        return () => {
            NProgress.done().configure({ showSpinner: false, minimum: 0.7, easing: 'ease', speed: 1000 })
        }
    }, [])
    return (
        <>
            <Link href={href} onClick={() => NProgress.configure({ showSpinner: false }).start()}>
                {children}
            </Link>
        </>
    )
}
