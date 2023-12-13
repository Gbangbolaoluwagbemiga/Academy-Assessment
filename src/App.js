import TopPanel from './components/TopPanel';
import NavBar from './components/NavBar';
import TopCategories from './components/TopCategories';
import SearchPanel from './components/SearchPanel';
import NewMovie from './components/NewMovie';
import axios from 'axios';
import {useEffect, useReducer} from 'react';
import Loader from './components/Loader';
import Instructor from './components/Instructor';
import YourCourses from './components/YourCourses';
import NewsLetter from './components/NewsLetter';
import RecentCourses from './components/RecentCourses';

const initialState = {
  fullCourses: [],
  initialCourses: [],
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {...state, fullCourses: action.payload, status: 'ready'};

    case 'newCourses':
      return {...state, initialCourses: action.payload, status: 'ready'};

    default:
      return state;
  }
}

function App() {
  const [{fullCourses, initialCourses, status}, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(
          'https://freetestapi.com/api/v1/books'
        );
        dispatch({type: 'dataReceived', payload: response.data});
      } catch (error) {
        console.error();
      }
    };
    fetchAllUsers();
  }, []);

  useEffect(function () {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://freetestapi.com/api/v1/books?limit=8'
        );
        dispatch({type: 'newCourses', payload: response.data});
      } catch (error) {
        console.error();
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className=" container">
      <NavBar />
      <hr />
      <TopCategories />
      <TopPanel />
      <SearchPanel />

      {status === 'loading' ? (
        <Loader />
      ) : (
        <NewMovie courses={initialCourses} />
      )}
      <Instructor />
      <YourCourses />
      <NewsLetter />
      <RecentCourses />
    </div>
  );
}

export default App;
