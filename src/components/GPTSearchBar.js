import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const useNowPlayingMovies = useSelector((store) => store.movies.now);

  // search movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API & get Movie Results (below code is taken from npm website)
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      "only give me names 5 movies, comma seperated such as 3 idiots, Dangal, 12th Fail, Padmavat, Befikre";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults);
    if(!gptResults.choices) {
        // Error Handling
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // For each movie I will SEARCH TMDB API
    const promiseArray = gptResults.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    // how to get data out of this PROMISE ARRAY?

    const TMDBresults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ moveiNames: gptMovies, movieResults: TMDBresults })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSeachPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;