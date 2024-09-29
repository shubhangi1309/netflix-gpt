import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        horrorMovies: null,
        upcomingMovies: null
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies= action.payload;
        },
        addTrailer : (state, action) => {
            state.trailer = action.payload;
        },
        addHorrorMovies : (state, action) => {
            state.horrorMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailer, addPopularMovies, addHorrorMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer