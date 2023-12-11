import styles from '@/components/pencarian.module.css'
import FloatingBlur from '@/components/Layout/floatingBlur';
import { IoSearch } from "react-icons/io5";
import { useStore } from '@/lib/zustand'

export default function Pencarian() {
    const setOpenPencarian = useStore((state) => state.setOpenPencarian)

    return (
        <FloatingBlur setOpen={setOpenPencarian} judul={'PENCARIAN'}>
            <div className={styles.pencarian}>
                <div className={styles.pencariandalam}>
                    <IoSearch className={styles.logocaridalam} />
                    <input type="text" placeholder='cari disini...' />
                </div>
            </div>
            <div className={styles.isipencarian}>
                Tidak ada hasil Pencarian!
            </div>
        </FloatingBlur>
    )
}
