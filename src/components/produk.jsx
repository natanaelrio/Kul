"use client"
import styles from '@/components/produk.module.css'
import Image from 'next/image'
import { IoShieldOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useStore } from '@/lib/zustand'

export default function Produk() {
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const angka = useStore((state) => state.angka)
    const setTambahAngka = useStore((state) => state.setTambahAngka)
    const setKurangAngka = useStore((state) => state.setKurangAngka)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.width}>

                    <div className={styles.grid}>
                        <div className={styles.reviewproduk}>
                            <div className={styles.containerreview}>
                                <div className={styles.judul}>Kucing Persia</div>
                                <div className={styles.terjual}>Terjual 100++ • <FaStar size={12} /> 4.7</div>
                                <div className={styles.reviewharga}>
                                    <div className={styles.harga}>Rp20.000</div> &nbsp;|&nbsp; <div className={styles.kategori}>#Hewan</div>
                                </div>
                                <div className={styles.diskon}>
                                    <div className={styles.angkadiskon}>90%</div>
                                    &nbsp;
                                    <div className={styles.hargadiskon}>Rp.10.000</div>
                                </div>
                                <div className={styles.deskripsi}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, unde vero fugit et magni numquam culpa exercitationem eaque harum aspernatur pariatur omnis, recusandae sit. Soluta similique nisi itaque eveniet earum?
                                </div>
                            </div>
                            <div>

                                <div className={styles.jumlah}>
                                    <div className={styles.kata}>Kuantitas</div>
                                    <div className={styles.button}>
                                        <button onClick={setKurangAngka} style={
                                            angka <= 1 ? { color: '#c2c2c2' } : null
                                        }>-</button>
                                        <div className={styles.angka}>{angka}</div>
                                        <button onClick={setTambahAngka}>+</button>
                                    </div>
                                </div>
                                <div className={styles.keranjang}>
                                    <button>Tambahkan Keranjang</button>
                                </div>
                                <div className={styles.belisekarang}>
                                    <button onClick={setOpenFormPembelian}>Beli Sekarang</button>
                                </div>
                                <div className={styles.garansi}> <IoShieldOutline /> &nbsp;30 day return guarantee</div>
                            </div>
                        </div>
                        <div className={styles.gambar}>
                            <div className={styles.gambardalam}>
                                <Image
                                    src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                                <div className={styles.gratisongkir}>
                                    Gratis Ongkir
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
