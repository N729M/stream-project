import { NextPageContext} from 'next' ;
import {getSession, signOut } from 'next-auth/react';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import useCurrentUser from '@/hooks/useCurrentUser';
import useInfoModal from '@/hooks/useInfoModal';
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import InfoModal from "@/components/Infomodal";

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session) { return {redirect: {
      destination: '/auth',
      permanent: false,
  }}}

  return {
    props: {}
  }
}

export default function Home() {
  const {data: movies = []} = useMovieList() 
  const {data: favorites = []} = useFavorites() 
  const {data: user } = useCurrentUser()
  const { isOpen, closeModal } = useInfoModal(); 
  
  return (
    <>
      <InfoModal visible={isOpen} onCLose={closeModal} />
      <Navbar />
      
      <Billboard />

      <div className="pb-40"> 
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My Selection" data={favorites} />

      </div>


      <footer>
      <h1 className=" text-2xl text-red-400"> Conspix premium: $2.89 !  Now you can tell people the truth... has a price ! </h1>
      <p>Connexted as : {user?.name}</p>
      <button onClick={() => signOut()} className="mt-3 h-10 w-full bg-white" > Log Out ! </button>
      </footer>
    </>
  )
}
