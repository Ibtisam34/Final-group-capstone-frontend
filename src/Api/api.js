const baseURL = 'http://localhost:3000';
// REACT_APP_BASE_URL=http://localhost:3000/api

const setAuthToken = ({ headers }) => localStorage.setItem('token', headers.get('Authorization'));

const unSetAuthToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('authUser');
};

const register = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user: user.user }),
});

const login = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user: user.user }),
});

const doctorSpecialization = (doctor) => ({
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(doctor),
});

const addappointment = (appointment) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(appointment),
});

const getAppointments = () => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
});

const removeAppointment = () => ({
  method: 'DELETE',
  headers: { Authorization: localStorage.getItem('token') },
});

const logout = () => ({
  method: 'DELETE',
  headers: { Authorization: localStorage.getItem('token') },
});

const api = {
  register: async (user) => {
    const response = await fetch(`${baseURL}/users`, {
      ...register({ user }),
    });

    const { status: code } = response;

    if (code === 200) setAuthToken(response);
    const data = await response.json();
    return data;
  },

  login: async (user) => {
    const response = await fetch(`${baseURL}/users/sign_in`, {
      ...login({ user }),
    });

    const { status: code } = response;

    if (code === 200) {
      setAuthToken(response);
      const { data, message } = await response.json();
      return {
        user: data,
        status: 'successful',
        message,
      };
    }

    if (code === 401) {
      return {
        user: {},
        status: 'unsuccessful',
        error: 'Unauthorized, Login or Register',
        message: 'Login failed, Please check your email and password',
      };
    }

    return null;
  },

  logout: async () => {
    const response = await fetch(`${baseURL}/users/sign_out`, {
      ...logout(),
    });

    const { status: code } = response;

    if (code === 200) {
      unSetAuthToken();
      const data = await response.json();
      return {
        user: {},
        status: 'successful',
        message: data.message,
      };
    }

    if (code === 500) {
      unSetAuthToken();
      return {
        user: {},
        status: 'unsuccessful',
        error: 'Expired, Login or Register',
        message: 'User session has expored',
      };
    }

    return null;
  },

  userDetails: async () => {
    const response = await fetch(`${baseURL}/users`, {
      headers: { Authorization: localStorage.getItem('token') },
    });

    const { status: code } = response;

    if (code === 200) {
      const currentuser = await response.json();
      return {
        user: currentuser,
        status: 'successful',
        error: null,
        message: 'User is authenticated',
      };
    }

    if (code === 401) {
      unSetAuthToken();
      return {
        user: {},
        status: 'unsuccessful',
        error: 'Expired, Login or Register',
        message: 'User session has expired',
      };
    }

    return null;
  },

  listDoctors: async () => {
    const response = await fetch(`${baseURL}/doctors`);
    const doctors = await response.json();
    return doctors;
  },

  doctorDetails: async (id) => {
    const response = await fetch(`${baseURL}/doctors/${id}`);
    const doctor = await response.json();
    return doctor;
  },

  bookDoctor: async (id, newApointment) => {
    const response = await fetch(`${baseURL}/users/${id}/appointments`, {
      ...addappointment(newApointment),
    });
    const appointment = await response.json();
    return appointment;
  },

  fetchAppointments: async (id) => {
    const response = await fetch(`${baseURL}/users/${id}/Appointments`, {
      ...getAppointments(),
    });
    const apointments = await response.json();
    return apointments;
  },

  deleteAppointment: async (userId, appointmentId) => {
    const response = await fetch(`${baseURL}/users/${userId}/appointments/${appointmentId}`, {
      ...removeAppointment(),
    });
    const data = await response.json();
    return data;
  },

  checkDoctorSpecialization: async (DoctorId, doctor) => {
    const response = await fetch(`${baseURL}/doctors/${DoctorId}/specialization`, {
      ...doctorSpecialization({ doctor }),
    });
    const data = await response.json();
    return data;
  },
};

export default api;
