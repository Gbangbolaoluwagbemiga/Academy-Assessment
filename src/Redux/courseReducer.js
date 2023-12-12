import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {client} from '../../api/client';

// const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users');
  return response.data;
});

const initialState = {
  loading: true,
  courses: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default usersSlice.reducer;

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'course/requests':
      return {...state, loading: false};

    case 'course/success':
      return {...state, courses: action.payload};

    default:
      return state;
  }
}

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const response = await client.get('/fakeApi/posts');
//   return response.data;
// });

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     // omit existing reducers here
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchPosts.pending, (state, action) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Add any fetched posts to the array
//         state.posts = state.posts.concat(action.payload);
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });
