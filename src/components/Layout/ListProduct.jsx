"use client"
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react';
import styles from '@/components/Layout/ListProduct.module.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdDiscount } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import SkletonList from '@/components/skletonList'
import CustomLink from '@/lib/customLink'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import ListProductsearchFilter from '@/components/listProductsearchFilter'

export default function ListProduk({ data, judul, fetchMain, fetchSearch, query, sortby, lengthdata, kondisiProduk }) {
    const fetchdatalist = useStoreListDataProduct((state) => state.fetchdatalist)
    const fetchdatasearchfilter = useStoreListDataProduct((state) => state.fetchdatasearchfilter)

    const setDeleteLoveZ = useStoreDataFront((state) => state.setDeleteLoveZ)
    const loveZ = useStoreDataFront((state) => state.loveZ)
    const setdataLoveZ = useStoreDataFront((state) => state.setdataLoveZ)

    const HandlePushLove = async (e, catatan) => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-warna-produk?id=${e.id_namabarang}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            },
            next: { revalidate: 0 }
        })

        const data = await res.json()

        const dataEditKeranjang = {
            dataID: {
                detail_deskripsi_barang: e?.detail_deskripsi_barang,
                diskon_barang: e?.diskon_barang,
                gambar_barang: e?.gambar_barang,
                harga_barang: e?.harga_barang,
                id: e?.id,
                jumlah_barang: e?.jumlah_barang,
                kondisi_diskon_barang: e?.kondisi_diskon_barang,
                nama_barang: e?.nama_barang,
                warna_barang: e?.warna_barang
            },
            dataid: e?.id,
            warna: data?.data
        }
        setdataLoveZ(e, e.harga_barang, true, catatan, dataEditKeranjang)
    }

    const HandleDeleteLove = (e) => {
        setTimeout(() => {
            setDeleteLoveZ(e.id), fetchMain && fetchdatalist() || fetchSearch && fetchdatasearchfilter(query)
        }, 500);
    }

    const HighlightText = (e) => {
        const cek = new RegExp(query, 'gi')
        return e.replace(cek, match => `<span style='font-weight:700'>${match}</span>`)
    }

    const handleOnTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const [isLoading, setIsLoading] = useState(false)
    const handleFetchPagination = () => {
        data?.length != data?.length + 1 && setIsLoading(true)
        fetchSearch && fetchdatasearchfilter(query, sortby, data?.length + 4) || fetchMain && fetchdatalist(sortby, data?.length + 4)
    }

    useEffect(() => {
        data?.length == data?.length + 4 == setIsLoading(false)
    }, [data?.length])

    return (
        <>
            {data && <div className={styles.countainer}>
                <div className={styles.countaineratas}>
                    <div className={styles.judulatas} style={fetchSearch ? { fontSize: '0.7rem', fontWeight: '500' } : {}} dangerouslySetInnerHTML={{ __html: judul }}>
                    </div>
                    <div>
                        {kondisiProduk &&
                            <Suspense fallback={<span style={{ fontSize: '0.6rem' }}>Loading....</span>}>
                                <ListProductsearchFilter
                                    query={query}
                                    sortby={sortby}
                                    fetchMain={fetchMain}
                                    fetchSearch={fetchSearch}
                                />
                            </Suspense>
                        }
                    </div>
                </div>
            </div>}
            {data ? null : <SkletonList />}
            <div className={styles.countainer}>
                <div className={styles.listproduk}>
                    <div className={styles.gridlist}>
                        {data?.map((data, i) => {
                            const dataListDefault = data.detail_deskripsi_barang.kategori.map((dataq) => {
                                return (
                                    data.detail_deskripsi_barang.typeKategori.filter((dataku) => dataku.kategori == dataq).map((data) => data)[0]
                                )
                            }
                            )
                            const gabungCatatan = dataListDefault.map((data) => data.typeKategori).toString()
                            const catatan = `${data?.warna_barang ? data?.warna_barang : ''}` + ',' + gabungCatatan
                            const diskonharga = data.harga_barang.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })
                            const harga = (data.harga_barang - (((((data.harga_barang * (data.kondisi_diskon_barang && data.diskon_barang)) / 100) + data.harga_barang)) - data.harga_barang)).toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })
                            return (
                                <div key={i} className={styles.produk}>
                                    <div className={styles.gambar}>
                                        <CustomLink href={`/products/${data?.slug_barang}`} >
                                            <Image
                                                src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                                width={200}
                                                height={200}
                                                alt={data?.nama_barang}
                                            />
                                        </CustomLink>
                                        {data.kondisi_diskon_barang && <div className={styles.diskon}> <MdDiscount />{data?.diskon_barang}%</div>}
                                        <div className={styles.love}>
                                            {data.id == loveZ.filter((todo) => todo.id == data.id).map((data) => data.id).toString() ?
                                                <div className={styles.bgicon}
                                                    style={{ background: 'var(--color-high)', borderRadius: '100%' }}
                                                    onClick={() => HandleDeleteLove(data)}
                                                    aria-label={'logoheart'}
                                                >
                                                    <FaRegHeart />
                                                </div>
                                                :
                                                <div className={styles.iconlogo}
                                                    onClick={() => HandlePushLove(data, catatan)}
                                                    aria-label={'logoheart'}
                                                >
                                                    <FaRegHeart className={styles.logo} />
                                                    <div className={styles.bgiconpush}></div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <CustomLink href={`/products/${data?.slug_barang}`} title={data?.nama_barang}>
                                        <div className={styles.tengah}>
                                            <div className={styles.judul}
                                                dangerouslySetInnerHTML={{ __html: HighlightText(data?.nama_barang) }}
                                            >
                                            </div>
                                            <div className={styles.harga}>
                                                <div className={styles.hargaasli}>
                                                    <div className={styles.hargaaslidalam}>
                                                        <div className={styles.hargadalam}>{harga}</div>
                                                    </div>
                                                </div>
                                                {data.kondisi_diskon_barang && <div className={styles.hargadiskon}>
                                                    {diskonharga}
                                                </div>}

                                            </div>

                                            <div className={styles.ratingterjual}>
                                                <FaStar className={styles.logorating}></FaStar>&nbsp;{data?.rating_barang}
                                                <div className={styles.garis} > | </div>
                                                <div className="terjual">{data?.total_penjualan_barang} terjual</div>
                                            </div>
                                        </div>
                                    </CustomLink>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


            <div className={styles.countainer} style={{ marginTop: '-20px' }}>
                <div className={styles.luarpagination}>
                    <div className={styles.garispagination}></div>
                    <div className={styles.pagination} onClick={() => lengthdata <= data?.length ? handleOnTop() : handleFetchPagination()}>
                        {lengthdata <= data?.length ? !isLoading && 'Data Habis' : !isLoading && ` Load More `} &nbsp;  {lengthdata <= data?.length ? <IoIosArrowUp /> : !isLoading && <IoIosArrowDown />}
                        {isLoading && <div className="loading">Loading...😁</div>}
                    </div>
                </div>
            </div>
        </>
    )
}
