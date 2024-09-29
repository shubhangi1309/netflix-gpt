import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    if(!movies) return;
    return (
    <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming movies"} movies={movies.nowPlayingMovies}/>
            {/* <MovieList title={"Horror"} movies={movies.horrorMovies}/> */}
        </div>
    </div>
    );
};

export default SecondaryContainer;