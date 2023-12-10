import Tag from '../Images/Tag.png';
import ForwardIcon from '../Images/forward-icon.png';
import video from '../Images/vid icon.jpg';
import category from '../Images/category icon.png';

function SubHeader() {
  return (
    <div className="row">
      <div className="row col-4">
        <p className="col-2 tag-icon">
          <img src={Tag} alt="Tag-icon" />
        </p>
        <p className="col-3 justify-content-end ">Python</p>
        <p className="col-3">React</p>
        <p className="col-3">Unity</p>
      </div>
      <div className="row col-3">
        <p className="col-2">
          <img src={category} alt="category-Icon" />
        </p>
        <p className="col-4 justify-content-end ms-4">Ui & Ux</p>
        <p className="col-5">Vector</p>
      </div>
      <div className="row col-5">
        <p className="col-2 ps-4 justify-content-end">
          <img src={video} alt="Video-icon" />
        </p>
        <p className="col-3 after-effect">After Effects</p>
        <p className="col-2">Lightroom</p>
        <p className="col-2">Photography</p>
        <p className="col-3 justify-content-end ms-auto">
          <img src={ForwardIcon} alt="Forward-icon" />
        </p>
      </div>
    </div>
  );
}

export default SubHeader;
