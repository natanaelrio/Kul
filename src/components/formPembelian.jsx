'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/formPembelian.module.css'
import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'
import { useState } from 'react';
import MoonLoader from "react-spinners/MoonLoader";
import { v4 as uuidv4 } from 'uuid';

export default function FormPembelian({ dataFormLangsung }) {
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const kuponBarang = dataFormLangsung.map((data) => data.kupon_barang)[0]?.toString()
    const hargaBarangDiskonNormal = dataFormLangsung.map((data) => ((data?.harga_barang - ((data?.harga_barang * data?.diskon_barang) / 100)) * data?.value_barang)).reduce((acc, curr) => acc + curr, 0)
    const hargaBarangDiskonKupon = dataFormLangsung.map((data) => ((data?.harga_barang - ((data?.harga_barang * process.env.NEXT_PUBLIC_DISKON) / 100)) * data?.value_barang)).reduce((acc, curr) => acc + curr, 0)

    const [kupon, setKupon] = useState('')
    const HandleKupon = (e) => {
        setKupon(e.target.value)
    }

    const [isLoading, setIsLoading] = useState(false)

    const handleSuccess = () => {
        // router.push('/')
        setIsLoading(false)
        setOpenFormPembelian()
        // openKeranjang ? setOpenKeranjang() : null
        // router.refresh()
    }

    const formik = useFormik({
        initialValues: {
            nama_lengkap_user: '',
            no_hp_user: '',
            alamat_lengkap_user: '',
            kode_pos_user: '',
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
            const dataPesanan = dataFormLangsung.map((data) =>
            ({
                nama_barang_user: data?.nama_barang,
                jumlah_barang_user: data?.value_barang,
                harga_barang_user: kupon == kuponBarang + process.env.NEXT_PUBLIC_DISKON ? ((data?.harga_barang - ((data?.harga_barang * process.env.NEXT_PUBLIC_DISKON) / 100)) * data?.value_barang) : ((data?.harga_barang - ((data?.harga_barang * data?.diskon_barang) / 100)) * data?.value_barang),
                kupon_user: kupon,
                validasi_kupon_user: kupon == kuponBarang + process.env.NEXT_PUBLIC_DISKON ? true : false
            })
            )

            const dataTambahanNew = { dataPesanan }
            const dataUtama = values
            const datalain = {
                nota_user: uuidv4(),
                status_pesanan: 'belum-diproses'
            }
            const dataUtamauid = { ...datalain, ...dataUtama }
            const GabungDataDataPesanandanDataUtamaUid = { ...dataUtamauid, ...dataTambahanNew }
            const GabungData = { ...dataUtama, ...GabungDataDataPesanandanDataUtamaUid }
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}` + '/api/v1/user-front/post-formpembelian', {
                    method: 'POST',
                    body: JSON.stringify(GabungData),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    }
                })
                const data = await res.json()
                data.status == 200 ? handleSuccess() : Gagal()
            }
            catch (e) {
                console.error(e)
            }
        },
    })

    return (
        <FloatingBlur setOpen={setOpenFormPembelian} judul={'FORMULIR PENGIRIMAN'} >
            <div className={styles.containerform}>

                {isLoading ? <div className={styles.loading}>
                    <div className={styles.hitam}></div>

                    <div className={styles.logoloading}>
                        <MoonLoader
                            color={'var(--color-white)'}
                        />
                        Loading
                    </div>
                </div>
                    : null
                }
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <label htmlFor="nama_lengkap_user">Nama Lengkap
                        {formik.touched.nama_lengkap_user && formik.errors.nama_lengkap_user ? (
                            <div style={{ color: 'red' }}>&nbsp;*</div>
                        ) : null}
                    </label>
                    <input
                        id="nama_lengkap_user"
                        name="nama_lengkap_user"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.nama_lengkap_user}
                        placeholder='ex: natanael rio wijaya'
                        style={formik.touched.nama_lengkap_user && formik.errors.nama_lengkap_user ? { border: '1px solid red' } : null}
                    />


                    <label htmlFor="no_hp_user">NO HP
                        {formik.touched.no_hp_user && formik.errors.no_hp_user ? (
                            <div style={{ color: 'red' }}>&nbsp;*</div>
                        ) : null}
                    </label>
                    <input
                        id="no_hp_user"
                        name="no_hp_user"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.no_hp_user}
                        placeholder='ex: 0812488124004'
                        style={formik.touched.no_hp_user && formik.errors.no_hp_user ? { border: '1px solid red' } : null}
                    />



                    <label htmlFor="alamat_lengkap_user">Alamat Lengkap
                        {formik.touched.alamat_lengkap_user && formik.errors.alamat_lengkap_user ? (
                            <div style={{ color: 'red' }}>&nbsp;*</div>
                        ) : null}
                    </label>
                    <input
                        id="alamat_lengkap_user"
                        name="alamat_lengkap_user"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.alamat_lengkap_user}
                        placeholder='ex: jl merdeka, rt 01/03. keboyan'
                        style={formik.touched.alamat_lengkap_user && formik.errors.alamat_lengkap_user ? { border: '1px solid red' } : null}
                    />

                    <label htmlFor="kode_pos_user">Kode POS
                        {formik.touched.kode_pos_user && formik.errors.kode_pos_user ? (
                            <div style={{ color: 'red' }}>&nbsp;*</div>
                        ) : null}
                    </label>
                    <input
                        id="kode_pos_user"
                        name="kode_pos_user"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.kode_pos_user}
                        placeholder='ex: 53235'
                        style={formik.touched.kode_pos_user && formik.errors.kode_pos_user ? { border: '1px solid red' } : null}
                    />


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
                    <input
                        id="kupon"
                        name="kupon"
                        type="text"
                        onChange={HandleKupon}
                        value={kupon}
                        placeholder='opsional'
                    />

                    <button type="submit" disabled={isLoading} >Bayar Sekarang &nbsp;
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
                </form>
            </div>
        </FloatingBlur>
    );

}
