function RecentCourses({courses}) {
  return (
    <div className="row recent-courses">
      <div className="header-courses d-flex justify-content-space">
        <p className="fw-bold">Recent Courses</p>
      </div>

      {courses.map(
        course =>
          course.publication_year >= 1990 && (
            <div
              className="course-content card col-md-2 my-3 mx-auto   "
              key={course.id}
            >
              <img
                src={course.cover_image}
                alt="Course-content "
                className="col-12 course-image"
              />
              <p className="course-title col-md-12 "></p>
              <div className="features row">
                <p className="">Title: {course.title}</p>
                <p className="">Author: {course.author}</p>

                <p className="">Course description: {course.description}</p>
                <p className="">Year: {course.publication_year}</p>
                <p className="">
                  Genre:{' '}
                  {course.genre.map((genre, i) => (
                    <span className="mx-1 genre" key={genre[i]}>
                      {genre}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default RecentCourses;
