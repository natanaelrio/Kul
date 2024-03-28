import ListNote from "@/components/listNote";
import { GetListNotifikasi } from "@/utils/user-front/getListNotifikasi";
import HeaderFooter from '@/components/Layout/headerFooter'

export default async function Note() {
    const dataList = await GetListNotifikasi('8971041460')

    return (
        <HeaderFooter >
            <ListNote dataNote={dataList?.data} />
        </HeaderFooter>
    )
}
