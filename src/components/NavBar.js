function NavBar() {
  return (
    <header>
      <div className="left-header">
        <p className="assessment">
          <span className="logo-group_1">
            <img className="vector-1" src="" alt="" />
            <span className="logo-group_2">
              <img className="vector-2" src="" alt="" />
              <img className="vector-3" src="" alt="" />
            </span>
            <span className="logo-group_1">
              <img className="vector-4" src="" alt="" />
              <img className="vector-5" src="" alt="" />
              <img className="vector-6" src="" alt="" />
              <img className="vector-7" src="" alt="" />
              <img className="vector-8" src="" alt="" />
            </span>
          </span>
          <span className="assessment-text">ACADEMY</span>
        </p>
        <p className="menu-1">
          <span className="rectangle"></span>
          <p className="category-box">
            <span className="Categories">Categories</span>
            <img className="category-icon" src="" alt="" />
          </p>
        </p>
        <p className="menu-2">
          <span className="teach">Teach</span>
        </p>
        <p className="menu-3">
          <span className="contact">Contact Us</span>
        </p>
        <p className="menu-4">
          <span className="about">About Us</span>
        </p>
      </div>

      <div className="right-header">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Anything"
            className="searcher"
          />
          <img className="search-icon" src="" alt="" />
        </div>
        <div className="user">
          <p className="avatar-box">
            <img src="" alt="" className="avatar" />
          </p>
          <p>
            <p className="avatar-name">Behzad Pashaei</p>
            <p className="avatar-occupation">Ui & Ux Designer</p>
          </p>
        </div>
        <div className="notification">
          <img src="" alt="" className="notification-icon" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
