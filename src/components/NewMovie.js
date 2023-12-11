import DownWardIcon from '../Images/new-course icon.png';

function NewMovie() {
  return (
    <div className="new-movies mt-5">
      <div className="new-movies-header row">
        <p className="Title-Section col-6">New Courses(BOOKS)</p>
        <div className="tabs row col-6 ">
          <p className="col-2 ms-auto">All Courses</p>
          <p className="col-2 ms-auto">Design</p>
          <p className="col-2 ">Development</p>
          <p className="col-2 ms-auto">Photography</p>
          <p className="col-3 ms-auto">
            Music
            <img src={DownWardIcon} alt="icon" className="ms-5 " />{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewMovie;
