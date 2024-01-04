import styles from "@/components/pencariannew.module.css"
import Image from "next/image"
import { useStore } from '@/utils/user-front/zustand'
import { useEffect } from "react"
import SkletonSearch from "@/components/skletonSearch"

export default function Pencariannew(props) {

    // const datasearch = useStore((state) => state.datasearch)
    // const fetchdatasearch =  useStore((state) => state.fetchdatasearch(props.value))

    // useEffect(() => {
    //     fetchdatasearch
    // }, [fetchdatasearch])

    // console.log(props.value);
    // console.log(datasearch);
    // console.log(props.skleton);
    return (
        <div className={styles.hasil}>
            {props.data || props.skleton ? null : <SkletonSearch />}
            {props.data?.map((data, i) => {
                return (
                    <div key={i} className={styles.list}>
                        <div className={styles.gambar}>
                            <Image
                                src={data.gambar_barang ? data.gambar_barang : `${process.env.NEXT_PUBLIC_URL}/no-image.png`}
                                width={50}
                                height={50}
                                alt={data?.nama_barang}
                            />
                        </div>
                        <div className={styles.judulhargadiskon}>
                            <div className={styles.judul}>
                                {data?.nama_barang}
                            </div>
                            <div className={styles.hargahargadiskon}>
                                <div className={styles.harga}>Rp{data?.harga_barang}</div>&nbsp;
                                <div className={styles.hargadiskon}>Rp{(data?.harga_barang * data?.diskon_barang / 100) + data?.harga_barang}</div>
                            </div>
                        </div>
                    </div>
                )
            })}

            {props.notfound ? null : <div className={styles.notfound}>coba cari lainnya....</div>}
        </div>
    )
}
