import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctors/doctorsReducer';
import { deleteDoctor } from '../../redux/doctors/doctorsDeleteReducer';

function Removedoctor() {
  const [doctorId, setDoctorId] = useState();
  const { user_id: userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteDoctor(doctorId));
    dispatch(fetchDoctors());
    navigate(`/${userId}`);
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const doctorList = useSelector((state) => state.doctorsReducer);

  return (

    <div
      className="reservations-container"
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '2rem',
      }}
    >

      <div
        className="reservation-header-links"
        style={{
          position: 'fixed',
          top: '0',
        }}
      >
        <Link to="/"><FaArrowLeft style={{ color: '#41464b', fontSize: '2rem', margin: '5px' }} /></Link>
      </div>

      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        className="form"
        onSubmit={handleDelete}
      >
        <h1>Remove a doctor from our Listing</h1>

        <select
          style={{
            outline: 'none',
            width: '95%',
            borderRadius: '2px',
            margin: '2rem 0',
          }}
          onChange={(e) => setDoctorId(e.target.value)}
          placeholder="Choose a doctor you want to reserve."
          id="selectDropdown"
        >
          <option disabled selected>
            Choose a doctor
          </option>
          {doctorList != null && doctorList.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
        <button to="/" onClick={() => { handleDelete(); }} className="submit book-btn" type="submit">Submit</button>
      </form>

    </div>

  );
}

export default Removedoctor;
