import Arrow from '../Images/arrows.png';
import BackgroundCircle from '../Images/circle.jpg';
import ModelSit from '../Images/sitting down.jpg';

function TopPanel() {
  return (
    <div className="row mt-5">
      <div className="col-4 left-top-panel align-items-end">
        🙌 Hello Friends <br /> I Am Sofia And We Want To Start <br /> A{' '}
        <span className="sub--text"> Web Design</span> Course Together. Do You
        Like It Too 😍 ?
        <img src={Arrow} alt="" className="arrow-icon" />
        <button>Start co</button>
      </div>
      <div className="col-6 model">
        <img src="image source" class="img-fluid rounded-top" alt="model" />
      </div>
    </div>
  );
}

export default TopPanel;
