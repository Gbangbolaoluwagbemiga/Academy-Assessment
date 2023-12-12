import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {thunk} from 'redux-thunk';

export const fetchUsers = createAsyncThunk('post/fetchUsers', async () => {
  try {
    const response = await axios.get('https://freetestapi.com/api/v1/books');
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
});

function Courses() {
  return <div></div>;
}

export default Courses;
