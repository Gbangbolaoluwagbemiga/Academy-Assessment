import AcademyPng from '../Images/Academy.png';
import Avatar from '../Images/Avatar.png';
import Tag from '../Images/Tag.png';
import Vector from '../Images/Vector.png';
import ForwardIcon from '../Images/forward.png';
import searchIcon from '../Images/search.png';
import BackgroundCircle from '../Images/circle.jpg';
import NotificationIcon from '../Images/notification.png';
import ModelSit from '../Images/sitting down.jpg';

function NavBar() {
  return (
    <header className="row mt-5">
      <div className="left-header row col-5">
        <p className="assessment col-3">
          <span className="logo-group_1">
            <img className="vector-1" src={AcademyPng} alt="Academy icon" />
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
        <p className="menu-1 row col-9">
          <p className="category-box col-3">
            <span className="Categories">Categories</span>
            <img className="category-icon" src="" alt="" />
          </p>
          <p className="menu-2 col-2">
            <span className="teach">Teach</span>
          </p>
          <p className="menu-3 col-4 justify-content-right">
            <span className="contact">Contact Us</span>
          </p>
          <p className="menu-4 col-3">
            <span className="about">About Us</span>
          </p>
        </p>
      </div>

      <div className="right-header row col-7">
        <div className="search-box col-4">
          <input
            type="text"
            placeholder="Search Anything"
            className="searcher"
          />
          <img className="search-icon" src="" alt="" />
        </div>
        <div className="user col-5">
          <img src="" alt="" className="avatar" />
          <p>
            <p className="avatar-name">Behzad Pashaei</p>
            <p className="avatar-occupation">Ui & Ux Designer</p>
          </p>
        </div>
        <div className="notification col-3">
          <img src="" alt="" className="notification-icon" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
