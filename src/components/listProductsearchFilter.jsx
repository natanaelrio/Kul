'use client'
import styles from '@/components/listProductsearchFilter.module.css'
import { useRouter } from 'next/navigation'
import { useStore } from '@/lib/zustand'
import { FaSortNumericDownAlt } from "react-icons/fa";
import { FaSortNumericUp } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";

export default function ListProductsearchFilter({ query, sortby, fetchMain, fetchSearch }) {
    const router = useRouter()

    const setOpenFilter = useStore((state) => state.setOpenFilter)
    const openFilter = useStore((state) => state.openFilter)

    const LowToHigh = fetchMain && `?sortby=price_low_to_high` || fetchSearch && `search?query=${query}&sortby=price_low_to_high`

    const HighToLow = fetchMain && `?sortby=price_high_to_low` ||
        fetchSearch && `search?query=${query}&sortby=price_high_to_low`

    const ResetHighLow = fetchMain && `?` ||
        fetchSearch && `search?query=${query}`

    return (
        <div className={styles.container}>
            <div className={styles.fill}>
                <div className={styles.tulisan} style={sortby ? { backgroundColor: 'var(--color-primary) ', color: 'var(--color-white)' } : {}} onClick={setOpenFilter}><div>Sort</div> &nbsp; <FaSort /></div>
                {openFilter && <div className={styles.content}>
                    <div className={styles.sort}
                        style={sortby == 'price_low_to_high' ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' } : {}}
                        onClick={() => { router.push(`${process.env.NEXT_PUBLIC_URL}/${LowToHigh}`), setOpenFilter() }}> <div>Lowest ➞ Highest Price </div> <FaSortNumericDownAlt /></div>


                    <div className={styles.sort}
                        style={sortby == 'price_high_to_low' ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' } : {}}
                        onClick={() => { router.push(`${process.env.NEXT_PUBLIC_URL}/${HighToLow}`), setOpenFilter() }}>
                        <div>Highest ➞ Lowest Price</div> <FaSortNumericUp /></div>

                    {sortby &&
                        <div className={styles.sort}
                            style={sortby ? { backgroundColor: 'var(--color-high)', color: 'var(--color-white)' } : {}}
                            onClick={() => { router.push(`${process.env.NEXT_PUBLIC_URL}/${ResetHighLow}`), setOpenFilter() }}>
                            <div>Reset</div> <HiRefresh />
                        </div>}

                </div>}
            </div>


        </div >
    )
}
