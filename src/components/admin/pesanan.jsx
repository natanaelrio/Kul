'use client'
import styles from '@/components/admin/pesanan.module.css'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useEffect, useState } from 'react'
import DataPesanan from '@/components/admin/dataPesanan';
import { useStore } from '@/lib/zustand'
import SkletonPesanan from '@/components/admin/skletonPesanan';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter, useSearchParams } from 'next/navigation';
import Moment from 'react-moment';

export default function Pesanan() {
    const searchParams = useSearchParams()
    const take = searchParams.get('take')
    const skip = searchParams.get('skip')
    const router = useRouter()

    const fetchdatalistpesanan = useStoreListDataProduct((state) => state.fetchdatalistpesanan)
    const datalistpesanan = useStoreListDataProduct((state) => state.datalistpesanan)
    const Open = useStore((state) => state.openDetailDataPesanan)
    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)

    useEffect(() => {
        fetchdatalistpesanan(take, skip)
    }, [fetchdatalistpesanan])

    const omset = datalistpesanan?.data?.map((data) => data?.dataPesanan?.map((data) => data?.harga_barang_user).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    const totalterjual = datalistpesanan?.data?.map((data) => data?.dataPesanan?.map((data) => data?.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0)

    const [dataPesanan, setDataPesanan] = useState([])
    const HandlePesanan = (e) => {
        setDataPesanan(e)
        setOpen()
    }

    const handlePlusNegatif = (e) => {
        e > 0 ? router.push(`/admin/pesanan?skip=${e}`) : router.push(`/admin/pesanan`)
        fetchdatalistpesanan(take, e > 0 ? e : 0)
    }
    const kondisilength = datalistpesanan.data.length ? true : false

    return (
        <>
            <div className={styles.container}>
                <div className={styles.history}>
                    Total Terjual :&nbsp;  <div className={styles.number}>{totalterjual} </div>&nbsp;| &nbsp;Omset :&nbsp;<div className={styles.number}>{omset}</div>
                </div>
                <div className={styles.judul}>
                    <div className={styles.tanggalinput}>Tanggal </div>
                    <div className={styles.totaljumlah}>Total Jumlah</div>
                    <div className={styles.totalbiaya}>Total Biaya</div>
                    <div className={styles.datapesanan}>Pesanan</div>
                </div>
                {datalistpesanan.data ? null : <SkletonPesanan />}
                {datalistpesanan?.data?.map((data) => {
                    const totalJumlahBarang = data?.dataPesanan?.map((data) => data?.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)
                    const totalHargaBarang = data?.dataPesanan?.map((data) => data?.harga_barang_user).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                    })
                    return (
                        <div key={data?.id} className={styles.content}>
                            <div className={styles.tanggalinput}>
                                <Moment format="YYYY/MM/DD ">
                                    {(data?.start).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}
                                </Moment>&nbsp;| &nbsp;
                                <Moment format="HH:mm" >
                                    {(data?.start).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}
                                </Moment>

                            </div>
                            <div className={styles.totaljumlah}>{totalJumlahBarang} {data?.nama_lengkap_user}</div>
                            <div className={styles.totalbiaya}>{totalHargaBarang}</div>
                            <div className={styles.datapesanan}><button onClick={() => HandlePesanan(data)}>Pesanan</button></div>
                        </div>
                    )
                }
                )}
            </div >
            <div className={styles.pagination}>
                <div onClick={() => { handlePlusNegatif(Number(skip) - 10) }}
                    className={styles.arrow}
                    style={skip ? { display: 'block' } : { display: 'none' }}>
                    <FaArrowLeft size={20} />
                </div>
                <span>{skip}</span>
                <div onClick={() => { handlePlusNegatif(Number(skip) + 10) }}
                    style={kondisilength ? { display: 'block' } : { display: 'none' }}
                    className={styles.arrow}><FaArrowRight size={20} /></div>
            </div>
            {Open ? <DataPesanan data={dataPesanan} /> : null
            }
        </>
    )
}
