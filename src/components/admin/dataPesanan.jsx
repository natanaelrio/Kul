import BackLayang from '@/components/admin/layout/backLayang'
import { useStore } from '@/lib/zustand'
import styles from '@/components/admin/dataPesanan.module.css'
import CustomLink from '@/lib/customLink'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useEffect, useState } from 'react'

export default function DataPesanan({ data }) {
    const setValueStatusPesanan = useStore((state) => state.setValueStatusPesanan)
    const fetchdatalistpesanan = useStoreListDataProduct((state) => state.fetchdatalistpesanan)
    const totalJumlahBarang = data?.dataPesanan?.map((data) => data?.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)
    const totalHargaBarang = data?.dataPesanan?.map((data) => data?.harga_barang_user).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    // console.log(data);
    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)

    const HandleStatus = async (id, e) => {
        fetchdatalistpesanan(), setOpen()
        const sudahdiproses = {
            nota_user: id,
            status_pesanan: 'sudah-diproses'
        }
        const sudahberhasil = {
            nota_user: id,
            status_pesanan: 'sudah-berhasil'
        }

        const datanya = e == 'sudah-diproses' && sudahdiproses || e == 'sudah-berhasil' && sudahberhasil
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}` + '/api/v1/admin/update-status-pesanan', {
                method: 'PUT',
                body: JSON.stringify(datanya),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                }
            })
            const data = await res.json()
            setValueStatusPesanan(data)
        }
        catch (e) {
            console.error(e)
        }
    }


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
                <div className={styles.link}>Link</div>
                <div className={styles.status} style={{ justifyContent: 'flex-start' }}>Status</div>
            </div>
            <div className={styles.listdata}>
                {data?.dataPesanan?.map((data) => {
                    // console.log(data);
                    const idLink = data.id_user
                    const [linkData, setLinkData] = useState([])
                    useEffect(() => {
                        try {
                            async function fetchData() {
                                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get-link-pesanan?id=${idLink}`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                                    },
                                    next: { revalidate: 0 }
                                })
                                const data = await res.json()
                                setLinkData(data)
                            }
                            fetchData();
                        } catch (e) { console.log(e) }
                    }, [])

                    return (
                        <div key={data?.nama_barang_user} className={styles.content} >
                            <div className={styles.namapesanan}>{data?.nama_barang_user}</div>
                            <div className={styles.jumlahpesanan}>{data?.jumlah_barang_user}</div>
                            <div className={styles.hargapesanan}>{data?.harga_barang_user.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })}</div>
                            <div className={styles.link} >{linkData?.data?.link_barang}</div>
                            <div className={styles.status}>
                                <input type="checkbox" />
                                <input type="checkbox" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.content} style={{ fontWeight: '700' }}>
                <div className={styles.namapesanan}>Total</div>
                <div className={styles.jumlahpesanan}>{totalJumlahBarang}</div>
                <div className={styles.hargapesanan}>{totalHargaBarang}</div>
                <div className={styles.link}></div>
            </div>

            <div className={styles.dalampilihan}>
                <CustomLink href={`/nota/${data?.nota_user}`} className={styles.nota}><button>Download Nota</button></CustomLink>
                {data.status_pesanan == 'belum-diproses' && <div className={styles.nota}
                    onClick={() => HandleStatus(data?.nota_user, 'sudah-diproses')}>
                    <button>Sudah Di Proses</button>
                </div>}

                {data.status_pesanan == 'sudah-diproses' &&
                    <div className={styles.nota}
                        onClick={() => HandleStatus(data?.nota_user, 'sudah-berhasil')}>
                        <button>Berhasil di Proses</button>
                    </div>}
            </div>
        </BackLayang>
    )
}
