import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './banner.css'


const Banner = () => {
    return (
        <div className="bg ">
            <div className="container">
            <Typewriter
    onInit={(typewriter) => {
    typewriter.typeString(' <h1>I am Rabeka Putul Please Contact Me For Our Services !<h1> ')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>  
            <h1 className="fw-bolder text-success fs-1 mt-3 text-white">WE PROVIDE</h1>
            <h1 className="fw-bolder txt-cl fs-1 mt-5 text-white">a comprehensive range of routine gynecological and obstetrical services to patients of all ages <br /> That You Can Trust</h1>
            </div>
            <Link to="/about"><button className="p-2 mt-3 btn fw-bolder fs-5">More About Us</button></Link>
        </div>
    );
};

export default Banner;