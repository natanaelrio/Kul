"use client"
import styles from '@/components/admin/pencarian.module.css'
import { FaSearch } from "react-icons/fa";
import BackLayang from '@/components/admin/layout/backLayang'
import { useStore } from '@/lib/zustand'
import { useState } from 'react';
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Pencarian() {
    const setOpenPencarian = useStore((state) => state.setOpenPencarianAdmin)
    const setOpenDetail = useStore((state) => state.setOpenDetailProdukAdmin)
    const [data, setData] = useState()

    const HandlePencarian = async (e) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/pencarian?cari=${e}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            }
        })
        const data = await res.json()
        setData(data.data)
    }

    // console.log(data);
    return (
        <>
            <BackLayang setOpen={setOpenPencarian} judul={'Pencarian'}>
                <div className={styles.caridalam}>
                    <div className={styles.logocari}>
                        <FaSearch />
                    </div>
                    <input type="text"
                        placeholder='cari...'
                        onChange={(e) => HandlePencarian(e.target.value)} />
                </div>
                <div className={styles.containerlist}>
                    {data?.map((data, i) => {
                        return (
                            <div key={i} className={styles.list} onClick={() => {
                                setOpenDetail(), setOpenPencarian()
                            }
                            }>
                                <div className={styles.logocari}>
                                    <FaSearch />
                                </div>
                                <div className={styles.judul}>
                                    {data.nama_barang}
                                </div>
                                <div className={styles.arrow}>
                                    <FaArrowRightFromBracket />
                                </div>
                            </div>)
                    })}
                </div>
            </BackLayang>
        </>
    )
}
