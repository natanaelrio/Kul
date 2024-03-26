import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id, warna) {

    const dataUtama = await prisma.admin.findMany({
        select: {
            warna_barang: true,
            gambar_barang: true,
            slug_barang: true,
            id_namabarang: true,
            detail_deskripsi_barang: true,
            harga_barang: true,
            id: true,
            nama_barang: true,
        },
        where: {
            AND: [
                { id_namabarang: id },
                { warna_barang: warna }
            ],
        },
        orderBy:
            { id: 'desc' },
    })

    const data = await prisma.admin.findMany({
        select: {
            warna_barang: true,
            gambar_barang: true,
            slug_barang: true,
            id_namabarang: true,
            detail_deskripsi_barang: true,
            harga_barang: true,
            id: true,
            nama_barang: true,
        },
        where: {
            id_namabarang: {
                contains: id,
            },
            NOT: {
                warna_barang: warna,
            },
        },
        orderBy:
            { id: 'desc' },
    })

    // const array3 = array1.concat(array2);
    const GabungData = [...new Set([...dataUtama, ...data])]

    console.log(GabungData);
    return GabungData
}

export async function GET(req) {
    const authorization = req.headers.get('authorization')
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const warna = searchParams.get('warna');
    const data = await AmbilDataUsers(id, warna)
    const res = await ResponseData(data, authorization)
    return res
}