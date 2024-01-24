"use client"
import ListProduk from '@/components/Layout/ListProduct'
import ListProductsearchFilter from '@/components/listProductsearchFilter'
import FilterBlur from '@/components/Layout/filterBlur'
import { useStore } from '@/lib/zustand'
import SkletonList from '@/components/skletonList'
import { Suspense } from 'react'

export default function ListProductsearch({ data, query, sortby }) {
    const openFilter = useStore((state) => state.openFilter)
    return (
        <>
            <ListProductsearchFilter sortby={sortby} query={query} />
            <Suspense fallback={<SkletonList />}>
                <ListProduk
                    data={data?.data}
                    fetchSearch={true}
                    value={query}
                    judul={`Hasil Pencarian <span style='color:var(--color-primary)'>${query}</span> ${data?.data?.length == 0 ? 'tidak ditemukan' : `ditemukan ${data?.data?.length}`}`}
                />
            </Suspense>
            {openFilter && <FilterBlur />}
        </>
    )
}
