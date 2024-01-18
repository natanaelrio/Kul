"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import ListProduk from '@/components/Layout/ListProduct'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import ListProductsearchFilter from '@/components/listProductsearchFilter'
import FilterBlur from '@/components/Layout/filterBlur'
import { useStore } from '@/lib/zustand'

export default function ListProductsearch() {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')
    const sortby = searchParams.get('sortby')

    const datasearch = useStoreListDataProduct((state) => state.datasearch)
    const fetchdatasearch = useStoreListDataProduct((state) => state.fetchdatasearch)
    const openFilter = useStore((state) => state.openFilter)

    useEffect(() => {
        fetchdatasearch(query, sortby)
    }, [fetchdatasearch])


    return (
        <>
            <ListProductsearchFilter />
            <ListProduk
                data={datasearch}
                fetchSearch={true}
                value={query}
                judul={`Hasil Pencarian <span style='color:var(--color-primary)'>${query}</span> ${datasearch?.data?.length == 0 ? 'tidak ditemukan' : `ditemukan ${datasearch?.data?.length}`}`}
            />
            {openFilter && <FilterBlur />}
        </>
    )
}
