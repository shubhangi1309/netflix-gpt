import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
     // we are doing FETCH data from TMDB API and update store
     const dispatch = useDispatch();

     const getHorrorMovies = async () => {
         const data = await fetch('https://www.themoviedb.org/genre/27-horror/movie?page=1', API_OPTIONS);
         const json = await data.json();
        //  console.log(json.results);
         dispatch(addHorrorMovies(json.results));
     }
 
     useEffect(() => {
        getHorrorMovies();
     }, []);
 }
 // we have abstracted all the logic

export default useHorrorMovies;