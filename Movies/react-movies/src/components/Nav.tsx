import { Link } from "react-router-dom";
import { ACTOR_PAGE, GENRES_PAGE, HOME_PAGE, MOVIETH_PAGE, MOVIE_CREATE } from "../routing/paths";

export default function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={HOME_PAGE} className="navbar-brand">React Movies</Link>
          
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={GENRES_PAGE} className="nav-link">
                  Genres
                </Link>
              </li>
              <li>
                <Link to={ACTOR_PAGE} className="nav-link">
                  Actors
                </Link>
              </li>
              <li>
                <Link to={MOVIETH_PAGE} className="nav-link">
                  Movie Theaters
                </Link>
              </li>
              <li>
                <Link to={MOVIE_CREATE} className="nav-link">
                  Create Movie
                </Link>
              </li>
            </ul>
          </div>
        
        </div>
      </nav>
    )
}
