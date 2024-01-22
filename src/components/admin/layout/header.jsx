"use client"
import styles from '@/components/admin/layout/header.module.css'
import { IoHome } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Pencarian from '@/components/admin/pencarian';
import { useStore } from '@/lib/zustand'
import { IoListCircle } from "react-icons/io5";
import { SiAddthis } from "react-icons/si";
import { SiGooglemessages } from "react-icons/si";

export default function Header({ children, judul }) {
    const router = useRouter()
    const Open = useStore((state) => state.openPencarianAdmin)
    const setOpen = useStore((state) => state.setOpenPencarianAdmin)
    return (
        <>
            <div className={styles.container}>
                {Open ? <Pencarian /> : null}                
                <div className={styles.bungkusjudul}>
                    <div className={styles.iconjudul}>
                        <Link prefetch={false} href={'/'} className={styles.icon}>
                            <IoHome />
                        </Link>
                        <div className={styles.judul}>{judul}</div>
                    </div>
                    <div className={styles.carikembali}>
                        <Link href={'/admin/pesanan'} target='_blank' >
                            <SiGooglemessages className={styles.icon} />
                        </Link>
                        <Link href={'/admin/list'} target='_blank'>
                            <IoListCircle className={styles.icon} />
                        </Link>
                        <Link href={'/admin/post'} target='_blank' >
                            <SiAddthis className={styles.icon} />
                        </Link>
                        <div className={styles.icon} onClick={setOpen}>
                            <IoSearchCircle className={styles.icon} />
                        </div>
                        <div onClick={() => router.back()} >
                            <FaArrowCircleLeft className={styles.icon} />
                        </div>
                    </div>
                </div>
                {children}

            </div>
        </>
    )
}
