"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/admin/layout/formPage.module.css'
import { useState } from 'react';
import BarLoader from "react-spinners/BarLoader";
import { BiSolidCategory } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsTagsFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { FaLink } from "react-icons/fa";

export default function FormPage({ urlFetch, method, data, change, value }) {
    const router = useRouter()
    const [matikan, setMatikan] = useState(false)

    // VALIDASI ERROR DAN BERHASIL
    const Berhasil = () => {
        toast.success("Produk Berhasil " + `${change}`, {
            draggablePercent: 60
        })
    }

    const Gagal = () => {
        toast.error("Produk Gagal " + `${change}`, {
            draggablePercent: 60,
        })
    }

    const formik = useFormik({
        initialValues: {
            nama_barang: data ? data?.nama_barang : '',
            kategori_barang: data ? data?.kategori_barang : '',
            harga_barang: data ? data?.harga_barang : '',
            diskon_barang: data ? data?.diskon_barang : '',
            rating_barang: data ? data?.rating_barang : '',
            total_penjualan_barang: data ? data?.total_penjualan_barang : '',
            diskripsi_barang: data ? data?.diskripsi_barang : '',
            gambar_barang: data ? data?.gambar_barang : '',
            kupon_barang: data ? data?.kupon_barang : '',
            tag_barang: data ? data?.tag_barang : '',
            jumlah_barang: data ? data?.jumlah_barang : '',
            link_barang: data ? data?.link_barang : '',
        },
        validationSchema: Yup.object({
            nama_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            kategori_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            tag_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            harga_barang: Yup.number()
                .max(2000000000, 'harus 2000000000 karakter')
                .required('require'),
            diskon_barang: Yup.number()
                .max(100, 'harus 100 karakter')
                .required('require'),
            rating_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            total_penjualan_barang: Yup.number()
                .max(2000000000, 'harus 2000000000 karakter')
                .required('require'),
            diskripsi_barang: Yup.string()
                .max(2000, 'harus 2000 karakter')
                .required('require'),
            kupon_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            jumlah_barang: Yup.number()
                .max(2000000000, 'harus 2000000000 karakter')
                .required('require'),
            link_barang: Yup.string()
                .max(20000, 'harus 200 karakter')
                .required('require'),
        }),
        onSubmit: async values => {
            setMatikan(true)
            const DataLain = {
                end: null,
                btoa: uuidv4(),
                slug_barang: values.nama_barang.split(' ').join('-').toLowerCase()
            }

            const DataUtama = values
            const GabungData = { ...DataUtama, ...DataLain }
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}` + urlFetch, {
                    method: method,
                    body: JSON.stringify(GabungData),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    }
                })
                const data = await res.json()
                data.status == 200 && Berhasil() || data.status == 500 && Gagal()
            }
            catch (e) {
                console.error(e)
            }


            setTimeout(() => {
                setMatikan(false)
                value ? formik.resetForm() : router.push('/admin/list')
            }, 3000)
        },

    });

    return (
        <>
            <div className={styles.containerform}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <div className={styles.kotak1}>
                        <label htmlFor="nama_barang">Nama
                            {formik.touched.nama_barang && formik.errors.nama_barang ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.inputicon}>
                            <div className={styles.text}><MdDriveFileRenameOutline /></div>
                            <textarea
                                id="nama_barang"
                                name="nama_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.nama_barang}
                                placeholder='Baju Santai'
                                style={formik.touched.nama_barang && formik.errors.nama_barang ? { border: '1px solid red' } : null}
                            />
                        </div>
                        <div className={styles.bagi2}>

                            <div className={styles.harga}>
                                <label htmlFor="harga_barang">Harga
                                    {formik.touched.harga_barang && formik.errors.harga_barang ? (
                                        <div style={{ color: 'red' }}>&nbsp;*</div>
                                    ) : null}
                                </label>
                                <div className={styles.inputicon}>
                                    <div className={styles.text}>Rp</div>
                                    <input
                                        id="harga_barang"
                                        name="harga_barang"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.harga_barang}
                                        placeholder='20000'
                                        style={formik.touched.harga_barang && formik.errors.harga_barang ? { border: '1px solid red' } : null}
                                    />
                                </div>
                            </div>
                            <div className={styles.diskon}>
                                <label htmlFor="diskon_barang">Diskon
                                    {formik.touched.diskon_barang && formik.errors.diskon_barang ? (
                                        <div style={{ color: 'red' }}>&nbsp;*</div>
                                    ) : null}
                                </label>
                                <div className={styles.inputicon}>
                                    <input
                                        maxLength={100}
                                        id="diskon_barang"
                                        name="diskon_barang"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.diskon_barang}
                                        placeholder='50'
                                        style={formik.touched.diskon_barang && formik.errors.diskon_barang ? { border: '1px solid red' } : null}
                                    />
                                    <div className={styles.text}>%</div>
                                </div>
                            </div>
                        </div>


                        <label htmlFor="kategori_barang">Kategori
                            {formik.touched.kategori_barang && formik.errors.kategori_barang ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.inputicon}>
                            <div className={styles.text}><BiSolidCategory /></div>
                            <input
                                id="kategori_barang"
                                name="kategori_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.kategori_barang}
                                placeholder='ex: rumah (tanpa space)'
                                style={formik.touched.kategori_barang && formik.errors.kategori_barang ? { border: '1px solid red' } : null}
                            />
                        </div>
                        <label htmlFor="tag_barang">Tag
                            {formik.touched.tag_barang && formik.errors.tag_barang ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.inputicon}>
                            <div className={styles.text}>#</div>
                            <input
                                id="tag_barang"
                                name="tag_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.tag_barang}
                                placeholder='bulu, santai, ramah'
                                style={formik.touched.tag_barang && formik.errors.tag_barang ? { border: '1px solid red' } : null}
                            />
                        </div>

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
                            style={formik.touched.gambar_barang && formik.errors.gambar_barang ? { border: '1px solid red' } : null}
                        />
                    </div>

                    <div className={styles.kotak2}>
                        <label htmlFor="diskripsi_barang">Diskripsi
                            {formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.inputicon}>
                            <div className={styles.text}><MdDriveFileRenameOutline /></div>
                            <textarea
                                id="diskripsi_barang"
                                name="diskripsi_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.diskripsi_barang}
                                placeholder='ex: terserah'
                                style={formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? { border: '1px solid red' } : null}
                            />
                        </div>
                        <label htmlFor="link_barang">Koneksi
                            {formik.touched.link_barang && formik.errors.link_barang ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.inputicon}>
                            <div className={styles.text}><FaLink /></div>
                            <textarea
                                id="link_barang"
                                name="link_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.link_barang}
                                placeholder='ex: terserah'
                                style={formik.touched.link_barang && formik.errors.link_barang ? { border: '1px solid red' } : null}
                            />
                        </div>
                        <label htmlFor="kupon_barang">Kupon
                            {formik.touched.diskripsi_barang && formik.errors.diskripsi_barang ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.inputicon}>
                            <div className={styles.text}><BsTagsFill /></div>
                            <input
                                id="kupon_barang"
                                name="kupon_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.kupon_barang}
                                placeholder='opsional'
                                style={formik.touched.kupon_barang && formik.errors.kupon_barang ? { border: '1px solid red' } : null}
                            />
                        </div>

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
                            style={formik.touched.rating_barang && formik.errors.rating_barang ? { border: '1px solid red' } : null}
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
                            style={formik.touched.total_penjualan_barang && formik.errors.total_penjualan_barang ? { border: '1px solid red' } : null}
                        />


                        <label htmlFor="jumlah_barang">Jumlah Barang
                            {formik.touched.jumlah_barang && formik.errors.jumlah_barang ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <input
                            id="jumlah_barang"
                            name="jumlah_barang"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.jumlah_barang}
                            placeholder='opsional'
                            style={formik.touched.jumlah_barang && formik.errors.jumlah_barang ? { border: '1px solid red' } : null}
                        />
                        <div className={styles.dalamsubmit}>

                            <div className={styles.isisum}>
                                <button type='submit' disabled={matikan}>Submit</button>
                                {matikan ?
                                    <div className={styles.loading}>
                                        <BarLoader
                                            color={'#ffb700'}
                                            loading={matikan}
                                            size={100}
                                            height={5}
                                            width={181}

                                        />
                                    </div> : null
                                }

                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <ToastContainer limit={3} autoClose={3000} />
        </>
    )
}

