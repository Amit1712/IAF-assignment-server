const axios = require('axios');

const getByMovieName = async (name) => {
  const res = await axios.get(`${process.env.OMDB_URL}`, {
    params: {
      apikey: process.env.OMDB_API_KEY,
      t: name
    }
  });
  return res.data;
}

const getByMovieID = async (id) => {
  const res = await axios.get(`${process.env.OMDB_URL}`, {
    params: {
      apikey: process.env.OMDB_API_KEY,
      i: id,
      plot: 'full'
    }
  });
  return res.data;
}

const searchMovies = async (query) => {
  const res = await axios.get(`${process.env.OMDB_URL}`, {
    params: {
      apikey: process.env.OMDB_API_KEY,
      s: query
    }
  });
  return res.data;
}

exports.searchMovies = searchMovies;
exports.getByMovieID = getByMovieID;
exports.getByMovieName = getByMovieName;