import styles from '@/components/keranjang.module.css'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { LuShoppingCart } from "react-icons/lu";
import { useKeranjangCount } from '@/utils/user-front/keranjangCountZ'

export default function Keranjang() {
    const setOpenKeranjang = useStore((state) => state.setOpenKeranjang)
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const setdataKeranjangCountZ = useStoreDataFront((state) => state.setdataKeranjangCountZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
    const setDeleteKeranjangZ = useStoreDataFront((state) => state.setDeleteKeranjangZ)
    const resetValueKeranjang = useKeranjangCount((state) => state.resetValueKeranjang)

    const totalBarang = keranjangZ.map((data) => (data.harga_total_barang - ((data.harga_total_barang * data.diskon_barang) / 100))).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });

    const handleCountKeranjang = (data, kondisi) => {
        const id = data.id
        const value = kondisi ? data.value + 1 : data.value - 1
        const jumlahBarang = data.jumlah_barang
        if (value > 0) {
            value > jumlahBarang ? null :
                setdataKeranjangCountZ(id, value)
        }
    }

    const handleKeranjangdanResetValue = (e) => {
        setDeleteKeranjangZ(e), resetValueKeranjang()
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
                                        </div>
                                        <div className={styles.detail}>
                                            <div>
                                                <div className={styles.judul}>{data.nama_barang}</div>
                                                <div className={styles.harga}>
                                                    <div className={styles.hargadalam}>{harga}&nbsp;</div>
                                                    <div className={styles.hargadiskon}>{diskonharga}</div>
                                                </div>
                                            </div>
                                            <div className={styles.jumlahbarang}>
                                                <div className={styles.tambahkurang}>
                                                    <button className={styles.kurang}
                                                        style={data.value <= 1 ? { color: '#c2c2c2' } : null}
                                                        onClick={() => { handleCountKeranjang(data, false) }}>-</button>
                                                    <button className={styles.nilai}>{data.value}</button>
                                                    <button className={styles.tambah}
                                                        style={data.value >= data.jumlah_barang ? { color: '#c2c2c2' } : null}
                                                        onClick={() => { handleCountKeranjang(data, true) }}>+</button>
                                                </div>
                                                <div className={styles.stokbarang}>{data.value >= data.jumlah_barang ? <span>max: {data.jumlah_barang}</span> : data.value <= 1 && <span>min: 1</span>}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.delete} ><MdDelete style={{ cursor: 'pointer' }} onClick={() => handleKeranjangdanResetValue(data.id)} /></div>
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
                            <div className={styles.bayarlangsung} onClick={setOpenFormPembelian}>Bayar Langsung</div>
                        </div>
                    </div>
                </>}
        </FloatingBlur>

    )
}