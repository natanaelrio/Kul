import { useEffect, useState } from 'react'
import { TbDiamond } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import styles from '@/components/header.module.css'
import Link from 'next/link';
import { useStore } from '@/lib/zustand'

export default function Header() {
    const [change, setChange] = useState(true)
    const SetopenPencarian = useStore((state) => state.setOpenPencarian)

    useEffect(() => {
        const windowScroll = () => {
            window.scrollY <= 50 ? setChange(true) : setChange(false)
        }
        window.addEventListener('scroll', windowScroll)
    }, [setChange]);

    return (
        <>
            <nav className={styles.nav}
                style={change ? { boxShadow: 'none' } : { boxShadow: '0 1px 3px #0000001a, 0 1px 2px #0000000f' }}
            >
                <Link prefetch={false} href={'/'} className={styles.logogambar}>
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
                <div className={styles.pilihan}>
                    <div className={styles.icon}>
                        <FaRegHeart />
                    </div>
                    <div className={styles.icon}>
                        <LuShoppingCart />
                    </div>
                    <Link href={'/admin'} className={styles.login}>
                        Log in
                    </Link>
                </div>
            </nav >
        </>
    )
}
