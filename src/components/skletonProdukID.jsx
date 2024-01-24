import styles from '@/components/produk.module.css'
import Skeleton from 'react-loading-skeleton'

export default function SkletonProdukID() {
    return (
        <div className={styles.container}>
            <div className={styles.width}>
                <div className={styles.grid}>
                    <div className={styles.reviewproduk}>
                        <div className={styles.containerreview}>
                            <Skeleton style={{ height: '50px', width: '50%' }} />
                            <Skeleton style={{ height: '200px' }} />
                        </div>

                        <div>
                            <Skeleton style={{ height: '50px' }} />
                            <Skeleton style={{ height: '50px' }} />
                        </div>
                    </div>
                    <div className={styles.gambar}>
                        <div className={styles.gambardalam}>
                            <Skeleton className='skletonprodukid' />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
