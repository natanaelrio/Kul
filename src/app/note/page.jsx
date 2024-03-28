import ListNote from "@/components/listNote";
import { getListNotifikasi } from "@/utils/user-front/getListNotifikasi";
import HeaderFooter from '@/components/Layout/headerFooter'

export default async function Note() {
    const data = await getListNotifikasi('8971041460')
    return (
        <HeaderFooter >
            <ListNote data={data?.data} />
        </HeaderFooter>
    )
}
