import btnIcon from '../Images/btn-icon.png';
import instructionArrow from '../Images/instructor-arrow.png';
import Jon from '../Images/Instructors/Jon.png';
import Jason from '../Images/Instructors/Jason.png';
import Debbie from '../Images/Instructors/Debbie.png';
import Edwin from '../Images/Instructors/Edwin.png';
import Erich from '../Images/Instructors/Erich.png';
import Cassie from '../Images/Instructors/Cassie.png';

function Instructor() {
  return (
    <div className="row  instructor-container">
      <div className="col-md-5 me-auto">
        <h2> Best Instructors</h2>
        <p className="mb-md-5 col-md-9">
          At The Academy, We Strive To Bring Together The Best Professors For
          The Best Courses
        </p>
        <div className=" row mt-2 ">
          <button className="btn-instructors btn-panel col-md-4 col-2 ">
            All Instructors <img src={btnIcon} alt="icon" />
          </button>
          <div className="instruction-box col-md-8 col-9 d-flex">
            <img
              src={instructionArrow}
              alt="images"
              className="col-5 justify-items-end img-fluid  ps-md-5"
            />
            <p className="instructors-number ">54 Instructors</p>
          </div>
        </div>
      </div>
      <div className="row instructors col-md-7">
        <div className="col-3 instructor-card card">
          <img src={Jon} alt="Jon" className="col-12 card-img-top" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span className="card-text">Jon Katner</span>
            <span className="card-text">Designer</span>
          </p>
        </div>

        <div className="col-3 card instructor-card">
          <img src={Debbie} alt="Debbie" className="col-12 card-img-top" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span className="card-text">Debbie LaChusa</span>
            <span className="card-text">SEO</span>
          </p>
        </div>

        <div className="col-3 card instructor-card">
          <img src={Edwin} alt="Edwin" className="col-12 card-img-top" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span className="card-text">Edwin Diaz</span>
            <span className="card-text">Composer</span>
          </p>
        </div>

        <div className="col-3 card instructor-card">
          <img src={Cassie} alt="Cassie" className="col-12 card-img-top" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span className="card-text">Cassie Evans</span>
            <span className="card-text">Photographer</span>
          </p>
        </div>

        <div className="col-3 card instructor-card">
          <img src={Erich} alt="Erich" className="col-12 card-img-top" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span className="card-text">Erich Andreas</span>
            <span className="card-text">Programmer</span>
          </p>
        </div>

        <div className="col-3 card instructor-card">
          <img src={Jason} alt="Jason" className="col-12 card-img-top" />
          <p
            className="d-flex justify-content-between mt-3
          "
          >
            <span className="card-text">Jason Allen</span>
            <span className="card-text">Accounting</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
