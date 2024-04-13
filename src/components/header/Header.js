import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="index.html">
            <h2>
              E-LEARNING<em></em>
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            {/* <div className="border">
                    <div className="sidebar-item search">
                    <form id="search_form" name="gs" method="GET" action="#">
                        <input
                        type="text"
                        name="q"
                        className="searchText"
                        placeholder="Type to search..."
                        autoComplete="on"
                        />
                        <button><i class="fa fa-search"></i></button>
            </form>
            </div>
            </div> */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Write
                </Link>
              </li>
            </ul>
            <button
              type="submit"
              id="form-submit"
              class="main-button btn btn-warning text-white btn-sm mx-2 my-3"
            >
              Sign In
            </button>
            <button
              type="submit"
              id="form-submit"
              class="main-button btn btn-warning text-white btn-sm my-3"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
