"use client"
import styles from '@/components/admin/listproduk.module.css'
import { TiDelete } from "react-icons/ti";
import { GoEye } from "react-icons/go";
import { MdOutlinePostAdd } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { useState } from 'react';

export default function ListProduk() {
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
            <div className={styles.judulatas}>
                <div className={styles.juduldalam}>
                    List Produk
                </div>
            </div>
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
                            <div className={styles.produk}

                                onClick={() => HandleUpdate({ "nama_barang": data.nama_barang })}
                            >
                                <div className={styles.id}>
                                    {data.id}
                                </div>
                                <div className={styles.namaproduk} >
                                    {data.nama_barang}
                                </div>
                                <div className={styles.viewbarang}>
                                    <div className={styles.dalamview}> <GoEye />  {data.view_barang}</div>
                                </div>
                            </div>
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
        </>
    )
}
