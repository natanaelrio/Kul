import styles from '@/components/love.module.css'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/zustand'

export default function Love() {
    const setOpenLove = useStore((state) => state.setOpenLove)
    const loveZ = useStoreDataFront((state) => state.loveZ)
    return (
        <FloatingBlur setOpen={setOpenLove} judul={'Keranjang Cinta'} >
            <div className={styles.container}>

                {loveZ.map((data, i) => {
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
                                            <div className={styles.hargadalam}>Rp{data.harga_barang}&nbsp;</div>
                                            <div className={styles.hargadiskon}>Rp{((data.harga_barang * data.diskon_barang) / 100) + data.harga_barang}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tambahkurang}>
                                            <div className={styles.kurang}>-</div><div className={styles.nilai}>12</div> <div className={styles.tambah}>+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.delete}><MdDelete /></div>
                        </div>
                    )
                })}



            </div>
            <div className={styles.total}>
                <div className={styles.harga}>
                    Total :<div className={styles.totalpembayaran}>Rp400.000</div>
                </div>
                <div>
                    <div className={styles.bayarlangsung}>Bayar Langsung</div>
                </div>
            </div>
        </FloatingBlur>

    )
}
