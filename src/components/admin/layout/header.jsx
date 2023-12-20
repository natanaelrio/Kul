"use client"
import styles from '@/components/admin/layout/header.module.css'
import { IoHome } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Header({ children, judul }) {
    const router = useRouter()
    // console.log(props);
    return (
        <div className={styles.container}>  
            <div className={styles.bungkusjudul}>
                <div className={styles.iconjudul}>
                    <Link href={'/'} className={styles.icon}>
                        <IoHome />
                    </Link>
                    <div className={styles.judul}>{judul}</div>
                </div>
                <div className={styles.carikembali}>
                    <div className={styles.icon}>
                        <IoSearchCircle size={50} />
                    </div>
                    <div onClick={() => router.back()} className={styles.icon}>
                        <FaArrowCircleLeft />
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
