import btnIcon from '../Images/btn-icon.png';
import instructionArrow from '../Images/instructor-arrow.png';

function Instructor() {
  return (
    <div>
      <div className="col-4">
        <h2> Best Instructors</h2>
        <p className="mb-md-5">
          At The Academy, We Strive To Bring Together The Best Professors For
          The Best Courses
        </p>
        <div className="btn-ui row mt-2 ">
          <button className=" btn-panel col-6">
            All Instructors <img src={btnIcon} alt="icon" />
          </button>
          <div className="instruction-box">
            <img
              src={instructionArrow}
              alt="images"
              className="col-5 justify-items-end img-fluid"
            />
            <p className="instructors-number">54 Instructors</p>
          </div>
        </div>
      </div>
      <div className="col-8"></div>
    </div>
  );
}

export default Instructor;
