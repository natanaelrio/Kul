"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/admin/kirim.module.css'
import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from 'next/link';
import Berhasil from '@/components/alert/berhasil';

export default function Kirim() {
    const [matikan, setMatikan] = useState(false)
    const [loading, setLoading] = useState(true)

    const formik = useFormik({
        initialValues: {
            nama_barang: '',
            kategori_barang: '',
            harga_barang: '',
            diskon_barang: '',
            rating_barang: '',
            total_penjualan_barang: '',
            diskripsi_barang: '',
            gambar_barang: '',
            slug_barang: '',
            view_barang: '',
            kupon_barang: '',
        },
        validationSchema: Yup.object({
            nama_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            kategori_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            harga_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            diskon_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            rating_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            total_penjualan_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            diskripsi_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            gambar_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            slug_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            view_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            kupon_barang: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
        }),
        onSubmit: async values => {
            // setHandleData(values)
            setMatikan(true)
            setLoading(false)
            const DataLain = {
                end: null
            }
            const DataUtama = values
            const GabungData = { ...DataUtama, ...DataLain }
            await fetch('http://localhost:3000/api/v1', {
                method: 'POST',
                body: JSON.stringify(GabungData),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                }
            })
            setMatikan(false)
            setLoading(true)
            formik.resetForm();
        },
    });
    return (
        <>
            <div className={styles.container}>

                <div className={styles.bungkusjudul}>
                    <div className={styles.iconjudul}>
                        <Link href={'/'} className={styles.icon}>
                            <IoHome />
                        </Link>
                        <div className={styles.judul}>POST ADMIN</div>
                    </div>
                    <div>
                        <Link href={'/admin/list'} className={styles.icon}>
                            <FaArrowCircleLeft />
                        </Link>
                    </div>
                </div>
                <div className={styles.containerform}>
                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <div className={styles.kotak1}>
                            <label htmlFor="nama_barang">Nama
                                {formik.touched.nama_barang && formik.errors.nama_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <input
                                id="nama_barang"
                                name="nama_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.nama_barang}
                                placeholder='ex: Baju Santai'
                                style={formik.touched.nama_barang && formik.errors.nama_barang ? { border: '1px solid red' } : null}
                            />
                            <div className={styles.bagi2}>

                                <div className={styles.harga}>
                                    <label htmlFor="harga_barang">Harga
                                        {formik.touched.harga_barang && formik.errors.harga_barang ? (
                                            <div style={{ color: 'red' }}>&nbsp;*</div>
                                        ) : null}
                                    </label>
                                    <input
                                        id="harga_barang"
                                        name="harga_barang"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.harga_barang}
                                        placeholder='ex: 100000 ( tanpa space )'
                                        style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                                    />
                                </div>
                                <div className={styles.diskon}>
                                    <label htmlFor="diskon_barang">Diskon
                                        {formik.touched.diskon_barang && formik.errors.diskon_barang ? (
                                            <div style={{ color: 'red' }}>&nbsp;*</div>
                                        ) : null}
                                    </label>
                                    <input
                                        id="diskon_barang"
                                        name="diskon_barang"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.diskon_barang}
                                        placeholder='ex: 50 ( tanpa % )'
                                        style={formik.touched.diskon_barang && formik.errors.diskon_barang ? { border: '1px solid red' } : null}
                                    />
                                </div>
                            </div>


                            <label htmlFor="kategori_barang">Kategori
                                {formik.touched.kategori_barang && formik.errors.kategori_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <input
                                id="kategori_barang"
                                name="kategori_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.kategori_barang}
                                placeholder='ex: bulu, santai, ramah ( pemisah tanda , )'
                                style={formik.touched.kategori_barang && formik.errors.kategori_barang ? { border: '1px solid red' } : null}
                            />

                            <label htmlFor="gambar_barang">Gambar
                                {formik.touched.gambar_barang && formik.errors.gambar_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <input
                                id="gambar_barang"
                                name="gambar_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.gambar_barang}
                                placeholder='ex: http://google.com/kucing.png'
                                style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                            />

                            <label htmlFor="diskripsi_barang">Diskripsi
                                {formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <textarea
                                id="diskripsi_barang"
                                name="diskripsi_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.diskripsi_barang}
                                placeholder='ex: terserah'
                                style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                            />
                        </div>

                        <div className={styles.kotak2}>

                            <label htmlFor="kupon_barang">Kupon
                                {formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <input
                                id="kupon_barang"
                                name="kupon_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.kupon_barang}
                                placeholder='opsional'
                                style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                            />

                            <label htmlFor="rating_barang">Rating
                                {formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <input
                                id="rating_barang"
                                name="rating_barang"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.rating_barang}
                                placeholder='opsional'
                                style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                            />

                            <label htmlFor="total_penjualan_barang">Total Penjualan
                                {formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <input
                                id="total_penjualan_barang"
                                name="total_penjualan_barang"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.total_penjualan_barang}
                                placeholder='opsional'
                                style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                            />





                            <label htmlFor="slug_barang">Slug Barang
                                {formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <input
                                id="slug_barang"
                                name="slug_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.slug_barang}
                                placeholder='opsional'
                                style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                            />


                            <label htmlFor="view_barang">View
                                {formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? (
                                    <div style={{ color: 'red' }}>&nbsp;*</div>
                                ) : null}
                            </label>
                            <input
                                id="view_barang"
                                name="view_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.view_barang}
                                placeholder='opsional'
                                style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                            />
                            <div className={styles.dalamsubmit}>
                                <button type='submit' disabled={matikan} >{loading ? 'Submit' : 'tunggu!! 👌'}</button>
                            </div>
                        </div>
                    </form>
                </div>
                {loading ? null : <Berhasil />}
            </div>
        </>
    )
}

