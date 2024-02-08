"use client"
import styles from '@/components/admin/list.module.css'
import { GoEye } from "react-icons/go";
import { MdOutlinePostAdd } from "react-icons/md";
import CustomLink from '@/lib/customLink'
import SkeletonPage from '@/components/admin/skeleton';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useStore } from '@/lib/zustand'
import { useStoreCRUDadmin } from '@/utils/admin/admin/crudDataAdmin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useDebounce } from "@uidotdev/usehooks";

export default function List() {
    const setOpen = useStore((state) => state.setOpenDetailProdukAdmin)
    const valueDelete = useStore((state) => state.valueDelete)
    const setValueDelete = useStore((state) => state.setValueDelete)

    const setDataListProduct = useStoreCRUDadmin((state) => state.setDataListProduct)
    const fetchDataAdminProduk = useStoreCRUDadmin((state) => state.fetchDataAdminProduk)
    const dataAdminProduk = useStoreCRUDadmin((state) => state.dataAdminProduk)

    useEffect(() => {
        fetchDataAdminProduk()
    }, [fetchDataAdminProduk])

    const HandleDetail = (e) => {
        setDataListProduct(e)
        setOpen()
    }

    // VALIDASI ERROR DAN BERHASIL
    const Berhasil = () => {
        toast.success('Berhasil di hapus', {
            draggablePercent: 60
        },
            setValueDelete([]))
    }

    const Gagal = () => {
        toast.error("Gagal di hapus", {
            draggablePercent: 60,
        },
            setValueDelete([]))
    }
    valueDelete.status === undefined || valueDelete.status == 200 && Berhasil() || valueDelete.status == 500 && Gagal()


    // PENCARIAN
    const [valueCari, setValueCari] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handlePencarian = (e) => {
        setValueCari(e.target.value)
    }
    const debouncedSearchTerm = useDebounce(valueCari, 300);
    useEffect(() => {
        const searchHN = async () => {
            setIsLoading(true)
            if (debouncedSearchTerm) {
                fetchDataAdminProduk(valueCari)
            }
            setIsLoading(false)
        }
        searchHN()
        // valueCari == '' && fetchDataAdminProduk()
    }, [debouncedSearchTerm, valueCari]);

    return (
        <>
            <div className={styles.pencarian}>
                <div className={styles.total}>
                    Data : <span className={styles.nomer}>{dataAdminProduk.total_length}</span> &nbsp;|&nbsp;Terjual:<span className={styles.nomer}>{dataAdminProduk.total_terjual}</span> &nbsp;|&nbsp; View :<span className={styles.nomer}>{dataAdminProduk.total_view}</span>
                </div>
                <input
                    type="text"
                    placeholder='cari product...'
                    onChange={(e) => handlePencarian(e)}
                    value={valueCari}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.list}>
                    <div className={styles.bungkusproduk}>
                        <div className={styles.produk} style={{ fontWeight: '700', color: 'var(--color-white)' }}>
                            <div className={styles.namaproduk}>
                                NAMA
                            </div>
                            <div className={styles.terjual}>
                                Terjual
                            </div>
                            <div className={styles.viewbarang}>
                                VIEW
                            </div>
                        </div>
                    </div>

                    {dataAdminProduk?.data ? null : <SkeletonPage />}
                    {isLoading && <SkeletonPage />}
                    {dataAdminProduk?.data?.length == 0 && <span> Tidak Ada Data.... !!</span>}
                    {dataAdminProduk?.data?.map((data, i) =>
                    (<div key={i} className={styles.bungkusproduk} onClick={() => {
                        HandleDetail(data)
                    }}>
                        <div className={styles.produk}>
                            <div className={styles.namaproduk} style={{ fontWeight: '500' }} >
                                {data?.nama_barang}
                            </div>
                            <div className={styles.terjual}>
                                {data?.total_penjualan_barang}
                            </div>
                            <div className={styles.viewbarang}>
                                <div className={styles.dalamview}> <GoEye />  {data.view_barang}</div>
                            </div>
                            <div className={styles.arrow}>
                                <FaArrowRightFromBracket />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <CustomLink href={'/admin/post'} >
                    <div className={styles.post}>
                        <MdOutlinePostAdd />
                    </div>
                </CustomLink>
            </div >
            <ToastContainer limit={1} autoClose={3000} />
        </>
    )
}
