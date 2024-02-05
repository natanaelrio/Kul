'use client'
import { useState } from 'react'
import useSnap from '../lib/useSnap'
import styles from '@/components/payment.module.css'
import Image from 'next/image'

export default function Payment() {
    const { snapEmbed } = useSnap()
    const [isLoading, seIsLoading] = useState(true)

    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("tokenpayment")
        setTimeout(() => {
            seIsLoading(false)
            snapEmbed(token, 'snap-container')
            localStorage.removeItem("tokenpayment")
        }, 3000)
    }

    return (
        <>
            {isLoading ?
                <div className={styles.loading}>
                    <div className={styles.gambar}>
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/payment.gif`} width={150} height={150}></Image>
                    </div>
                    <div className={styles.text}>Generate Payment</div>
                </div>
                :
                <div className={styles.container}>
                    <div id="snap-container" />
                </div>
            }
        </>
    )
}
