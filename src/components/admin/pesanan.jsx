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
import { useDebounce } from "@uidotdev/usehooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoFilterSharp } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";

export default function Pesanan() {
    const searchParams = useSearchParams()
    const take = searchParams.get('take')
    const skip = searchParams.get('skip')
    const status = searchParams.get('status')
    const router = useRouter()

    const fetchdatalistpesanan = useStoreListDataProduct((state) => state.fetchdatalistpesanan)
    const datalistpesanan = useStoreListDataProduct((state) => state.datalistpesanan)
    const Open = useStore((state) => state.openDetailDataPesanan)
    const setOpen = useStore((state) => state.setOpenDetailDataPesanan)
    const valueStatusPesanan = useStore((state) => state.valueStatusPesanan)
    const setValueStatusPesanan = useStore((state) => state.setValueStatusPesanan)

    useEffect(() => {
        fetchdatalistpesanan(take, skip)
    }, [fetchdatalistpesanan])

    const omset = datalistpesanan?.total_omset
    const totalterjual = datalistpesanan?.total_terjual
    const total_array = datalistpesanan?.total_array

    const [dataPesanan, setDataPesanan] = useState([])
    const HandlePesanan = (e) => {
        setDataPesanan(e)
        setOpen()
    }

    // FILTER PESANAN
    const [statusFilter, setStatusFilter] = useState(false)
    const HandleFilterPesanan = (e) => {
        setStatusFilter(false)
        e == 'reset' ? router.push('/admin/pesanan') : router.push(`?status=${e}`)
        fetchdatalistpesanan(take, skip, iscari, e)
    }

    // PAGINATION
    const handlePlusNegatif = (e) => {
        e > 0 ? router.push(`/admin/pesanan?skip=${e}`) : router.push(`/admin/pesanan`)
        fetchdatalistpesanan(take, e > 0 ? e : 0, iscari, status)
    }

    const handlePencarian = (e) => {
        setIsCari(e.target.value)
    }

    const [iscari, setIsCari] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const debouncedSearchTerm = useDebounce(iscari, 300);
    useEffect(() => {
        const searchHN = async () => {
            setIsLoading(true)
            if (debouncedSearchTerm) {
                fetchdatalistpesanan(10, 0, iscari)
            }
            setIsLoading(false)
        }
        searchHN()
    }, [debouncedSearchTerm]);


    useEffect(() => {
        iscari.length ? true : fetchdatalistpesanan(take, skip, '')
    }, [iscari])


    // VALIDASI ERROR DAN BERHASIL
    const Berhasil = () => {
        toast.success("status berhasil dirubah", {
            draggablePercent: 60
        }),
            setValueStatusPesanan([])
    }

    const Gagal = () => {
        toast.error("status gagal dirubah", {
            draggablePercent: 60,
        }),
            setValueStatusPesanan([])
    }
    valueStatusPesanan == [] ||  valueStatusPesanan.status == 200 && Berhasil() || valueStatusPesanan.status == 500 && Gagal()

    return (
        <>
            <div className={styles.container}>
                <div className={styles.history}>
                    <div className={styles.jumlah}>
                        Total Terjual :&nbsp;  <div className={styles.number}>{totalterjual} </div>&nbsp;| &nbsp;Omset :&nbsp;<div className={styles.number}>{omset}</div>
                    </div>
                    <div className={styles.pencarian}>
                        <input
                            type="text"
                            placeholder='cari nota...'
                            onChange={(e) => handlePencarian(e)}
                            value={iscari}
                        />
                        <IoFilterSharp size={30} onClick={() => setStatusFilter(!statusFilter)} />
                    </div>

                </div>
                {statusFilter && <div className={styles.filter} >
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('sudah-diproses')}>Pesanan proses</div>
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('sudah-berhasil')}>Pesanan berhasil</div>
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('belum-diproses')}>Pesanan blm di proses</div>
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('reset')}><GrPowerReset /></div>
                </div>}
                <div className={styles.judul}>
                    <div className={styles.tanggalinput}>Tanggal </div>
                    <div className={styles.totaljumlah}>Total Jumlah</div>
                    <div className={styles.totalbiaya}>Total Biaya</div>
                    <div className={styles.datapesanan}>Pesanan</div>
                </div>
                {datalistpesanan?.data?.length === 0 ? <span>Tidak Ada data?....</span> : null}
                {datalistpesanan?.data ? null : <SkletonPesanan />}
                {datalistpesanan?.data?.map((data) => {
                    const totalJumlahBarang = data?.dataPesanan?.map((data) => data?.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)
                    const totalHargaBarang = data?.dataPesanan?.map((data) => data?.harga_barang_user).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                    })
                    const status = data?.status_pesanan == "belum-diproses" && { backgroundColor: 'red' } || data?.status_pesanan == "sudah-diproses" && { backgroundColor: 'blue' } || data?.status_pesanan == "sudah-berhasil" && { backgroundColor: 'green' }
                    return (
                        <>
                            <div key={data?.id} className={styles.content}>
                                <div className={styles.tanggalinput}>
                                    <Moment format="YYYY/MM/DD ">
                                        {(data?.start).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}
                                    </Moment>&nbsp;| &nbsp;
                                    <Moment format="HH:mm" >
                                        {(data?.start).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}
                                    </Moment>

                                </div>
                                <div className={styles.totaljumlah}>{totalJumlahBarang}</div>
                                <div className={styles.totalbiaya}>{totalHargaBarang}</div>
                                <div className={styles.datapesanan} >
                                    <button
                                        style={status || {}}
                                        onClick={() => HandlePesanan(data)}>
                                        Pesanan
                                    </button>
                                </div>
                            </div>
                        </>
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
                    style={total_array > skip ? { display: 'block' } : { display: 'none' }}
                    className={styles.arrow}><FaArrowRight size={20} /></div>
            </div>
            {Open && <DataPesanan data={dataPesanan} />}
            <ToastContainer  autoClose={2000} />
        </>
    )
}
