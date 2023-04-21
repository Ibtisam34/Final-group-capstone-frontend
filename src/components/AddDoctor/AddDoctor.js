import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import CreateDoctorForm from './DoctorForm';
import Response from './Response';

function AddDoctor() {
  const doctors = useSelector((state) => state.doctorsReducer);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1 className="text-center m-4">Add Doctor</h1>
      <Container>
        {
        doctors.status === 201 ? (
          <Response show={show} setShow={setShow} />
        ) : (
          <CreateDoctorForm />
        )
      }
      </Container>
    </>
  );
}

export default AddDoctor;
