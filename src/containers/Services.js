/* eslint-disable react/no-array-index-key */
import React from 'react';
import images from '../components/images';

const {
  html, react, python, nodeJs, css3,
} = images;

const services = [
  {
    name: 'Frontend Development',
    description: `I hold good proficiency
    in the latest frontend technologies. I am an expert
     in building any specific technology that
    you have in mind.`,
    links: [{ url: '', img: react }, { url: '', img: html }, { url: '', img: css3 }],

  }, {
    name: 'Backend Development',
    description: `I have the experience you need 
    to bring the most desirable results. I am up-to-date
     with the new technologies and the most recent trends
      in backend web development. I make sure that my method 
      generates a finished product that is built to last.`,
    links: [{ url: '', img: python }, { url: '', img: nodeJs }],
  },
];
const Profile = () => (
  <div
    className="profile py-5 mx-auto w-11/12"
    id="profile"
  >
    <div
      style={{ overflow: 'visible' }}
    >
      <h1
        data-aos="flip-right"
        className="text-gray-700 mx-auto text-4xl text-center font-bold"
      >
        Services I offer
      </h1>
      <div className="flex flex-row">
        <img
          className="servicesLeft"
          style={{ width: '30%', margin: 'auto' }}
          src="https://res.cloudinary.com/hezzie/image/upload/v1600443473/3937434_dygngh.jpg"
          alt="welcomePage"
        />
        <div
            // data-aos="fade-left"
          className="flex servicesRight flex-col justify-start"
        >
          {services.map((service, index) => (
            <div
              data-aos="fade-left"
              key={index}
              style={{ height: 'min-content' }}
              className="m-2 p-2  w-full rounded bg-white "
            >
              <h1 className="font-bold" style={{ }}>{service.name}</h1>
              <p className=" ">{service.description}</p>
              <div className="flex flex-row ">
                {
                service.links.map((link, key) => <img className="h-10 mx-2 my-3 p-1 w-10" src={link.img} key={key} alt={link.url} />)
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
