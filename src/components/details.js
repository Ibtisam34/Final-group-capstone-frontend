import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import '../details.css';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { MenuAuth } from './LoginRegister/Auth';

function Detail({ doctor, isLoggedIn }) {
  const { user_id: userId } = useParams();
  const {
    image, name, specialization, email, phone, availability, id,
  } = doctor;
  const paths = MenuAuth(isLoggedIn, userId, id);
  return (
    <Container>
      <div className="details-container">
        <div className="flex-direction">
          <div>
            <img className="thumbnail images rounded" src={image} alt="doctor" />
          </div>
          <Card.Body>
            <div className="details-text-container">
              <div>
                <h3 className="text-dark">{name}</h3>
                <p className="description my-4">{specialization}</p>
                <div>
                  <p className="description">
                    {availability}
                  </p>
                  <p className="description">
                    Email:
                    {' '}
                    {email}
                  </p>
                  <p className="description">
                    Phone:
                    {' '}
                    {phone}
                  </p>
                </div>
                <div>
                  <Link to={paths.doctor_reservation}>
                    <button className="btn-success theme-btn mt-4 rounded" size="lg" type="button">Reserve</button>
                  </Link>
                </div>
                <div>
                  <a href={`/${userId}`}>
                    <BiArrowBack className="mt-4" />
                  </a>
                </div>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Container>
  );
}
Detail.propTypes = {
  doctor: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
export default Detail;
