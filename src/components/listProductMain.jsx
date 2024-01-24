"use client"
import ListProduk from '@/components/Layout/ListProduct'

export default function ListProductMain({data}) {
    return (
        <ListProduk data={data?.data} fetchMain={true} judul={`Produk Terbaru`} />
    )
}
