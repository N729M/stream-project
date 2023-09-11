import useSwr from 'swr';
import fetcher from '@/lib/fetcher';


//SWR est un react.query pour vercel; un fetcher package, donc à approfondir avant de mettre autre chose a la place
const useCurrentUser = () =>{
    const {data,error,isLoading,mutate} = useSwr('/api/current', fetcher)
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser;