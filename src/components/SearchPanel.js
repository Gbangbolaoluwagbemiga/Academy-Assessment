import searchIcon from '../Images/search.png';
import Arrow from '../Images/SearchPanelArrow.png';

function SearchPanel() {
  return (
    <div className="mx-auto">
      <p className="text-center">
        Search Among <span className="sub-text">58340 </span> Courses And <br />{' '}
        Find Your Favorite Course
      </p>

      <div className="search-box row">
        <button className="btn-panel col-2">Categories</button>
        <p className="col-7">
          <input
            type="text"
            placeholder="Search Anything"
            className="searcher"
          />
          <img className="search-icon" src={searchIcon} alt="Search-icon" />
        </p>
        <p className="col-2">Or View The Following Courses...</p>
        <p className="col-1">
          <img src={Arrow} alt="Arrow" />
        </p>
      </div>
    </div>
  );
}

export default SearchPanel;
