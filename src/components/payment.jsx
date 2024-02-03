'use client'
import { useState } from 'react'
import useSnap from '../lib/useSnap'
import styles from '@/components/payment.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Payment() {
    const { snapEmbed } = useSnap()
    const [isLoading, seIsLoading] = useState(true)

    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("tokenpayment")
        setTimeout(() => {
            seIsLoading(false)
            snapEmbed(token, 'snap-container')
            localStorage.removeItem("tokenpayment")
        }, 2000)
    }




    return (
        <>

            <div className={styles.container}>
                {isLoading ?
                    <>
                        <div className={styles.skleton}> <Skeleton count={1} style={{ height: '50px' }} /></div>
                        <div className={styles.skleton}> <Skeleton count={3} style={{ height: '70px' }} /></div>
                        <div className={styles.skleton}> <Skeleton count={2} style={{ height: '40px' }} /></div>
                    </>
                    :
                    <div id="snap-container" />
                }
            </div>
        </>
    )
}
