import AcademyPng from '../Images/Academy.png';
import Avatar from '../Images/Avatar.png';
import Tag from '../Images/Tag.png';
import Vector from '../Images/Vector.png';
import ForwardIcon from '../Images/forward.png';
import searchIcon from '../Images/search.png';
import BackgroundCircle from '../Images/circle.jpg';
import NotificationIcon from '../Images/Bell.png';
import ModelSit from '../Images/sitting down.jpg';

function NavBar() {
  return (
    <header className="row mt-5 top-header">
      <div className="left-header row col-5 me-5">
        <p className="assessment col-3">
          <span className="logo-group_1 ms-2">
            <img className="vector-1" src={AcademyPng} alt="Academy icon" />
          </span>
          <span className="assessment-text">ACADEMY</span>
        </p>
        <p className=" assessment-menu row col-9">
          <p className="category-box col-3">
            <span className="Categories">Categories</span>
            <img className="category-icon" src="" alt="" />
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
          <img className="search-icon" src="" alt="" />
        </div>
        <div className="user row col-5">
          <img src={Avatar} alt="avatar" className="avatar col-4" />
          <p className="col-8 ">
            <span className="avatar-name">Behzad Pashaei</span>
            <span className="avatar-occupation">Ui & Ux Designer</span>
          </p>
        </div>
        <div className="notification col-2">
          <img
            src={NotificationIcon}
            alt="Notification-icon"
            className="notification-icon"
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
