import React, { useRef } from 'react';
import propTypes from 'prop-types';

const services = [
  {
    name: 'Ui Design',
    description: 'I design user friendly user interfaces',
  }, {
    name: 'Ui Design',
    description: 'I design user friendly user interfaces',
  }, {
    name: 'Ui Design',
    description: 'I design user friendly user interfaces',
  }, {
    name: 'Ui Design',
    description: 'I design user friendly user interfaces',
  }, {
    name: 'Ui Design',
    description: 'I design user friendly user interfaces',
  }, {
    name: 'Ui Design',
    description: 'I design user friendly user interfaces',
  }, {
    name: 'Ui Design',
    description: 'I design user friendly user interfaces',
  },
];
const Abilities = ({ abl }) => {
  const abilitiesRef = useRef();
  abl(abilitiesRef);
  return (
    <div className="abilities mx-auto w-11/12" id="abilities" ref={abilitiesRef}>
      <div
        style={{ overflow: 'visible' }}
      >
        <h1 className="w-1/2  mx-auto text-4xl text-center font-bold">Blogs</h1>
        <div className="flex flex-row">
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            style={{ width: '30%', margin: 'auto' }}
            src="https://res.cloudinary.com/hezzie/image/upload/v1600565550/3236267_n45wja.jpg"
            alt="welcomePage"
          />
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="flex flex-wrap justify-evenly"
          >
            {services.map((service) => (
              <div className="m-2 p-2  w-full rounded bg-white shadow">
                <h1 className="w-1/2 font-bold" style={{ }}>{service.name}</h1>
                <p className=" ">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
Abilities.propTypes = {
  abl: propTypes.func,
};
Abilities.defaultProps = {
  abl: null,
};
export default Abilities;