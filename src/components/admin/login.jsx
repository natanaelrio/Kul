"use client"
import styles from '@/components/admin/login.module.css'
import CustomLink from '@/lib/customLink';
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from "react-icons/fa";
export default function Login() {

    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.judul}>Sign In</div>
                <div className={styles.username}>
                    <label>Username</label>
                    <input type="text" placeholder='username' />
                </div>
                <div className={styles.password}>
                    <label>Password</label>
                    <input type="password" placeholder='password' />
                </div>
                <CustomLink href={'/admin/list'}>
                    <div className={styles.submit}>
                        <button>Login</button>
                    </div>
                </CustomLink>
            </div>
            <div className={styles.back}>
                <FaArrowLeft onClick={() => router.back()} />
            </div>
        </div>
    )
}
