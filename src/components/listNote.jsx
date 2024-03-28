'use client'
import styles from "@/components/listNote.module.css"
import Image from "next/image"
import { FaShoppingBag } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import CustomBack from '@/lib/customBack';

export default function ListNote({ dataNote }) {
    console.log(dataNote);

    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>

                <div className={styles.atassendiri}>
                    <div className={styles.judul}>Status Pesanan</div>
                    <CustomBack>
                        <div className={styles.backnya}>
                            <IoMdArrowRoundBack size={30} />
                        </div>
                    </CustomBack>
                </div>
                <div>{dataNote?.map((data) => data?.dataPesanan)?.map((dataku) => dataku?.map((data, i) => {
                    return (<>
                        <div key={i} className={styles.list}>
                            <div className={styles.atas}>
                                <div className={styles.kiri}>
                                    <div className={styles.icon}><FaShoppingBag className={styles.icondalam} /></div>
                                    <div>
                                        <div className={styles.text}>Belanja</div>
                                        <div className={styles.tanggalpesanan}>20 maret 2024</div>
                                    </div>
                                </div>
                                <div className={styles.statusperjalanan}>Selesai</div>
                            </div>
                            <div className={styles.tengah}>
                                <div className={styles.gambar}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                        width={50}
                                        height={50}
                                        alt={data?.nama_barang}
                                    /> </div>
                                <div className={styles.deskripsi}>
                                    <div className={styles.judul}> {data.nama_barang_user}</div>
                                    <div className={styles.totalbarang}> {data.jumlah_barang_user} barang</div>
                                </div>
                            </div>
                            <div className={styles.bawah}>
                                <div className={styles.totalbelanja}>
                                    <div className={styles.text}>Total Belanja</div>
                                    <div className={styles.total}>Rp 20.000</div>
                                </div>
                                <div className={styles.belilagi}>Beli Lagi</div>
                            </div>
                        </div>

                    </>)
                }))}
                </div>
            </div>
        </div>
    )
}
