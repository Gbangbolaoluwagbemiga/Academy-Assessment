import AcademyPng from '../Images/Academy.png';
import Avatar from '../Images/Avatar.png';
import searchIcon from '../Images/search.png';
import downIcon from '../Images/downIcon.png';
import NotificationIcon from '../Images/Bell.png';

function NavBar() {
  return (
    <header className="row mt-5 top-header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* <p className="navbar-brand">Navbar</p> */}
          <p className="assessment col-3">
            <span className="logo-group_1 ms-2">
              <img className="vector-1" src={AcademyPng} alt="Academy icon" />
            </span>
            <span className="assessment-text">ACADEMY</span>
          </p>
          <button
            className="navbar-toggler btn-sm"
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
            <ul className="navbar-nav me-2 mb-2 mb-lg-0  assessment-menu ">
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

            <form className="d-flex" role="search">
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
          </div>
        </div>
      </nav>
      <div className="left-header row col-6 ">
        <p className="assessment col-3">
          <span className="logo-group_1 ms-2">
            <img className="vector-1" src={AcademyPng} alt="Academy icon" />
          </span>
          <span className="assessment-text">ACADEMY</span>
        </p>
        <p className=" assessment-menu row col-9">
          <p className="category-box col-3">
            <span className="Categories">Categories</span>
            <img className="category-icon" src={downIcon} alt="downward-icon" />
          </p>
          <p className="teach col-2 justify-content-end">Teach</p>
          <p className=" contact col-3 justify-content-end">Contact Us</p>
          <p className="about col-3">About Us</p>
        </p>
      </div>

      <div className="right-header row col-6">
        <div className="search-box col-5 justify-content-end">
          <input
            type="text"
            placeholder="Search Anything"
            className="searcher"
          />
          <img className="search-icon" src={searchIcon} alt="Search-icon" />
        </div>
        <div className="user row col-5">
          <img src={Avatar} alt="avatar" className="avatar col-4" />
          <p className="col-8 ">
            <span className="avatar-name">Behzad Pashaei</span>
            <span className="avatar-occupation">Ui & Ux Designer</span>
          </p>
        </div>
        <div className="notification col-2 ms-3  justify-content-end">
          <img
            src={NotificationIcon}
            alt="Notification-icon"
            className="notification-icon pt-2"
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
