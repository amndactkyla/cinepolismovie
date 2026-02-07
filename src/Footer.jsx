import "./Footer.css";

function Footer() {
  return (
    <footer className="cinepolis-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>CINEPOLIS</h2>
          <p>Movie Theater Experience</p>
        </div>

        <div className="footer-links">
          <h4>About</h4>
          <p>Company</p>
          <p>Careers</p>
          <p>News</p>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <p>Now Playing</p>
          <p>Coming Soon</p>
          <p>Promotions</p>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <p>Email: support@cinepolis.com</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Cinepolis Clone — React Project
      </div>
    </footer>
  );
}

export default Footer;
