import { useState } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import movies from "./movies";
import "./App.css";
import "./Footer.css";

function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [tab, setTab] = useState("NOW");

  // FILTER + SEARCH + TAB
  const filteredMovies = movies.filter((movie) => {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre = genre === "All" || movie.genre === genre;

    
    const matchTab =
      tab === "NOW"
        ? movie.status === "NOW"
        : movie.status === "UPCOMING";

    return matchSearch && matchGenre && matchTab;
  });

  return (
    <>
      {/* NAVBAR */}
      <Navbar movies={movies} search={search} setSearch={setSearch} />

      <div className="container">
        {/* TAB NOW / UPCOMING */}
        <div className="tabs">
          <button
            className={tab === "NOW" ? "active" : ""}
            onClick={() => setTab("NOW")}
          >
            NOW SHOWING
          </button>
          <button
            className={tab === "UPCOMING" ? "active" : ""}
            onClick={() => setTab("UPCOMING")}
          >
            UPCOMING
          </button>
        </div>

        {/* FILTER GENRE */}
        <select
          className="dropdown"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="All">All Movies</option>
          <option value="Animation">Animation</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Comedy">Comedy</option>
        </select>

        {/* GRID MOVIE */}
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
