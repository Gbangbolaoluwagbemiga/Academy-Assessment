import DownWardIcon from '../Images/new-course icon.png';

function NewMovie() {
  return (
    <div className="new-movies mt-5">
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

      <div className="course-content">
        <img src={} alt="Course-content" className='col-12' />
        <p className="course-title col-12"></p>
        <div className="features row">
            <p className='col-4'></p>
            <p className='col-4'></p>
            <p className='col-4'></p>
        </div>
      </div>
    </div>
  );
}

export default NewMovie;
