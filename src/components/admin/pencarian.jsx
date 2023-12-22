"use client"
import styles from '@/components/admin/pencarian.module.css'
import { FaSearch } from "react-icons/fa";
import BackLayang from '@/components/admin/layout/backlayang';
import { useStore } from '@/lib/zustand'

export default function Pencarian() {
    const setOpen = useStore((state) => state.setOpenPencarianAdmin)

    return (
        <>
            <BackLayang setOpen={setOpen} judul={'Pencarian'}>
                <div className={styles.caridalam}>
                    <div className={styles.logocari}>
                        <FaSearch />
                    </div>
                    <input type="text" placeholder='cari...' />
                </div>
                <div className="list">
                    belum ada data!!
                </div>
            </BackLayang>
        </>
    )
}