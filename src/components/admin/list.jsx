"use client"
import styles from '@/components/admin/list.module.css'
import { GoEye } from "react-icons/go";
import { MdOutlinePostAdd } from "react-icons/md";
import Link from 'next/link';
import SkeletonPage from '@/components/admin/skeleton';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import DetailList from '@/components/admin/detailList';
import { useStore } from '@/lib/zustand'
import { useState } from 'react';

export default function List(props) {
    const [data, setData] = useState()
    const Open = useStore((state) => state.openDetailProdukAdmin)
    const setOpen = useStore((state) => state.setOpenDetailProdukAdmin)

    const HandleDetail = (e) => {
        setData(e)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.list}>
                    <div className={styles.bungkusproduk}>
                        <div className={styles.produk} style={{ fontWeight: '700' }}>
                            <div className={styles.namaproduk}>
                                NAMA
                            </div>
                            <div className={styles.terjual}>
                                Terjual
                            </div>
                            <div className={styles.viewbarang}>
                                VIEW
                            </div>
                        </div>
                    </div>

                    {props.data?.data ? null : <SkeletonPage />}
                    {props.data?.data?.map((data, i) =>
                    (<div key={i} className={styles.bungkusproduk} onClick={() => {
                        setOpen()
                        HandleDetail(data)
                    }}>
                        <div className={styles.produk}>
                            <div className={styles.namaproduk}  >
                                {data?.nama_barang}
                            </div>
                            <div className={styles.terjual}>
                                {data?.total_penjualan_barang}
                            </div>
                            <div className={styles.viewbarang}>
                                <div className={styles.dalamview}> <GoEye />  {data.view_barang}</div>
                            </div>
                            <div className={styles.arrow}>
                                <FaArrowRightFromBracket />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <Link prefetch={false} href={'/admin/post'} className={styles.post}>
                    <MdOutlinePostAdd />
                </Link>
            </div >
            {Open ? <DetailList data={data} /> : null}
        </>
    )
}
