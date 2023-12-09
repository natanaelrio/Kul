import React, { useEffect, useState } from 'react'
import { TbDiamond } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import styles from '@/components/header.module.css'
import Link from 'next/link';
import { useStore } from '@/lib/zustand'

export default function Header() {
    const [change, setChange] = useState(true)
    const SetopenPencarian = useStore((state) => state.setOpenPencarian)

    useEffect(() => {
        const windowScroll = () => {
            window.scrollY <= 100 ? setChange(true) : setChange(false)
        }
        window.addEventListener('scroll', windowScroll)
    }, [setChange]);

    return (
        <>
            <nav className={styles.nav}
                style={change ? { boxShadow: 'none' } : { boxShadow: '0 1px 3px #0000001a, 0 1px 2px #0000000f' }}
            >
                <Link href={'/'} className={styles.logogambar}>
                    <TbDiamond className={styles.logogambardalam} />
                </Link>
                <div className={styles.pencarian} >
                    <div className={styles.dalampencarian}
                        onClick={SetopenPencarian}>
                        <div className={styles.input}>
                            <input type="text"
                                placeholder="cari barang..."
                                className={styles.inputtrue}
                            />
                        </div>
                        <div className={styles.hilang} >
                            <div className={styles.logocari} >
                                <CiSearch className={styles.logocaridalam} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
