import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GPTMovieSuggestions = () => {
    const { movieResults, moviesNames } = useSelector((store) => store.gpt);
    if(!moviesNames) return null;

    return (<div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
            {moviesNames.map((moviesName, movieIndex) => {
            <MovieList 
                key={moviesName} 
                title={moviesName} 
                movies={movieResults[movieIndex]}
            />
            })}
        </div>
    </div>);
}

export default GPTMovieSuggestions;