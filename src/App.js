import TopPanel from './components/TopPanel';
import NavBar from './components/NavBar';
import TopCategories from './components/TopCategories';
import SearchPanel from './components/SearchPanel';
import NewMovie from './components/NewMovie';
import axios from 'axios';
import {useEffect, useReducer} from 'react';

const initialState = {
  courses: [],
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {...state, courses: action.payload, status: 'ready'};

    default:
      return state;
  }
}

function App() {
  const [{courses}, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://freetestapi.com/api/v1/books'
        );
        dispatch({type: 'dataReceived', payload: response.data});
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
      <NewMovie />
    </div>
  );
}

export default App;
