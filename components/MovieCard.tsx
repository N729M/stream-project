import React from 'react';
import {useRouter} from 'next/router';
import useInfoModal from '@/hooks/useInfoModal';
import { BsFillPlayFill} from 'react-icons/bs';
import { BiChevronDown} from 'react-icons/bi';
import FavoriteButton from './FavoriteButton';
import { classicNameResolver } from 'typescript';


interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data
}) =>{
    const router = useRouter();
    const { openModal } = useInfoModal();

    return (
        <div className="ml-5 group bg-zinc-900 col-span relative h-[6vw] w-80">
            
            <img 
            className="cursor-pointer object-cover transition duration shadow-xl rounded-md 
            group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[6vw]"
            src={data.thumbnailUrl} alt="Thumbnail" />

            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible 
            sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw]
            group-hover:-translate-x-[2vw] group-hover:opacity-100">

                <img src={data.thumbnailUrl} alt="Thumbnail" className="cursor-pointer object-cover
                transition duration shadow-xl rounded-t-md w-full h-[6vw]"/>    

                <div className="z-10 bg-red-400 hover:bg-black p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md duration-800">
                    <div className="flex flex-row items-center gap-3 mb-5">

                        <div className="cursor-pointer w-6 h-6 lg:w-10 bg-white rounded-full flex justify-center
                        items-center transition hover:bg-neutral-300"
                        onClick={() => router.push(`/watch/${data?.id}`)}>
                            <BsFillPlayFill size={30} className="text-green-400" /> 
                        </div>
                        
                        <div className="cursor-pointer w-6 h-6 lg:w-10 rounded-full flex justify-center
                        items-center transition hover:bg-neutral-300"
                        onClick={() => router.push(`/watch/${data?.id}`)}>
                            <FavoriteButton movieId={data?.id} />  
                            <div onClick={()=>
                            openModal(data?.id)
                            } 
                            className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10
                             border-white border-2 rounded-full flex justify-center items-center 
                             transition hover:border-neutral300 ">
                                <BiChevronDown
                                size={30}
                                className="text-white group-hover/item:text-neural-300" />
                             </div>
                        </div>
                    </div>
                    
                    <p className="text-green-300 font-semibold m2-4">
                        New <span className="text-white"> 2023 </span>
                    </p>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;