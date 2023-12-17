import styles from '@/components/admin/login.module.css'

export default function Login() {
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
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}
