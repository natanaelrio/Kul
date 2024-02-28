"use client"
import styles from '@/components/admin/layout/header.module.css'
import CustomLink from '@/lib/customLink'
import { useRouter } from 'next/navigation'
import { useStore } from '@/lib/zustand'
import { useStoreCRUDadmin } from '@/utils/admin/admin/crudDataAdmin'

import { FaMessage } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { IoListCircle } from "react-icons/io5";

import { IoHome } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { IoArrowBack } from "react-icons/io5";
import DataPesanan from '@/components/admin/dataPesanan';
import DetailList from '@/components/admin/detailList';
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react'

export default function Header({ children, judul }) {
    const router = useRouter()
    const openDetailDataPesanan = useStore((state) => state.openDetailDataPesanan)
    const dataPesanan = useStoreCRUDadmin((state) => state.dataPesanan)
    const take = useStoreCRUDadmin((state) => state.take)
    const skip = useStoreCRUDadmin((state) => state.skip)
    const cariPesanan = useStoreCRUDadmin((state) => state.cariPesanan)
    const dataListProduct = useStoreCRUDadmin((state) => state.dataListProduct)
    const openDetailProdukAdmin = useStore((state) => state.openDetailProdukAdmin)

    const { status, data: session } = useSession()
    useEffect(() => {
        if (status == 'unauthenticated') router.replace('/admin')
    }, [status])

    if (status == 'authenticated')
        return (
            <>
                <div className={styles.luarkontainer}>
                    {openDetailDataPesanan && <DataPesanan 
                    data={dataPesanan} 
                    take={take} 
                    skip={skip}
                    cariPesanan={cariPesanan} />}
                    {openDetailProdukAdmin && <DetailList data={dataListProduct} />}

                    <div className={styles.container}>
                        <div className={styles.iconjudul}>
                            <CustomLink href={'/'} className={styles.icon}>
                                <IoHome />
                            </CustomLink>&nbsp;
                            <div className={styles.judul}>{judul}</div>
                        </div>
                        <div className={styles.sideatas}>
                            <CustomLink href={'/admin/pesanan'} >
                                <FaMessage size={20} className={styles.icon} />
                            </CustomLink>&nbsp;
                            <CustomLink href={'/admin/list'}>
                                <IoListCircle className={styles.icon} />
                            </CustomLink>&nbsp;
                            <CustomLink href={'/admin/post'} >
                                <IoIosAddCircle className={styles.icon} />
                            </CustomLink>&nbsp;
                            <div onClick={() => router.back()} >
                                <IoArrowBack className={styles.icon} />
                            </div>
                            <div className={styles.logout} onClick={() => signOut()} >
                                LOG OUT
                            </div>
                        </div>

                        <div className={styles.sidebar}>
                            <div className={styles.dalamsidebar}>
                                <CustomLink href={'/admin/pesanan'}  >
                                    <div className={styles.iconsidebar}>
                                        <FaMessage />&nbsp; Daftar Laporan
                                    </div>
                                </CustomLink>
                                <CustomLink href={'/admin/list'}>
                                    <div className={styles.iconsidebar}>
                                        <FaListAlt />&nbsp; Daftar Produk
                                    </div>
                                </CustomLink>
                                <CustomLink href={'/admin/post'} >
                                    <div className={styles.iconsidebar}>
                                        <SiAddthis style={{ marginRight: '5px' }} /> &nbsp;Posting Produk
                                    </div>
                                </CustomLink>
                                <div onClick={() => router.back()} >
                                    <div className={styles.iconsidebar}>
                                        <IoArrowBack style={{ marginRight: '5px' }} /> &nbsp;Kembali
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            {children}
                        </div>

                    </div>
                </div>
            </>
        )
    if (status == 'loading')
        return <div className={styles.loading}>
            <div className={styles.dalamloading}>
                Loading....
            </div>
        </div>

    return <div className={styles.loading}>
        <div className={styles.dalamloading}>
            Loading....
        </div>
    </div>

    // return <p>Access Denied</p>
}
