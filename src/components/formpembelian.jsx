'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/formpembelian.module.css'
import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'

export default function FormPembelian() {
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            namalengkap: '',
            nohp: '',
            alamatlengkap: '',
            kodepos: '',
            catatan: '',
            kupon: ''
        },
        validationSchema: Yup.object({
            namalengkap: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            nohp: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            alamatlengkap: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            kodepos: Yup.string()
                .max(10, 'harus 10 karakter')
                .required('require'),
            catatan: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            kupon: Yup.string()
                .max(10, 'harus 10 karakter'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 1));
            // console.log(values);
        },
    });
    return (
        <FloatingBlur setOpen={setOpenFormPembelian} judul={'FORMULIR PENGIRIMAN'} >
            <div className={styles.containerform}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <label htmlFor="namalengkap">Nama Lengkap
                        {formik.touched.namalengkap && formik.errors.namalengkap ? (
                            <div style={{ color: 'red' }}>&nbsp;*</div>
                        ) : null}
                    </label>
                    <input
                        id="namalengkap"
                        name="namalengkap"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.namalengkap}
                        placeholder='ex: natanael rio wijaya'
                        style={formik.touched.namalengkap && formik.errors.namalengkap ? { border: '1px solid red' } : null}
                    />


                    <label htmlFor="nohp">NO HP
                        {formik.touched.nohp && formik.errors.nohp ? (
                            <div style={{ color: 'red' }}>&nbsp;*</div>
                        ) : null}
                    </label>
                    <input
                        id="nohp"
                        name="nohp"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.nohp}
                        placeholder='ex: 0812488124004'
                        style={formik.touched.nohp && formik.errors.nohp ? { border: '1px solid red' } : null}
                    />



                    <label htmlFor="Alamatlengkap">Alamat Lengkap
                        {formik.touched.alamatlengkap && formik.errors.alamatlengkap ? (
                            <div style={{ color: 'red' }}>&nbsp;*</div>
                        ) : null}
                    </label>
                    <input
                        id="alamatlengkap"
                        name="alamatlengkap"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.alamatlengkap}
                        placeholder='ex: jl merdeka, rt 01/03. keboyan'
                        style={formik.touched.alamatlengkap && formik.errors.alamatlengkap ? { border: '1px solid red' } : null}
                    />

                    <label htmlFor="kodepos">Kode POS
                        {formik.touched.kodepos && formik.errors.kodepos ? (
                            <div style={{ color: 'red' }}>&nbsp;*</div>
                        ) : null}
                    </label>
                    <input
                        id="kodepos"
                        name="kodepos"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.kodepos}
                        placeholder='ex: 53235'
                        style={formik.touched.kodepos && formik.errors.kodepos ? { border: '1px solid red' } : null}
                    />


                    <label htmlFor="catatan">Catatan</label>
                    <textarea
                        id="catatan"
                        name="catatan"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.catatan}
                        placeholder='opsional'
                    />

                    <label htmlFor="kupon">Kupon</label>
                    <input
                        id="kupon"
                        name="kupon"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.kupon}
                        placeholder='opsional'
                    />
                    <button type="submit">Bayar Sekarang</button>
                </form>
            </div>
        </FloatingBlur>
    );

}
