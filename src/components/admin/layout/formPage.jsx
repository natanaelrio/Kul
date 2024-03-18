"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/admin/layout/formPage.module.css'
import { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";
import { BiSolidCategory } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { BsTagsFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import uidRio from "@/lib/uidRio"
import { FaLink } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import { ContentState, convertFromHTML, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";

export default function FormPage({ urlFetch, method, data, IDListdata, change, value, kondisi, submit }) {
    const router = useRouter()
    const [matikan, setMatikan] = useState(false)

    const uid = uidRio()

    //TODOS
    const [todo, setTodo] = useState(data?.detail_deskripsi_barang?.typeKategori ? data?.detail_deskripsi_barang?.typeKategori : [])

    //KATEGORI 
    const [kategori, setKategori] = useState([])
    const [todoKategori, setTodoKategori] = useState(data?.detail_deskripsi_barang?.kategori ? data?.detail_deskripsi_barang?.kategori : [])

    const [validasiKategori, setValidasiKategori] = useState(false)
    const handleKategori = () => {
        kategori == '' ? setValidasiKategori(true) : setTodoKategori([...new Set([...todoKategori, kategori])]) || setValidasiKategori(false)
    }


    // LIST KATEGORI
    const [typeKategori, setTypeKategori] = useState('')
    const [stock, setStock] = useState(1)
    const [harga, setHarga] = useState(1)
    const [diskon, seDiskon] = useState(100)
    const [kondisiDiskon, setKondisiDiskon] = useState(false)
    const [gambar, setGambar] = useState('')

    const handleTypeKategori = (kategori) => {
        setTodo([...todo, { uid, kategori, typeKategori, stock, harga, diskon, kondisiDiskon, gambar }])
    }

    // console.log(todo)
    // console.log(kondisiDiskon)


    const handleDeleteKategori = (e) => {
        const newTodos = todo.filter((data) => data.uid !== e)
        setTodo(newTodos)
    }

    const handleDeleteListKategori = (dataKategori) => {
        const newTodos = todo.filter((data) => data.kategori !== dataKategori)
        const newTodosKategori = todoKategori.filter((data) => data !== dataKategori)
        setTodo(newTodos)
        setTodoKategori(newTodosKategori)
    }


    const [kondisiList, setKondisiList] = useState(false)
    const [id, setID] = useState('')
    const [valueUpdateTypeKategori, setValueUpdateTypeKategori] = useState('')
    const [valueUpdateStock, setValueUpdateStock] = useState('')
    const [valueUpdateHarga, setValueUpdateHarga] = useState(1)
    const [valueUpdateDiskon, setValueUpdateDiskon] = useState(100)
    const [valueUpdatekondisiDiskon, setValueUpdateKondisiDiskon] = useState(false)
    const [valueUpdategambar, setUpdateGambar] = useState('')

    const handleUpdateKategori = (e) => {
        setTodo(todo.map((data) => data.uid == e ?
            {
                ...data,
                typeKategori: valueUpdateTypeKategori,
                stock: valueUpdateStock,
                harga: valueUpdateHarga,
                diskon: valueUpdateDiskon,
                kondisiDiskon: valueUpdatekondisiDiskon,
                gambar: valueUpdategambar
            }
            : data))
    }


    const handleEdit = (e, typeKategori, stock, harga, diskon, kondisiDiskon, gambar) => {
        setID(e)
        setValueUpdateTypeKategori(typeKategori)
        setValueUpdateStock(stock)
        setValueUpdateHarga(harga)
        setValueUpdateDiskon(diskon)
        setValueUpdateKondisiDiskon(kondisiDiskon)
        setUpdateGambar(gambar)
    }

    // const [resetTypeKategori, setResetTypeKategori] = useState(false)
    const dataGabungFinal = {
        kategori: todoKategori,
        typeKategori: todo
    }


    const kategoriData = dataGabungFinal.kategori
    const typeKategoriData = dataGabungFinal.typeKategori



    // TEXT EDITOR
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    };

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


    const edit = () => {
        const blocksFromHTML = convertFromHTML(data?.diskripsi_barang)
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap,
        )
        setEditorState(EditorState.createWithContent(state))
    }

    useEffect(() => { kondisi && edit() }, [kondisi])


    const ResetDeskripsi = () => {
        const blocksFromHTML = convertFromHTML('&nbsp;')
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap,
        )
        setEditorState(EditorState.createWithContent(state))
    }

    const [warna, setWarna] = useState(data ? data?.warna_barang : '')

    const formik = useFormik({
        initialValues: {
            nama_barang: data ? data?.nama_barang : '',
            // warna_barang: data ? data?.warna_barang : '',
            kategori_barang: data ? data?.kategori_barang : '',
            // harga_barang: data ? data?.harga_barang : '',
            // diskon_barang: data ? data?.diskon_barang : 100,
            rating_barang: data ? data?.rating_barang : '',
            total_penjualan_barang: data ? data?.total_penjualan_barang : '',
            // diskripsi_barang: data ? data?.diskripsi_barang : '',
            // gambar_barang: data ? data?.gambar_barang : '',
            kupon_barang: data ? data?.kupon_barang : '',
            tag_barang: data ? data?.tag_barang : '',
            // jumlah_barang: data ? data?.jumlah_barang : '',
            link_barang: data ? data?.link_barang : '',
        },
        validationSchema: Yup.object({
            nama_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            // warna_barang: Yup.string()
            //     .max(200, 'harus 200 karakter')
            //     .required('require'),
            kategori_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            tag_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            // harga_barang: Yup.number()
            //     .max(2000000000, 'harus 2000000000 karakter')
            //     .required('require'),
            // diskon_barang: Yup.number()
            //     .max(100, 'harus 100 karakter')
            //     .required('require'),
            rating_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            total_penjualan_barang: Yup.number()
                .max(2000000000, 'harus 2000000000 karakter')
                .required('require'),
            // diskripsi_barang: Yup.string()
            //     .max(2000, 'harus 2000 karakter')
            //     .required('require'),
            kupon_barang: Yup.string()
                .max(200, 'harus 200 karakter')
                .required('require'),
            // jumlah_barang: Yup.number()
            //     .max(2000000000, 'harus 2000000000 karakter')
            //     .required('require'),
            link_barang: Yup.string()
                .max(20000, 'harus 200 karakter')
                .required('require'),
        }),

        onSubmit: async values => {
            setMatikan(true)
            const DataLain = {
                end: null,
                btoa: uuidv4(),
                id_namabarang: values.nama_barang,
                warna_barang: warna,
                nama_barang: values.nama_barang,
                slug_barang: values.nama_barang.split(' ').join('-').toLowerCase() + `${warna ? '-' + warna : ''}`,
                diskripsi_barang: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                detail_deskripsi_barang: dataGabungFinal,
                kondisi_diskon_barang: todo[0].kondisiDiskon,
                harga_barang: Number(todo[0].harga),
                jumlah_barang: Number(todo[0].stock),
                diskon_barang: Number(todo[0].diskon),
                gambar_barang: todo[0].gambar
            }

            const DataUtama = values
            const GabungData = { ...DataUtama, ...DataLain }

            const resetData = () => {
                formik.resetForm(),
                    setTodoKategori([]),
                    setTodo([]),
                    setKategori(''),
                    ResetDeskripsi()
                Berhasil()
            }


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
                data.status == 200 && value ? resetData() : router.push('/admin/list') || data.status == 500 && Gagal()
            }
            catch (e) {
                Gagal()
            }

            setTimeout(() => {
                setMatikan(false)
            }, 3000)


        },

    });


    return (
        <>
            <div className={styles.containerform}>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    placeholder="Tulis Diskripsi..."
                    onEditorStateChange={onEditorStateChange}
                    mention={{
                        separator: " ",
                        trigger: "@",
                        suggestions: [
                            { text: "APPLE", value: "apple" },
                            { text: "BANANA", value: "banana", url: "banana" },
                            { text: "CHERRY", value: "cherry", url: "cherry" },
                            { text: "DURIAN", value: "durian", url: "durian" },
                            { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                            { text: "FIG", value: "fig", url: "fig" },
                            { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
                            { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
                        ]
                    }} />


                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <div className={styles.kotak1}>
                        <label htmlFor="nama_barang">Nama
                            {formik.touched.nama_barang && formik.errors.nama_barang ? (
                                <div style={{ color: 'red' }}>&nbsp;*</div>
                            ) : null}
                        </label>
                        <div className={styles.inputicon}>
                            <div className={styles.text}><MdDriveFileRenameOutline /></div>
                            <input
                                list="nama_barang"
                                // id="nama_barang" 
                                name="nama_barang"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.nama_barang}
                                placeholder='Baju Santai'
                                style={formik.touched.nama_barang && formik.errors.nama_barang ? { border: '1px solid red' } : null}
                            />
                            <datalist id="nama_barang">
                                {IDListdata?.map((data, i) => {
                                    return (
                                        <option key={i} value={data.id_namabarang}></option>
                                    )
                                }
                                )}
                            </datalist>
                        </div>

                        <label htmlFor="warna_barang">Warna
                        </label>
                        <div className={styles.inputicon}>
                            <div className={styles.text}><MdDriveFileRenameOutline /></div>
                            <input
                                type="text"
                                onChange={(e) => { setWarna(e.target.value) }}
                                value={warna}
                                placeholder='merah'

                            />

                        </div>

                        {/* <div className={styles.bagi2}>

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
                                <label htmlFor="diskon_barang" onClick={() => setDiskonValue(!diskonValue)} >Diskon &nbsp;<FaCheck color={diskonValue ? 'green' : 'red'} />
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
                                        disabled={!diskonValue}
                                    />
                                    <div className={styles.text}>%</div>
                                </div>
                            </div>
                        </div> */}


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

                        {/* <label htmlFor="gambar_barang">Gambar
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
                        /> */}

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


                        {/* <label htmlFor="jumlah_barang">Jumlah Barang
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
                        /> */}
                    </div>

                    <div className={styles.kotak2}>


                        <label >Kategori  </label>
                        <div className={styles.kategoristock}>
                            <input style={validasiKategori ? { border: '1px solid red' } : {}} type="text" placeholder="nama kategori(warna, ukuran)" value={kategori} onChange={(e) => setKategori(e.target.value)} />
                            <div className={styles.button} onClick={() => handleKategori()}><FaPlusSquare /></div>
                        </div>

                        {kondisiList &&
                            <>
                                <div className={styles.kategoristockinputan} style={{ marginTop: '10px' }}>
                                    <div className={styles.dalaminput}>
                                        <div className={styles.inputanpalingdalam}>
                                            <label>Type</label>
                                            <input type="text" value={valueUpdateTypeKategori} onChange={(e) => setValueUpdateTypeKategori(e.target.value)} />
                                        </div>
                                        <div className={styles.inputanpalingdalam}>
                                            <label>Stock</label>
                                            <input type="number" value={valueUpdateStock} onChange={(e) => setValueUpdateStock(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={styles.dalaminput}>
                                        <div className={styles.inputanpalingdalam}>
                                            <label>Harga</label>
                                            <input type="number" value={valueUpdateHarga} onChange={(e) => setValueUpdateHarga(e.target.value)} />
                                        </div>
                                        <div className={styles.inputanpalingdalam}>
                                            <label>Diskon</label>
                                            <input type="number" value={valueUpdateDiskon} disabled={!valueUpdatekondisiDiskon} onChange={(e) => setValueUpdateDiskon(e.target.value)} />
                                            <div className={styles.cekdiskon} onClick={() => setValueUpdateKondisiDiskon(!valueUpdatekondisiDiskon)} style={valueUpdatekondisiDiskon ? { color: 'green', border: ' 1px solid green' } : { color: 'red', border: ' 1px solid red' }} > Diskon &nbsp;<FaCheck color={valueUpdatekondisiDiskon ? 'green' : 'red'} /></div>
                                        </div>

                                    </div>
                                    <div className={styles.dalaminputgambar}>
                                        <div className={styles.inputanpalingdalam}>
                                            <label>Url Gambar</label>
                                            <input type="text" value={valueUpdategambar} onChange={(e) => setUpdateGambar(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={styles.button} onClick={() => { handleUpdateKategori(id), setKondisiList(false) }}>Update</div>
                                </div >
                            </>
                        }

                        {kategoriData?.map((dataKategori) => {
                            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                            return (
                                <>
                                    <label style={{ borderBottom: `3px solid  ${randomColor}`, marginBottom: '3px', fontSize: '1rem', display: 'flex', justifyContent: 'space-between' }} ><span>{dataKategori}</span>  <span className={styles.editdel} style={{ background: 'var(--color-high)', color: 'var(--color-white)', padding: '4px', marginBottom: '5px', font: '0.7rem' }} onClick={() => handleDeleteListKategori(dataKategori)}>Del</span></label>
                                    <div className={styles.kategoristockinputan}>
                                        <div className={styles.dalaminput}>
                                            <div className={styles.inputanpalingdalam}>
                                                <label>Type</label>
                                                <input type="text" placeholder="Type" onChange={(e) => setTypeKategori(e.target.value)} />
                                            </div>
                                            <div className={styles.inputanpalingdalam}>
                                                <label>Stock</label>
                                                <input type="number" placeholder="Stock" onChange={(e) => setStock(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className={styles.dalaminput}>
                                            <div className={styles.inputanpalingdalam}>
                                                <label>Harga</label>
                                                <input type="number" placeholder="Harga" onChange={(e) => setHarga(e.target.value)} />
                                            </div>
                                            <div className={styles.inputanpalingdalam}>
                                                <label>Diskon</label>
                                                <input type="number" placeholder="Diskon" disabled={!kondisiDiskon} onChange={(e) => seDiskon(e.target.value)} />
                                                <div className={styles.cekdiskon} onClick={() => setKondisiDiskon(!kondisiDiskon)} style={kondisiDiskon ? { color: 'green', border: ' 1px solid green' } : { color: 'red', border: ' 1px solid red' }} > Diskon &nbsp;<FaCheck color={kondisiDiskon ? 'green' : 'red'} /></div>
                                            </div>

                                        </div>
                                        <div className={styles.dalaminputgambar}>
                                            <div className={styles.inputanpalingdalam}>
                                                <label>Url Gambar</label>
                                                <input type="text" placeholder="Gambar" onChange={(e) => setGambar(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className={styles.button} onClick={() => handleTypeKategori(dataKategori)}>Tambahkan</div >
                                    </div >

                                    {typeKategoriData?.map((data, i) => {
                                        return (
                                            data.kategori == dataKategori &&
                                            <>
                                                <div key={i} className={styles.kategoristockeditdel}>
                                                    <div className={styles.listkategori}>{data.typeKategori}</div>
                                                    <div className={styles.datastock}>{data.stock}</div>
                                                    <div className={styles.edit}> <div className={styles.editdel} onClick={() => { handleEdit(data.uid, data.typeKategori, data.stock, data.harga, data.diskon, data.kondisiDiskon, data.gambar), setKondisiList(true) }}>Edit</div ></div>
                                                    <div className={styles.delete}> <div className={styles.editdel} style={{ background: 'var(--color-high)' }} onClick={() => handleDeleteKategori(data.uid)}>Del</div ></div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </>
                            )
                        }
                        )}


                        <div className={styles.dalamsubmit}>

                            <div className={styles.isisum}>
                                <button type='submit' style={matikan ? { background: 'var(--hover-color-grey)' } : {}} disabled={matikan}>{submit}</button>
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
                    </div >

                </form>
            </div>
            <ToastContainer limit={3} autoClose={3000} />
        </>
    )
}

