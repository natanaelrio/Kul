import axios from 'axios';

export async function GetList() {
    axios.get(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.NEXT_PUBLIC_SECREET
        },
        next: { revalidate: 0 }
    })
        // .then(res => res.json())
        .then((res) => {
            setData(res.data)
            // console.log(res.data);
        })
}


