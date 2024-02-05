import Skeleton from 'react-loading-skeleton'
import styles from '@/components/Layout/ListProduct.module.css'
export default function SkletonList() {
    return (
        <>
            <div className={styles.countainer}>
                <div className={styles.countaineratas}>
                    <div className={styles.judulatas}>
                        <Skeleton style={{ width: '150px' }} />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className={styles.countainer}>
                <div className={styles.listproduk}>
                    <div className={styles.gridlist}>
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                        <Skeleton style={{ height: '250px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}
