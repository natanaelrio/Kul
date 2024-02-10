'use client'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useRouter } from 'next/navigation'

const CustomBack = ({ children }) => {
    const router = useRouter()

    useEffect(() => {
        return () => {
            NProgress.done().configure({ showSpinner: false, minimum: 0.7, easing: 'ease', speed: 1000 })
        }
    }, [])
    return (
        <>
            <div onClick={() => { NProgress.configure({ showSpinner: false }).start(), router.back() }}>
                {children}
            </div>
        </>
    )
}

export default CustomBack;