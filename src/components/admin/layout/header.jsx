"use client"
import styles from '@/components/admin/layout/header.module.css'
import { IoHome } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Pencarian from '@/components/admin/pencarian';
import { useStore } from '@/lib/zustand'

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
                        <div className={styles.icon} onClick={setOpen}>
                            <IoSearchCircle size={50} />
                        </div>
                        <div onClick={() => router.back()} className={styles.icon}>
                            <FaArrowCircleLeft />
                        </div>
                    </div>
                </div>
                {children}

            </div>
        </>
    )
}
