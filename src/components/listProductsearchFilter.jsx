import styles from '@/components/listProductsearchFilter.module.css'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useSearchParams } from 'next/navigation'
import { useStore } from '@/lib/zustand'
import { FaSortNumericDownAlt } from "react-icons/fa";
import { FaSortNumericUp } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";

export default function ListProductsearchFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get('query')
    const sort = searchParams.get('sortby')

    const setOpenFilter = useStore((state) => state.setOpenFilter)
    const openFilter = useStore((state) => state.openFilter)
    const fetchdatasearchfilter = useStoreListDataProduct((state) => state.fetchdatasearchfilter)

    useEffect(() => {
        fetchdatasearchfilter(query, sort)
    }, [fetchdatasearchfilter, query, sort])

    return (
        <div className={styles.container}>
            <div className={styles.fill}>
                <div className={styles.tulisan} style={sort ? { backgroundColor: 'var(--color-primary) ', color: 'var(--color-white)' } : {}} onClick={setOpenFilter}><div>Sort Price</div> &nbsp; <FaSort /></div>
                {openFilter && <div className={styles.content}>
                    <div className={styles.sort}
                        style={sort == 'price_low_to_high' ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' } : {}}
                        onClick={() => { router.push(`${process.env.NEXT_PUBLIC_URL}/search?query=${query}&sortby=price_low_to_high`), setOpenFilter() }}> <div>Lowest ➞ Highest Price </div> <FaSortNumericDownAlt /></div>


                    <div className={styles.sort}
                        style={sort == 'price_high_to_low' ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' } : {}}
                        onClick={() => { router.push(`${process.env.NEXT_PUBLIC_URL}/search?query=${query}&sortby=price_high_to_low`), setOpenFilter() }}>
                        <div>Highest ➞ Lowest Price</div> <FaSortNumericUp /></div>

                    {sort &&
                        <div className={styles.sort}
                            style={sort ? { backgroundColor: 'var(--color-high)', color: 'var(--color-white)' } : {}}
                            onClick={() => { router.push(`${process.env.NEXT_PUBLIC_URL}/search?query=${query}`), setOpenFilter() }}>
                            <div>Reset</div> <HiRefresh />
                        </div>}

                </div>}
            </div>


        </div >
    )
}