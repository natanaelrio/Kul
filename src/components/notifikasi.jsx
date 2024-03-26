import styles from '@/components/notifikasi.module.css'
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Notifikasi({ textNotif }) {
  return (
    <motion.div
      initial={{ y: 0, }}
      animate={{ y: 300 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container} >
      <div className={styles.text}>{textNotif} &nbsp; <FaCheck /></div>
    </motion.div>
  )
}
