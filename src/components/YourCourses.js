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
import student from '../Images/Courses/student-icon.png';
import difficulty from '../Images/Courses/difficulty-icon.png';
import lesson from '../Images/Courses/lesson-icon.png';
import btnIcon from '../Images/btn-icon.png';

function YourCourses() {
  return (
    <div className="row your-courses">
      <div className="header-courses d-flex my-5 col-12 justify-content-between">
        <h2>Your courses</h2>
        <p className="courses-text"> See More</p>
      </div>

      <div className="row col-12 ">
        <div className="col-6 row your-courses-content ">
          <img src={happyMale} alt="Jon" className="col-5 me-auto " />
          <div className=" col-7">
            <p className="">Google Ads Training 2021: Profit With Pay</p>
            <p className=" d-flex justify-content-between">
              <p>
                <img src={lesson} alt="" /> <span>Lesson:6</span>
              </p>
              <p>
                <img src={student} alt="" /> <span>Student:198</span>
              </p>
              <p>
                <img src={difficulty} alt="" /> <span>Average</span>
              </p>
            </p>

            <div className="col-12">
              <img src={points} alt="range" className=" col-12" />{' '}
              <p className="d-flex justify-content-between">
                <span> points: 75/100</span>
                <span>Days:56</span>
              </p>
            </div>

            <div>
              <p className="col-6 d-flex">
                <img
                  src={Debbie}
                  alt="Debbie"
                  className="col-3 me-3 tutor-avatar"
                />
                <p className="me-5 col-8">
                  <strong>Jon Kantner</strong> <br />
                  SEO
                </p>
                <button className="btn-panel btn-courses col-9">
                  Let's Go <img src={btnIcon} alt="" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCourses;
