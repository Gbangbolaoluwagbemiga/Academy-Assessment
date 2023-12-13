import {useEffect} from 'react';
import searchIcon from '../Images/search.png';
import Arrow from '../Images/SearchPanelArrow.png';
import axios from 'axios';

function SearchPanel({query, dispatch}) {
  useEffect(
    function () {
      const searchUsers = async () => {
        try {
          const response = await axios.get(
            `https://freetestapi.com/api/v1/books?search=${query}`
          );
          // console.log(response);
          dispatch({type: 'searchCourses', payload: response.data});
        } catch (error) {
          dispatch({type: 'dataFailed'});
        }
      };
      searchUsers();
    },
    [dispatch, query]
  );

  return (
    <div className="mx-auto mb-5 search-box">
      <h2 className="text-center search-header-text mb-5 ">
        Search Among <span className="sub--text">58340 </span> Courses And{' '}
        <br /> Find Your Favorite Course
        <p className="col-1 search-arrow">
          <img src={Arrow} alt="Arrow" />
        </p>
      </h2>

      <div className="search-box row">
        <button className="btn-panel btn-search col-md-2 col-1 ">
          Categories
        </button>
        <p className="col-md-7 col-8">
          <input
            type="text"
            placeholder="Search Anything"
            className="searcher search-field"
            onChange={e => {
              dispatch({type: 'inputField', payload: e.target.value});
            }}
          />
          <img className="search-icon" src={searchIcon} alt="Search-icon" />
        </p>
        <p className="col-md-3 ">Or View The Following Courses...</p>
      </div>
    </div>
  );
}

export default SearchPanel;
