import styles from '@/components/Layout/floatingBlur.module.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function FloatingBlur({ judul, setOpen, children }) {

    return (
        <div className={styles.container}>
            <div className={styles.backgroundblur}
                onClick={setOpen}>
            </div>
            <div className={styles.containerfloating}>
                <div className={styles.containerfloatingdalam}>
                    <div className={styles.atasjudul}>
                        <div className={styles.icon} onClick={setOpen}><FaArrowAltCircleLeft /></div>
                        <div className={styles.judul}>{judul}</div>
                        <div></div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
