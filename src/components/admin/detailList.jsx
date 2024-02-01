"use client"
import styles from "@/components/admin/detailList.module.css"
import BackLayang from '@/components/admin/layout/backLayang';
import { useStore } from '@/lib/zustand'
import { useStoreCRUDadmin } from '@/utils/admin/admin/crudDataAdmin'
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

export default function DetailList(props) {
    const setOpen = useStore((state) => state.setOpenDetailProdukAdmin)
    const setValueDelete = useStore((state) => state.setValueDelete)
    const [isLoading, setIsLoading] = useState(false)
    const [isGagalLoading, setIsGagalLoading] = useState(false)
    const fetchDataAdminProduk = useStoreCRUDadmin((state) => state.fetchDataAdminProduk)
    const router = useRouter()

    const Berhasil = () => {
        setValueDelete({ status: 200 }), setOpen(), setIsLoading(false), fetchDataAdminProduk()
    }
    const Gagal = () => {
        setValueDelete({ status: 500 }), setIsLoading(false), setIsGagalLoading(true)
    }

    const HandleDelete = async (e) => {
        setIsLoading(true)
        setIsGagalLoading(false)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/delete`, {
                method: 'DELETE',
                // data: e,
                body: JSON.stringify(e),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                }
            })
            const data = await res.json()
            data.status == 200 && Berhasil() || data.status == 500 && Gagal()
        }
        catch (e) {
            Gagal()
        }
        router.refresh()
    }


    const harga = props.data?.harga_barang.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    return (
        <>
            <BackLayang setOpen={setOpen} judul={'Detail Produk'} >
                <div className={styles.relatif}>
                    <div className={styles.slug}>{props.data?.slug_barang}</div>
                    <div className={styles.container} >
                        <div className={styles.kotak1}>
                            <div className={styles.gambar}>
                                <div className={styles.gambardalam}>

                                    <Image
                                        src={props.data?.gambar_barang ? props.data?.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                        width={200}
                                        height={200}
                                        alt={props.data?.nama_barang}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.kotak2}>
                            <div className={styles.containerdata}>
                                <div className={styles.judul}>
                                    Nama
                                </div>
                                <div className={styles.detail}>
                                    {props.data?.nama_barang}
                                </div>
                            </div>

                            <div className={styles.containerdata}>
                                <div className={styles.judul}>
                                    Deskripsi
                                </div>
                                <div className={styles.detail}
                                    dangerouslySetInnerHTML={{ __html: props.data?.diskripsi_barang }}
                                >
                                </div>
                            </div>

                            <div className={styles.containerdata}>
                                <div className={styles.judul}>
                                    Harga
                                </div>
                                <div className={styles.detail}>
                                    {harga}
                                </div>
                            </div>

                            <div className={styles.containerdata}>
                                <div className={styles.judul}>
                                    Jumlah Barang
                                </div>
                                <div className={styles.detail}>
                                    {props.data?.jumlah_barang}
                                </div>
                            </div>

                            <div className={styles.containerdata}>
                                <div className={styles.judul}>
                                    Diskon
                                </div>
                                <div className={styles.detail}>
                                    {props.data?.diskon_barang}
                                </div>
                            </div>

                            <div className={styles.containerdata}>
                                <div className={styles.judul}>
                                    Kategori
                                </div>
                                <div className={styles.detail}>
                                    {props.data?.kategori_barang}
                                </div>
                            </div>

                            <div className={styles.containerdata}>
                                <div className={styles.judul}>
                                    Kupon
                                </div>
                                <div className={styles.detail}>
                                    {props.data?.kupon_barang}
                                </div>
                            </div>

                            <br />

                            <div className={styles.dataperforma}>
                                <div className={styles.containerdata}>
                                    <div className={styles.judul}>
                                        Rating
                                    </div>
                                    <div className={styles.detail}>
                                        {props.data?.rating_barang}
                                    </div>
                                </div>

                                <div className={styles.containerdata}>
                                    <div className={styles.judul}>
                                        Total Penjualan
                                    </div>
                                    <div className={styles.detail}>
                                        {props.data?.total_penjualan_barang}
                                    </div>
                                </div>

                                <div className={styles.containerdata}>
                                    <div className={styles.judul}>
                                        View
                                    </div>
                                    <div className={styles.detail}>
                                        {props.data?.view_barang}
                                    </div>
                                </div>

                                <div className={styles.containerdata}>
                                    <div className={styles.judul}>
                                        Like
                                    </div>
                                    <div className={styles.detail}>
                                        {props.data?.like_barang}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.deleteupdate}>
                        <div className={styles.delete} onClick={() => {
                            alert('yakin ? hapus ?')
                            // setOpen()
                            HandleDelete({ "id": props.data?.btoa })
                            router.refresh()
                        }}>Delete</div>
                        <Link href={`/admin/update/${props.data?.btoa}`}
                            target="_blank"
                            className={styles.update} >Update</Link>
                    </div>
                    {isLoading && <><div className={styles.loading}></div>
                        <div className={styles.dalamloading}>
                            <MoonLoader
                                color={'var(--color-white)'}
                            />
                            Loading
                        </div>
                    </>}
                    {isGagalLoading && <><div className={styles.loading}></div>
                        <div className={styles.dalamloading}>
                            <MoonLoader
                                color={'var(--color-white)'}
                            />
                            Gagal...
                        </div>
                    </>}


                </div>
            </BackLayang >
        </>
    )
}
