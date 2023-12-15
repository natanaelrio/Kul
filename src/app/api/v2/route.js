
export async function GET(req) {

    const authorization = req.headers.get('authorization')

    if (authorization == process.env.NEXT_PUBLIC_SECREET)
        return Response.json({ status: 200, isCreated: true, data: authorization })
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}   