import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchDoctors } from '../../redux/doctors/doctorsReducer';
import { postAppointments } from '../../redux/appointments/appointment';

const Appointment = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const doctors = useSelector((state) => state);
  const appointmentPost = useSelector((state) => state.appointmentsReducer);

  const { user_id: userId } = useParams();

  const [doctorId, setDoctorId] = useState(null);

  const createAppointment = () => {
    const postData = {
      appointment: {
        user_id: parseInt(userId, 10),
        doctor_id: parseInt(doctorId, 10),
        date: startDate.toLocaleDateString(),
      },
    };
    dispatch(postAppointments(postData));
  };

  return (
    <>
      <div className="reservations-container">
        <div className="reservation-header-links">
          <Link to={`/${userId}`}>
            <FaArrowLeft style={{ color: '#41464b', fontSize: '2rem', margin: '5px' }} />
          </Link>
        </div>
        <div className="reservations-description">
          <div className="reservations-header">
            <h1>Book an Appointment</h1>
            <p>
              Select a doctor to make an appointment with.
            </p>
          </div>
          <select
            onChange={(e) => setDoctorId(parseInt(e.target.value, 10))}
            style={{
              outline: 'none',
              width: '95%',
              borderRadius: '2px',
            }}
            placeholder="Choose a Doctor you want to see."
            id="dropdown-menu-align-end"
          >
            <option disabled selected>
              Choose a Doctor you want to see
            </option>
            {doctors.doctorsReducer.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
          <div className="reservations-buttons">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <button type="submit" onClick={createAppointment} className="book-btn">Book now</button>
          </div>
          {appointmentPost?.payload?.status === 201
            && <p className="paragraph-text">Appointment was successfully booked!</p>}

        </div>
      </div>
    </>
  );
};

export default Appointment;
