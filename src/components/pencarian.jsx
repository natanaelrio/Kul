import React, { useContext, useState } from 'react'
import styles from '@/components/pencarian.module.css'
import { IoSearch } from "react-icons/io5";
import { Pencarianku } from '@/context/pencarianProvider'

export default function Pencarian(props) {
    const { isopen, setIsopen } = useContext(Pencarianku);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundblur}
                    onClick={() => setIsopen(!isopen)}>
                </div>
                <div className={styles.containerpencarian}>
                    <div className={styles.pencarian}>
                        <div className={styles.pencariandalam}>
                            <IoSearch className={styles.logocaridalam} />
                            <input type="text" placeholder='cari disini...' />
                        </div>
                    </div>
                    <div className={styles.isipencarian}>
                        Tidak ada hasil Pencarian!
                    </div>
                </div>

            </div>
        </>
    )
}
