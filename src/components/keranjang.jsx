'use client'
import styles from '@/components/keranjang.module.css'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { LuShoppingCart } from "react-icons/lu";
import { useKeranjangCount } from '@/utils/user-front/keranjangCountZ'
import KeranjangTotal from '@/components/keranjangtotal';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton'
import { IoMdArrowRoundBack } from "react-icons/io";
import CustomBack from '@/lib/customBack';
import FormPembelian from '@/components/formPembelian';

export default function Keranjang() {
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const openFormPembelian = useStore((state) => state.openFormPembelian)
    const setdataKeranjangCountZ = useStoreDataFront((state) => state.setdataKeranjangCountZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
    const setDeleteKeranjangZ = useStoreDataFront((state) => state.setDeleteKeranjangZ)
    const resetValueKeranjang = useKeranjangCount((state) => state.resetValueKeranjang)

    const totalBarang = keranjangZ.map((data) => (data.harga_total_barang - ((data.harga_total_barang * data.diskon_barang) / 100))).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });

    const handleCountKeranjang = (data, kondisi) => {
        const id = data.id
        const value = kondisi ? data.value + 1 : data.value - 1
        const jumlahBarang = data.jumlah_barang
        if (value > 0) {
            value > jumlahBarang ? null :
                setdataKeranjangCountZ(id, value)
        }
    }

    const handleKeranjangdanResetValue = (e) => {
        setDeleteKeranjangZ(e), resetValueKeranjang()
    }


    const dataFormKeranjang = keranjangZ.map((data) => (
        {
            id: data.id,
            nama_barang: data.nama_barang,
            harga_barang: data.harga_barang,
            diskon_barang: data.diskon_barang,
            kupon_barang: data.kupon_barang,
            value_barang: data.value,
        }))


    return (
        <>
            <div className={styles.containeratasatas}>
                <div className={styles.containeratas}>
                    {keranjangZ && keranjangZ.length == 0 ? <div className={styles.notfound}>
                        <div className={styles.belum}>
                            Belum Ada Pilihan &nbsp;<LuShoppingCart />
                        </div>
                        <CustomBack >
                            <div className={styles.kembali}>Kembali Beranda</div>
                        </CustomBack >
                    </div>

                        : <>
                            <div className={styles.total}>
                                <div className={styles.harga}>
                                    <div className={styles.totalpembayaran}>
                                        <Suspense fallback={<Skeleton width={150} height={30} />} >
                                            <KeranjangTotal
                                                totalBarang={totalBarang}
                                            />
                                        </Suspense>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.bayarlangsung} onClick={setOpenFormPembelian}>Bayar Langsung</div>
                                </div>
                            </div>
                            <div className={styles.judulatas}>
                                <div className={styles.judulnya}>
                                    Daftar Keranjang
                                </div>
                                <CustomBack>
                                    <div className={styles.backnya}>
                                        <IoMdArrowRoundBack size={30} />
                                    </div>
                                </CustomBack>
                            </div>
                            <div className={styles.container}>
                                {keranjangZ.map((data, i) => {
                                    const diskonharga = data.harga_total_barang.toLocaleString('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR'
                                    })
                                    const harga = (data.harga_total_barang - (((((data.harga_total_barang * data.diskon_barang) / 100) + data.harga_total_barang)) - data.harga_total_barang)).toLocaleString('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR'
                                    })
                                    return (
                                        <div key={i} className={styles.list}>
                                            <div className={styles.detailluar}>
                                                <div className={styles.gambar}>
                                                    <Image src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                                        width={150}
                                                        height={100}
                                                        alt={data?.nama_barang} />
                                                </div>
                                                <div className={styles.detail}>
                                                    <div>
                                                        <div className={styles.judul}>{data.nama_barang}</div>
                                                        <div className={styles.harga}>
                                                            <div className={styles.hargadalam}>{harga}&nbsp;</div>
                                                            <div className={styles.hargadiskon}>{diskonharga}</div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.jumlahbarang}>
                                                        <div className={styles.tambahkurang}>
                                                            <button className={styles.kurang}
                                                                style={data.value <= 1 ? { color: '#c2c2c2' } : null}
                                                                onClick={() => { handleCountKeranjang(data, false) }}>-</button>
                                                            <button className={styles.nilai}>{data.value}</button>
                                                            <button className={styles.tambah}
                                                                style={data.value >= data.jumlah_barang ? { color: '#c2c2c2' } : null}
                                                                onClick={() => { handleCountKeranjang(data, true) }}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.delete} >
                                                <MdDelete style={{ cursor: 'pointer' }} onClick={() => handleKeranjangdanResetValue(data.id)} />
                                            </div>
                                            <div className={styles.stokbarang}>{data.value >= data.jumlah_barang ? <span>max: {data.jumlah_barang}</span> : data.value <= 1 && <span>min: 1</span>}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </>}
                </div>
            </div>
            {openFormPembelian &&
                <FormPembelian dataFormLangsung={dataFormKeranjang} />}
        </>
    )
}