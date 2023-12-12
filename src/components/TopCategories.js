import Tag from '../Images/Tag.png';
import ForwardIcon from '../Images/forward-icon.png';
import video from '../Images/vid icon.jpg';
import category from '../Images/category icon.png';

function TopCategories() {
  return (
    <div className="row">
      <div className="row col-md-4 skill-category">
        <p className="col-3 tag-icon">
          <img src={Tag} alt="Tag-icon" className="img-tag" />
        </p>
        <p className="col-3 ">Python</p>
        <p className="col-3">React</p>
        <p className="col-3">Unity</p>
      </div>
      <div className="row col-md-3 ms-md-auto">
        <p className="col-2">
          <img
            src={category}
            alt="category-Icon"
            className="img-category-icon"
          />
        </p>
        <p className="col-4 justify-content-end ms-md-4">Ui & Ux</p>
        <p className="col-5">Vector</p>
      </div>
      <div className="row col-md-5 ms-auto">
        <p className="col-2 ps-md-4 justify-content-end">
          <img src={video} alt="Video-icon" className="img-category-icon" />
        </p>
        <p className="col-3 after-effect">After Effects</p>
        <p className="col-2">Lightroom</p>
        <p className="col-2">Photography</p>
        <p className="col-3 justify-item-end ms-md-auto">
          <img src={ForwardIcon} alt="Forward-icon" />
        </p>
      </div>
    </div>
  );
}

export default TopCategories;
