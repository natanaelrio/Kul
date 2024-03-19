import styles from '@/components/menuPembelian.module.css'
import { CiChat2 } from "react-icons/ci";
import { useStore } from '@/lib/zustand'

export default function MenuPembelian() {
    const setOpenFormPilihan = useStore((state) => state.setOpenFormPilihan)

    return (
        <div className={styles.container} >
            <div className={styles.width}>
                <div className={styles.chat}>
                    <CiChat2 className={styles.chatlogo} /> Chat
                </div>

                <div className={styles.keranjang}>
                    <a href="#penutup2"> Tambahkan Keranjang</a>
                </div>
                <div className={styles.belilangsung} onClick={setOpenFormPilihan} >
                    <a href="#penutup2">Beli Sekarang</a>
                </div>
            </div>
        </div >
    )
}
