export async function GetListDataID(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/getid?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.NEXT_PUBLIC_SECREET
      },
      next: { revalidate: 0 }
    })
    return res.json()
  }