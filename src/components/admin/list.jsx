"use client"
import styles from '@/components/admin/list.module.css'
import { TiDelete } from "react-icons/ti";
import { GoEye } from "react-icons/go";
import { MdOutlinePostAdd } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { useState } from 'react';
import Header from '@/components/admin/layout/header';

Link
export default function List() {
    const [data, setData] = useState()
    const router = useRouter()

    axios.get(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.NEXT_PUBLIC_SECREET
        },
        next: { revalidate: 0 }
    })
        // .then(res => res.json())
        .then((res) => {
            setData(res.data)
        })

    const HandleDelete = (e) => {
        axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/delete`, {
            method: 'DELETE',
            data: e,
            // body: JSON.stringify(e),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            }
        })
        router.refresh()
    }

    return (
        <>
            <Header judul={'LIST PRODUK'}>
                <div className={styles.container}>
                    <div className={styles.list}>
                        <div className={styles.bungkusproduk}>
                            <div className={styles.produk} style={{ fontWeight: '700' }}>
                                <div className={styles.id}>
                                    ID
                                </div>
                                <div className={styles.namaproduk}>
                                    NAMA
                                </div>
                                <div className={styles.viewbarang}>
                                    VIEW
                                </div>
                            </div>
                            <div className={styles.aksi}>
                                <div className={styles.edit}></div>
                                <div className={styles.delete}></div>
                            </div>
                        </div>
                        {data?.data?.map((data, i) =>
                        (
                            <div key={i} className={styles.bungkusproduk}   >
                                <Link href={`/admin/update/${data.id}`} className={styles.produk}>
                                    <div className={styles.id}>
                                        {data.id}
                                    </div>
                                    <div className={styles.namaproduk} >
                                        {data.nama_barang}
                                    </div>
                                    <div className={styles.viewbarang}>
                                        <div className={styles.dalamview}> <GoEye />  {data.view_barang}</div>
                                    </div>
                                </Link>
                                <div className={styles.aksi}>
                                    <div className={styles.delete}>
                                        <div className={styles.deletedalam} onClick={() => HandleDelete({ "id": data.id })} >
                                            <TiDelete style={{ border: '1px solid red' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    <Link href={'/admin/post'} className={styles.post}>
                        <MdOutlinePostAdd />
                    </Link>
                </div >
            </Header>
        </>
    )
}
