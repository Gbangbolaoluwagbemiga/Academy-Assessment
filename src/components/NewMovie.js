import DownWardIcon from '../Images/new-course icon.png';

function NewMovie({courses}) {
  return (
    <div className="new-movies row mt-5">
      <div className="new-movies-header row">
        <p className="Title-Section col-6">New Courses(BOOKS)</p>
        <div className="tabs  col-6 ">
          <p className="">All Courses</p>
          <p className="">Design</p>
          <p className="">Development</p>
          <p className="">Photography</p>
          <p className="">Music</p>
          <p>
            <img src={DownWardIcon} alt="icon" className=" " />{' '}
          </p>
        </div>
      </div>

      {courses.map(course => (
        <div className="course-content col-3">
          <img
            src={course.cover_image}
            alt="Course-content"
            className="col-12"
          />
          <p className="course-title col-12"></p>
          <div className="features row">
            <p className="col-4">
              {/* <img src={} alt="Icon"  className='col-2'/> */}
              <p className="col-6">Lesson:</p>
              <p className="col-6">{}</p>
            </p>
            <p className="col-4">
              {/* <img src={} alt="Icon"  className='col-2'/> */}
              <p className="col-6">Student: {course.description}</p>
              <p className="col-6">{}</p>
            </p>
            <p className="col-4">
              {/* <img src={} alt="Icon"  className='col-2'/> */}
              <p className="col-6">Student:</p>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewMovie;
