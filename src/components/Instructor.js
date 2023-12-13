import btnIcon from '../Images/btn-icon.png';
import instructionArrow from '../Images/instructor-arrow.png';
import Jon from '../Images/Instructors/Jon.png';
import Jason from '../Images/Instructors/Jason.png';
import Debbie from '../Images/Instructors/Debbie.png';
import Edwin from '../Images/Instructors/Edwin.png';
import Erich from '../Images/Instructors/Edwin.png';
import Cassie from '../Images/Instructors/Cassie.png';

function Instructor() {
  return (
    <div className="row  instructor-container">
      <div className="col-md-5">
        <h2> Best Instructors</h2>
        <p className="mb-md-5">
          At The Academy, We Strive To Bring Together The Best Professors For
          The Best Courses
        </p>
        <div className=" row mt-2 ">
          <button className="btn-instructors btn-panel col-4">
            All Instructors <img src={btnIcon} alt="icon" />
          </button>
          <div className="instruction-box col-8 d-flex">
            <img
              src={instructionArrow}
              alt="images"
              className="col-5 justify-items-end img-fluid ps-5"
            />
            <p className="instructors-number">54 Instructors</p>
          </div>
        </div>
      </div>
      <div className="row col-md-7">
        <div className="col-4">
          <img src={Jon} alt="Jon" className="col-12" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span>Jon Katner</span>
            <span>Designer</span>
          </p>
        </div>

        <div className="col-4">
          <img src={Debbie} alt="Debbie" className="col-12" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span>Debbie LaChusa</span>
            <span>SEO</span>
          </p>
        </div>

        <div className="col-4">
          <img src={Edwin} alt="Edwin" className="col-12" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span>Edwin Diaz</span>
            <span>Composer</span>
          </p>
        </div>

        <div className="col-4">
          <img src={Cassie} alt="Cassie" className="col-12" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span>Cassie Evans</span>
            <span>Photographer</span>
          </p>
        </div>

        <div className="col-4">
          <img src={Erich} alt="Erich" className="col-12" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span>Erich Andreas</span>
            <span>Programmer</span>
          </p>
        </div>

        <div className="col-4">
          <img src={Jason} alt="Jason" className="col-12" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span>Jason Allen</span>
            <span>Accounting</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
