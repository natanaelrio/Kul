import styles from '@/components/menuPembelian.module.css'
import { CiChat2 } from "react-icons/ci";
import { useStore } from '@/lib/zustand'

export default function MenuPembelian() {
    const setOpenFormPilihan = useStore((state) => state.setOpenFormPilihan)
    const setOpenFormKeranjang = useStore((state) => state.setOpenFormKeranjang)

    const handleOnTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className={styles.container} >
            <div className={styles.width}>
                <div className={styles.chat}>
                    <CiChat2 className={styles.chatlogo} /> Chat
                </div>

                <div className={styles.keranjang}>
                    <div onClick={() => { setOpenFormKeranjang(), handleOnTop() }}> Tambahkan Keranjang</div>
                </div>
                <div className={styles.belilangsung} onClick={() => { setOpenFormPilihan(), handleOnTop() }} >
                    Beli Sekarang
                </div>
            </div>
        </div >
    )
}
