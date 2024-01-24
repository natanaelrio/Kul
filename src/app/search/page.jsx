import ListProductsearch from "@/components/listProductsearch"
import HeaderFooter from '@/components/Layout/headerFooter'
import { GetListSearchFilter } from '@/utils/user-front/getListSearchFilter'

export async function generateMetadata({ searchParams }) {
    return {
        title: `Halaman Pencarian ${searchParams.query}`,
        description: `Halaman Pencarian ${searchParams.query}`,
    }
}

export default async function Search({ searchParams }) {
    const data = await GetListSearchFilter(searchParams.query, searchParams.sortby)
    return (
        <HeaderFooter kondisiFalseSearch={false}>
            <ListProductsearch
                data={data}
                query={searchParams.query}
                sortby={searchParams.sortby} />
        </HeaderFooter>
    )
}
