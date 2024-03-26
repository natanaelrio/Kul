"use client"
import styles from '@/components/produk.module.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { IoShieldOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useKeranjangCount } from '@/utils/user-front/keranjangCountZ'
import PaymentErrorPending from '@/components/paymenterrorpending';
import FormPilihan from '@/components/Layout/formPilihan';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, FreeMode } from 'swiper/modules';
import useWindowDimensions from '@/lib/getWindowDimension'
import { motion } from "framer-motion"

export default function Produk(props) {
    const data = props.data?.data
    const warna = props?.warnaID?.data

    const dataFrom = {
        detail_deskripsi_barang: data?.detail_deskripsi_barang,
        nama_barang: data?.nama_barang,
        gambar_barang: data?.gambar_barang,
        warna_barang: data?.warna_barang,
        harga_barang: data?.harga_barang,
        diskon_barang: data?.diskon_barang,
        kondisi_diskon_barang: data?.kondisi_diskon_barang,
        id: data.id,
        jumlah_barang: data.jumlah_barang
    }


    const dataEditKeranjang = {
        dataID: dataFrom,
        dataid: data.id,
        warna: warna
    }

    const router = useRouter()

    const searchParams = useSearchParams()
    const transaction_status = searchParams.get('transaction_status')
    const varianID = searchParams.get('varianID')

    const openFormPilihan = useStore((state) => state.openFormPilihan)
    const setOpenFormPilihan = useStore((state) => state.setOpenFormPilihan)

    const openFormKeranjang = useStore((state) => state.openFormKeranjang)
    const setOpenFormKeranjang = useStore((state) => state.setOpenFormKeranjang)

    const openFormPending = useStore((state) => state.openFormPending)
    const setOpenIsScrollPast = useStore((state) => state.setOpenIsScrollPast)

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

    // MATCH SERVER DAN CLIENT
    const [love, setLove] = useState([])
    const [keranjang, setKeranjang] = useState([])

    useEffect(() => {
        setLove(loveZ)
        setKeranjang(keranjangZ)
    }, [loveZ, keranjangZ])


    //VIEWMORE
    const [viewMore, setViewMore] = useState(false)
    const handleViewMoreDeskripsi = () => {
        setViewMore(!viewMore)
    }


    //DETAIL LAINNYA
    const ListKategori = data?.detail_deskripsi_barang?.kategori
    const TypeKategori = data?.detail_deskripsi_barang?.typeKategori

    const ListKategoriSemuanya = ListKategori?.map((dataKategori) => {
        return (
            {
                kategori: dataKategori,
                typeKategori: TypeKategori.filter((data) => data.kategori == dataKategori)
            }
        )
    })


    const dataAwalDefault = varianID ? TypeKategori.filter((data) => data.uid == varianID) : ListKategoriSemuanya.map((data) => data.typeKategori).map((data) => data[0])

    const defaultSelectOption = varianID ? ListKategoriSemuanya.map((data) => data.typeKategori)[0].filter((data) => data.uid == varianID)[0]?.typeKategori ? ListKategoriSemuanya.map((data) => data.typeKategori)[0].filter((data) => data.uid == varianID)[0]?.typeKategori : ListKategoriSemuanya[0]?.typeKategori[0]?.typeKategori :
        ListKategoriSemuanya[0]?.typeKategori[0]?.typeKategori

    const [valueDefault, setValueDefault] = useState(dataAwalDefault)
    const [selectedOption, setSelectedOption] = useState(defaultSelectOption);
    const [gabungValueKategori, setGabungValueKategori] = useState([])

    const handleChangeSelect = (event, dataku) => {
        setSelectedOption(event.target.value);
        resetValueKeranjang()
        setDeleteKeranjangZ(data?.id)
        const cek = dataku.typeKategori.filter((data) => data.typeKategori == event.target.value)[0]
        setValueDefault([...valueDefault, cek])

        const uid = dataku.typeKategori.filter((data) => data.typeKategori == event.target.value)[0].uid
        router.push(`${process.env.NEXT_PUBLIC_URL}/products/${data?.slug_barang}/?varianID=${uid}`)
    }

    useEffect(() => {
        setGabungValueKategori([...new Set([...gabungValueKategori, valueDefault])])
    }, [valueDefault, setGabungValueKategori, gabungValueKategori])


    const dataListKategoriType = ListKategori.map((data) => {
        return (
            gabungValueKategori.slice(-1)[0]?.filter((dataku) => dataku.kategori == data).slice(-1)[0]
        )
    }
    )

    const GabungDataKategoriType = dataListKategoriType.map((data) => {
        return ({ nama: data?.kategori, type: data?.typeKategori })
    })

    const jumlahBarang = TypeKategori?.filter((data) => data.typeKategori == selectedOption)[0]?.stock ? TypeKategori?.filter((data) => data.typeKategori == selectedOption)[0]?.stock : data.jumlah_barang

    //warna
    const [selectedOptionWarna, setSelectedOptionWarna] = useState(data?.warna_barang);
    const handleChangeSelectWarna = (event, dataku) => {
        setSelectedOptionWarna(event.target.value)
        const slugurl = dataku.filter((data) => data.warna_barang == event.target.value)[0].slug_barang
        router.push(`${process.env.NEXT_PUBLIC_URL}/products/${slugurl}`)
    }


    //HIDDEN ELEMET MOBILE PEMBELIAN
    const targetRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            const { top } = targetRef.current.getBoundingClientRect() || '';
            // Jika posisi top lebih kecil dari 0, berarti scroll telah melewati target
            setOpenIsScrollPast(top < 0)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setOpenIsScrollPast]);


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
    const kondisiDiskon = TypeKategori?.filter((data) => data.typeKategori == selectedOption)[0].kondisiDiskon
    const angkaDiskon = TypeKategori?.filter((data) => data.typeKategori == selectedOption)[0].diskon
    const hargatotal = TypeKategori?.filter((data) => data.typeKategori == selectedOption)[0].harga * ValueKeranjang
    const hargaSatuan = TypeKategori?.filter((data) => data.typeKategori == selectedOption)[0].harga


    const hargadiskon = ((((hargatotal * (kondisiDiskon && angkaDiskon)) / 100) + hargatotal)) - hargatotal

    const harga = (hargatotal - hargadiskon).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    const diskonharga = (hargatotal).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })


    const hargadiskonKeranjang = (((((keranjangZ[0]?.harga_total_barang) * (kondisiDiskon && angkaDiskon)) / 100) + (keranjangZ[0]?.harga_total_barang)) - (keranjangZ[0]?.harga_total_barang))
    const hargaKeranjang = (keranjangZ[0]?.harga_total_barang - hargadiskonKeranjang).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    const catatan = `${data?.warna_barang ? data?.warna_barang : ''}` + ', ' + GabungDataKategoriType.filter((data) => data.nama)?.map((data) => `${(data.type)}`).toString()

    const handleTambahkanKeranjang = () => {
        setOpenFormKeranjang()
    }


    // SWIPEER
    const swiperRef = useRef(null);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const { height, width } = useWindowDimensions()
    const kondisiLebar = width <= 768 ? width : width <= 1133 && width - 532
    const kondisiLebarTumb = width <= 1133 && width - 607
    const hasWindow = typeof window !== 'undefined';

    const mediaMatch = hasWindow ? window.matchMedia('(max-width: 768px)') : null
    useEffect(() => {
        if (mediaMatch.matches) {
            document.getElementById("mysW").style.width = kondisiLebar + 'px'
            document.getElementById("mysWatas").style.width = kondisiLebar + 'px'

            if (warna.length == 0) {
                document.getElementById("mysWatas").style.display = 'flex'
                document.getElementById("mysWatas").style.justifyContent = 'center'
                document.getElementById("mysWatas").style.width = kondisiLebar + 'px'
            }
        }
    }, [kondisiLebar])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.width}>

                    <div className={styles.grid}>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className={styles.reviewproduk}>
                            <div className={styles.containerreview}>

                                <div className={styles.atas}>
                                    <div className={styles.judulterjual}>
                                        <div className={styles.judul}>{data?.nama_barang}</div>
                                        <div className={styles.terjual}>Terjual {data?.total_penjualan_barang} • <FaStar size={12} />{data?.rating_barang}</div>
                                    </div >
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
                                            onClick={() => setdataLoveZ(data, data.harga_barang, false, catatan, dataEditKeranjang)}
                                            aria-label={'logoheart'}
                                        >
                                            <FaRegHeart />
                                        </button>
                                    }
                                </div>



                                <div className={styles.section}>
                                    <div className={styles.wkwk}>
                                        <div className={styles.reviewharga}>
                                            <div className={styles.harga}>
                                                {harga}
                                            </div> &nbsp;|&nbsp; <div className={styles.kategori}>#{data?.kategori_barang}</div>
                                        </div>
                                        {kondisiDiskon && <div className={styles.diskon}>
                                            <div className={styles.angkadiskon}>{angkaDiskon}%</div>
                                            &nbsp;
                                            <div className={styles.hargadiskon}>
                                                {/* {keranjang?.length === 1 ? diskonhargaKeranjang : diskonharga} */}
                                                {diskonharga}
                                            </div>
                                        </div>}
                                    </div>



                                </div>



                            </div>

                            <div className={styles.bawahaksi}>

                                {Boolean(warna.length) && warna[0]?.warna_barang !== '' &&
                                    <div className={styles.ListKategoriSemuanya}>
                                        <div className={styles.ListKategori} >Warna</div>
                                        <div className={styles.ListKategori} >
                                            <div className={styles.text}>{selectedOptionWarna}</div> &nbsp;
                                            <div className={styles.simbol}><IoIosArrowBack style={{ marginRight: '-10px' }} /> <IoIosArrowForward /></div>
                                        </div>
                                        <div className={styles.TypeKategori}>
                                            <select value={selectedOptionWarna} onChange={(e) => handleChangeSelectWarna(e, warna)}>
                                                {warna?.map((data, i) => {
                                                    return (
                                                        <option key={i} value={data.warna_barang}>{data.warna_barang}</option>
                                                    )
                                                }
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                }
                                {ListKategoriSemuanya?.map((data, i) => {
                                    const Pilihan = valueDefault?.filter((dataku) => dataku.kategori == data.kategori).slice(-1)[0]?.typeKategori
                                    return (
                                        <div className={styles.ListKategoriSemuanya} key={i}>
                                            <div className={styles.ListKategori} >{data?.kategori}</div>
                                            <div className={styles.ListKategori} >
                                                <div className={styles.text}>{Pilihan}</div> &nbsp;
                                                <div className={styles.simbol}><IoIosArrowBack style={{ marginRight: '-10px' }} /> <IoIosArrowForward /></div>
                                            </div>
                                            <div className={styles.TypeKategori}>
                                                <select value={selectedOption} onChange={(e) => handleChangeSelect(e, data, Pilihan)}>
                                                    {data?.typeKategori.map((data, i) => {
                                                        return (
                                                            <option key={i} value={data.typeKategori}>{data.typeKategori}</option>
                                                        )
                                                    }
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className={styles.jumlahbarang} ref={targetRef} >stok : {jumlahBarang}</div>

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


                                <div className={styles.keranjang}>
                                    <button onClick={() => handleTambahkanKeranjang()}>Tambahkan Keranjang</button>
                                </div>
                                <div className={styles.belisekarang}   >
                                    <button onClick={setOpenFormPilihan}>Beli Sekarang</button>
                                </div>
                                <div className={styles.powerby}>
                                    Checkout powered by Midstrans
                                </div>
                                <div className={styles.juduldeskripsi} >Description</div>
                                <div className={viewMore ? styles.deskripsiMore : styles.deskripsi} dangerouslySetInnerHTML={{ __html: data?.diskripsi_barang }}>
                                </div>
                                <div className={styles.viewmore} onClick={() => handleViewMoreDeskripsi()}>{!viewMore ? 'viewmore' : 'lessmore'}</div>

                                <div className={styles.garansi}> <IoShieldOutline /> &nbsp;30 day return guarantee</div>
                            </div>
                        </motion.div>
                        <div className={styles.gambar}>
                            <div className={styles.containerswipper}>
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -100, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={styles.containerdalamswipper}
                                    id='mysWatas'
                                    style={warna.length == 0 ? { display: 'flex', justifyContent: 'center', width: kondisiLebar } : { width: kondisiLebar }}>

                                    {warna.length == 0 && <Image src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`} width={500} height={400} alt={data.nama_barang}></Image>}
                                    <Swiper
                                        modules={[FreeMode, Thumbs, Pagination]}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        pagination={{
                                            type: 'fraction',
                                        }}
                                        ref={swiperRef}
                                        loop={true}
                                        zoom={true}
                                        className='mySwipper2'
                                        id='mysW'
                                    >
                                        {warna.map((data, i) => {
                                            return (
                                                <SwiperSlide key={i}><Image src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`} width={500} height={500} alt={data.nama_barang}></Image></SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                    {!warna.length == 0 &&
                                        <div className={styles.bawah}>
                                            <Swiper
                                                loop={false}
                                                onSwiper={setThumbsSwiper}
                                                spaceBetween={5}
                                                slidesPerView={'auto'}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Thumbs]}
                                                className='mySwipper'
                                                style={{ width: kondisiLebarTumb }}
                                            >
                                                {warna.map((data, i) => {
                                                    return (
                                                        <SwiperSlide key={i}><Image src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`} width={500} height={500} alt={data.nama_barang}></Image></SwiperSlide>
                                                    )
                                                })}

                                            </Swiper>
                                            <div className={styles.tombolnextprev}>
                                                <div onClick={goPrev}><IoIosArrowBack className={styles.logo} /></div>
                                                <div onClick={goNext}><IoIosArrowForward className={styles.logo} /></div>
                                            </div>
                                        </div>
                                    }

                                </motion.div>
                            </div >
                        </div>
                    </div>
                </div >
            </div >
            {transaction_status == 'pending' && !openFormPending && <PaymentErrorPending />
            }
            {
                openFormPilihan && <FormPilihan
                    warna={warna}
                    dataid={data.id}
                    dataID={dataFrom}
                    kondisiPilihan={true}
                    value={ValueKeranjang}
                />
            }

            {
                openFormKeranjang && <FormPilihan
                    warna={warna}
                    dataid={data.id}
                    dataID={dataFrom}
                    kondisiKeranjang={true}
                    value={ValueKeranjang}
                />
            }

        </>
    )
}
