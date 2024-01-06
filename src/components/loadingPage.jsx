'use client'
import NextNProgress from 'nextjs-progressbar';
import NextTopLoader from 'nextjs-toploader';

export default function LoadingPage() {
    return (
        <>
            <NextTopLoader />
            <NextNProgress color="#ffb700" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            <div>Loading....</div>
        </>
    )
}
