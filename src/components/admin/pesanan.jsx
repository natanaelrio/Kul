'use client'
import styles from '@/components/admin/pesanan.module.css'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useEffect, useState } from 'react'
import { useStore } from '@/lib/zustand'
import SkletonPesanan from '@/components/admin/skletonPesanan';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from "@uidotdev/usehooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoFilterSharp } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { useStoreCRUDadmin } from '@/utils/admin/admin/crudDataAdmin'
import moment from 'moment';
import 'moment/locale/id'

export default function Pesanan() {
    const searchParams = useSearchParams()
    const take = searchParams.get('take')
    const skip = searchParams.get('skip')
    const status = searchParams.get('status')
    const router = useRouter()

    const statussekarang = status == "belum-diproses" && 'Belum Proses'
        || status == "sudah-diproses" && 'Sudah di Proses' ||
        status == "sudah-berhasil" && 'Sudah berhasil' ||
        status == "true" && 'Sudah Bayar' ||
        status == "false" && 'Belum Bayar' || ''

    const fetchdatalistpesanan = useStoreListDataProduct((state) => state.fetchdatalistpesanan)
    const datalistpesanan = useStoreListDataProduct((state) => state.datalistpesanan)
    const setOpenDetailDataPesanan = useStore((state) => state.setOpenDetailDataPesanan)
    const valueStatusPesanan = useStore((state) => state.valueStatusPesanan)
    const setValueStatusPesanan = useStore((state) => state.setValueStatusPesanan)

    const setDataPesanan = useStoreCRUDadmin((state) => state.setDataPesanan)
    const setTakePesanan = useStoreCRUDadmin((state) => state.setTakePesanan)
    const setSkipPesanan = useStoreCRUDadmin((state) => state.setSkipPesanan)
    const setCariPesanan = useStoreCRUDadmin((state) => state.setCariPesanan)
    const cariPesanan = useStoreCRUDadmin((state) => state.cariPesanan)

    useEffect(() => {
        // fetchdatalistpesanan(take, skip)
        fetchdatalistpesanan(take, skip, cariPesanan, status)
    }, [fetchdatalistpesanan])

    const total_array = datalistpesanan?.total_array

    const total_omsetP = datalistpesanan?.total_omsetP
    const total_barangP = datalistpesanan?.total_barangP
    const dataFalsePaymentP = datalistpesanan?.dataFalsePaymentP

    const total_omsetS = datalistpesanan?.total_omsetS
    const total_barangS = datalistpesanan?.total_barangS
    const dataTruePaymentS = datalistpesanan?.dataTruePaymentS

    const HandlePesanan = (e) => {
        setDataPesanan(e)
        setTakePesanan(take)
        setSkipPesanan(skip)
        setOpenDetailDataPesanan()
    }

    // FILTER PESANAN
    const [statusFilter, setStatusFilter] = useState(false)
    const HandleFilterPesanan = (e) => {
        setStatusFilter(false)
        e == 'reset' ? router.push('/admin/pesanan') : router.push(`?status=${e}`)
        fetchdatalistpesanan(take, skip, cariPesanan, e)
    }

    // PAGINATION
    const handlePlusNegatif = (e) => {
        e > 0 ? router.push(`/admin/pesanan?skip=${e}`) : router.push(`/admin/pesanan`)
        fetchdatalistpesanan(take, e > 0 ? e : 0, cariPesanan, status)
    }

    const handlePencarian = (e) => {
        setCariPesanan(e.target.value)
    }

    const debouncedSearchTerm = useDebounce(cariPesanan, 300);
    useEffect(() => {
        const searchHN = async () => {
            if (debouncedSearchTerm) {
                fetchdatalistpesanan(10, 0, cariPesanan)
            }
        }
        searchHN()
    }, [debouncedSearchTerm]);

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

    useEffect(() => {
        valueStatusPesanan == [] || valueStatusPesanan.status == 200 && Berhasil() || valueStatusPesanan.status == 500 && Gagal()
    }, [valueStatusPesanan])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.history}>
                    <div className={styles.jumlah}>
                        <div className={styles.pending}>
                            Data :&nbsp;  <div className={styles.number}>{dataFalsePaymentP} </div>&nbsp;|
                            Total Terjual :&nbsp;  <div className={styles.number}>{total_barangP} </div>&nbsp;|
                            &nbsp;Omset :&nbsp;<div className={styles.number}>{total_omsetP}</div>
                        </div>
                        <div className={styles.sukses}>
                            Data :&nbsp;  <div className={styles.number}>{dataTruePaymentS} </div>&nbsp;|
                            Total Terjual :&nbsp;  <div className={styles.number}>{total_barangS} </div>&nbsp;|
                            &nbsp;Omset :&nbsp;<div className={styles.number}>{total_omsetS}</div>
                        </div>
                    </div>
                    <div className={styles.pencarian}>
                        <input
                            type="text"
                            placeholder={'cari nota... (' + total_array + ' data)'}
                            onChange={(e) => handlePencarian(e)}
                            value={cariPesanan}
                        />
                        <IoFilterSharp size={30} onClick={() => setStatusFilter(!statusFilter)} />
                    </div>
                </div>
                {statusFilter && <div className={styles.filter} >
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('true')}>Sudah Bayar</div>
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('false')}>Belum Bayar</div>
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('sudah-diproses')}>Pesanan proses</div>
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('sudah-berhasil')}>Pesanan berhasil</div>
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('belum-diproses')}>Pesanan blm di proses</div>
                    <div className={styles.datafilter} onClick={() => HandleFilterPesanan('reset')}><GrPowerReset /></div>
                </div> || <div className={styles.statussekarang}>{statussekarang && 'Data'} {statussekarang}</div>}

                <div className={styles.judul}>
                    <div className={styles.tanggalinput}>Tanggal </div>
                    <div className={styles.proses}>Proses</div>
                    <div className={styles.selesai}>Berhasil</div>
                    <div className={styles.datapesanan}>Pesanan</div>
                </div>
                {datalistpesanan?.data?.length === 0 ? <span>Tidak Ada data?....</span> : null}
                {datalistpesanan?.data ? null : <SkletonPesanan />}
                {datalistpesanan?.data?.map((data) => {
                    const statusProses = data?.status_pesanan == "belum-diproses" && { color: 'red' } || data?.status_pesanan == "sudah-diproses" && { color: 'green' } || data?.status_pesanan == "sudah-berhasil" && { color: 'green' } || { color: 'red' }
                    const statusSelesai = data?.status_pesanan == "belum-diproses" && { color: 'red' } || data?.status_pesanan == "sudah-berhasil" && { color: 'green' } || { color: 'red' }
                    return (
                        <div key={data?.id} className={styles.content}>
                            <div className={styles.tanggalinput}>
                                {moment((data?.start).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })).format('ll')}&nbsp;| &nbsp;
                                {moment((data?.start).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })).format('LT')}
                            </div>
                            <div className={styles.proses} style={statusProses}><FaCheck /> &nbsp;Proses</div>
                            <div className={styles.selesai} style={statusSelesai}><FaCheck /> &nbsp;Selesai </div>
                            <div className={styles.datapesanan} >
                                <button
                                    onClick={() => HandlePesanan(data)}>
                                    <FaEdit style={{ marginRight: '5px' }} /> Pesanan
                                </button>
                            </div>
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
                {skip && <div className={styles.angka} >{skip?.split(0).join('')}</div>}
                <div onClick={() => { handlePlusNegatif(Number(skip) + 10) }}
                    style={total_array >= Number(skip) + Number(10) ? { display: 'block' } : { display: 'none' }}
                    className={styles.arrow}><FaArrowRight size={20} /></div>
            </div>
            <ToastContainer autoClose={2000} />
        </>
    )
}
