import styles from '@/components/admin/pesanan.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkletonPesanan() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.tanggalinput}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.proses}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.selesai}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.datapesanan}><Skeleton style={{ height: '50px' }} /></div>
            </div>
            <div className={styles.content}>
                <div className={styles.tanggalinput}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.proses}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.selesai}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.datapesanan}><Skeleton style={{ height: '50px' }} /></div>
            </div>
            <div className={styles.content}>
                <div className={styles.tanggalinput}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.proses}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.selesai}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.datapesanan}><Skeleton style={{ height: '50px' }} /></div>
            </div>
            <div className={styles.content}>
                <div className={styles.tanggalinput}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.proses}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.selesai}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.datapesanan}><Skeleton style={{ height: '50px' }} /></div>
            </div>
            <div className={styles.content}>
                <div className={styles.tanggalinput}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.proses}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.selesai}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.datapesanan}><Skeleton style={{ height: '50px' }} /></div>
            </div>
            <div className={styles.content}>
                <div className={styles.tanggalinput}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.proses}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.selesai}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.datapesanan}><Skeleton style={{ height: '50px' }} /></div>
            </div>
            <div className={styles.content}>
                <div className={styles.tanggalinput}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.proses}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.selesai}><Skeleton style={{ height: '50px' }} /></div>
                <div className={styles.datapesanan}><Skeleton style={{ height: '50px' }} /></div>
            </div>
            
        </>
    )
}
