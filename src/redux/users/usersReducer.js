import axios from 'axios';

const initialState = [];
const FETCH_USERS = 'users/FETCH_USERS';
const POST_USERS = 'users/POST_USERS';

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case POST_USERS:
      return action.payload;
    default:
      return state;
  }
};

export const fetchUsers = () => (dispatch) => {
  axios.get('http://127.0.0.1:3000/api/v1/users')
    .then((response) => {
      dispatch({ type: FETCH_USERS, payload: response.data });
    });
};

export const postUsers = (data) => (dispatch) => {
  axios.post('http://127.0.0.1:3000/api/v1/users', data)
    .then((response) => {
      dispatch({ type: POST_USERS, payload: response });
    });
};

export default usersReducer;
