import styles from '@/components/footer.module.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import CustomLink from '@/lib/customLink'

export default function Footer() {

    return (
        <footer className={styles.bawah}>
            <div className={styles.isi}>
                <div className={styles.powerby}>
                    © with ❤️ <b>Natanael Rio Wijaya</b>
                </div>
                <div className={styles.sosmed}>
                    <CustomLink href="/" arialabel={'logofb'}> <FaFacebookSquare className={styles.sosmeddalam} /></CustomLink>
                    <CustomLink href="/" arialabel={'logoig'}> <FaInstagramSquare className={styles.sosmeddalam} /></CustomLink>
                    <CustomLink href="/" arialabel={'logotw'}> <FaTwitterSquare className={styles.sosmeddalam} /></CustomLink>
                </div>
            </div>
        </footer>
    )
}
