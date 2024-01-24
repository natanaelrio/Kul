import ListProductsearch from "@/components/listProductsearch"
import HeaderFooter from '@/components/Layout/headerFooter'
import { Suspense } from 'react'

export async function generateMetadata({ searchParams  }) {
    return {
        title: `Halaman Pencarian ${searchParams.query}`,
        description: `Halaman Pencarian ${searchParams.query}`,
    }
}

export default function Search() {
    return (
        <HeaderFooter kondisiFalseSearch={false}>
            <Suspense>
                <ListProductsearch />
            </Suspense>
        </HeaderFooter>
    )
}
