"use client"
import styles from '@/components/admin/layout/backLayang.module.css'
import { useLockBodyScroll } from "@uidotdev/usehooks";

export default function BackLayang({ children, setOpen, judul, handleStatusFetch, handleNota, kondisiFetchStatus }) {
    useLockBodyScroll()
    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundblur} onClick={() => { setOpen(), kondisiFetchStatus && handleStatusFetch(handleNota) }}>
                </div>
                <div className={styles.backlayang}>
                    <div className={styles.judulclose}>
                        <div className={styles.judul}>{judul}</div>
                        <div className={styles.close} onClick={() => { setOpen(), kondisiFetchStatus && handleStatusFetch(handleNota) }}>X</div>
                    </div>
                    {children}
                </div>
            </div >
        </>
    )
}