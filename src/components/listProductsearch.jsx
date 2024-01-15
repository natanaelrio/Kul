"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ListProduk from '@/components/Layout/ListProduct'

export default function ListProductsearch() {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/search-page-all?cari=${query}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                }
            })
            const data = await res.json()
            setData(data)
        }
        fetchData()
    }, [query])

    return (
        <>
            <ListProduk data={data} fetchSearch={true} judul={`Hasil Pencarian <span style='color:var(--color-primary)'>${query}</span> ${data?.data?.length == 0 ? 'tidak ditemukan' : 'ditemukan'}`} />
        </>
    )
}
