import styles from '@/components/Layout/formPilihan.module.css'
import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useKeranjangCount } from '@/utils/user-front/keranjangCountZ'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import FormPembelian from '@/components/formPembelian';
import BeatLoader from "react-spinners/BeatLoader";

export default function FormPilihan({ warna, dataID, dataid, kondisiPilihan, kondisiKeranjang, kondisiEditKeranjang, value }) {

    const dataEditKeranjang = {
        warna,
        dataID,
        dataid
    }

    const setOpenFormKeranjang = useStore((state) => state.setOpenFormKeranjang)
    const setOpenFormPilihan = useStore((state) => state.setOpenFormPilihan)
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const setOpenFormEditKeranjang = useStore((state) => state.setOpenFormEditKeranjang)
    const openFormPembelian = useStore((state) => state.openFormPembelian)
    const setIsLoading = useStore((state) => state.setIsLoading)
    const isLoading = useStore((state) => state.isLoading)

    const resetValueKeranjang = useKeranjangCount((state) => state.resetValueKeranjang)

    const setdataKeranjangZ = useStoreDataFront((state) => state.setdataKeranjangZ)
    const setUpdateKeranjangZ = useStoreDataFront((state) => state.setUpdateKeranjangZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)

    const [kategoriDetail, setKategoriDetail] = useState(dataID?.detail_deskripsi_barang?.kategori)
    const [typeKategoriDetail, setTypeKategoriDetail] = useState(dataID?.detail_deskripsi_barang.typeKategori)

    const [namaBarangDetail, setNamaBarangDetail] = useState(dataID?.nama_barang)
    const [gambarDetail, setGambarDetail] = useState(dataID?.gambar_barang)
    const [warnaDetail, setWarnaDetail] = useState(warna.filter((data) => data.id == dataid)[0]?.warna_barang)

    const [hargaDetail, setHargaDetail] = useState(dataID?.harga_barang)
    const [diskonDetail, setDiskonDetail] = useState(dataID?.diskon_barang)
    const [kondisiDiskonDetail, setKondisiDiskonDetail] = useState(dataID?.kondisi_diskon_barang)
    const [id, setID] = useState(dataID?.id)

    // MATCH SERVER DAN CLIENT
    const [keranjang, setKeranjang] = useState([])

    useEffect(() => {
        setKeranjang(keranjangZ)
    }, [keranjangZ])


    const ListKategoriSemuanya = kategoriDetail?.map((dataKategori) => {
        return (
            {
                kategori: dataKategori,
                typeKategori: typeKategoriDetail.filter((data) => data.kategori == dataKategori)
            }
        )
    })

    const HandleDetail = (data) => {
        setNamaBarangDetail(data?.nama_barang)
        setID(data.id)
        setGambarDetail(data.gambar_barang)
        setWarnaDetail(data.warna_barang)
        setHargaDetail(data.detail_deskripsi_barang.typeKategori[0].harga)
        setKondisiDiskonDetail(data.detail_deskripsi_barang.typeKategori[0].kondisiDiskon)
        setDiskonDetail(data.detail_deskripsi_barang.typeKategori[0].diskon)
        setKategoriDetail(data.detail_deskripsi_barang.kategori)
        setTypeKategoriDetail(data.detail_deskripsi_barang.typeKategori)

        //RESET
        setGabungDataKategori([])
    }

    const [gabungDataKategori, setGabungDataKategori] = useState([])
    const DataGabunganKategori = kategoriDetail?.map((dataKategori, i) => {
        return (
            {
                typeKategori: gabungDataKategori.filter((data) => data.kategori == dataKategori).slice(-1)
            }
        )
    })


    const ukuran = DataGabunganKategori?.map((data) => data?.typeKategori[0]).map((data) => data?.typeKategori).toString() == ',' ? '' : DataGabunganKategori?.map((data) => data?.typeKategori[0]).map((data) => data?.typeKategori).toString()


    const HandleKategori = (data) => {
        setHargaDetail(data?.harga)
        setDiskonDetail(data?.diskon)
        setKondisiDiskonDetail(data?.kondisiDiskon)
        setGabungDataKategori([...gabungDataKategori, data])
        resetValueKeranjang()
    }


    const hargaTotal = kondisiDiskonDetail ? (hargaDetail - ((hargaDetail * (kondisiDiskonDetail && diskonDetail)) / 100)) : hargaDetail
    const hargaTotalRP = (hargaDetail - ((hargaDetail * (kondisiDiskonDetail && diskonDetail)) / 100)).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })

    const hargaAsliRP = hargaDetail.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })


    // KUANTITAS
    const jumlahBarang = gabungDataKategori.slice(-1)[0]?.stock ? gabungDataKategori.slice(-1)[0].stock : dataID?.jumlah_barang
    // Data OFF

    const [valueTambahKurang, setValueTambahKurang] = useState(value ? value : 1)
    const handleAngkaKurang = () => {
        valueTambahKurang > 1 ? setValueTambahKurang(valueTambahKurang - 1) : null
    }
    const handleAngkaTambah = () => {
        valueTambahKurang >= jumlahBarang ? null : setValueTambahKurang(valueTambahKurang + 1)
    }

    // EKSEKUSI KERANJANG
    const dataFormKeranjang = {
        id: id,
        jumlah_barang: Number(jumlahBarang),
        nama_barang: namaBarangDetail,
        gambar_barang: gambarDetail,
        harga_barang: hargaDetail
    }

    const hargaTotalSemua = hargaDetail * valueTambahKurang

    const catatan = `${warnaDetail}` + `${ukuran ? ' ,' + ukuran : ' ,' + typeKategoriDetail[0].typeKategori}`

    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const handleTambahkanKeranjang = () => {
        setLoading(true)
        setAlert(false)
        setTimeout(() => {
            setLoading(false)
            setIsLoading(true)
        }, 2000);
        setdataKeranjangZ(dataFormKeranjang, hargaTotalSemua, valueTambahKurang, kondisiDiskonDetail, diskonDetail, catatan, dataEditKeranjang)
    }

    const handleUpdateKeranjang = () => {
        setLoading(true)
        setAlert(false)
        setTimeout(() => {
            setLoading(false)
            setIsLoading(true)
        }, 2000);

        kondisiKeranjang && setUpdateKeranjangZ(dataFormKeranjang, hargaTotalSemua, valueTambahKurang, kondisiDiskonDetail, diskonDetail, catatan, dataEditKeranjang)
        kondisiEditKeranjang && setUpdateKeranjangZ(dataFormKeranjang, hargaTotalSemua, valueTambahKurang, kondisiDiskonDetail, diskonDetail, catatan, dataEditKeranjang, true)
    }

    useEffect(() => {
        if (isLoading) {
            kondisiKeranjang && setOpenFormKeranjang() || kondisiEditKeranjang && setOpenFormEditKeranjang() || setAlert(false)
        }
    }, [isLoading])


    //DATA FORM 
    const dataFormLangsung =
        [{
            id: dataid,
            nama_barang: namaBarangDetail,
            harga_barang: hargaDetail,
            diskon_barang: Number(diskonDetail),
            kupon_barang: '2wkwk',
            kondisi_diskon_barang: kondisiDiskonDetail,
            value_barang: valueTambahKurang,
            catatan: catatan
        }]



    return (
        <FloatingBlur setOpen={kondisiPilihan && setOpenFormPilihan || kondisiKeranjang && setOpenFormKeranjang || kondisiEditKeranjang && setOpenFormEditKeranjang} judul={<div className={styles.atas}>
            <div className={styles.gambar}><Image src={gambarDetail ? gambarDetail : `${process.env.NEXT_PUBLIC_URL}/no-image.png`} width={150} height={150} alt={gambarDetail}></Image></div>
            <div className={styles.detail}>
                <div>
                    <div className={styles.harga}>{hargaTotalRP}</div>
                    {kondisiDiskonDetail &&
                        <>
                            <div className={styles.diskonpersen}>
                                <div className={styles.diskon}>{hargaAsliRP}</div>
                                <div className={styles.persen}>{diskonDetail}%</div>
                            </div>
                        </>
                    }
                </div>
                <div className={styles.diskripsi}>{warnaDetail}{ukuran && ',' + ukuran}</div>
            </div>
        </div>} >
            <div className={styles.container}>
                <div className={styles.pilihan}>
                    {kondisiPilihan && Boolean(warna.length) &&
                        <div className={styles.pilihanwarna}>
                            <div className={styles.judul}>Warna</div>
                            <div className={styles.detail}>
                                {warna?.map((data, i) => {
                                    return (
                                        <>
                                            <div key={i} style={data.warna_barang == warnaDetail ? { borderColor: 'var(--color-primary)' } : {}} className={styles.detaildalam} onClick={() => HandleDetail(data)}>
                                                <div className={styles.gambar}>
                                                    <Image src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`} width={50} height={50} alt={data.id_namabarang}></Image>
                                                </div>
                                                <div className={styles.deskripsi} style={data.warna_barang == warnaDetail ? { fontWeight: 700, color: 'var(--color-primary)' } : {}}>{data.warna_barang}</div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    }
                    {kondisiKeranjang && Boolean(warna.length) &&
                        <div className={styles.pilihanwarna}>
                            <div className={styles.judul}>Warna</div>
                            <div className={styles.detail}>
                                {warna?.map((data, i) => {
                                    return (
                                        <>
                                            <div key={i} style={data.warna_barang == warnaDetail ? { borderColor: 'var(--color-primary)' } : {}} className={styles.detaildalam} onClick={() => HandleDetail(data)}>
                                                <div className={styles.gambar}>
                                                    <Image src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`} width={50} height={50} alt={data.id_namabarang}></Image>
                                                </div>
                                                <div className={styles.deskripsi} style={data.warna_barang == warnaDetail ? { fontWeight: 700, color: 'var(--color-primary)' } : {}}>{data.warna_barang}</div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    }

                    <div className={styles.pilihanacak}>
                        {ListKategoriSemuanya?.map((data, i) => {
                            const cek = DataGabunganKategori.map((dataku) => dataku.typeKategori[0]).filter((dataku) => dataku?.kategori == data?.kategori)[0]?.typeKategori
                            return (
                                <div key={i}>
                                    <div className={styles.judul}>{data.kategori}</div>
                                    <div className={styles.detail}>
                                        {data?.typeKategori.map((dataku, i) => {
                                            return (
                                                <div key={i} style={cek == dataku.typeKategori ? { borderColor: 'var(--color-primary)', fontWeight: 700, color: 'var(--color-primary)' } : {}} className={styles.detaildalam} onClick={() => HandleKategori(dataku)}>
                                                    {dataku.typeKategori}
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={styles.kuantitas}>
                        <div className={styles.judul}>Kuantitas </div>
                        <div className={styles.sampingkanan}>
                            <div className={styles.stock}>stok: {jumlahBarang}</div>
                            <div className={styles.tombol}>
                                <div className={styles.button}
                                    onClick={() => handleAngkaKurang()}
                                    style={valueTambahKurang <= 1 ? { color: '#c2c2c2' } : null
                                    }>-</div>
                                <div className={styles.angka}>{valueTambahKurang}</div>
                                <div className={styles.button}
                                    style={valueTambahKurang >= jumlahBarang ? { color: '#c2c2c2' } : null}
                                    onClick={() => handleAngkaTambah()}>+</div>
                            </div>
                        </div>
                    </div>
                </div>

                {alert && <div className={styles.alert}>
                    Siliahkan Pilih*
                </div>}
                {kondisiPilihan && <div className={styles.konfirmasi} onClick={setOpenFormPembelian}>Beli Sekarang</div>}


                {kondisiKeranjang && id && keranjang?.filter((e) => e.id == id).map((e) => e.id).toString() ? <div className={styles.konfirmasi} onClick={() => gabungDataKategori.length == 0 ? setAlert(true) : handleUpdateKeranjang()}>{loading ? <BeatLoader size={10} color={'var(--color-white)'} /> : 'Konfirmasi +'}</div>
                    : kondisiKeranjang && <div className={styles.konfirmasi} onClick={() => gabungDataKategori.length == 0 ? setAlert(true) : handleTambahkanKeranjang()}>{loading ? <BeatLoader size={10} color={'var(--color-white)'} /> : 'Konfirmasi'}</div>}

                {kondisiEditKeranjang && id && keranjang?.filter((e) => e.id == id).map((e) => e.id).toString() ? <div className={styles.konfirmasi} onClick={() => gabungDataKategori.length == 0 ? setAlert(true) : handleUpdateKeranjang()}>{loading ? <BeatLoader size={10} color={'var(--color-white)'} /> : 'Konfirmasi +'}</div>
                    : kondisiEditKeranjang && <div className={styles.konfirmasi} onClick={() => gabungDataKategori.length == 0 ? setAlert(true) : handleTambahkanKeranjang()}>{loading ? <BeatLoader size={10} color={'var(--color-white)'} /> : 'Konfirmasi'}</div>}

            </div>
            {openFormPembelian && <FormPembelian dataFormLangsung={dataFormLangsung} />}
        </FloatingBlur >
    )
}
