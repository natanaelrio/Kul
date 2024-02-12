"use client"
import styles from '@/components/nota.module.css'
import moment from 'moment';
import 'moment/locale/id'
import jsPDF from 'jspdf';

export default function Nota({ dataNota }) {
    const data = dataNota?.data

    const print = async (e) => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        document.querySelector("#pdf").style.width = '600px'
        document.querySelector("#pdf").style.fontSize = '0.5rem'
        document.querySelector("#lunas").style.visibility = 'hidden'
        const data = document.querySelector("#pdf")
        pdf.html(data).then(() => {
            pdf.save(`Nota ${e}.pdf`);
            document.querySelector("#pdf").style.width = 'auto'
            document.querySelector("#lunas").style.visibility = 'unset'
            document.querySelector("#pdf").style.fontSize = 'auto'
        });
    }

    const currentUTCTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    const UpdateNowTimeTanggal = moment(currentUTCTime).format('LL');
    const UpdateNowTimeWaktu = moment(currentUTCTime).format('LT')

    const totalbarang = data?.dataPesanan?.map((data) => data?.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)
    const totalhargasatuan = data?.dataPesanan?.map((data) => data?.harga_barang_satuan).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    const totalsemuabarang = data?.dataPesanan?.map((data) => data?.harga_barang_user).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    return (
        <>
            <div className={styles.container}>
                <div className={styles.download} onClick={() => print(data?.nama_lengkap_user)}>Download</div>
                <div className={styles.isi} id="pdf" >
                    <div className={styles.tulisanlunas} id='lunas'>
                        <div className={styles.textlunas}>
                            LUNAS
                        </div>
                    </div>
                    <div className={styles.atas}>
                        <div className={styles.title}>LOGO</div>
                        <div className={styles.notaid}>
                            <div className={styles.title}> INVOICE </div>
                            {data?.nota_user}
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.infopembeli}>
                        <div className={styles.penjual}>
                            <span className={styles.title2}> Penjual :</span> Natanael Rio Wijaya
                        </div>
                        <div className={styles.pembeli}>
                            <div className={styles.detailluar}>
                                <div className={styles.title2}>    Pembeli </div>
                                <div>:</div>&nbsp;
                                <div className={styles.detail}>{data?.nama_lengkap_user}</div>
                            </div>
                            <div className={styles.detailluar}>
                                <div className={styles.title2}>    Tanggal Pembelian </div>
                                <div>:</div>&nbsp;
                                <div className={styles.detail}>{moment((data?.start)).format('LL')}</div>
                            </div>
                            <div className={styles.detailluar}>
                                <div className={styles.title2}>   Alamat Pengiriman </div>
                                <div>:</div>&nbsp;
                                <div className={styles.detail}>{data?.alamat_lengkap_user}</div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.infoproduk}>
                        <div className={styles.barang}>INFO PRODUK</div>
                        <div className={styles.jumlah} style={{ fontWeight: '700' }}>JUMLAH</div>
                        <div className={styles.hargasatuan} style={{ fontWeight: '700' }}>HARGA SATUAN</div>
                        <div className={styles.totalharga} style={{ fontWeight: '700' }}>TOTALHARGA</div>
                    </div>
                    <hr></hr>
                    {data?.dataPesanan.map((data) => {
                        return (
                            <div className={styles.infoproduk}>
                                <div className={styles.barang}>{data?.nama_barang_user}</div>
                                <div className={styles.jumlah}>{data?.jumlah_barang_user}</div>
                                <div className={styles.hargasatuan}>{(data?.harga_barang_satuan).toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR'
                                })}</div>
                                <div className={styles.totalharga}>{(data?.harga_barang_user).toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR'
                                })}</div>
                            </div>
                        )
                    })}
                    <hr></hr>
                    <div className={styles.infoproduk}>
                        <div className={styles.barang}>TOTAL</div>
                        <div className={styles.jumlah} style={{ fontWeight: '700' }}>{totalbarang}</div>
                        <div className={styles.hargasatuan} style={{ fontWeight: '700' }}>{totalhargasatuan}</div>
                        <div className={styles.totalharga} style={{ fontWeight: '700' }}>{totalsemuabarang}</div>
                    </div>
                    <hr></hr>
                    <div className={styles.alert}>
                        <div className={styles.text}>
                            invoice ini sah dibuat dengan komputer
                        </div>
                        <div className={styles.date}>
                            {UpdateNowTimeTanggal} {UpdateNowTimeWaktu}&nbsp;WIB
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
