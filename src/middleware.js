import { NextResponse } from "next/server"

export async function middleware(request) {

  if (request.nextUrl.pathname.startsWith('/')) {
    const transaction_status = request.nextUrl.searchParams.get('transaction_status')
    const status_code = request.nextUrl.searchParams.get('status_code')
    const order_id = request.nextUrl.searchParams.get('order_id')
    if (transaction_status == 'settlement' && status_code == 200) {
      return NextResponse.redirect(new URL(`/nota/${order_id}`, request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/product')) {
    const slug = request.nextUrl.pathname.split('/').slice(-1).toString()

    // GET
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-viewproduct?id=${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': process.env.NEXT_PUBLIC_SECREET
        },
        next: { revalidate: 0 }
      })

      const data = await res.json()
      data?.data?.map(async (data) => {
        // UPDATE
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/update-view-products?id=${slug}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.NEXT_PUBLIC_SECREET
          },
          body: JSON.stringify({
            view_barang: data.view_barang ? data.view_barang + 1 : 1
          }),
          next: { revalidate: 0 }
        })
      })

    }
    catch (e) {
      console.log(e);
    }
  }
}





// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/products/:path*',
// }