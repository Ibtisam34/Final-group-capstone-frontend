import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import Detail from '../Details';
import { fetchDoctors } from '../../redux/doctors/doctorsReducer';

function Slider({ isLoggedIn }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 454 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const doctorObj = useSelector(({ doctorsReducer }) => doctorsReducer);

  const handleSelected = (e) => setSelectedDoctor(e);

  return (
    <div>
      {!selectedDoctor ? (
        <Carousel
          arrows
          renderButtonGroupOutside
          swipeable
          draggable={false}
          responsive={responsive}
          infinite
          autoPlaySpeed={8000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {doctorObj.map((doctor) => (
            <div key={doctor.id} className="carousel-img-container" role="link" tabIndex="0" onKeyDown={() => null} onClick={() => handleSelected(doctor)}>
              <img src={doctor.image} alt="doctor" />
              <div className="carousel-description">
                <p>
                  <strong>{doctor.name}</strong>
                  {' '}
                </p>
                <span>{doctor.specialization}</span>
                <p>{doctor.availability}</p>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <Detail doctor={selectedDoctor} isLoggedIn={isLoggedIn} />
      )}
    </div>
  );
}

Slider.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Slider;
