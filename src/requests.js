const API_KEY = "e9e279c1927d671c5a1c1c49fe1c2286";

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  original: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
