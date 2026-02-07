import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ movies }) {
  const [city, setCity] = useState("Medan");
  const [openCity, setOpenCity] = useState(false);
  const [openCinema, setOpenCinema] = useState(false);
  const [openMovie, setOpenMovie] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`cinepolis-navbar ${scrolled ? "shrink" : ""}`}>

      {/* ===== BARIS ATAS ===== */}
      <div className="nav-top">
        <div className="top-left">Bahasa</div>

        <div
          className="top-right"
          onMouseEnter={() => setOpenCity(true)}
          onMouseLeave={() => setOpenCity(false)}
        >
          📍 {city} ▾
          {openCity && (
            <ul className="dropdown">
              {["Medan", "Jakarta", "Bandung"].map((c) => (
                <li key={c} onClick={() => setCity(c)}>{c}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ===== LOGO TENGAH ===== */}
      <div className="nav-logo">
        cinepolis <span>cinemas</span>
      </div>

      {/* ===== BARIS UTAMA ===== */}
      <div className="nav-main">
        <ul className="menu-left">
          <li><a href="#">Movies</a></li>
          <li><a href="#">F&amp;B</a></li>
          <li><a href="#">News & Promotions</a></li>
          <li><a href="#">Cinema</a></li>
        </ul>

        <div className="search-box">
          🔍 <input placeholder="Search movie" />
        </div>
      </div>

      {/* ===== BARIS SUB (PUTIH) ===== */}
      <div className="nav-sub">
        <div
          className="dropdown-wrap"
          onMouseEnter={() => setOpenCinema(true)}
          onMouseLeave={() => setOpenCinema(false)}
        >
          All Cinema ▾
          {openCinema && (
            <ul className="dropdown">
              <li>Lippo Plaza Medan</li>
              <li>Plaza Medan Fair</li>
              <li>Sun Plaza</li>
            </ul>
          )}
        </div>

        <div
          className="dropdown-wrap"
          onMouseEnter={() => setOpenMovie(true)}
          onMouseLeave={() => setOpenMovie(false)}
        >
          All Movie ▾
          {openMovie && (
            <ul className="dropdown scroll">
              {movies.map((m) => (
                <li key={m.id}>{m.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

    </header>
  );
}

export default Navbar;
