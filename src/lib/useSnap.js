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

    const snapEmbed = (snap_token, embedId, action) => {
        if (snap) {
            snap.embed(snap_token, {
                embedId,
            })
        }
        if (!snap_token) router.push('/')
    }
    return { snapEmbed }
}

export default useSnap;