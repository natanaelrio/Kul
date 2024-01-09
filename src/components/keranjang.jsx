import styles from '@/components/keranjang.module.css'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { LuShoppingCart } from "react-icons/lu";

export default function Keranjang() {
    const setOpenKeranjang = useStore((state) => state.setOpenKeranjang)
    const setdataKeranjangZ = useStoreDataFront((state) => state.setdataKeranjangZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
    const setDeleteKeranjangZ = useStoreDataFront((state) => state.setDeleteKeranjangZ)

    const totalBarang = keranjangZ.map((data) => data.harga_barang).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });

    const handleDelete = (e) => {
        setDeleteKeranjangZ([...keranjangZ], e)
    }

    return (
        <FloatingBlur setOpen={setOpenKeranjang} judul={`List Belanja`} >

            {keranjangZ && keranjangZ.length == 0 ? <div className={styles.notfound}>
                <div className={styles.belum}>
                    Belum Ada Pilihan &nbsp;<LuShoppingCart />
                </div>
                <div className={styles.kembali} onClick={setOpenKeranjang}>Kembali Beranda</div>
            </div>

                : <>
                    <div className={styles.container}>

                        {keranjangZ.map((data, i) => {
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
                                                <div className={styles.tambahkurang}>
                                                    <div className={styles.kurang}>-</div>
                                                    <div className={styles.nilai}>12</div>
                                                    <div className={styles.tambah}>+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.delete} ><MdDelete style={{ cursor: 'pointer' }} onClick={() => handleDelete(data.id)} /></div>
                                </div>
                            )
                        })}

                    </div>
                    <div style={{ padding: '5px' }}></div>
                    <div className={styles.total}>
                        <div className={styles.harga}>
                            Total :<div className={styles.totalpembayaran}>{totalBarang}</div>
                        </div>
                        <div>
                            <div className={styles.bayarlangsung}>Bayar Langsung</div>
                        </div>
                    </div>
                </>}
        </FloatingBlur>

    )
}
