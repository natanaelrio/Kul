import styles from '@/components/introduction.module.css'
export default function Introduction() {
    return (
        <div className={styles.luarcontainer}>
            <div className={styles.container}>
                <div className={styles.typingeffect}>
                    Pilihanmu, Pilihanku
                </div>
                <div className={styles.cursoreffect}>|</div>
            </div>
        </div>
    )
}
