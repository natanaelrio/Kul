"use client"
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '@/components/listProduk.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useEffect } from 'react';
import SkletonList from '@/components/skletonList'
import { FaRegHeart } from "react-icons/fa";

export default function ListProduk() {
    const datalist = useStoreListDataProduct((state) => state.datalist)
    const fetchdatalist = useStoreListDataProduct((state) => state.fetchdatalist)

    useEffect(() => {
        fetchdatalist()
    }, [fetchdatalist])

    const setDeleteLoveZ = useStoreDataFront((state) => state.setDeleteLoveZ)
    const loveZ = useStoreDataFront((state) => state.loveZ)
    const setdataLoveZ = useStoreDataFront((state) => state.setdataLoveZ)

    const HandlePushLove = (e) => {
        setdataLoveZ(e, e.harga_barang, true)
    }

    const HandleDeleteLove = (e) => {
        setTimeout(() => {
            setDeleteLoveZ(e.id), fetchdatalist()
        }, 500);
    }

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
                            const harga = data.harga_barang.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })
                            const diskonharga = (((data.harga_barang * data.diskon_barang) / 100) + data.harga_barang).toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })
                            return (
                                <div key={i} className={styles.produk}>

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
                                            {data.id == loveZ.filter((todo) => todo.id == data.id).map((data) => data.id).toString() ?
                                                <div className={styles.bgicon}
                                                    style={{ background: 'var(--color-high)', borderRadius: '100%' }}
                                                    onClick={() => HandleDeleteLove(data)}
                                                >
                                                    <FaRegHeart />
                                                </div>
                                                :
                                                <div className={styles.iconlogo} onClick={() => HandlePushLove(data)}>
                                                    <FaRegHeart className={styles.logo} />
                                                    <div className={styles.bgiconpush}></div>
                                                </div>
                                            }
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
                                                        <div className={styles.hargadalam}>{harga}</div>
                                                    </div>
                                                </div>
                                                <div className={styles.hargadiskon}>
                                                    {diskonharga}
                                                </div>
                                            </div>

                                            <div className={styles.ratingterjual}>
                                                <FaStar className={styles.logorating}></FaStar>&nbsp;{data?.rating_barang}
                                                <div className={styles.garis} > | </div>
                                                <div className="terjual">{data?.total_penjualan_barang} terjual</div>
                                            </div>
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
