'use client'
import styles from '@/components/admin/pesanan.module.css'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useEffect, useState } from 'react'
import DataPesanan from '@/components/admin/dataPesanan';
import { useStore } from '@/lib/zustand'

export default function Pesanan() {
    const fetchdatalistpesanan = useStoreListDataProduct((state) => state.fetchdatalistpesanan)
    const datalistpesanan = useStoreListDataProduct((state) => state.datalistpesanan)
    const Open = useStore((state) => state.openDetailDataPesanan)
    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)

    useEffect(() => {
        fetchdatalistpesanan()
    }, [fetchdatalistpesanan])

    const [dataPesanan, setDataPesanan] = useState([])
    const [dataNama, setDataNama] = useState([])
    const HandlePesanan = (e) => {
        setDataPesanan(e.dataPesanan)
        setDataNama(e.nama_lengkap_user)
        setOpen()
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.judul} style={{ fontWeight: '700' }}>
                    <div className={styles.notauser}> Nota</div>
                    <div className={styles.namalengkapuser}>Nama </div>
                    <div className={styles.alamatlengkapuser}>Alamat</div>
                    <div className={styles.nomerhp}>Nomer</div>
                    <div className={styles.kodepostuser}>Kode POS</div>
                    <div className={styles.catatan}>Alamat</div>
                    <div className={styles.datapesanan}>Pesanan</div>
                </div>
                {datalistpesanan?.data?.map((data) => {
                    return (
                        <div key={data.id} className={styles.content}>
                            <div className={styles.notauser}>{data.nota_user}</div>
                            <div className={styles.namalengkapuser}>{data.nama_lengkap_user}</div>
                            <div className={styles.alamatlengkapuser}>{data.alamat_lengkap_user}</div>
                            <div className={styles.nomerhp}>{data.no_hp_user}</div>
                            <div className={styles.kodepostuser}>{data.kode_pos_user}</div>
                            <div className={styles.catatan}>{data.catatan_user}</div>
                            <div className={styles.datapesanan}><button onClick={() => HandlePesanan(data)}>Data Pesanan</button></div>
                        </div>
                    )
                }
                )}
            </div >
            {Open ? <DataPesanan data={dataPesanan} dataNama={dataNama}/> : null}
        </>
    )
}
