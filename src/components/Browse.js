import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    // useHorrorMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            {showGptSearch ? (<GPTSearch />) : 
            (<>
                <MainContainer />
                <SecondaryContainer />
            </>)}
            {/* 
                MainContainer
                 - VideoBackground
                 - VideoTitle
                SecondaryContainer
                 - MovieList * n
                    - cards * n 
            */}
        </div>
    )
}

export default Browse;