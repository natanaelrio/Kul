import BackLayang from '@/components/admin/layout/backLayang'
import { useStore } from '@/lib/zustand'
import styles from '@/components/admin/dataPesanan.module.css'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link'

export default function DataPesanan({ data, take, skip }) {
    const setValueStatusPesanan = useStore((state) => state.setValueStatusPesanan)
    const fetchdatalistpesanan = useStoreListDataProduct((state) => state.fetchdatalistpesanan)
    const totalJumlahBarang = data?.dataPesanan?.map((data) => data?.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)
    const totalHargaBarang = data?.dataPesanan?.map((data) => data?.harga_barang_user).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    // VALIDASI GAGAL DAN SUKSES
    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingGagal, setIsLoadingGagal] = useState(false)

    const handleSukses = () => {
        fetchdatalistpesanan(take, skip)
        setValueStatusPesanan({ status: 200 })
        setIsLoading(false)
        setOpen()
    }
    const handleGagal = () => {
        setValueStatusPesanan({ status: 500 })
        setIsLoading(false)
        setIsLoadingGagal(true)
    }

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
                statusKirim: !data.statusKirim,
                statusSelesai: !data.statusKirim == false && !data.statusKirim,
            }
            : data))
    }

    const handleCekSelesai = (e) => {
        setTodos(todos.map((data) => data.id_user == e.id_user ?
            {
                ...data,
                statusKirim: !data.statusKirim == false ? true : true,
                statusSelesai: !data.statusSelesai
            }
            : data))
    }

    const handleResi = (e, value) => {
        setTodos(todos.map((data) => data.id_user == e.id_user ?
            {
                ...data,
                resi_user: value
            }
            : data))
    }

    const statuskirim = todos.map((data) => data.statusKirim).filter((value) => value == false);
    const statusselesai = todos.map((data) => data.statusSelesai).filter((value) => value == false);

    // PUT DATA
    const HandleStatus = async (id) => {

        setIsLoading(true)
        setIsLoadingGagal(false)
        const datanya = {
            nota_user: id,
            status_pesanan: data.status_pesanan == 'belum-diproses' && statuskirim.length == [] && 'sudah-diproses' ||
                data.status_pesanan == 'sudah-diproses' && statusselesai.length == [] && 'sudah-berhasil'
                || 'belum-diproses',
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
            data.status == 200 && handleSukses() || data.status == 500 && handleGagal()
        }
        catch (e) {
            handleGagal()
        }
    }

    return (
        <>
            <BackLayang
                setOpen={setOpen}
                judul={'Data Pesanan'}
            >
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

                <div className='deskop'>
                    <div className={styles.content} style={{ fontWeight: '700' }} >
                        <div className={styles.namapesanan}>Pesan</div>
                        <div className={styles.jumlahpesanan}>Jumlah</div>
                        <div className={styles.hargapesanan}>Harga</div>
                        <div className={styles.link}>Link</div>
                        <div className={styles.status} style={{ justifyContent: 'flex-start' }}>Status/Resi</div>
                    </div>
                </div>
                <div className={styles.listdata} style={{ overflow: isLoading && 'inherit' }} >
                    <div className={styles.overflow}>
                        <div className='mobile'>
                            <div className={styles.content} style={{ fontWeight: '700' }} >
                                <div className={styles.namapesanan}>Pesan</div>
                                <div className={styles.jumlahpesanan}>Jumlah</div>
                                <div className={styles.hargapesanan}>Harga</div>
                                <div className={styles.link}>Link</div>
                                <div className={styles.status} style={{ justifyContent: 'flex-start' }}>Status</div>
                            </div>
                        </div>

                        {todos?.map((data) => {
                            return (
                                <div key={data?.id_user} className={styles.content} >
                                    <div className={styles.namapesanan} style={{ fontWeight: '500' }}>{data?.nama_barang_user}</div>
                                    <div className={styles.jumlahpesanan}>{data?.jumlah_barang_user}</div>
                                    <div className={styles.hargapesanan}>{data?.harga_barang_user.toLocaleString('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR'
                                    })}</div>
                                    <div className={styles.link} onClick={() => handleLink(data?.id_user)} >{linkData?.data?.id == data?.id_user ? linkData?.data?.link_barang : <div className={styles.eye}><IoEyeOutline />lihat</div>}</div>
                                    <div className={styles.status}>
                                        <div className={styles.dalamstatus}>
                                            <div className={styles.inputan} onClick={() => { handleCekKirim(data) }}>
                                                <input
                                                    type="checkbox"
                                                    checked={data.statusKirim}
                                                />
                                                <span style={{ textDecoration: data.statusKirim ? 'none' : 'line-through' }}>proses</span>
                                            </div>
                                            <div className={styles.inputan} onClick={() => { handleCekSelesai(data) }}>
                                                <input
                                                    type="checkbox"
                                                    checked={data.statusSelesai}
                                                />
                                                <span style={{ textDecoration: data.statusSelesai ? 'none' : 'line-through' }}>selesai</span>
                                            </div>
                                        </div>
                                        {data.statusKirim && <div className={styles.resi}>
                                            <input type="text" placeholder='resi' onChange={(e) => handleResi(data, e.target.value)} value={data.resi_user} />
                                        </div>}
                                    </div>
                                </div>
                            )
                        })}
                        <div className='mobile'>
                            <div className={styles.content} style={{ fontWeight: '700' }}>
                                <div className={styles.namapesanan}>Total</div>
                                <div className={styles.jumlahpesanan}>{totalJumlahBarang}</div>
                                <div className={styles.hargapesanan}>{totalHargaBarang}</div>
                                <div className={styles.link}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='deskop'>
                    <div className={styles.content} style={{ fontWeight: '700' }}>
                        <div className={styles.namapesanan}>Total</div>
                        <div className={styles.jumlahpesanan}>{totalJumlahBarang}</div>
                        <div className={styles.hargapesanan}>{totalHargaBarang}</div>
                        <div className={styles.link}></div>
                    </div>
                </div>

                <div className={styles.dalampilihan}>
                    <Link target='_blank' href={`/nota/${data?.nota_user}`} >
                        <div className={styles.nota}>
                            <button>Download Nota</button>
                        </div>
                    </Link>
                    <div className={styles.nota}>
                        <button disabled={isLoading} onClick={() => { HandleStatus(data?.nota_user) }}>
                            {isLoading ? 'Loading...' : !isLoadingGagal && 'Update Status'}
                            {isLoadingGagal && 'gagal! ( Update Ulang)'}
                        </button>
                    </div>
                </div>
            </BackLayang>
            <span>kwkwkw</span>
        </>
    )
}
