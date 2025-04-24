import { Link, useLocation } from 'react-router-dom';
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    const navbar = document.getElementById("navbarNav");

    links.forEach(link => {
      link.addEventListener("click", () => {
        if (navbar.classList.contains("show")) {
          const toggler = document.querySelector(".navbar-toggler");
          toggler.click();
        }
      });
    });
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="favicon.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-4"
            />
            JOHN DOE
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/realisations" ? "active" : ""}`} to="/realisations">Réalisations</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`} to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Me contacter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;