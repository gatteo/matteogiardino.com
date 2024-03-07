import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'

import { Skeleton } from '../ui/skeleton'

type Views = {
    views: number
}

const ViewCounter = ({ slug }: { slug: string }) => {
    const { data, isLoading } = useSWR<Views>(`/api/views?slug=${slug}`, fetcher)
    return <>{isLoading ? <Skeleton className='h-5 w-16' /> : <div>{`👀 ${data?.views} visualizzazioni`}</div>}</>
}

export default ViewCounter
