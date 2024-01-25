'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function CustomLink({ href, children }) {

    useEffect(() => {
        return () => {
            NProgress.done().configure({ showSpinner: false, trickle: false })
        }
    }, [])
    return (
        <>
            <Link href={href} onClick={() => NProgress.configure({ showSpinner: false, trickle: false }).start()}>
                {children}
            </Link>
        </>
    )
}
