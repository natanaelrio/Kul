import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonPage() {
    return (
        <>
            <Skeleton />
            <Skeleton count={5} />
        </>
    )
}
