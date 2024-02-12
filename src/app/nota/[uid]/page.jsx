import { getListNotaIDValidasi } from '@/utils/user-front/getListNotaIDValidasi'
import { getNota } from '@/utils/user-front/getNota'
import { notFound } from 'next/navigation'
import Nota from '@/components/nota'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    // userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
}

export const metadata = {
    title: 'Nota',
    description: 'Nota',
}

export default async function PageNota({ params }) {
    const dataID = await getListNotaIDValidasi(params.uid)
    const dataNota = await getNota(params.uid)
    dataID.status == 500 && notFound()
    dataID.data.payment == false && notFound()

    return (
        <div>
            <Nota dataNota={dataNota} />
        </div>
    )
}
