const allMovies = require("../data/movies.json");
const utils = require("../utils");

const getAllMovies = (count = 41) => {
  const moviesCount = utils.generateNumberArray(count);
  return moviesCount.map((movieCount) => {
    return utils.generateAllMovieData(allMovies[movieCount]);
  });
};

module.exports =  getAllMovies;
