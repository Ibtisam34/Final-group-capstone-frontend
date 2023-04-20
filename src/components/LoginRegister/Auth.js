const Auth = (isLoggedIn) => {
  const ProtectedPaths = {
    home: ':user_id',
    details: ':user_id/:doctor_id/details',
    appointment: ':user_id/:doctor_id/appointment',
    userappointments: 'users/:user_id/appointments',
    AddDoctor: 'adddoctor',
    login: 'login',
    register: 'register',
  };

  const defaultPaths = {
    home: '',
    details: ':doctor_id/details',
    appointment: 'login',
    userappointments: 'appointments',
    AddDoctor: 'adddoctor',
    login: 'login',
    register: 'register',
  };

  return isLoggedIn ? ProtectedPaths : defaultPaths;
};

export const MenuAuth = (isLoggedIn, userId, doctorId = 0) => {
  const ProtectedPaths = {
    home: `/${userId}`,
    appointment: `/${userId}/${doctorId}/appointment`,
    userappointments: `users/${userId}/appointments`,
    AddDoctor: 'adddoctor',
    login: 'login',
    register: 'register',
  };

  const defaultPaths = {
    home: '',
    appointment: 'login',
    userappointments: 'appointments',
    AddDoctor: 'adddoctor',
    login: 'login',
    register: 'register',
  };

  return isLoggedIn ? ProtectedPaths : defaultPaths;
};

export default Auth;
