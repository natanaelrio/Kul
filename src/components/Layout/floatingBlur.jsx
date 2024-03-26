import styles from '@/components/Layout/floatingBlur.module.css'
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

export default function FloatingBlur({ judul, setOpen, children }) {
    useLockBodyScroll()
    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.backgroundblur}
                onClick={setOpen}>
            </motion.div>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -1000, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.containerfloating}>
                <div className={styles.containerfloatingdalam}>
                    <div className={styles.atasjudul}>
                        <div className={styles.icon} onClick={setOpen}><IoMdClose /></div>
                        <div className={styles.judul}>{judul}</div>
                        <div></div>
                    </div>
                    {children}
                </div>
            </motion.div>
        </div>
    )
}
