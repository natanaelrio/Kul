"use client"
import styles from '@/components/admin/login.module.css'
import { useRouter } from 'next/navigation'
export default function Login() {

    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.judul}>LOGIN</div>
                <div className={styles.username}>
                    <input type="text" placeholder='username' />
                </div>
                <div className={styles.password}>
                    <input type="text" placeholder='password' />
                </div>
                <div className={styles.submit}>
                    <button onClick={() => router.push('/admin/list')}>Login</button>
                </div>
            </div>
        </div>
    )
}
