"use client"
import styles from '@/components/admin/list.module.css'
import { GoEye } from "react-icons/go";
import { MdOutlinePostAdd } from "react-icons/md";
import CustomLink from '@/lib/customLink'
import SkeletonPage from '@/components/admin/skeleton';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import DetailList from '@/components/admin/detailList';
import { useStore } from '@/lib/zustand'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function List(props) {
    const [data, setData] = useState()
    const Open = useStore((state) => state.openDetailProdukAdmin)
    const setOpen = useStore((state) => state.setOpenDetailProdukAdmin)
    const valueDelete = useStore((state) => state.valueDelete)
    const setValueDelete = useStore((state) => state.setValueDelete)

    const HandleDetail = (e) => {
        setData(e)
    }

    // VALIDASI ERROR DAN BERHASIL
    const Berhasil = () => {
        toast.success('Berhasil di hapus', {
            draggablePercent: 60
        },
            setValueDelete([]))
    }

    const Gagal = () => {
        toast.error("Gagal di hapus", {
            draggablePercent: 60,
        },
            setValueDelete([]))
    }
    valueDelete.status === undefined ||  valueDelete.status == 200 && Berhasil() || valueDelete.status == 500 && Gagal()

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
                            <div className={styles.namaproduk} style={{ fontWeight: '500' }} >
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
                <CustomLink href={'/admin/post'} >
                    <div className={styles.post}>
                        <MdOutlinePostAdd />
                    </div>
                </CustomLink>
            </div >
            <ToastContainer limit={1} autoClose={3000} />
            {Open ? <DetailList data={data} /> : null}
        </>
    )
}
