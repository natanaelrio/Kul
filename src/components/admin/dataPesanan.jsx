import BackLayang from '@/components/admin/layout/backLayang'
import { useStore } from '@/lib/zustand'
import styles from '@/components/admin/dataPesanan.module.css'
import Link from 'next/link';

export default function DataPesanan({ data }) {
    const totalJumlahBarang = data?.dataPesanan?.map((data) => data?.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)
    const totalHargaBarang = data?.dataPesanan?.map((data) => data?.harga_barang_user).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)
    return (
        <BackLayang setOpen={setOpen} judul={'Data Pesanan'}>
            <div className={styles.informasi}>
                <div className={styles.containerinformasi}>
                    <div className={styles.tablesatu}>Pemesan: </div>
                    <div className={styles.tabledua}>{data?.nama_lengkap_user} </div>
                </div>
                <div className={styles.containerinformasi}>
                    <div className={styles.tablesatu}>Alamat:  </div>
                    <div className={styles.tabledua}> {data?.alamat_lengkap_user}  </div>
                </div>
                <div className={styles.containerinformasi}>
                    <div className={styles.tablesatu}>Kode POS:</div>
                    <div className={styles.tabledua}>{data?.kode_pos_user}</div>
                </div>
                <div className={styles.containerinformasi}>
                    <div className={styles.tablesatu}>Nomer HP:</div>
                    <div className={styles.tabledua}>{data?.no_hp_user} </div>
                </div>
                <div className={styles.containerinformasi}>
                    <div className={styles.tablesatu}>Catatan: </div>
                    <div className={styles.tabledua}>{data?.catatan_user} </div>
                </div>
            </div>


            <div className={styles.content} style={{ fontWeight: '700' }} >
                <div className={styles.namapesanan}>Pesan</div>
                <div className={styles.jumlahpesanan}>Jumlah</div>
                <div className={styles.hargapesanan}>Harga</div>
                <div className={styles.kupon}> Kupon</div>
            </div>
            {data?.dataPesanan?.map((data) => {
                const datakupon = data?.validasi_kupon_user.toString()
                return (
                    <div key={data?.id} className={styles.content} >
                        <div className={styles.namapesanan}>{data?.nama_barang_user}</div>
                        <div className={styles.jumlahpesanan}>{data?.jumlah_barang_user}</div>
                        <div className={styles.hargapesanan}>{data?.harga_barang_user.toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR'
                        })}</div>
                        <div className={styles.kupon}>{datakupon} </div>
                    </div>
                )
            })}
            <div className={styles.content} style={{ fontWeight: '700' }}>
                <div className={styles.namapesanan}>Total</div>
                <div className={styles.jumlahpesanan}>{totalJumlahBarang}</div>
                <div className={styles.hargapesanan}>{totalHargaBarang}</div>
                <div className={styles.kupon}></div>
            </div>

            <div className={styles.dalampilihan}>
                <Link href={`/nota/${data?.nota_user}`} className={styles.nota}><button>Download Nota</button></Link>
                <div className={styles.nota}><button>Sudah Di Proses</button></div>
                <div className={styles.nota}><button>Berhasil di Proses</button></div>
            </div>
        </BackLayang>
    )
}
