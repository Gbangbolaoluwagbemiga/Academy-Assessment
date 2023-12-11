import searchIcon from '../Images/search.png';
import Arrow from '../Images/SearchPanelArrow.png';

function SearchPanel() {
  return (
    <div className="mx-auto">
      <h2 className="text-center search-header-text mb-5 ">
        Search Among <span className="sub--text">58340 </span> Courses And{' '}
        <br /> Find Your Favorite Course
      </h2>

      <div className="search-box row">
        <button className="btn-panel btn-search col-2">Categories</button>
        <p className="col-6">
          <input
            type="text"
            placeholder="Search Anything"
            className="searcher"
          />
          <img className="search-icon" src={searchIcon} alt="Search-icon" />
        </p>
        <p className="col-3">Or View The Following Courses...</p>
        <p className="col-1">
          <img src={Arrow} alt="Arrow" />
        </p>
      </div>
    </div>
  );
}

export default SearchPanel;
