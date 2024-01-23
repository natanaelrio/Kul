import { prisma } from "@/lib/prisma"

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const skip = searchParams.get('skip')
    const take = searchParams.get('take')
    const nota = searchParams.get('nota')
    const status = searchParams.get('status')

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const informasi = await prisma.formPembelian.findMany()
        // INFORMASI HARGA
        const total_omset = informasi.map((data) => data.dataPesanan.map((data) => data.harga_barang_user).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR'
        })
        // INFORMASI TOTALBARANG
        const total_barang = informasi.map((data) => data.dataPesanan.map((data) => data.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0)

        // INFORMASI PANJANG ARRAY
        const total_length = informasi.length

        //INFORMASI SEMUA
        const users = await prisma.formPembelian.findMany({
            skip: Number(skip) || 0,
            take: Number(take) || 10,
            orderBy: { id: 'desc' },
            where: status == 'belum-diproses' && {
                status_pesanan: { contains: 'belum-diproses' }
            } || status == 'sudah-diproses' && {
                status_pesanan: { contains: 'sudah-diproses' }
            } || status == 'sudah-berhasil' && {
                status_pesanan: { contains: 'sudah-berhasil' }
            } || {
                nota_user: nota ? {
                    contains: nota || '',
                    mode: 'insensitive'
                } : { not: null },
            },
        })

        if (users) {
            return Response.json({
                status: 200,
                isCreated: true,
                total_omset: total_omset,
                total_terjual: total_barang,
                total_array: total_length,
                take_array: Number(take) || 10,
                skip_array: Number(skip) || 0,
                data: users
            })
        } else Response.json({ status: 500, isCreated: false })
    }
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}

