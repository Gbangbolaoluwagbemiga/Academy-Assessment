import Jon from '../Images/Instructors/Jon.png';
import Jason from '../Images/Instructors/Jason.png';
import Debbie from '../Images/Instructors/Debbie.png';
import Edwin from '../Images/Instructors/Edwin.png';
import Erich from '../Images/Instructors/Edwin.png';
import Cassie from '../Images/Instructors/Cassie.png';
import happyMale from '../Images/Courses/happy-male.png';
import android from '../Images/Courses/android.png';
import beginner from '../Images/Courses/Beginner.png';
import python from '../Images/Courses/python.png';
import points from '../Images/Courses/points.png';

function YourCourses() {
  return (
    <div className="row">
      <div className="header-courses d-flex  col-12 justify-content-between">
        <h2>Your courses</h2>
        <p className="courses-text"> See More</p>
      </div>

      <div className="row col-12 your-courses-content">
        <div className="col-6 row ">
          <img src={happyMale} alt="Jon" className="col-5 " />
          <div className=" col-7">
            <p className="card-text">
              Google Ads Training 2021: Profit With Pay
            </p>
            <p className="card-text d-flex justify-content-between">
              <p>
                <img src="" alt="" /> <span>Lesson:6</span>
              </p>
              <p>
                <img src="" alt="" /> <span>Student:198</span>
              </p>
              <p>
                <img src="" alt="" /> <span>Average</span>
              </p>
            </p>
          </div>

          <div className="col-12">
            <img src="" alt="range" className=" col-12" />
            <p className="d-flex justify-content-between">
              <span> points: 75/100</span>
              <span>Days:56</span>
            </p>
          </div>

          <div>
            <p className="col-6 d-flex">
              <img src="" alt="" />
              <p>
                <strong>Jon Kantner</strong> <br />
                SEO
              </p>
            </p>
            <button className="btn-ui">
              Let's Go <img src="" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCourses;
