import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container">
          <Link className="navbar-brand mx-5 " to="#">
            React CRUD APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contract">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link className="btn btn-warning mx-5" to="/users/AddUser">
          Add User
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
