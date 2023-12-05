import React, { useContext } from 'react'
import { TbDiamond } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { PencarianContext } from '@/context/pencarianProvider'
import styles from '@/components/header.module.css'

export default function Header() {
    const { isopen, setIsopen } = useContext(PencarianContext);
    return (
        <nav className={styles.nav}>
            <div className={styles.logogambar}>
                <TbDiamond className={styles.logogambardalam} />
            </div>
            <div className={styles.pencarian} >
                <div className={styles.dalampencarian}
                    onClick={() => setIsopen(!isopen)}
                >
                    <div className={styles.input}
                    >
                        <input type="text"
                            onClick={() => setIsopen(!isopen)}
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
        </nav>
    )
}
