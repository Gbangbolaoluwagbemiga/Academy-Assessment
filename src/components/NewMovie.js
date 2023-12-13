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
        <div className="course-content col-md-3" key={course.id}>
          <img
            src={course.cover_image}
            alt="Course-content "
            className="col-12 course-image"
          />
          <p className="course-title col-md-12"></p>
          <div className="features row">
            <p className="col-md-6">Title: {course.title}</p>
            <p className="col-md-6">Author: {course.author}</p>

            <p className="col-md-6">Course description: {course.description}</p>
            <p className="col-md-6">Year: {course.publication_year}</p>
            <p className="col-md-6">
              Genre:{' '}
              {course.genre.map((genre, i) => (
                <span className="mx-1 genre" key={genre[i]}>
                  {genre}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewMovie;
