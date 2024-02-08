import { getListNotaID } from '@/utils/user-front/getListNotaID'
import { notFound } from 'next/navigation'
import Nota from '@/components/nota'

export const metadata = {
    title: 'Nota',
    description: 'Nota',
}

export default async function PageNota({ params }) {
    const dataID = await getListNotaID(params.uid)
    dataID.status == 500 && notFound()
    dataID.data.payment == false && notFound()

    return (
        <div>
            <Nota id={params.uid} />
        </div>
    )
}
