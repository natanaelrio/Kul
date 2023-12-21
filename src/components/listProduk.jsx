import styles from '@/components/listProduk.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function ListProduk() {
    return (
        <>
            <div className={styles.countainer}>
                <div className={styles.judulatas}>
                    Produk Terbaru
                </div>
            </div>
            <div className={styles.countainer}>
                <div className={styles.listproduk}>
                    <div className={styles.gridlist}>
                        
                        <div className={styles.produk}>
                            <Link prefetch={false} href={'/dashboard'}>
                                <div className={styles.gambar}>
                                    <Image
                                        src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className={styles.tengah}>
                                    <div className={styles.judul}>
                                        Kucing Persia
                                    </div>
                                    <div className={styles.harga}>
                                        <div className={styles.hargaasli}>
                                            <div className={styles.hargaaslidalam}>
                                                <div className={styles.rp}>Rp</div>
                                                <div className={styles.hargadalam}>20.000</div>
                                            </div>
                                        </div> &nbsp;
                                        <div className={styles.hargadiskon}>Rp10.000</div>
                                    </div>
                                    <div className={styles.diskon}>Diskon 50%</div>
                                    <div className={styles.ratingterjual}>
                                        <FaStar className={styles.logorating}></FaStar>&nbsp;4.5
                                        <div className={styles.garis} > | </div>
                                        <div className="terjual">1241 terjual</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className={styles.beli}>
                                <div className={styles.iconwa}>
                                    <FaWhatsapp className={styles.iconwadalam} />
                                </div>
                                <div className={styles.text}>
                                    &nbsp;Beli via Whatapps
                                </div>
                            </Link>
                        </div>

                        <div className={styles.produk}>
                            <Link href={'/dashboard'}>
                                <div className={styles.gambar}>
                                    <Image
                                        src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className={styles.tengah}>
                                    <div className={styles.judul}>
                                        Kucing Persia
                                    </div>
                                    <div className={styles.harga}>
                                        <div className={styles.hargaasli}>
                                            <div className={styles.hargaaslidalam}>
                                                <div className={styles.rp}>Rp</div>
                                                <div className={styles.hargadalam}>20.000</div>
                                            </div>
                                        </div> &nbsp;
                                        <div className={styles.hargadiskon}>Rp10.000</div>
                                    </div>
                                    <div className={styles.diskon}>Diskon 50%</div>
                                    <div className={styles.ratingterjual}>
                                        <FaStar className={styles.logorating}></FaStar>&nbsp;4.5
                                        <div className={styles.garis} > | </div>
                                        <div className="terjual">1241 terjual</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className={styles.beli}>
                                <div className={styles.iconwa}>
                                    <FaWhatsapp className={styles.iconwadalam} />
                                </div>
                                <div className={styles.text}>
                                    &nbsp;Beli via Whatapps
                                </div>
                            </Link>
                        </div>

                        <div className={styles.produk}>
                            <Link href={'/dashboard'} prefetch={false}>
                                <div className={styles.gambar}>
                                    <Image
                                        src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className={styles.tengah}>
                                    <div className={styles.judul}>
                                        Kucing Persia
                                    </div>
                                    <div className={styles.harga}>
                                        <div className={styles.hargaasli}>
                                            <div className={styles.hargaaslidalam}>
                                                <div className={styles.rp}>Rp</div>
                                                <div className={styles.hargadalam}>20.000</div>
                                            </div>
                                        </div> &nbsp;
                                        <div className={styles.hargadiskon}>Rp10.000</div>
                                    </div>
                                    <div className={styles.diskon}>Diskon 50%</div>
                                    <div className={styles.ratingterjual}>
                                        <FaStar className={styles.logorating}></FaStar>&nbsp;4.5
                                        <div className={styles.garis} > | </div>
                                        <div className="terjual">1241 terjual</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className={styles.beli}>
                                <div className={styles.iconwa}>
                                    <FaWhatsapp className={styles.iconwadalam} />
                                </div>
                                <div className={styles.text}>
                                    &nbsp;Beli via Whatapps
                                </div>
                            </Link>
                        </div>

                        <div className={styles.produk}>
                            <Link href={'/dashboard'}>
                                <div className={styles.gambar}>
                                    <Image
                                        src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className={styles.tengah}>
                                    <div className={styles.judul}>
                                        Kucing Persia
                                    </div>
                                    <div className={styles.harga}>
                                        <div className={styles.hargaasli}>
                                            <div className={styles.hargaaslidalam}>
                                                <div className={styles.rp}>Rp</div>
                                                <div className={styles.hargadalam}>20.000</div>
                                            </div>
                                        </div> &nbsp;
                                        <div className={styles.hargadiskon}>Rp10.000</div>
                                    </div>
                                    <div className={styles.diskon}>Diskon 50%</div>
                                    <div className={styles.ratingterjual}>
                                        <FaStar className={styles.logorating}></FaStar>&nbsp;4.5
                                        <div className={styles.garis} > | </div>
                                        <div className="terjual">1241 terjual</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className={styles.beli}>
                                <div className={styles.iconwa}>
                                    <FaWhatsapp className={styles.iconwadalam} />
                                </div>
                                <div className={styles.text}>
                                    &nbsp;Beli via Whatapps
                                </div>
                            </Link>
                        </div>

                        <div className={styles.produk}>
                            <Link href={'/dashboard'}>
                                <div className={styles.gambar}>
                                    <Image
                                        src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className={styles.tengah}>
                                    <div className={styles.judul}>
                                        Kucing Persia
                                    </div>
                                    <div className={styles.harga}>
                                        <div className={styles.hargaasli}>
                                            <div className={styles.hargaaslidalam}>
                                                <div className={styles.rp}>Rp</div>
                                                <div className={styles.hargadalam}>20.000</div>
                                            </div>
                                        </div> &nbsp;
                                        <div className={styles.hargadiskon}>Rp10.000</div>
                                    </div>
                                    <div className={styles.diskon}>Diskon 50%</div>
                                    <div className={styles.ratingterjual}>
                                        <FaStar className={styles.logorating}></FaStar>&nbsp;4.5
                                        <div className={styles.garis} > | </div>
                                        <div className="terjual">1241 terjual</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className={styles.beli}>
                                <div className={styles.iconwa}>
                                    <FaWhatsapp className={styles.iconwadalam} />
                                </div>
                                <div className={styles.text}>
                                    &nbsp;Beli via Whatapps
                                </div>
                            </Link>
                        </div>

                        <div className={styles.produk}>
                            <Link href={'/dashboard'}>
                                <div className={styles.gambar}>
                                    <Image
                                        src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className={styles.tengah}>
                                    <div className={styles.judul}>
                                        Kucing Persia
                                    </div>
                                    <div className={styles.harga}>
                                        <div className={styles.hargaasli}>
                                            <div className={styles.hargaaslidalam}>
                                                <div className={styles.rp}>Rp</div>
                                                <div className={styles.hargadalam}>20.000</div>
                                            </div>
                                        </div> &nbsp;
                                        <div className={styles.hargadiskon}>Rp10.000</div>
                                    </div>
                                    <div className={styles.diskon}>Diskon 50%</div>
                                    <div className={styles.ratingterjual}>
                                        <FaStar className={styles.logorating}></FaStar>&nbsp;4.5
                                        <div className={styles.garis} > | </div>
                                        <div className="terjual">1241 terjual</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className={styles.beli}>
                                <div className={styles.iconwa}>
                                    <FaWhatsapp className={styles.iconwadalam} />
                                </div>
                                <div className={styles.text}>
                                    &nbsp;Beli via Whatapps
                                </div>
                            </Link>
                        </div>

                        <div className={styles.produk}>
                            <Link href={'/dashboard'}>
                                <div className={styles.gambar}>
                                    <Image
                                        src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className={styles.tengah}>
                                    <div className={styles.judul}>
                                        Kucing Persia
                                    </div>
                                    <div className={styles.harga}>
                                        <div className={styles.hargaasli}>
                                            <div className={styles.hargaaslidalam}>
                                                <div className={styles.rp}>Rp</div>
                                                <div className={styles.hargadalam}>20.000</div>
                                            </div>
                                        </div> &nbsp;
                                        <div className={styles.hargadiskon}>Rp10.000</div>
                                    </div>
                                    <div className={styles.diskon}>Diskon 50%</div>
                                    <div className={styles.ratingterjual}>
                                        <FaStar className={styles.logorating}></FaStar>&nbsp;4.5
                                        <div className={styles.garis} > | </div>
                                        <div className="terjual">1241 terjual</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className={styles.beli}>
                                <div className={styles.iconwa}>
                                    <FaWhatsapp className={styles.iconwadalam} />
                                </div>
                                <div className={styles.text}>
                                    &nbsp;Beli via Whatapps
                                </div>
                            </Link>
                        </div>

                        

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
        </>
    )
}
