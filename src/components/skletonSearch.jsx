import styles from '@/components/skletonSearch.module.css'
import Skeleton from 'react-loading-skeleton'

export default function SkletonSearch() {
    return (
        <div className={styles.container}>
            <div className={styles.skleton} >
                <div className={styles.gambar}>
                    <Skeleton className={styles.skletonicongambar} />
                </div>
                <div className={styles.semuatext}>
                    <Skeleton className={styles.skletonicontext} />
                    <Skeleton className={styles.skletonicontext} width={200} />
                </div>
            </div>

            <div className={styles.skleton} >
                <div className={styles.gambar}>
                    <Skeleton className={styles.skletonicongambar} />
                </div>
                <div className={styles.semuatext}>
                    <Skeleton className={styles.skletonicontext} />
                    <Skeleton className={styles.skletonicontext} width={200} />
                </div>
            </div>

            <div className={styles.skleton} >
                <div className={styles.gambar}>
                    <Skeleton className={styles.skletonicongambar} />
                </div>
                <div className={styles.semuatext}>
                    <Skeleton className={styles.skletonicontext} />
                    <Skeleton className={styles.skletonicontext} width={200} />
                </div>
            </div>

            <div className={styles.skleton} >
                <div className={styles.gambar}>
                    <Skeleton className={styles.skletonicongambar} />
                </div>
                <div className={styles.semuatext}>
                    <Skeleton className={styles.skletonicontext} />
                    <Skeleton className={styles.skletonicontext} width={200} />
                </div>
            </div>

            <div className={styles.skleton} >
                <div className={styles.gambar}>
                    <Skeleton className={styles.skletonicongambar} />
                </div>
                <div className={styles.semuatext}>
                    <Skeleton className={styles.skletonicontext} />
                    <Skeleton className={styles.skletonicontext} width={200} />
                </div>
            </div>
        </div>
    )
}
