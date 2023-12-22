"use client"
import styles from "@/components/admin/detailList.module.css"
import BackLayang from '@/components/admin/layout/backLayang';
import { useStore } from '@/lib/zustand'
import Image from 'next/image'
import { useRouter } from "next/navigation";

export default function DetailList(props) {
    const setOpen = useStore((state) => state.setOpenDetailProdukAdmin)
    const router = useRouter()

    const HandleDelete = async (e) => {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/delete`, {
            method: 'DELETE',
            // data: e,
            body: JSON.stringify(e),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            }
        })
        router.refresh()
    }
    return (
        <BackLayang setOpen={setOpen} judul={'Detail Produk'}>
            <div className={styles.slug}>{props.data?.slug_barang}</div>
            <div className={styles.container}>

                <div className={styles.gambar}>
                    <div className={styles.gambardalam}>
                        <Image
                            src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        Nama
                    </div>
                    <div className={styles.detail}>
                        {props.data?.nama_barang}
                    </div>
                </div>

                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        Deskripsi
                    </div>
                    <div className={styles.detail}>
                        {props.data?.diskripsi_barang}
                    </div>
                </div>

                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        Harga
                    </div>
                    <div className={styles.detail}>
                        {props.data?.harga_barang}
                    </div>
                </div>

                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        Diskon
                    </div>
                    <div className={styles.detail}>
                        {props.data?.diskon_barang}
                    </div>
                </div>

                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        Kategori
                    </div>
                    <div className={styles.detail}>
                        {props.data?.kategori_barang}
                    </div>
                </div>

                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        Kupon
                    </div>
                    <div className={styles.detail}>
                        {props.data?.kupon_barang}
                    </div>
                </div>

                <br />

                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        Rating
                    </div>
                    <div className={styles.detail}>
                        {props.data?.rating_barang}
                    </div>
                </div>

                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        Total Penjualan
                    </div>
                    <div className={styles.detail}>
                        {props.data?.total_penjualan_barang}
                    </div>
                </div>

                <div className={styles.containerdata}>
                    <div className={styles.judul}>
                        View
                    </div>
                    <div className={styles.detail}>
                        {props.data?.view_barang}
                    </div>
                </div>
            </div>

            <div className={styles.deleteupdate}>
                <div className={styles.delete} onClick={() => {
                    alert('yakin ? hapus ?')
                    setOpen()
                    HandleDelete({ "id": props.data?.btoa })
                }}>Delete</div>
                <div className={styles.update} onClick={() => {
                    setOpen()
                    router.push(`/admin/update/${props.data?.btoa}`)
                }
                }>Update</div>
            </div>
        </BackLayang>
    )
}
