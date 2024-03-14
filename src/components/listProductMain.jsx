"use client"
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useEffect } from 'react';
import ListProduk from '@/components/Layout/ListProduct'
import { useSearchParams } from 'next/navigation'

export default function ListProductMain({ kondisiProduk }) {
    const searchParams = useSearchParams()
    const sortby = searchParams.get('sortby')
    const datalist = useStoreListDataProduct((state) => state.datalist)
    const fetchdatalist = useStoreListDataProduct((state) => state.fetchdatalist)

    useEffect(() => {
        fetchdatalist(sortby)
    }, [fetchdatalist, sortby])

    return (
        <ListProduk
            data={datalist?.data}
            lengthdata={datalist?.total_array}
            fetchMain={true}
            sortby={sortby}
            judul={`Produk Terbaru`}
            kondisiProduk={kondisiProduk}
            />
    )
}
