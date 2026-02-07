function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img src={movie.poster} alt={movie.title} />
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="genre">{movie.genre}</p>
        <p className="year">{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
