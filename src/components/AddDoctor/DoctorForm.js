import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { postDoctor } from '../../redux/doctors/doctorsReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function CreateDoctorForm() {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [availability, setAvailability] = useState([]);
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoctor = {
      name,
      specialization,
      email,
      phone,
      availability,
      image,
    };

    dispatch(postDoctor(newDoctor));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Doctor name"
        className="w-50 mb-3"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Form.Control
        type="text"
        placeholder="Doctor specialization"
        className="w-50 mb-3"
        onChange={(e) => setSpecialization(e.target.value)}
        required
      />

      <Form.Control
        type="email"
        placeholder="Email"
        className="w-50 mb-3"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Form.Control
        type="tel"
        placeholder="Phone number"
        className="w-50 mb-3"
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <Form.Control
        type="text"
        placeholder="Availability"
        className="w-50 mb-3"
        onChange={(e) => setAvailability(e.target.value)}
        required
      />

      <Form.Control
        type="text"
        placeholder="Image url"
        className="w-75 mb-3"
        onChange={(e) => setImage(e.target.value)}
        required
      />

      <div className="text-center mb-5">
        <Button className="theme-btn rounded" type="submit">
          Add Doctor
        </Button>
      </div>
    </Form>
  );
}

export default CreateDoctorForm;
