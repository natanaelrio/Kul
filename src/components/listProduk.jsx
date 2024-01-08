"use client"
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '@/components/listProduk.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { useStoreDataFront } from '@/utils/user-front/zustand'
import { useEffect, useState } from 'react';
import SkletonList from '@/components/skletonList'
import { FaRegHeart } from "react-icons/fa";

export default function ListProduk() {
    const datalist = useStoreDataFront((state) => state.datalist)
    const fetchdatalist = useStoreDataFront((state) => state.fetchdatalist)

    useEffect(() => {
        fetchdatalist()
    }, [fetchdatalist])


    const loveZ = useStoreDataFront((state) => state.loveZ)
    const setdataLoveZ = useStoreDataFront((state) => state.setdataLoveZ)
    const [dataLove, setDataLove] = useState([])

    const handleLove = (e) => {
        setDataLove([...dataLove, e])
        setdataLoveZ([...dataLove, e])
    }

    // console.log(loveZ);

    return (
        <>
            <div className={styles.countainer}>
                <div className={styles.judulatas}>
                    Produk Terbaru
                </div>
            </div>

            <div className={styles.countainer}>
                <div className={styles.listproduk}>
                    <div className={styles.gridlist}>
                        {datalist.data ? null : <SkletonList />}
                        {datalist.data?.map((data, i) => {
                            return (
                                <div key={i} className={styles.produk}>
                                    <div href={`/products/${data?.slug_barang}`} >
                                        <div className={styles.gambar}>
                                            <Link href={`/products/${data?.slug_barang}`} >
                                                <Image
                                                    src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                                    width={500}
                                                    height={500}
                                                    alt={data?.nama_barang}
                                                />
                                            </Link>
                                            <div className={styles.diskon}> <MdDiscount />{data?.diskon_barang}%</div>
                                            <div className={styles.love}>
                                                <div className={styles.icon} onClick={() => { handleLove(data) }}>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                        </div>
                                        <Link href={`/products/${data?.slug_barang}`} title={data?.nama_barang}>
                                            <div className={styles.tengah}>
                                                <div className={styles.judul}>
                                                    {data?.nama_barang}
                                                </div>
                                                <div className={styles.harga}>
                                                    <div className={styles.hargaasli}>
                                                        <div className={styles.hargaaslidalam}>
                                                            <div className={styles.rp}>Rp</div>
                                                            <div className={styles.hargadalam}>{data?.harga_barang}</div>
                                                        </div>
                                                    </div> &nbsp;
                                                    <div className={styles.hargadiskon}>
                                                        Rp{((data?.harga_barang * data?.diskon_barang) / 100) + data?.harga_barang}</div>
                                                </div>

                                                <div className={styles.ratingterjual}>
                                                    <FaStar className={styles.logorating}></FaStar>&nbsp;{data?.rating_barang}
                                                    <div className={styles.garis} > | </div>
                                                    <div className="terjual">{data?.total_penjualan_barang} terjual</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <Link href="/" className={styles.beli}>
                                        <div className={styles.iconwa}>
                                            <FaWhatsapp className={styles.iconwadalam} />
                                        </div>
                                        <div className={styles.text}>
                                            &nbsp;Beli via Whatapps
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>


            <div className={styles.countainer} style={{ marginTop: '-20px' }}>
                <div className={styles.pagination}>
                    Load More
                </div>
            </div>
        </>
    )
}
