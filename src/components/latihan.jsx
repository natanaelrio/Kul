'use client'

import { useEffect, useState } from "react"
import { useAnimate, usePresence } from "framer-motion"

export default function Latihan({ header, content }) {
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    const [klik, setKlik] = useState(true)
    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(scope.current, { opacity: 1 })
                await animate("li", { opacity: 1, x: 0 })
            }
            enterAnimation()

        } else {
            const exitAnimation = async () => {
                await animate("li", { opacity: 0.2, x: -100 })
                await animate(scope.current, { opacity: 0 })
                safeToRemove()
            }

            exitAnimation()
        }
    }, [isPresent])

    return (
        <ul ref={scope}>
            <li onClick={() => setKlik(!klik)}>satu</li>
            {klik &&
                <>
                    <li>tigaaa</li>
                    <li>duaa</li>
                    <li>empatt</li>
                </>
            }
        </ul>
    )
}
