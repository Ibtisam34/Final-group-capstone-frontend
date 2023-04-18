import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { vehicleAvailability } from '../vehicles/vehicleSlice';
import api from '../../../api/api';

const BOOK_DOCTOR = 'BOOK_DOCTOR';
const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';

const initialState = {
  appointments: [],
  doctors: [],
  status: 'idle',
  message: '',
  error: null,
};

export const bookDoctor = createAsyncThunk(BOOK_DOCTOR,
  async ({ userId, appointments }) => {
    try {
      return await api.bookDoctor(userId, appointments);
    } catch (error) {
      return error.message;
    }
  });

export const getBooking = createAsyncThunk(
  GET_APPOINTMENTS,
  async (userId) => {
    try {
      const appointment = await api.fetchAppointments(userId);
      return appointment;
    } catch (error) {
      return error.message;
    }
  },
);
export const deleteAppointment = createAsyncThunk(
  DELETE_APPOINTMENT,
  async ({ userId, appointmentId }) => {
    try {
      return await api.deleteAppointment(userId, appointmentId);
    } catch (error) {
      return error.message;
    }
  },
);

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    resetAppointmentState: (state) => ({
      ...state,
      appointments: [],
      status: 'idle',
      message: '',
      error: null,
    }),
    setMessageEmpty: (state, action) => ({
      ...state,
      message: action.payload,
    }),
    setStatusIdle: (state) => ({
      ...state,
      status: 'idle',
      message: '',
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(bookDoctor.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(bookDoctor.fulfilled, (state, action) => ({
        ...state,
        appointments: [
          ...(action.payload.status === '00' ? [action.payload.data] : []),
          ...state.bookings,
        ],
        message: action.payload.message,
        status: action.payload.status === '00' ? 'successful' : 'failed',
        error: action.payload.error,
      }))
      .addCase(bookDoctor.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(GET_APPOINTMENTS.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(GET_APPOINTMENTS.fulfilled, (state, action) => ({
        ...state,
        appointments: action.payload.bookings.data,
        doctors: action.payload.bookings.included,
        message: action.payload.message,
        status: 'successful',
      }))
      .addCase(GET_APPOINTMENTS.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(deleteAppointment.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(deleteAppointment.fulfilled, (state, action) => ({
        ...state,
        appointments: [
          ...state.appointments.filter(
            (appointment) => appointment.id !== action.payload.data.id,
          ),
        ],
        message: action.payload.message,
        status: 'succeeded',
      }))
      .addCase(deleteAppointment.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const doctorAppointments = (state) => state.appointments.appointments;
export const includedDoctors = (state) => state.appointments.doctors;
export const { resetAppointmentState, setMessageEmpty, setStatusIdle } = appointmentSlice.actions;
export const allStatus = (state) => state.bookings.status;
export const allMessages = (state) => state.bookings.message;

export default appointmentSlice.reducer;
