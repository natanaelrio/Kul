import BackLayang from '@/components/admin/layout/backLayang'
import { useStore } from '@/lib/zustand'
import styles from '@/components/admin/dataPesanan.module.css'

export default function DataPesanan({ data, dataNama }) {
    console.log(data);
    console.log(dataNama);
    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)
    return (
        <BackLayang setOpen={setOpen} judul={'Data Pesanan'}>
            <div className={styles.nama}>Pemesan: {dataNama} </div>
            <div className={styles.detail} style={{ fontWeight: '700' }}>
                <div className={styles.namapesanan}>Nama Barang</div>
                <div className={styles.jumlahpesanan}>Jumlah Pesanan</div>
                <div className={styles.hargapesanan}>Harga</div>
                <div className={styles.kupon}>Kupon</div>
            </div>

            {data?.map((data) => {
                const datakupon = data.validasi_kupon_user.toString()
                return (
                    <div key={data.id} className={styles.content} >
                        <div className={styles.namapesanan}>{data.nama_barang_user}</div>
                        <div className={styles.jumlahpesanan}>{data.jumlah_barang_user}</div>
                        <div className={styles.hargapesanan}>{data.harga_barang_user}</div>
                        <div className={styles.kupon}>{datakupon} </div>
                    </div>
                )
            })}

        </BackLayang>
    )
}
