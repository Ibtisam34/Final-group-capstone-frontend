import axios from 'axios';

const initialState = [];
const DELETE_APPOINTMENT = 'appointments/DELETE_APPOINTMENT';

const deleteAppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_APPOINTMENT:
      return action.payload;
    default:
      return state;
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  await axios.delete(`http://127.0.0.1:3000/api/v1/appointments/${id}`)
    .then((response) => {
      dispatch({ type: DELETE_APPOINTMENT, payload: response });
    });
};

export default deleteAppointmentReducer;
