"use client"
import styles from '@/components/admin/layout/backLayang.module.css'

export default function BackLayang({ children, setOpen,judul }) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundblur} onClick={setOpen}>
                </div>
                <div className={styles.backlayang}>
                    <div className={styles.judulclose}>
                        <div className={styles.judul}>{judul}</div>
                        <div className={styles.close} onClick={setOpen}>X</div>
                    </div>
                    { children }
                </div>
            </div >
        </>
    )
}