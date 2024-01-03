import Skeleton from 'react-loading-skeleton'
import styles from '@/components/skletonList.module.css'
export default function SkletonList() {
    return (
        <>
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
            <Skeleton className={styles.skleton} />
        </>
    )
}
