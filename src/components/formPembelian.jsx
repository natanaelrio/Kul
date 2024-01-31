'use client';
import MoonLoader from "react-spinners/MoonLoader";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/formPembelian.module.css'
import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'
import { useStoreFormUsers } from '@/utils/user-front/formZ'
import { uidRio } from '@/lib/uidRio';
import { FaUser } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaSignsPost } from "react-icons/fa6";
import useSnap from '../lib/useSnap'

export default function FormPembelian({ dataFormLangsung }) {
    const { snapEmbed } = useSnap()
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const setnamaLengkap = useStoreFormUsers((state) => state.setnamaLengkap)
    const namaLengkap = useStoreFormUsers((state) => state.namaLengkap)
    const setNoHP = useStoreFormUsers((state) => state.setNoHP)
    const noHP = useStoreFormUsers((state) => state.noHP)
    const setAlamat = useStoreFormUsers((state) => state.setAlamat)
    const alamat = useStoreFormUsers((state) => state.alamat)
    const setKodePost = useStoreFormUsers((state) => state.setKodePost)
    const kodePost = useStoreFormUsers((state) => state.kodePost)

    const kuponBarang = dataFormLangsung.map((data) => data.kupon_barang)[0]?.toString()
    const hargaBarangDiskonNormal = dataFormLangsung.map((data) => ((data?.harga_barang - ((data?.harga_barang * data?.diskon_barang) / 100)) * data?.value_barang)).reduce((acc, curr) => acc + curr, 0)
    const hargaBarangDiskonKupon = dataFormLangsung.map((data) => ((data?.harga_barang - ((data?.harga_barang * process.env.NEXT_PUBLIC_DISKON) / 100)) * data?.value_barang)).reduce((acc, curr) => acc + curr, 0)

    const [kupon, setKupon] = useState('')
    const HandleKupon = (e) => {
        setKupon(e.target.value)
    }
    const handleNamaLengkap = (e) => {
        setnamaLengkap(e.target.value)
    }
    const handleNoHp = (e) => {
        setNoHP(e.target.value)
    }
    const handleAlamat = (e) => {
        setAlamat(e.target.value)
    }
    const handleKodePost = (e) => {
        setKodePost(e.target.value)
    }

    // NOTIFIKASI
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingGagal, setIsLoadingGagal] = useState(false)
    const [payment, setPayment] = useState(false)

    const handleSuccess = (token) => {
        setPayment(true)
        setIsLoading(false)
        snapEmbed(token, 'snap-container')
        // setOpenFormPembelian()
    }
    const handleGagal = () => {
        setIsLoading(false)
        setIsLoadingGagal(true)
    }

    const handleKirimUlang = () => {
        setIsLoadingGagal(false)
    }

    const formik = useFormik({
        initialValues: {
            nama_lengkap_user: namaLengkap ? namaLengkap : '',
            no_hp_user: noHP ? Number(noHP) : '',
            alamat_lengkap_user: alamat ? alamat : '',
            kode_pos_user: kodePost ? Number(kodePost) : '',
            catatan_user: ''
        },
        validationSchema: Yup.object({
            nama_lengkap_user: Yup.string()
                .max(1000)
                .required('require'),
            no_hp_user: Yup.number()
                .max(999999999999999)
                .required('require'),
            alamat_lengkap_user: Yup.string()
                .max(10000)
                .required('require'),
            kode_pos_user: Yup.number()
                .max(999999)
                .required('require'),
            catatan_user: Yup.string()
                .max(20000)
        }),
        onSubmit: async values => {
            setIsLoading(true)
            setIsLoadingGagal(false)

            //DATA POST PAYMENT
            const transaction_details = {
                order_id: uidRio(),
                gross_amount: kupon == kuponBarang + process.env.NEXT_PUBLIC_DISKON ? hargaBarangDiskonKupon : hargaBarangDiskonNormal
            }
            const item_details = dataFormLangsung.map((data) =>
            ({
                id: data?.id,
                price: data?.harga_barang,
                quantity: data?.value_barang,
                name: data?.nama_barang,
            }))
            const item_detailsPayment = { item_details }
            const GabungDataPayment = { ...transaction_details, ...item_detailsPayment }

            //DATA POST ADMIN
            const dataPesanan = dataFormLangsung.map((data) =>
            ({
                statusKirim: false,
                statusSelesai: false,
                resi_user: '',
                id_user: data?.id,
                nama_barang_user: data?.nama_barang,
                jumlah_barang_user: data?.value_barang,
                harga_barang_user: kupon == kuponBarang + process.env.NEXT_PUBLIC_DISKON ? ((data?.harga_barang - ((data?.harga_barang * process.env.NEXT_PUBLIC_DISKON) / 100)) * data?.value_barang) : ((data?.harga_barang - ((data?.harga_barang * data?.diskon_barang) / 100)) * data?.value_barang),
                kupon_user: kupon,
                validasi_kupon_user: kupon == kuponBarang + process.env.NEXT_PUBLIC_DISKON ? true : false
            })
            )

            const dataTambahanNew = { dataPesanan }
            const dataUtama = values
            const GabungdataUtamadataTambahanUtama = { ...dataUtama, ...dataUtama }
            const datalain = {
                nota_user: uidRio(),
                status_pesanan: 'belum-diproses',
            }
            const dataUtamauid = { ...datalain, ...GabungdataUtamadataTambahanUtama }
            const GabungDataDataPesanandanDataUtamaUid = { ...dataUtamauid, ...dataTambahanNew }
            const GabungData = { ...dataUtama, ...GabungDataDataPesanandanDataUtamaUid }


            //   FETCH DATA
            try {
                // DATA ADMIN
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}` + '/api/v1/user-front/post-formpembelian', {
                    method: 'POST',
                    body: JSON.stringify(GabungData),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    }
                })
                const data = await res.json()

                // DATA PAYMENT
                const resPayment = await fetch(`${process.env.NEXT_PUBLIC_URL}` + '/api/v1/user-front/get-token-payment', {
                    method: 'POST',
                    body: JSON.stringify(GabungDataPayment),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    }
                })
                const dataPayment = await resPayment.json()

                data.status == 200 && dataPayment.status == 200 && handleSuccess(dataPayment.data) || data.status == 500 && dataPayment.status == 500 && handleGagal()
            }
            catch (e) {
                handleGagal()
            }
        },
    })

    return (
        <FloatingBlur setOpen={setOpenFormPembelian} judul={payment ? 'PEMBAYARAN' : 'FORMULIR PENGIRIMAN'} >
            <div id="snap-container" style={{ display: payment ? 'block' : 'none' }}></div>
            <div className={styles.containerform} style={{ display: payment ? 'none' : 'block' }} >

                <form onSubmit={(e) => { formik.handleSubmit(e) }} className={styles.form}>
                    {isLoading && <div className={styles.loading}>
                        <div className={styles.hitam}></div>

                        <div className={styles.logoloading}>
                            <MoonLoader
                                color={'var(--color-white)'}
                            />
                            Loading
                        </div>
                    </div>}
                    {isLoadingGagal &&
                        <div className={styles.loading} >
                            <div className={styles.hitam} ></div>

                            <div className={styles.logoloading}>
                                Error, silakan kirim ulang!!!!
                                <div className={styles.tombolkembaligagal} onClick={() => handleKirimUlang()}>
                                    OK
                                </div>
                            </div>
                        </div>}
                    <div className={styles.padding}>
                        <label htmlFor="nama_lengkap_user">Nama Lengkap
                            {formik.touched.nama_lengkap_user && formik.errors.nama_lengkap_user ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.logoluar} style={formik.touched.nama_lengkap_user && formik.errors.nama_lengkap_user ? { border: '1px solid red' } : null}>
                            <div className={styles.logo}><FaUser size={20} /></div>
                            <input
                                id="nama_lengkap_user"
                                name="nama_lengkap_user"
                                type="text"
                                onChange={(e) => { formik.handleChange(e); handleNamaLengkap(e) }}
                                value={formik.values.nama_lengkap_user}
                                placeholder='ex: natanael rio wijaya'

                            />
                        </div>


                        <label htmlFor="no_hp_user">NO HP
                            {formik.touched.no_hp_user && formik.errors.no_hp_user ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.logoluar} style={formik.touched.no_hp_user && formik.errors.no_hp_user ? { border: '1px solid red' } : null}>
                            <div className={styles.logo}><BiSolidContact size={20} /> </div>
                            <input
                                id="no_hp_user"
                                name="no_hp_user"
                                type="number"
                                onChange={(e) => { formik.handleChange(e); handleNoHp(e) }}
                                value={formik.values.no_hp_user}
                                placeholder='ex: 0812488124004'
                            />
                        </div>


                        <label htmlFor="alamat_lengkap_user">Alamat Lengkap
                            {formik.touched.alamat_lengkap_user && formik.errors.alamat_lengkap_user ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.logoluar} style={formik.touched.alamat_lengkap_user && formik.errors.alamat_lengkap_user ? { border: '1px solid red' } : null}>
                            <div className={styles.logo}><FaLocationDot size={20} />  </div>
                            <input
                                id="alamat_lengkap_user"
                                name="alamat_lengkap_user"
                                type="text"
                                onChange={(e) => { formik.handleChange(e); handleAlamat(e) }}
                                value={formik.values.alamat_lengkap_user}
                                placeholder='ex: jl merdeka, rt 01/03. keboyan'
                            />
                        </div>

                        <label htmlFor="kode_pos_user">Kode POS
                            {formik.touched.kode_pos_user && formik.errors.kode_pos_user ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.logoluar} style={formik.touched.kode_pos_user && formik.errors.kode_pos_user ? { border: '1px solid red' } : null}>
                            <div className={styles.logo}><FaSignsPost size={20} /> </div>
                            <input
                                id="kode_pos_user"
                                name="kode_pos_user"
                                type="number"
                                onChange={(e) => { formik.handleChange(e); handleKodePost(e) }}
                                value={formik.values.kode_pos_user}
                                placeholder='ex: 53235'
                            />
                        </div>


                        <label htmlFor="catatan_user">Catatan</label>
                        <textarea
                            id="catatan_user"
                            name="catatan_user"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.catatan_user}
                            placeholder='opsional'
                        />

                        <label htmlFor="kupon">Kupon &nbsp;<div className={styles.kuponharga}>({kuponBarang + process.env.NEXT_PUBLIC_DISKON})</div></label>
                        <div className={styles.kupon}>
                            <input
                                id="kupon"
                                name="kupon"
                                type="text"
                                onChange={HandleKupon}
                                value={kupon}
                                placeholder='opsional'
                            />
                        </div>

                        <button type="submit" disabled={isLoading && !isLoadingGagal} >Bayar Sekarang &nbsp;
                            {kupon == kuponBarang + process.env.NEXT_PUBLIC_DISKON ? (
                                hargaBarangDiskonKupon.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR'
                                })
                            ) : (
                                hargaBarangDiskonNormal.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR'
                                })
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </FloatingBlur>
    );

}
