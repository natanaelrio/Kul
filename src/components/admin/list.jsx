"use client"
import styles from '@/components/admin/list.module.css'
import { TiDelete } from "react-icons/ti";
import { GoEye } from "react-icons/go";
import { MdOutlinePostAdd } from "react-icons/md";
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import { useRouter } from 'next/navigation'

async function GetList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.NEXT_PUBLIC_SECREET
        },
        next: { revalidate: 0 }
    })
    return res.json()
}

export default async function List() {
    const router = useRouter()
    const data = await GetList()
    const HandleDelete = async (e) => {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/delete`, {
            method: 'DELETE',
            body: JSON.stringify(e),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            }
        })
        router.refresh()
    }

    return (
        <>
            <div className={styles.containeratas}>
                <div className={styles.bungkusatas}>
                    <div className={styles.head}>
                        <Link href={'/'}>
                            <div className={styles.iconhead}>  <IoHome /></div>
                        </Link> &nbsp;
                        <div className={styles.pencarian}>
                            <input type="text" placeholder='cari...' />
                        </div>
                    </div>
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

                    {data.data.map((data, i) =>
                    (<div key={i} className={styles.bungkusproduk}>
                        <div className={styles.produk}>
                            <div className={styles.id}>
                                {data.id}
                            </div>
                            <div className={styles.namaproduk}>
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
                    </div>))}
                </div>
                <Link href={'/admin/post'} className={styles.post}>
                    <MdOutlinePostAdd />
                </Link>
            </div>
        </>
    )
}
