"use client"
import styles from '@/components/admin/login.module.css'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useSession, signIn } from "next-auth/react"

export default function Login() {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validasi, setValidasi] = useState(false)
    const { status, data: session } = useSession()

    const handleSumbit = async (e) => {
        e.preventDefault()

        await signIn('credentials', {
            email: username,
            password: password,
            redirect: false
        })
        if (status == 'unauthenticated') setValidasi(true)
    }
    useEffect(() => {
        if (status == 'authenticated') router.push('/admin/pesanan')
    }, [status])


    if (status == 'unauthenticated')
        return (
            <div className={styles.container}>
                <div className={styles.login}>
                    <div className={styles.judul}>Sign In</div>
                    <form onSubmit={handleSumbit}>
                        <div className={styles.username}>
                            <label>Username</label>
                            <input
                                type="email"
                                placeholder='username'
                                onChange={(e) => setUsername(e.target.value)}
                                value={username} />
                        </div>
                        <div className={styles.password}>
                            <label>Password</label>
                            <input type="password"
                                placeholder='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} />
                        </div>
                        <div className={styles.submit} type='submit'>
                            <button>Login</button>
                        </div>
                    </form>
                    {validasi && <div className={styles.salah}>salahhh</div>}
                </div>

                <div className={styles.back}>
                    <FaArrowLeft onClick={() => router.back()} />
                </div>
            </div >
        )
    if (status == 'loading')
        return <div className={styles.loading}>
            <div className={styles.dalamloading}>
                Loading....
            </div>
        </div>

    return <div className={styles.loading}>
        <div className={styles.dalamloading}>
            Loading....
        </div>
    </div>

    // return <p>Access Denied</p>
}
