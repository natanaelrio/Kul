'use client'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useRouter } from 'next/navigation'

export default function CustomBack({ children }) {
    const router = useRouter()

    useEffect(() => {
        return () => {
            NProgress.done().configure({ showSpinner: false, trickle: false })
        }
    }, [])
    return (
        <>
            <div onClick={() => { NProgress.configure({ showSpinner: false, trickle: false }).start(), router.back() }}>
                {children}
            </div>
        </>
    )
}
