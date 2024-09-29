import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    // we are doing FETCH data from TMDB API and update store
    const dispatch = useDispatch();
    // if nowPlayingMovies has data in it then don't call API (MEMOISATION)
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])
}
// we have abstracted all the logic

export default useNowPlayingMovies;
