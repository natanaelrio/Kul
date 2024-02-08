import FloatingBlur from '@/components/Layout/floatingBlur';
import { useStore } from '@/lib/zustand'
import styles from '@/components/paymenterrorpending.module.css'

export default function PaymentErrorPending() {
    const setOpenFormPending = useStore((state) => state.setOpenFormPending)

    return (
        <FloatingBlur setOpen={setOpenFormPending} judul={'GAGAL !!!'} >
            <div className={styles.container}>
                <div className={styles.text}>
                    Ada Kesalahan System, <br />Mohon Ulang!!
                </div>
                <div className={styles.back} onClick={setOpenFormPending}>
                    OK
                </div>
            </div>
        </FloatingBlur>
    )
}
