'use server'
export async function getNota(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-nota?id=${id}`, {
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