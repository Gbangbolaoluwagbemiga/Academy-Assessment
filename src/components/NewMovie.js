import DownWardIcon from '../Images/new-course icon.png';

const initialState = {
  courses: [],
};
function reducer(state, action) {
  switch (action.type) {
    case 'value':

    default:
      return state;
  }
}

function NewMovie() {
  function fetchCourse() {
    Axios.get('https://freetestapi.com/api/v1/books').then(res =>
      console.log(res)
    );
  }
  fetchCourse();

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
        {/* <img src={} alt="Course-content" className='col-12' /> */}
        <p className="course-title col-12"></p>
        <div className="features row">
          <p className="col-4">
            {/* <img src={} alt="Icon"  className='col-2'/> */}
            <p className="col-6">Lesson:</p>
            <p className="col-6">{}</p>
          </p>
          <p className="col-4">
            {/* <img src={} alt="Icon"  className='col-2'/> */}
            <p className="col-6">Student:</p>
            <p className="col-6">{}</p>
          </p>
          <p className="col-4">
            {/* <img src={} alt="Icon"  className='col-2'/> */}
            <p className="col-6">Student:</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewMovie;
