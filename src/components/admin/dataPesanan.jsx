import BackLayang from '@/components/admin/layout/backLayang'
import { useStore } from '@/lib/zustand'
import styles from '@/components/admin/dataPesanan.module.css'
import CustomLink from '@/lib/customLink'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";

export default function DataPesanan({ data }) {
    const setValueStatusPesanan = useStore((state) => state.setValueStatusPesanan)
    const fetchdatalistpesanan = useStoreListDataProduct((state) => state.fetchdatalistpesanan)
    const totalJumlahBarang = data?.dataPesanan?.map((data) => data?.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)
    const totalHargaBarang = data?.dataPesanan?.map((data) => data?.harga_barang_user).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)

    // VIEW LINK
    const [linkData, setLinkData] = useState([])
    const handleLink = async (e) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get-link-pesanan?id=${e}`, {
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


    // CEK VALUE
    const [todos, setTodos] = useState(data?.dataPesanan);
    const handleCekKirim = (e) => {
        setTodos(todos.map((data) => data.id_user == e.id_user ?
            {
                ...data,
                statusKirim: !data.statusKirim
            }
            : data))
    }

    const handleCekSelesai = (e) => {
        setTodos(todos.map((data) => data.id_user == e.id_user ?
            {
                ...data,
                statusSelesai: !data.statusSelesai
            }
            : data))
    }


    const statuskirim = todos.map((data) => data.statusKirim).filter((value) => value == false);
    const statusselesai = todos.map((data) => data.statusSelesai).filter((value) => value == false);

    // PUT DATA
    const HandleStatus = async (id) => {
        fetchdatalistpesanan(), setOpen()
        const datanya = {
            nota_user: id,
            status_pesanan: statuskirim.length == [] && 'sudah-diproses' ||
                statusselesai.length == [] && 'sudah-berhasil' ||
                statuskirim.length == [] && statusselesai.length == [] && 'sudah-berhasil' ||
                'belum-diproses',
            dataPesanan: todos,
        }
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
                    return (
                        <div key={data?.id_user} className={styles.content} >
                            <div className={styles.namapesanan}>{data?.nama_barang_user}</div>
                            <div className={styles.jumlahpesanan}>{data?.jumlah_barang_user}</div>
                            <div className={styles.hargapesanan}>{data?.harga_barang_user.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })}</div>
                            <div className={styles.link} onClick={() => handleLink(data?.id_user)} >{linkData?.data?.id == data?.id_user ? linkData?.data?.link_barang : <div className={styles.eye}><IoEyeOutline />lihat</div>}</div>
                            <div className={styles.status}>
                                <input
                                    type="checkbox"
                                    onClick={() => { handleCekKirim(data) }}
                                    // checked={data.statusKirim}
                                />
                                <input
                                    type="checkbox"
                                    onClick={() => { handleCekSelesai(data) }}
                                // checked={data.statusSelesai}
                                />
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
                <div className={styles.nota}
                    onClick={() => HandleStatus(data?.nota_user)}>
                    <button>Berhasil di Proses</button>
                </div>
            </div>
        </BackLayang>
    )
}
