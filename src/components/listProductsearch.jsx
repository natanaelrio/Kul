"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useStore } from '@/lib/zustand'
import ListProduk from '@/components/Layout/ListProduct'
import ListProductsearchFilter from '@/components/listProductsearchFilter'
import FilterBlur from '@/components/Layout/filterBlur'

export default function ListProductsearch() {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')

    const openFilter = useStore((state) => state.openFilter)

    const fetchdatasearchfilter = useStoreListDataProduct((state) => state.fetchdatasearchfilter)
    const datasearchfilter = useStoreListDataProduct((state) => state.datasearchfilter)

    useEffect(() => {
        fetchdatasearchfilter(query)
    }, [fetchdatasearchfilter])

    return (
        <>
            <ListProductsearchFilter />
            <ListProduk
                data={datasearchfilter?.data}
                fetchSearch={true}
                value={query}
                judul={`Hasil Pencarian <span style='color:var(--color-primary)'>${query}</span> ${datasearchfilter?.data?.length == 0 ? 'tidak ditemukan' : `ditemukan ${datasearchfilter?.data?.length}`}`}
            />
            {openFilter && <FilterBlur />}
        </>
    )
}
