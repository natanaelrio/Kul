import styles from '@/components/jumlahPesanan.module.css'
import { useStore } from '@/lib/zustand'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
export default function JumlahPesanan() {

    const angka = useStore((state) => state.angka)
    const setTambahAngka = useStore((state) => state.setTambahAngka)
    const setKurangAngka = useStore((state) => state.setKurangAngka)

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.kurang} onClick={setKurangAngka}><CiCircleMinus /></div>
                <div className={styles.angka}> {angka}</div>
                <div className={styles.tambah} onClick={setTambahAngka}><CiCirclePlus /></div>
            </div>
        </div >
    )
}
