import ListProductsearch from "@/components/listProductsearch"
import HeaderFooter from '@/components/Layout/headerFooter'
import { Suspense } from 'react'

export default function Search() {
    return (
        <HeaderFooter>
            <Suspense>
                <ListProductsearch />
            </Suspense>
        </HeaderFooter>
    )
}
