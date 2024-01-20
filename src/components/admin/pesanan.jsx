'use client'
import styles from '@/components/admin/pesanan.module.css'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useEffect, useState } from 'react'
import DataPesanan from '@/components/admin/dataPesanan';
import { useStore } from '@/lib/zustand'
import SkletonPesanan from '@/components/admin/skletonPesanan';

export default function Pesanan() {
    const fetchdatalistpesanan = useStoreListDataProduct((state) => state.fetchdatalistpesanan)
    const datalistpesanan = useStoreListDataProduct((state) => state.datalistpesanan)
    const Open = useStore((state) => state.openDetailDataPesanan)
    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)

    useEffect(() => {
        fetchdatalistpesanan()
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

    return (
        <>
            <div className={styles.container}>
                <div className={styles.history}>
                    Total Terjual :&nbsp;  <div className={styles.number}>{totalterjual} </div>&nbsp;| &nbsp;Omset :&nbsp;<div className={styles.number}>{omset}</div>
                </div>
                <div className={styles.judul}>
                    <div className={styles.namalengkapuser}>Nama </div>
                    <div className={styles.totaljumlah}>Total Jumlah</div>
                    <div className={styles.totalbiaya}>Total Biaya</div>
                    <div className={styles.datapesanan}>Pesanan</div>
                </div>
                {datalistpesanan.data ? null : <SkletonPesanan />}
                {datalistpesanan?.data?.map((data) => {
                    const totalJumlahBarang = data?.dataPesanan?.map((data) => data.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)
                    const totalHargaBarang = data?.dataPesanan?.map((data) => data.harga_barang_user).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                    })
                    return (
                        <div key={data.id} className={styles.content}>
                            <div className={styles.namalengkapuser}>{data.nama_lengkap_user}</div>
                            <div className={styles.totaljumlah}>{totalJumlahBarang}</div>
                            <div className={styles.totalbiaya}>{totalHargaBarang}</div>
                            <div className={styles.datapesanan}><button onClick={() => HandlePesanan(data)}>Pesanan</button></div>
                        </div>
                    )
                }
                )}
            </div >
            {Open ? <DataPesanan data={dataPesanan} /> : null
            }
        </>
    )
}
