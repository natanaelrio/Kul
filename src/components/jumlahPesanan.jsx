import styles from '@/components/jumlahpesanan.module.css'
import { useStore } from '@/lib/zustand'
export default function JumlahPesanan() {

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                jumlah Pesanan
            </div>
        </div>
    )
}
