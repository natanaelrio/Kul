import { getListNotaID } from '@/utils/user-front/getListNotaID'
import { notFound } from 'next/navigation'

export default async function SuksesNota({ params }) {
    const dataID = await getListNotaID(params.uid)
    dataID.status == 500 ? notFound() : null
    return (
        <div>Loading....</div>
    )
}
