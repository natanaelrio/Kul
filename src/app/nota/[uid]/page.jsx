import { getListNotaID } from '@/utils/user-front/getListNotaID'
import { notFound } from 'next/navigation'

export default async function Nota({ params }) {
    const dataID = await getListNotaID(params.uid)
    dataID.status == 500 && notFound()
    dataID.data.payment == false && notFound()
    
    return (
        <div>{params.uid}</div>
    )
}
