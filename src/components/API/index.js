const API_KEY = 'df48d09f83439c7ea9839fcc7be5d09b';

const requests = {
    fetchTopRate: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchVideo: (id) =>
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`,
    fetDetailMovie: (id) =>
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,

    fetchAllMovie: (type) =>
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=2`,

    fetchGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,

    fetchLoadMore: (type,numberPage) =>
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${numberPage}`,
};

export default requests;
