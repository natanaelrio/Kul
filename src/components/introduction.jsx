'use client';
import styles from '@/components/introduction.module.css'
import { IoSearchCircleSharp } from "react-icons/io5";
import Pencarian from '@/components/pencarian';
import { useStore } from '@/lib/zustand'

export default function Introduction() {
    const isopen = useStore((state) => state.open)
    const setOpen = useStore((state) => state.setOpen)
    return (
        <>
            <div className={styles.countainertengah}>
                <div className={styles.countainer}>
                    <div className={styles.text}>
                        <div className={styles.pertama}>
                            Temukan Penawaran terbaik
                        </div>

                        <div className={styles.kedua}>
                            <div>untuk</div>&nbsp; <div className={styles.keduadalam}>kebutuhan Rumah</div>
                        </div>

                        <div className={styles.textbawah}>
                            pusat kebutuhan rumah anda.<br />
                            terbesar,terlengkap, dan terpercaya di indonesia
                        </div>
                        <div className={styles.cari}>
                            <IoSearchCircleSharp
                                className={styles.logocaridalam}
                                onClick={setOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {isopen && <Pencarian />}
        </>
    )
}
