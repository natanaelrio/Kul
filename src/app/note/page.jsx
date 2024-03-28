import ListNote from "@/components/listNote";
import { getListNotifikasi } from "@/utils/user-front/getListNotifikasi";
import HeaderFooter from '@/components/Layout/headerFooter'

export default async function Note() {
    const dataList = await getListNotifikasi('8971041460')

    return (
        <HeaderFooter >
            <ListNote dataNote={dataList?.data} />
        </HeaderFooter>
    )
}
