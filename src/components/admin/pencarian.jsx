"use client"
import styles from '@/components/admin/pencarian.module.css'
import { FaSearch } from "react-icons/fa";
import { useStore } from '@/lib/zustand'

export default function Pencarian() {
    const setOpen = useStore((state) => state.setOpenPencarianAdmin)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundblur} onClick={setOpen}>
                </div>
                <div className={styles.pencarian}>
                    <div className={styles.caridalam}>
                        <div className={styles.logocari}>
                            <FaSearch />
                        </div>
                        <input type="text" placeholder='cari...' />
                    </div>
                    <div className="list">
                        belum ada data!!
                    </div>
                </div>
            </div >
        </>
    )
}
