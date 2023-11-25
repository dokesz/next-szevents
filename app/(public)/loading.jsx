import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Loading() {
    return (
        <>
            <Skeleton height={40} />
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
            <Skeleton width={100} height={30} className='mt-6 mb-6' />
            <div>
                <div className='flex items-center gap-4'>
                    <Skeleton circle width={40} height={40} />
                    <Skeleton width={250} />
                </div>
                <Skeleton height={350} width={350} />
            </div>
        </>
    )
}

