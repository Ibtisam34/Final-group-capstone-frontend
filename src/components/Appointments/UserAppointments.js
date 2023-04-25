import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { fetchAppointments } from '../../redux/appointments/appointment';
import { fetchDoctors } from '../../redux/doctors/doctorsReducer';
import SingleAppointment from './SingleAppointments';
import { deleteAppointment } from '../../redux/appointments/deleteAppointments';

const UserAppointments = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer);
  const { appointments } = useSelector((state) => state.appointmentsReducer);
  const deletedRes = useSelector((state) => state.deleteAppointmentReducer);
  const userId = parseInt(localStorage.getItem('userId'), 10);

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchAppointments());
  }, [deletedRes, dispatch]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteAppointment(id)).then(() => {
      dispatch(fetchAppointments());
    });
  };

  return (
    <>
      <h1 className="text-center m-4">appointments</h1>
      <div className="appointments-container">
        {
          appointments[0] && appointments[0].map((appointment) => (
            appointment.user_id === parseInt(userId, 10)
            && (
              <div key={appointment.id} className="appointment">
                <Card>
                  <Card.Header as="h5">
                    appointment #
                    {appointment.id}
                  </Card.Header>
                  <Card.Body>
                    <SingleAppointment
                      doctors={doctors}
                      appointment={appointment}
                      key={appointment.id}
                    />
                    <div className="d-flex justify-content-end">

                      <button type="submit" onClick={(e) => handleDelete(e, appointment.id)} className="btn btn-danger">Cancel the appointment</button>

                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
          ))
        }
      </div>
    </>
  );
};

export default UserAppointments;
