"use client"
import styles from '@/components/produk.module.css'
import Image from 'next/image'
import { IoShieldOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useState } from 'react';

export default function Produk(props) {
    const data = props.data?.data
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const setdataLoveZ = useStoreDataFront((state) => state.setdataLoveZ)
    const setDeleteLoveZ = useStoreDataFront((state) => state.setDeleteLoveZ)
    const loveZ = useStoreDataFront((state) => state.loveZ)

    const setdataKeranjangZ = useStoreDataFront((state) => state.setdataKeranjangZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
    const setDeleteKeranjangZ = useStoreDataFront((state) => state.setDeleteKeranjangZ)
    const setdataKeranjangCountZ = useStoreDataFront((state) => state.setdataKeranjangCountZ)

    const jumlahBarang = data.jumlah_barang
    // Data OFF
    const [angka, setAngka] = useState(1)
    const handleAngkaKurang = () => {
        angka > 1 ? setAngka(angka - 1) : null
    }
    const handleAngkaTambah = () => {
        angka >= jumlahBarang ? null : setAngka(angka + 1)
    }

    // DATA LOVE
    const handleLove = (e) => {
        setdataLoveZ([...loveZ, e])
    }

    const handleDeleteLove = (e) => {
        setDeleteLoveZ([...loveZ], e)
    }

    // DATA KERANJANG
    const handleDataKeranjang = (e) => {
        const value = {
            value: Number(angka),
            harga_asli_barang: e.harga_barang,
            harga_barang: hargatotal
        }
        const gabungData = { ...e, ...value }
        setdataKeranjangZ([...keranjangZ, gabungData])
    }
    const handleDeleteKeranjang = (e) => {
        setDeleteKeranjangZ([...keranjangZ], e)
    }


    const handleCountKeranjang = (id, value) => {
        if (value > 0) {
            value > jumlahBarang ? null :
                setdataKeranjangCountZ(
                    keranjangZ.map((data) => data.id == id ?
                        {
                            ...data,
                            value: value,
                            harga_barang: data.harga_asli_barang * (data.value + 1)
                        }
                        : data)
                )
        }
    }

    const hargatotal = data.harga_barang * angka
    const harga = (hargatotal).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    const diskonharga = ((((hargatotal) * data.diskon_barang) / 100) + (hargatotal)).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })


    const hargaKeranjang = keranjangZ[0]?.harga_barang.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    const diskonhargaKeranjang = ((((keranjangZ[0]?.harga_barang) * data.diskon_barang) / 100) + (keranjangZ[0]?.harga_barang)).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    // LOVE
    const handleLovePlus = async () => {
        try { await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/update-love-products?id=${data.slug_barang}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                },
                body: JSON.stringify({
                    like_barang: data.like_barang ? data.like_barang + 1 : 1
                }),
                next: { revalidate: 0 }
            })
        }
        catch (e) { console.error(e); }
    }

    return (
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
                                            {keranjangZ.length === 1 ? hargaKeranjang : harga}

                                        </div> &nbsp;|&nbsp; <div className={styles.kategori}>#{data?.kategori_barang}</div>
                                    </div>
                                    <div className={styles.diskon}>
                                        <div className={styles.angkadiskon}>{data?.diskon_barang}%</div>
                                        &nbsp;
                                        <div className={styles.hargadiskon}>
                                            {keranjangZ.length === 1 ? diskonhargaKeranjang : diskonharga}
                                        </div>
                                    </div>
                                </div>

                                {data.id == loveZ.filter((todo) => todo.id == data.id).map((data) => data.id).toString() ?
                                    <button suppressHydrationWarning
                                        className={styles.lovebg}
                                        onClick={() => handleDeleteLove(data.id)}>
                                        <FaRegHeart />
                                    </button>
                                    :
                                    <button className={styles.icon}
                                        onClick={() => { handleLove(data), handleLovePlus() }}>
                                        <FaRegHeart />
                                    </button>
                                }

                            </div>
                            <div className={styles.deskripsi}>{data?.diskripsi_barang}
                            </div>
                        </div>

                        <div>
                            <div className={styles.jumlahbarang}>stok : {jumlahBarang}</div>
                            {keranjangZ.length === 1 ?
                                keranjangZ.map((data) => {
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
                                            style={angka <= 1 ? { color: '#c2c2c2' } : null
                                            }>-</button>
                                        <div className={styles.angka}>{angka}</div>
                                        <button
                                            style={angka >= jumlahBarang ? { color: '#c2c2c2' } : null}
                                            onClick={() => handleAngkaTambah()}>+</button>
                                    </div>
                                </div>
                            }

                            {data.id && keranjangZ.filter((e) => e.id == data.id).map((e) => e.id).toString() ?
                                <div className={styles.keranjang}>
                                    <button style={{ background: 'var(--color-high' }}
                                        onClick={() => { handleDeleteKeranjang(data.id), setAngka(1) }
                                        }>Hapus Keranjang</button>
                                </div> :
                                <div className={styles.keranjang}>
                                    <button onClick={() => handleDataKeranjang(data)}>Tambahkan Keranjang</button>
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
    )
}
