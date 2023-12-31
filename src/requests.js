const API_KEY = "95a8e03a4fc16b66f911c26d89c0bffb";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fectchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=34`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,

}

export default requests;