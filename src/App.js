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
import Footer from './components/Footer';
import Error from '../src/components/Error';

const initialState = {
  fullCourses: [],
  initialCourses: [],
  status: 'loading',
  searchField: 'default',
  input: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {...state, fullCourses: action.payload, status: 'ready'};

    case 'newCourses':
      return {
        ...state,
        initialCourses: action.payload,
        status: 'ready',
        searchField: 'default',
      };

    case 'searchCourses':
      return {
        ...state,
        fullCourses: action.payload,
        status: 'ready',
        searchField: 'searcher',
      };
    case 'inputField':
      return {
        ...state,
        input: action.payload,
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    default:
      return state;
  }
}

function App() {
  const [{fullCourses, initialCourses, status, searchField, input}, dispatch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(
          'https://freetestapi.com/api/v1/books'
        );
        dispatch({type: 'dataReceived', payload: response.data});
      } catch (error) {
        throw new Error();
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
        throw new Error(error.message);
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
      <SearchPanel dispatch={dispatch} query={input} />

      {searchField === 'default' ? (
        status === 'loading' ? (
          <Loader />
        ) : (
          <NewMovie courses={initialCourses} />
        )
      ) : (
        ''
      )}

      {searchField === 'searcher' ? (
        status === 'loading' ? (
          <Loader />
        ) : (
          <NewMovie courses={fullCourses} />
        )
      ) : (
        ''
      )}
      {status === 'error' && <Error />}

      <Instructor />
      <YourCourses />
      <NewsLetter />
      <RecentCourses courses={fullCourses} />
      <Footer />
    </div>
  );
}

export default App;
