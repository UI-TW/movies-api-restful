const allMovies = require("../data/movies.json");
const utils = require("../utils");

const getMovieById = (id) => {
  const movie = allMovies.filter(movie => movie.id == id);
  if (movie.length === 0) return [];
  else {
    return utils.generateMovieData(movie[0]);
  }
};

module.exports = getMovieById;
