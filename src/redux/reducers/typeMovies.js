import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    types: '',
};

const typeMovies = createSlice({
    name: 'types',
    initialState,
    reducers: {
        getTypes: (state, action) => {
            state.types = action.payload;
        },
    },
});

const typesMovieReducer = typeMovies.reducer;

export const typeMoviesSelector = (state) => state.typesMovieReducer.types;

export const { getTypes } = typeMovies.actions;

export default typesMovieReducer;
