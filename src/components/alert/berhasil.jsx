import styles from '@/components/alert/berhasil.module.css'
import { useEffect, useState } from 'react';

export default function Berhasil(props) {
    const [hilang, setHilang] = useState()
    useEffect(() => {
        const timer = setTimeout(() => {
            setHilang(false)
        }, 300000);
        setHilang(true)
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {hilang ?
                < div className={styles.notif} >
                    <div className={styles.text}>
                        <div className="textdalam">
                            Berhasil {props.data}
                        </div>
                        <div className={styles.close} onClick={() => setHilang(false)}>x</div>
                    </div>
                </div >
                : null}
        </>
    )
}
