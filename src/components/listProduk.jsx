import React from 'react'
import LayoutUtama from './Layout/layoutUtama'
import styles from './listProduk.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Introduction from './introduction'


export default function ListProduk() {
    return (
        <LayoutUtama>

            <div className={styles.countainer}>
                <Introduction />
            </div>

            <div className={styles.countainer}>
                <div className={styles.judulatas}>
                    Produk Terbaru
                </div>
            </div>
            <div className={styles.countainer}>
                <div className={styles.listproduk}>
                    <div className={styles.gridlist}>
                        <a href="https://google.com" className={styles.produk}>
                            <div className={styles.gambar}>
                                <Image
                                    src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className={styles.judul}>
                                Kucing Persia
                            </div>
                            <div className={styles.review}>
                                <div className={styles.harga}>Rp20.000</div>
                                <div className={styles.rating}><FaStar size={14} className={styles.logorating} />4.5 | 100+terjual    </div>
                            </div>
                            <div className={styles.diskon}>
                                <div className={styles.hargadiskon}>Rp40.000</div>&nbsp;
                                <div className={styles.persendiskon}>(50%)</div>
                            </div>
                            <Link href="/">
                                <div className={styles.beli}>
                                    <div className={styles.iconwa}>
                                        <FaWhatsapp className={styles.iconwadalam} />
                                    </div>
                                    <div className={styles.text}>
                                        &nbsp;Beli via Whatapps
                                    </div>
                                </div>
                            </Link>
                        </a>

                        <a href="https://google.com" className={styles.produk}>
                            <div className={styles.gambar}>
                                <Image
                                    src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className={styles.judul}>
                                Kucing Persia
                            </div>
                            <div className={styles.review}>
                                <div className={styles.harga}>Rp20.000</div>
                                <div className={styles.rating}><FaStar size={14} className={styles.logorating} />4.5 | 100+terjual    </div>
                            </div>
                            <div className={styles.diskon}>
                                <div className={styles.hargadiskon}>Rp40.000</div>&nbsp;
                                <div className={styles.persendiskon}>(50%)</div>
                            </div>
                            <Link href="/">
                                <div className={styles.beli}>
                                    <div className={styles.iconwa}>
                                        <FaWhatsapp className={styles.iconwadalam} />
                                    </div>
                                    <div className={styles.text}>
                                        &nbsp;Beli via Whatapps
                                    </div>
                                </div>
                            </Link>
                        </a>

                        <a href="https://google.com" className={styles.produk}>
                            <div className={styles.gambar}>
                                <Image
                                    src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className={styles.judul}>
                                Kucing Persia
                            </div>
                            <div className={styles.review}>
                                <div className={styles.harga}>Rp20.000</div>
                                <div className={styles.rating}><FaStar size={14} className={styles.logorating} />4.5 | 100+terjual    </div>
                            </div>
                            <div className={styles.diskon}>
                                <div className={styles.hargadiskon}>Rp40.000</div>&nbsp;
                                <div className={styles.persendiskon}>(50%)</div>
                            </div>
                            <Link href="/">
                                <div className={styles.beli}>
                                    <div className={styles.iconwa}>
                                        <FaWhatsapp className={styles.iconwadalam} />
                                    </div>
                                    <div className={styles.text}>
                                        &nbsp;Beli via Whatapps
                                    </div>
                                </div>
                            </Link>
                        </a>

                        <a href="https://google.com" className={styles.produk}>
                            <div className={styles.gambar}>
                                <Image
                                    src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className={styles.judul}>
                                Kucing Persia
                            </div>
                            <div className={styles.review}>
                                <div className={styles.harga}>Rp20.000</div>
                                <div className={styles.rating}><FaStar size={14} className={styles.logorating} />4.5 | 100+terjual    </div>
                            </div>
                            <div className={styles.diskon}>
                                <div className={styles.hargadiskon}>Rp40.000</div>&nbsp;
                                <div className={styles.persendiskon}>(50%)</div>
                            </div>
                            <Link href="/">
                                <div className={styles.beli}>
                                    <div className={styles.iconwa}>
                                        <FaWhatsapp className={styles.iconwadalam} />
                                    </div>
                                    <div className={styles.text}>
                                        &nbsp;Beli via Whatapps
                                    </div>
                                </div>
                            </Link>
                        </a>

                        <a href="https://google.com" className={styles.produk}>
                            <div className={styles.gambar}>
                                <Image
                                    src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className={styles.judul}>
                                Kucing Persia
                            </div>
                            <div className={styles.review}>
                                <div className={styles.harga}>Rp20.000</div>
                                <div className={styles.rating}><FaStar size={14} className={styles.logorating} />4.5 | 100+terjual    </div>
                            </div>
                            <div className={styles.diskon}>
                                <div className={styles.hargadiskon}>Rp40.000</div>&nbsp;
                                <div className={styles.persendiskon}>(50%)</div>
                            </div>
                            <Link href="/">
                                <div className={styles.beli}>
                                    <div className={styles.iconwa}>
                                        <FaWhatsapp className={styles.iconwadalam} />
                                    </div>
                                    <div className={styles.text}>
                                        &nbsp;Beli via Whatapps
                                    </div>
                                </div>
                            </Link>
                        </a>

                        <a href="https://google.com" className={styles.produk}>
                            <div className={styles.gambar}>
                                <Image
                                    src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className={styles.judul}>
                                Kucing Persia
                            </div>
                            <div className={styles.review}>
                                <div className={styles.harga}>Rp20.000</div>
                                <div className={styles.rating}><FaStar size={14} className={styles.logorating} />4.5 | 100+terjual    </div>
                            </div>
                            <div className={styles.diskon}>
                                <div className={styles.hargadiskon}>Rp40.000</div>&nbsp;
                                <div className={styles.persendiskon}>(50%)</div>
                            </div>
                            <Link href="/">
                                <div className={styles.beli}>
                                    <div className={styles.iconwa}>
                                        <FaWhatsapp className={styles.iconwadalam} />
                                    </div>
                                    <div className={styles.text}>
                                        &nbsp;Beli via Whatapps
                                    </div>
                                </div>
                            </Link>
                        </a>

                    </div>
                </div>
            </div>




            <div className={styles.countainer} style={{ marginTop: '-20px' }}>
                <div className={styles.pagination}>
                    <Link href="/"><FaArrowCircleLeft size={30} /></Link>
                    <div className={styles.now}>1</div>
                    <div className={styles.total}>/5</div>
                    <Link href="/"><FaArrowCircleRight size={30} /></Link>
                </div>
            </div>

        </LayoutUtama >
    )
}
