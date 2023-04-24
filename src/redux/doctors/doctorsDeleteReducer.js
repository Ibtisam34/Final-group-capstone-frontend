import axios from 'axios';

const initialState = [];
const DELETE_DOCTOR = 'doctors/DELETE_DOCTOR';

const DeleteDoctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_DOCTOR:
      return action.payload;
    default:
      return state;
  }
};

export const deleteDoctor = (id) => async (dispatch) => {
  await axios.delete(`http://127.0.0.1:3000/api/v1/doctors/${id}`)
    .then((response) => {
      dispatch({ type: DELETE_DOCTOR, payload: response });
    });
};

export default DeleteDoctorsReducer;
