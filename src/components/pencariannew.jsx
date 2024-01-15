import styles from "@/components/pencariannew.module.css"
import Image from "next/image"
import { useLockBodyScroll } from "@uidotdev/usehooks";
import Link from "next/link"

export default function Pencariannew({ data, notfound, value }) {
    useLockBodyScroll()

    const lengthResult = data.length
    const HighlightText = (e) => {
        const cek = new RegExp(value, 'gi')
        return e.replace(cek, match => `<span style='color: var(--color-high)'>${match}</span>`)
    }

    return (
        <div className={styles.hasil}>
            {data?.map((data, i) => {
                return (
                    <>
                        <div className={styles.result}>hasil pencarian <span style={{ color: 'var(--color-high)' }}>{value}</span>, {lengthResult} data</div>
                        <Link href={`/products/${data.slug_barang}`} key={i} className={styles.list}>
                            <div className={styles.gambar}>
                                <Image
                                    src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                    width={50}
                                    height={50}
                                    alt={data?.nama_barang}
                                />
                            </div>
                            <div className={styles.judulhargadiskon}>
                                <div
                                    className={styles.judul}
                                    dangerouslySetInnerHTML={{ __html: HighlightText(data?.nama_barang) }}>
                                </div>
                                <div className={styles.hargahargadiskon}>
                                    <div className={styles.harga}>Rp{data?.harga_barang}</div>&nbsp;
                                    <div className={styles.hargadiskon}>Rp{(data?.harga_barang * data?.diskon_barang / 100) + data?.harga_barang}</div>
                                </div>
                            </div>
                        </Link >

                    </>
                )
            })}
            {notfound ? null : <div className={styles.notfound}>hasil pencarian <span style={{color: 'var(--color-primary)'}}>{value}</span> tidak ditemukan</div>}
        </div>
    )
}
