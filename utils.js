const listOfGenres = [
  "Science Fiction",
  "Drama",
  "Action and Adventure",
  "Romance",
  "Mystery",
  "Horror",
  "Travel",
  "Science",
  "History",
  "Comedy",
  "Animation",
  "Diaries",
  "Biographies",
  "Fantasy"
];

const generateRandomGenres = () => {
  return listOfGenres[Math.floor(Math.random() * listOfGenres.length)];
};

const generateGenre = (movie) => {
  let genre = movie.Genre;
  if (genre === "" || !genre) {
    genre = [generateRandomGenres(), generateRandomGenres()];
  } else {
    genre = genre.split(",");
  }
  return genre;
};

const generateAllMovieData = movie => {
  let genre = generateGenre(movie);
  return {
    title: movie.Title,
    poster: movie.Poster,
    releaseDate: movie.Released,
    year: movie.Year,
    plot: movie.Plot,
    rating: movie.imdbRating,
    summary: movie.summary,
    id: movie.id,
    casts: movie.Actors,
    genre
  };
};

const generateMovieData = movie => {
  let genre = generateGenre(movie);
  return {
    title: movie.Title,
    poster: movie.Poster,
    releaseDate: movie.Released,
    year: movie.Year,
    plot: movie.Plot,
    casts: movie.Actors,
    rating: movie.imdbRating,
    summary: movie.summary,
    production: movie.Production,
    ratings: movie.Ratings,
    language: movie.Language,
    awards: movie.Awards,
    imdbID: movie.imdbID,
    website: movie.Website,
    id: movie.id,
    rated: movie.Rated,
    genre
  };
};

const generateNumberArray = (num = 1) => {
  return Array.from(Array(parseInt(num)).keys());
};

module.exports = {
  generateNumberArray,
  generateAllMovieData,
  generateMovieData
};
