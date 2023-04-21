import axios from 'axios';

const initialState = [];
const FETCH_DATA = 'doctors/FETCH_DATA';
const POST_DATA = 'doctors/POST_DATA';

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case POST_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const fetchDoctors = () => async (dispatch) => {
  await axios.get('http://127.0.0.1:3000/api/v1/doctors')
    .then((response) => {
      dispatch({ type: FETCH_DATA, payload: response.data });
    });
};

export const postDoctor = (data) => async (dispatch) => {
  await axios.post('http://127.0.0.1:3000/api/v1/doctors', data)
    .then((response) => {
      dispatch({ type: POST_DATA, payload: response });
    });
};

export default doctorsReducer;
