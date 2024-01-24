"use client"
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useEffect } from 'react';
import ListProduk from '@/components/Layout/ListProduct'

export default function ListProductMain() {
    const datalist = useStoreListDataProduct((state) => state.datalist)
    const fetchdatalist = useStoreListDataProduct((state) => state.fetchdatalist)

    useEffect(() => {
        fetchdatalist()
    }, [fetchdatalist])

    return (
        <ListProduk data={datalist?.data} fetchMain={true} judul={`Produk Terbaru`} />
    )
}
