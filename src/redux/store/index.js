import { configureStore } from '@reduxjs/toolkit';

import typesMovieReducer from '../reducers/typeMovies';

const store = configureStore({
    reducer: {
        typesMovieReducer,
    },
});
export default store