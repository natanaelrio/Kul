"use client"
import styles from '@/components/produk.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { CiShoppingCart } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useStore } from '@/lib/zustand'
import JumlahPesanan from '@/components/jumlahPesanan';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { BsCash } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function Produk() {
    const openJumlah = useStore((state) => state.openJumlah)
    const setOpenJumlah = useStore((state) => state.setOpenJumlah)
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.width}>
                    <div className={styles.navigasi}>
                        <div className={styles.dalamnav}>
                            <Link href="/">Home</Link> / Products
                        </div>
                    </div>
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
                                <div className={styles.deskripsi}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eum temporibus. Quaerat similique numquam quo quae, architecto natus eius fuga, minus qui, voluptatum possimus voluptate ad voluptatem autem magnam corporis quod facere officiis vel. Consequatur itaque aperiam quo. Minus nihil eligendi labore totam odit facere omnis, ab, natus sit architecto, inventore aliquid animi in eos dignissimos consequuntur veniam dolorum soluta quasi maxime similique consectetur. Ullam debitis inventore nobis vero quaerat!
                                </div>
                            </div>
                            <div>
                                <div className={styles.tersedia}>tersedia 10</div>
                                <div className={styles.containerbeli}>
                                    {
                                        openJumlah ? <div className={styles.logokembaliluar} onClick={setOpenJumlah}>
                                            <FaArrowAltCircleLeft className={styles.logokembali} />
                                        </div>
                                            : null
                                    }
                                    {
                                        openJumlah ? < JumlahPesanan />
                                            :
                                            <div className={styles.beli} onClick={setOpenJumlah}>
                                                < div className={styles.belisekarang}>
                                                    <CiShoppingCart className={styles.logobeli} />
                                                    &nbsp; Beli Sekarang!
                                                </div>
                                            </div>
                                    }
                                </div>
                                {openJumlah ?
                                    <div className={styles.bayarchatkeranjang}>
                                        <div className={styles.chatwa}> <FaWhatsapp />&nbsp;Chat</div>
                                        <div className={styles.bayar} onClick={setOpenFormPembelian}><BsCash />&nbsp; Bayar</div>
                                        <div className={styles.keranjang}><BiSolidShoppingBag />&nbsp; +Keranjang</div>
                                    </div> : null

                                }

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
