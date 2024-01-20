import styles from '@/components/footer.module.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {

    return (
        <footer className={styles.bawah}>
            <div className={styles.isi}>
                <div className={styles.powerby}>
                    © with ❤️ <b>Natanael Rio Wijaya</b>
                </div>
                <div className={styles.sosmed}>
                    <Link href="/" aria-label={'logofb'}> <FaFacebookSquare className={styles.sosmeddalam} /></Link>
                    <Link href="/" aria-label={'logoig'}> <FaInstagramSquare className={styles.sosmeddalam} /></Link>
                    <Link href="/" aria-label={'logotw'}> <FaTwitterSquare className={styles.sosmeddalam} /></Link>
                </div>
            </div>
        </footer>
    )
}
