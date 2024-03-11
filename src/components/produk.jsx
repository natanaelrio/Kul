"use client"
import styles from '@/components/produk.module.css'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { IoShieldOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useKeranjangCount } from '@/utils/user-front/keranjangCountZ'
import FormPembelian from '@/components/formPembelian';
import ProdukHarga from '@/components/produkHarga';
import PaymentErrorPending from '@/components/paymenterrorpending';

export default function Produk(props) {
    const data = props.data?.data

    const searchParams = useSearchParams()
    const transaction_status = searchParams.get('transaction_status')

    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const openFormPembelian = useStore((state) => state.openFormPembelian)
    const openFormPending = useStore((state) => state.openFormPending)

    const setdataLoveZ = useStoreDataFront((state) => state.setdataLoveZ)
    const setDeleteLoveZ = useStoreDataFront((state) => state.setDeleteLoveZ)
    const loveZ = useStoreDataFront((state) => state.loveZ)

    const setdataKeranjangZ = useStoreDataFront((state) => state.setdataKeranjangZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
    const setDeleteKeranjangZ = useStoreDataFront((state) => state.setDeleteKeranjangZ)
    const setdataKeranjangCountZ = useStoreDataFront((state) => state.setdataKeranjangCountZ)

    const ValueKeranjang = useKeranjangCount((state) => state.ValueKeranjang)
    const setKurangValueKeranjang = useKeranjangCount((state) => state.setKurangValueKeranjang)
    const setTambahValueKeranjang = useKeranjangCount((state) => state.setTambahValueKeranjang)
    const resetValueKeranjang = useKeranjangCount((state) => state.resetValueKeranjang)

    const jumlahBarang = data.jumlah_barang

    // MATCH SERVER DAN CLIENT
    const [love, setLove] = useState([])
    const [keranjang, setKeranjang] = useState([])

    useEffect(() => {
        setLove(loveZ)
        setKeranjang(keranjangZ)
    }, [loveZ, keranjangZ])


    // Data OFF
    const handleAngkaKurang = () => {
        ValueKeranjang > 1 ? setKurangValueKeranjang() : null
    }
    const handleAngkaTambah = () => {
        ValueKeranjang >= jumlahBarang ? null : setTambahValueKeranjang(jumlahBarang)
    }

    const handleKeranjangdanResetValue = (e) => {
        setDeleteKeranjangZ(e), resetValueKeranjang()
    }


    const handleCountKeranjang = (id, value) => {
        if (value > 0) {
            value > jumlahBarang ? null :
                setdataKeranjangCountZ(id, value)
        }
    }

    // Data OFF
    const hargatotal = data.harga_barang * ValueKeranjang
    const hargadiskon = ((((hargatotal * data.diskon_barang) / 100) + hargatotal)) - hargatotal
    const harga = (hargatotal - hargadiskon).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    const diskonharga = (hargatotal).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    // DATA KERANJANG
    const diskonhargaKeranjang = keranjangZ[0]?.harga_total_barang.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    const hargadiskonKeranjang = (((((keranjangZ[0]?.harga_total_barang) * data.diskon_barang) / 100) + (keranjangZ[0]?.harga_total_barang)) - (keranjangZ[0]?.harga_total_barang))
    const hargaKeranjang = (keranjangZ[0]?.harga_total_barang - hargadiskonKeranjang).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })


    //DATA FORM 
    const dataFormLangsung =
        [{
            id: data?.id,
            nama_barang: data?.nama_barang,
            harga_barang: data?.harga_barang,
            diskon_barang: data?.diskon_barang,
            kupon_barang: data?.kupon_barang,
            value_barang: ValueKeranjang
        }]


    return (
        <>
            <div className={styles.container}>
                <div className={styles.width}>

                    <div className={styles.grid}>
                        <div className={styles.reviewproduk}>
                            <div className={styles.containerreview}>
                                <div className={styles.judul}>{data?.nama_barang}</div>
                                <div className={styles.terjual}>Terjual {data?.total_penjualan_barang} • <FaStar size={12} />{data?.rating_barang}</div>

                                <div className={styles.section}>
                                    <div className={styles.wkwk}>
                                        <div className={styles.reviewharga}>
                                            <div className={styles.harga}>
                                                <Suspense fallback={<Skeleton width={200} />}>
                                                    <ProdukHarga
                                                        keranjang={keranjang}
                                                        hargaKeranjang={hargaKeranjang}
                                                        harga={harga}
                                                    />
                                                </Suspense>
                                            </div> &nbsp;|&nbsp; <div className={styles.kategori}>#{data?.kategori_barang}</div>
                                        </div>
                                        <div className={styles.diskon}>
                                            <div className={styles.angkadiskon}>{data?.diskon_barang}%</div>
                                            &nbsp;
                                            <div className={styles.hargadiskon}>
                                                {keranjang?.length === 1 ? diskonhargaKeranjang : diskonharga}
                                            </div>
                                        </div>
                                    </div>

                                    {data.id == love?.filter((todo) => todo.id == data.id).map((data) => data.id).toString() ?
                                        <button
                                            className={styles.lovebg}
                                            onClick={() => setDeleteLoveZ(data.id)}
                                            aria-label={'logoheart'}
                                        >
                                            <FaRegHeart />
                                        </button>
                                        :
                                        <button className={styles.icon}
                                            onClick={() => setdataLoveZ(data, data.harga_barang, false)}
                                            aria-label={'logoheart'}
                                        >
                                            <FaRegHeart />
                                        </button>
                                    }

                                </div>
                                <div className={styles.deskripsi} dangerouslySetInnerHTML={{ __html: data?.diskripsi_barang }}>
                                </div>
                            </div>

                            <div className={styles.bawahaksi}>
                                <div className={styles.jumlahbarang}>stok : {jumlahBarang}</div>
                                {keranjang?.length === 1 ?
                                    keranjang?.map((data) => {
                                        return (
                                            <div key={data.id} className={styles.jumlah}>
                                                <div className={styles.kata}>Kuantitas</div>
                                                <div className={styles.button}>
                                                    <button onClick={() => { handleCountKeranjang(data.id, data.value - 1) }}
                                                        style={data.value <= 1 ? { color: '#c2c2c2' } : null}>-</button>
                                                    <div className={styles.angka}>{data.value}</div>
                                                    <button
                                                        style={data.value >= jumlahBarang ? { color: '#c2c2c2' } : null}
                                                        onClick={() => { handleCountKeranjang(data.id, data.value + 1) }}>+</button>
                                                </div>
                                            </div>)
                                    })
                                    :
                                    <div className={styles.jumlah}>
                                        <div className={styles.kata}>Kuantitas</div>
                                        <div className={styles.button}>
                                            <button onClick={() => handleAngkaKurang()}
                                                style={ValueKeranjang <= 1 ? { color: '#c2c2c2' } : null
                                                }>-</button>
                                            <div className={styles.angka}>{ValueKeranjang}</div>
                                            <button
                                                style={ValueKeranjang >= jumlahBarang ? { color: '#c2c2c2' } : null}
                                                onClick={() => handleAngkaTambah()}>+</button>
                                        </div>
                                    </div>
                                }

                                {data.id && keranjang?.filter((e) => e.id == data.id).map((e) => e.id).toString() ?
                                    <div className={styles.keranjang}>
                                        <button style={{ background: 'var(--color-high' }}
                                            onClick={() => handleKeranjangdanResetValue(data.id)
                                            }>Hapus Keranjang</button>
                                    </div> :
                                    <div className={styles.keranjang}>
                                        <button onClick={() => setdataKeranjangZ(data, hargatotal, ValueKeranjang)}>Tambahkan Keranjang</button>
                                    </div>
                                }
                                <div className={styles.belisekarang}>
                                    <button onClick={setOpenFormPembelian}>Beli Sekarang</button>
                                </div>
                                <div className={styles.garansi}> <IoShieldOutline /> &nbsp;30 day return guarantee</div>
                            </div>
                        </div>
                        <div className={styles.gambar}>
                            <div className={styles.gambardalam}>
                                <Image
                                    src={data?.gambar_barang ? data?.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                    width={500}
                                    height={500}
                                    alt={data?.nama_barang}
                                />
                                <div className={styles.gratisongkir}>
                                    Gratis Ongkir
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
            {transaction_status == 'pending' && !openFormPending && <PaymentErrorPending />}
            {openFormPembelian && <FormPembelian dataFormLangsung={dataFormLangsung} />}
        </>
    )
}
