import styles from '@/components/alert/berhasil.module.css'
import { useEffect, useState } from 'react';

export default function Berhasil() {
    const [hilang, setHilang] = useState()
    useEffect(() => {
        const timer = setTimeout(() => {
            setHilang(false)
        }, 3000);
        setHilang(true)
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {hilang ?
                < div className={styles.notif} >
                    <div className={styles.text}>
                        <div className="textdalam">
                            Berhasil input
                        </div>
                        <div className={styles.close} onClick={() => setHilang(false)}>x</div>
                    </div>
                </div >
                : null}

        </>
    )
}
