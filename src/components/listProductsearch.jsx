"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import ListProduk from '@/components/Layout/ListProduct'
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'

export default function ListProductsearch() {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')

    const datasearch = useStoreListDataProduct((state) => state.datasearch)
    const fetchdatasearch = useStoreListDataProduct((state) => state.fetchdatasearch)

    useEffect(() => {
        fetchdatasearch(query)
    }, [fetchdatasearch])

    return (
        <>
            <ListProduk data={datasearch} fetchSearch={true} value={query} judul={`Hasil Pencarian <span style='color:var(--color-primary)'>${query}</span> ${datasearch?.data?.length == 0 ? 'tidak ditemukan' : `ditemukan ${datasearch?.data?.length}`}`} />
        </>
    )
}
