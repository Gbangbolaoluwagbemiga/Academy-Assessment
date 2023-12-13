import Arrow from '../Images/arrows.png';
import devModel from '../Images/Model.png';
import btnIcon from '../Images/btn-icon.png';
import btnContainer from '../Images/btn container.png';

function TopPanel() {
  return (
    <div className="row mt-md-5">
      <div className="col-md-5 left-top-panel align-items-end mt-5">
        🙌 Hello Friends <br /> I Am Sofia And We Want To Start <br /> A{' '}
        <span className="sub--text"> Web Design</span> Course Together. Do You
        Like It Too 😍 ?
        <img src={Arrow} alt="" className="arrow-icon" />
        <div className="btn-ui row mt-2 ">
          <button className=" btn-panel col-6">
            Start Course Now <img src={btnIcon} alt="icon" />
          </button>

          <img
            src={btnContainer}
            alt="images"
            className="col-5 justify-items-end img-fluid"
          />
        </div>
      </div>

      <div className="col-md-7 model ms-auto justify-content-end">
        <img
          src={devModel}
          className="img-fluid dev-model justify-items-end rounded-top ms-auto"
          alt="model"
        />
      </div>
    </div>
  );
}

export default TopPanel;
