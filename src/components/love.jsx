import styles from '@/components/love.module.css'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/zustand'
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from 'react';

export default function Love() {
    const setOpenLove = useStore((state) => state.setOpenLove)
    const loveZ = useStoreDataFront((state) => state.loveZ)



    const setdataLoveZ = useStoreDataFront((state) => state.setdataLoveZ)

    const setdataKeranjangZ = useStoreDataFront((state) => state.setdataKeranjangZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)

    console.log(keranjangZ);

    const [dataKeranjang, setDataKeranjang] = useState([])
    const handleKeranjang = (e) => {
        setDataKeranjang([...dataKeranjang, e])
        setdataKeranjangZ([...dataKeranjang, e])
    }

    const handleDelete = (e) => {
        const newTodos = [...loveZ]
        newTodos.splice(e, 1)
        setdataLoveZ(newTodos)
    }

    return (
        <FloatingBlur setOpen={setOpenLove} judul={`List Favorit`} >

            {loveZ && loveZ.length == 0 ? <div className={styles.notfound}>
                <div className={styles.belum}>
                    Belum Ada Pilihan &nbsp;<FaRegHeart />
                </div>
                <div className={styles.kembali} onClick={setOpenLove}>Kembali Beranda</div>
            </div>
                : <>
                    <div className={styles.container}>

                        {loveZ.map((data, i) => {
                            const harga = data.harga_barang.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })
                            const diskonharga = (((data.harga_barang * data.diskon_barang) / 100) + data.harga_barang).toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })
                            return (
                                <div key={i} className={styles.list}>
                                    <div className={styles.detailluar}>
                                        <div className={styles.gambar}>
                                            <Image src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                                width={150}
                                                height={100}
                                                alt={data?.nama_barang} />
                                        </div>
                                        <div className={styles.detail}>
                                            <div>
                                                <div className={styles.judul}>{data.nama_barang}</div>
                                                <div className={styles.harga}>
                                                    <div className={styles.hargadalam}>{harga}&nbsp;</div>
                                                    <div className={styles.hargadiskon}>{diskonharga}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={styles.tambahkeranjang} onClick={() => handleKeranjang(data)}>
                                                    <LuShoppingCart />&nbsp;Keranjang +
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.delete} onClick={() => handleDelete(i)}><MdDelete /></div>
                                </div>
                            )
                        })}

                    </div>
                    <div style={{ padding: '5px' }}></div>
                </>}
        </FloatingBlur>

    )
}
