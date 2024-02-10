
export async function ResponseData(data, authorization, tambahan) {
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        try {
            const users = data
            if (users) {
                return Response.json({ status: 200, isCreated: true, data: users, ...tambahan })
            } else return Response.json({ status: 500, isCreated: false })
        }
        catch (e) {
            return Response.json({ status: 500, isCreated: 'internet ga adaaaa........', })
        }

    }
    else return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}

