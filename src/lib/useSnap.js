import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const useSnap = () => {
    const [snap, setSnap] = useState(null)
    const router = useRouter()
    useEffect(() => {
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
        const clientKey = process.env.NEXT_PUBLIC_SECREET_MIDSTRANS
        const script = document.createElement('script')

        script.src = snapScript
        script.setAttribute('data-client-key', clientKey)
        script.async = true
        script.onload = () => {
            setSnap(window.snap)
        }

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const snapEmbed = (snap_token, embedId, order_id, action) => {
        if (snap) {
            snap.embed(snap_token, {
                embedId,
                // onSuccess: function (result) { router.push(`${process.env.NEXT_PUBLIC_URL}/nota/` + `${order_id}`) },
                // onPending: function (result) { router.push('/errorpayment') },
                // onError: function (result) { console.log('error'); console.log(result); },
                // onClose: function () { console.log('customer closed the popup without finishing the payment'); }
            })
        }
        if (!snap_token) router.push('/')
    }
    return { snapEmbed }
}

export default useSnap;