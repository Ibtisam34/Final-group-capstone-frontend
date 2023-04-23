import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const SingleAppointment = ({ appointment, doctors }) => (
  <div className="appointment-container">
    {
      doctors.map((doctor) => (
        doctor.id === appointment.doctor_id
        && (
          <div key={doctor.id} className="d-flex">
            <div>
              <img alt="doctor" src={`${doctor.image}`} style={{ width: '200px', margin: '1rem 0' }} />
            </div>
            <div className="card-desc">
              <Card.Title>{doctor.name}</Card.Title>
              <Card.Text>
                <strong>Specialization</strong>
                :
                {' '}
                {doctor.specialization}

              </Card.Text>
              <Card.Text>
                <strong>Availability:</strong>
                {' '}
                {doctor.availability}
              </Card.Text>
              <Card.Text>
                <strong>Check-in Day:</strong>
                {' '}
                {appointment.date}
              </Card.Text>
            </div>
          </div>
        )
      ))
    }
  </div>
);

SingleAppointment.propTypes = {
  appointment: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    doctor_id: PropTypes.number,
  }).isRequired,
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default SingleAppointment;
