'use server'
export async function GetListDataPesanan(take, skip, nota, status) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get-pesanan?nota=${nota ? nota : ''}&take=${take}&skip=${skip}&status=${status}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            },
            next: { revalidate: 0 }
        })
        return res.json()
    }
    catch (e) {
        console.error(e);
    }
}