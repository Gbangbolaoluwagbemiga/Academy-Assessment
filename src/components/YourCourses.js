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
import FullPoints from '../Images/Courses/100% points.png';
import AveragePoints from '../Images/Courses/50% points.png';
import quarterPoints from '../Images/Courses/25% points.png';

function YourCourses() {
  return (
    <div className="row your-courses">
      <div className="header-courses d-flex my-5 col-12 justify-content-between">
        <h2>Your courses</h2>
        <p className="courses-text"> See More</p>
      </div>

      <div className="row col-12 ">
        {/* Google Ads Training section */}
        <div className="col-md-5 mb-5 row your-courses-content ">
          <img src={happyMale} alt="Jon" className="col-md-5 my-3 me-auto " />
          <div className=" col-md-7 my-3">
            <p className="teacher">Google Ads Training 2021: Profit With Pay</p>
            <p className=" d-md-flex justify-content-between">
              <p>
                <img src={lesson} alt="Lesson" /> <span>Lesson:6</span>
              </p>
              <p>
                <img src={student} alt="Student" /> <span>Student:198</span>
              </p>
              <p>
                <img src={difficulty} alt="Difficulty" /> <span>Average</span>
              </p>
            </p>
            <img src={points} alt="range" className=" col-12" />{' '}
            <div className="col-12">
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

        {/* Mobile App section */}
        <div className="col-md-5 mb-5 row  your-courses-content ">
          <img src={android} alt="Jon" className="col-md-5 my-3 me-auto " />
          <div className=" col-md-7 my-3">
            <p className="course-title">
              ASO & Mobile App Marketing: Monetize You
            </p>
            <p className=" d-md-flex justify-content-between">
              <p>
                <img src={lesson} alt="Lesson" /> <span>Lesson:6</span>
              </p>
              <p>
                <img src={student} alt=" Student" /> <span>Student:198</span>
              </p>
              <p>
                <img src={difficulty} alt="Difficulty" /> <span>Advanced</span>
              </p>
            </p>

            <div className="col-12">
              <img src={quarterPoints} alt="range" className=" col-12" />{' '}
              <p className="d-flex justify-content-between">
                <span> points: 25/100</span>
                <span>Days:56</span>
              </p>
            </div>

            <div>
              <p className="col-6 d-flex">
                <img
                  src={Jon}
                  alt="Debbie"
                  className="col-3 me-3 tutor-avatar"
                />
                <p className="me-5 col-8">
                  <strong>Jon Kantner</strong> <br />
                  Designer
                </p>
                <button className="btn-panel btn-courses col-9">
                  Let's Go <img src={btnIcon} alt="" />
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Python for beginner section */}
        <div className="col-md-5 mb-5 row your-courses-content ">
          <img src={android} alt="Jon" className="col-md-5 my-3 me-auto " />
          <div className=" col-md-7 my-3">
            <p className="course-title">
              Python for Beginners - Learn Programming...
            </p>
            <p className=" d-md-flex  justify-content-between">
              <p>
                <img src={lesson} alt="Lesson" /> <span>Lesson:6</span>
              </p>
              <p>
                <img src={student} alt=" Student" /> <span>Student:198</span>
              </p>
              <p>
                <img src={difficulty} alt="Difficulty" /> <span>Beginner</span>
              </p>
            </p>

            <div className="col-12">
              <img src={AveragePoints} alt="range" className=" col-12" />{' '}
              <p className="d-flex justify-content-between">
                <span> points: 50/100</span>
                <span>Days:56</span>
              </p>
            </div>

            <div>
              <p className="col-6 d-flex">
                <img
                  src={Erich}
                  alt="Debbie"
                  className="col-3 me-3 tutor-avatar"
                />
                <p className="me-5 col-8">
                  <strong>Jon Kantner</strong> <br />
                  Design teacher
                </p>
                <button className="btn-panel btn-courses col-9">
                  Let's Go <img src={btnIcon} alt="" />
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Beginner Nikon Section */}
        <div className="col-md-5 mb-5 row your-courses-content ">
          <img src={android} alt="Jon" className="col-md-5 my-3 me-auto " />
          <div className=" col-md-7 my-3">
            <p className="course-title">
              Beginner Nikon Digital SLR Photography{' '}
            </p>
            <p className=" d-flex justify-content-between">
              <p>
                <img src={lesson} alt="Lesson" /> <span>Lesson:6</span>
              </p>
              <p>
                <img src={student} alt=" Student" /> <span>Student:198</span>
              </p>
              <p>
                <img src={difficulty} alt="Difficulty" /> <span>Beginner</span>
              </p>
            </p>

            <div className="col-12">
              <img src={FullPoints} alt="range" className=" col-12" />{' '}
              <p className="d-flex justify-content-between">
                <span> points: 100/100</span>
                <span>Days:56</span>
              </p>
            </div>

            <div>
              <p className="col-6 d-flex">
                <img
                  src={Cassie}
                  alt="Debbie"
                  className="col-3 me-3 tutor-avatar"
                />
                <p className="me-5 col-8">
                  <strong>Jon Kantner</strong> <br />
                  Photographer
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
