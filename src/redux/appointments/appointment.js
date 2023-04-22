import axios from 'axios';

const initialState = {
  appointments: [],
  appointment: {},
};
const FETCH_DATA = 'appointments/FETCH_DATA';
const POST_DATA = 'appointments/POST_DATA';

const appointmentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        appointments: [payload],
      };
    case POST_DATA:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};

export const fetchAppointments = () => async (dispatch) => {
  await axios.get('http://127.0.0.1:3000/api/v1/appointments')
    .then((response) => {
      dispatch({ type: FETCH_DATA, payload: response.data });
    });
};

export const postAppointments = (data) => async (dispatch) => {
  await axios.post('http://127.0.0.1:3000/api/v1/appointments', data)
    .then((response) => {
      dispatch({ type: POST_DATA, payload: response });
    });
};

export default appointmentsReducer;
