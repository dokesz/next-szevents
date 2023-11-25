import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Loading() {
    return (
        <>
            <Skeleton />
            <LoadingFeed />
            <LoadingFeed />
            <LoadingFeed />
            <LoadingFeed />
        </>
    )
}

export function LoadingFeed() {
    return (
        <>
            <Skeleton width={100} className='my-4' />
            <div>
                <div className='flex items-center gap-4'>
                    <Skeleton circle width={40} height={40} />
                    <Skeleton width={200} />
                </div>
                <Skeleton height={250} width={350} />
            </div>
        </>
    )
}

