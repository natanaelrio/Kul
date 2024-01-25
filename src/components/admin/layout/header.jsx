"use client"
import styles from '@/components/admin/layout/header.module.css'
import { IoHome } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import CustomLink from '@/lib/customLink'
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
                        <CustomLink href={'/'} className={styles.icon}>
                            <IoHome />
                        </CustomLink>
                        <div className={styles.judul}>{judul}</div>
                    </div>
                    <div className={styles.carikembali}>
                        <CustomLink href={'/admin/pesanan'} >
                            <SiGooglemessages className={styles.icon} />
                        </CustomLink>
                        <CustomLink href={'/admin/list'}>
                            <IoListCircle className={styles.icon} />
                        </CustomLink>
                        <CustomLink href={'/admin/post'} >
                            <SiAddthis className={styles.icon} />
                        </CustomLink>
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
