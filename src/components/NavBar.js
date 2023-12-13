import AcademyPng from '../Images/Academy.png';
import Avatar from '../Images/Avatar.png';
import searchIcon from '../Images/search.png';
import downIcon from '../Images/downIcon.png';
import NotificationIcon from '../Images/Bell.png';

function NavBar() {
  return (
    <header className="row mb-md-5 top-header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <p className="assessment ">
            <span className="logo-group_1 ms-2">
              <img
                className="vector-1 me-2"
                src={AcademyPng}
                alt="Academy icon"
              />
            </span>
            <span className="assessment-text">ACADEMY</span>
          </p>
          <button
            className="navbar-toggler btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  assessment-menu ">
              <li className="nav-item">
                <p className="category-box ">
                  <span className="Categories">Categories</span>
                  <img
                    className="category-icon"
                    src={downIcon}
                    alt="downward-icon"
                  />
                </p>{' '}
              </li>
              <li className="nav-item teach">
                <p>Teach</p>
              </li>
              <li className="nav-item">
                <p>Contact Us</p>
              </li>
              <li className="nav-item">
                <p>About Us</p>
              </li>
            </ul>

            <form className=" me-auto">
              <div className="search-box ">
                <input
                  type="search"
                  placeholder="Search Anything"
                  className="searcher "
                />
                <img
                  className="search-icon"
                  src={searchIcon}
                  alt="Search-icon"
                />
              </div>
            </form>

            <div className="user d-flex me-auto mt-4">
              <img src={Avatar} alt="avatar" className="avatar  me-3" />
              <p className="me-auto">
                <span className="avatar-name">Behzad Pashaei</span>
                <span className="avatar-occupation">Ui & Ux Designer</span>
              </p>
              <div className="notification ms-md-5">
                <img
                  src={NotificationIcon}
                  alt="Notification-icon"
                  className="notification-icon pt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
