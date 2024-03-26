"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useStore } from '@/lib/zustand'
import ListProduk from '@/components/Layout/ListProduct'
import FilterBlur from '@/components/Layout/filterBlur'

export default function ListProductsearch() {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')
    const sortby = searchParams.get('sortby')
    const openFilter = useStore((state) => state.openFilter)

    const fetchdatasearchfilter = useStoreListDataProduct((state) => state.fetchdatasearchfilter)
    const datasearchfilter = useStoreListDataProduct((state) => state.datasearchfilter)

    useEffect(() => {
        fetchdatasearchfilter(query, sortby)
    }, [query, sortby, fetchdatasearchfilter])

    return (
        <>
            <ListProduk
                data={datasearchfilter?.data}
                fetchSearch={true}
                lengthdata={datasearchfilter?.total_array}
                query={query}
                sortby={sortby}
                judul={`Hasil Pencarian <span style='color:var(--color-primary)'>${query}</span> ${datasearchfilter?.data?.length == 0 ? 'tidak ditemukan' : `ditemukan ${datasearchfilter?.total_array}`}`}
                kondisiProduk={true}
            />
            {openFilter && <FilterBlur />}
        </>
    )
}
