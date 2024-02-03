import styles from '@/components/love.module.css'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import { TbShoppingBagX } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import FloatingBlur from '@/components/Layout/floatingBlur';
import CustomLink from '@/lib/customLink'
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useState } from 'react';

export default function Love() {
    const setOpenLove = useStore((state) => state.setOpenLove)

    const loveZ = useStoreDataFront((state) => state.loveZ)
    const setDeleteLoveZ = useStoreDataFront((state) => state.setDeleteLoveZ)

    const setDeleteKeranjangZ = useStoreDataFront((state) => state.setDeleteKeranjangZ)
    const setdataKeranjangZ = useStoreDataFront((state) => state.setdataKeranjangZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)

    const [isValidasiDelete, setIsValidasiDelete] = useState(false)
    const handleDeleteLove = (id) => {
        setDeleteLoveZ(id)
    }

    const [uidDelete, setUidDelete] = useState(0)
    const handleValidasiDelete = (e) => {
        setIsValidasiDelete(true)
        setUidDelete(e)
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
                            const diskonharga = data.harga_total_barang.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            })
                            const harga = (data.harga_total_barang - (((((data.harga_total_barang * data.diskon_barang) / 100) + data.harga_total_barang)) - data.harga_total_barang)).toLocaleString('id-ID', {
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
                                            {data.id && keranjangZ.filter((e) => e.id == data.id).map((e) => e.id).toString() ?
                                                <div className={styles.keranjanggambar}
                                                    onClick={() => setDeleteKeranjangZ(data.id)}>
                                                    <div className={styles.kotak1}></div>
                                                    <div className={styles.kotak2}>
                                                        <div className={styles.bgkotak2}
                                                            style={{ background: 'var(--color-high' }}></div>
                                                        <TbShoppingBagX size={20} className={styles.logo} />
                                                    </div>
                                                </div>
                                                :
                                                <div className={styles.keranjanggambar}
                                                    onClick={() => setdataKeranjangZ(data, data.harga_barang)}>
                                                    <div className={styles.kotak1}></div>
                                                    <div className={styles.kotak2}>
                                                        <div className={styles.bgkotak2}></div>
                                                        <TbShoppingBagPlus size={20} className={styles.logo} />
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <CustomLink href={`/products/${data.slug_barang}`}>
                                            <div className={styles.detail} onClick={setOpenLove}>
                                                <div className={styles.judul}>{data.nama_barang}</div>
                                                <div className={styles.harga}>
                                                    <div className={styles.hargadalam}>{harga}&nbsp;</div>
                                                    <div className={styles.hargadiskon}>{diskonharga}</div>
                                                </div>
                                                Detail Produk...
                                            </div>
                                        </CustomLink>
                                    </div>
                                    <div className={styles.action}>
                                        <div className={styles.delete} >
                                            <MdDelete style={{ cursor: 'pointer' }} onClick={() => handleValidasiDelete(data.id)} />
                                            {data.id == uidDelete && isValidasiDelete && <div className={styles.validasi}>
                                                <div className={styles.yes} onClick={() => handleDeleteLove(data.id)}>YES</div>
                                                <div className={styles.no} onClick={() => handleValidasiDelete()}>NO</div>
                                            </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div style={{ padding: '5px' }}></div>
                </>}
        </FloatingBlur>

    )
}
