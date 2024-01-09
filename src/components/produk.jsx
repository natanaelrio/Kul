"use client"
import styles from '@/components/produk.module.css'
import Image from 'next/image'
import { IoShieldOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'

export default function Produk(props) {
    const data = props.data?.data
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const setdataLoveZ = useStoreDataFront((state) => state.setdataLoveZ)
    const setDeleteLoveZ = useStoreDataFront((state) => state.setDeleteLoveZ)
    const loveZ = useStoreDataFront((state) => state.loveZ)

    const setdataKeranjangZ = useStoreDataFront((state) => state.setdataKeranjangZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)


    const angka = useStore((state) => state.angka)
    const setTambahAngka = useStore((state) => state.setTambahAngka)
    const setKurangAngka = useStore((state) => state.setKurangAngka)


    const handleKeranjang = (e) => {
        setdataKeranjangZ([...keranjangZ, e])
    }

    const handleLove = (e) => {
        setdataLoveZ([...loveZ, e])
    }

    const handleDelete = (e) => {
        setDeleteLoveZ([...loveZ], e)
    }

    const harga = data.harga_barang.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    const diskonharga = (((data.harga_barang * data.diskon_barang) / 100) + data.harga_barang).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
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
                                    <div>
                                        <div className={styles.reviewharga}>
                                            <div className={styles.harga}>{harga}</div> &nbsp;|&nbsp; <div className={styles.kategori}>#{data?.kategori_barang}</div>
                                        </div>
                                        <div className={styles.diskon}>
                                            <div className={styles.angkadiskon}>{data?.diskon_barang}%</div>
                                            &nbsp;
                                            <div className={styles.hargadiskon}>{diskonharga}</div>
                                        </div>
                                    </div>

                                    {data.id == loveZ.filter((todo) => todo.id == data.id).map((data) => data.id).toString() ?
                                        <div className={styles.icon}
                                            style={{ background: 'var(--color-high)', borderRadius: '100%', color: 'var(--color-white)' }}
                                            onClick={() => handleDelete(data.id)}
                                        ><FaRegHeart />
                                        </div>
                                        :
                                        <div className={styles.icon}
                                            onClick={() => handleLove(data)}>
                                            <FaRegHeart />
                                        </div>
                                    }

                                </div>
                                <div className={styles.deskripsi}>{data?.diskripsi_barang}
                                </div>
                            </div>
                            <div>

                                <div className={styles.jumlah}>
                                    <div className={styles.kata}>Kuantitas</div>
                                    <div className={styles.button}>
                                        <button onClick={setKurangAngka} style={
                                            angka <= 1 ? { color: '#c2c2c2' } : null
                                        }>-</button>
                                        <div className={styles.angka}>{angka}</div>
                                        <button onClick={setTambahAngka}>+</button>
                                    </div>
                                </div>
                                <div className={styles.keranjang}>
                                    <button onClick={() => handleKeranjang(data)}>Tambahkan Keranjang</button>
                                </div>
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
        </>
    )
}
