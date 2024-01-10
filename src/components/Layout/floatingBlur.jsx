import styles from '@/components/Layout/floatingBlur.module.css'
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { IoMdClose } from "react-icons/io";

export default function FloatingBlur({ judul, setOpen, children }) {
    useLockBodyScroll()
    return (
        <div className={styles.container}>
            <div className={styles.backgroundblur}
                onClick={setOpen}>
            </div>
            <div className={styles.containerfloating}>
                <div className={styles.containerfloatingdalam}>
                    <div className={styles.atasjudul}>
                        <div className={styles.icon} onClick={setOpen}><IoMdClose /></div>
                        <div className={styles.judul}>{judul}</div>
                        <div></div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
