import React from "react";
import "./about.css";
import Image from "next/image";
import image1 from '../../assets/imgs/ground-group-growth-hands-461049.png'
import image2 from '../../assets/imgs/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png'

const About = () => {
  return (
    <>
      <div className="container bg_color">
        <div>
          <h3>Our mision</h3>
          <h2>Creating valuable content for creatives all around the world</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div>
          <h3>Our mision</h3>
          <h2>A platform that empowers individuals to improve</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="flex_element">
          <div className="title_content">
            <h3>Our team of creatives</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
          <div className="image_wrapper">
          <Image src={image1} alt="image" />
          </div>
        </div>

        <div className="flex_element" style={{marginBottom: '90px'}}>
        <div className="image_wrapper">
          <Image src={image2} alt="image" />
          </div>
          <div className="title_content">
            <h3>Our team of creatives</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
