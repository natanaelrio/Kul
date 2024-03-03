import styles from "@/components/listPencarianProduk.module.css"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";
import { useStore } from '@/lib/zustand'
import CustomLink from '@/lib/customLink'

export default async function ListPencarianProduk({ data, value, totalarray }) {
    const router = useRouter()
    const setOpenPencarian = useStore((state) => state.setOpenPencarian)
    const lengthResult = data?.length
    const HighlightText = (e) => {
        const cek = new RegExp(value, 'gi')
        return e.replace(cek, match => `<span style='color: var(--color-high)'>${match}</span>`)
    }
    return (
        <>
            {data?.length ? <div className={styles.result}>   <div className={styles.judul}>Produk</div> &nbsp; <span style={{ color: 'var(--color-high)' }}>{value}</span>, {lengthResult}, dari {totalarray} data</div>
                : <div className={styles.result}>   <div className={styles.judul}>Produk</div> &nbsp;<span style={{ color: 'var(--color-high)' }}>{value}</span>, {lengthResult} data</div>}
            {data?.map((data, i) => {
                return (
                    <div key={i}>
                        <CustomLink href={`/products/${data?.slug_barang}`} title={data?.nama_barang}>
                            <div className={styles.listproduk} onClick={() => setOpenPencarian()}>
                                <div className={styles.produk}>
                                    <div className={styles.gambar}>
                                        <Image src={data.gambar_barang} width={150} height={150} />
                                    </div>
                                    <div className={styles.text}>
                                        <div className={styles.textdetail} dangerouslySetInnerHTML={{ __html: HighlightText(data?.nama_barang) }}>
                                        </div>
                                        <div className={styles.harga}>
                                            <div className={styles.hargadetail}>Rp.20.000</div>
                                            <div className={styles.hargadiskon}>{data.harga_barang}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CustomLink>
                    </div>
                )
            })}
            {Boolean(data?.length) &&
                <div className={styles.carilebih} onClick={() => { router.push(`/search?query=${value}`), setOpenPencarian() }}> <FaSearch size={17} />&nbsp;cari&nbsp;{totalarray} data, pencarian&nbsp; <span>{value}</span> </div>}
        </>
    )
}
