'use client'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const CustomLinkA = ({ href, arialabel, children }) => {
    useEffect(() => {
        return () => {
            NProgress.done().configure({ showSpinner: false, minimum: 0.7, easing: 'ease', speed: 1000 })
        }
    }, [])

    return (
        <a href={href} aria-label={arialabel ? arialabel : 'no-label'} onClick={() => NProgress.configure({ showSpinner: false }).start()}>
            {children}
        </a>
    )
}

export default CustomLinkA;