import React from 'react';

import aboutImage from '../../images/ndolet2.png';

function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <img
          className='about__image'
          src={aboutImage}
          alt='Author of the website'
        />
        <div className='about__text-container'>
          <h2 className='about__title'>About Ndolet News Explorer</h2>
          <p className='about__text'>
            At Ndolet News Explorer, we keep up with the latest feeds in the world right for you.
          </p>
          <p className='about__text'>
            With the plethora of technologies stacked on Ndolet News Explorer, we keep you updated with the latest buzz all around the globe. Sticking with us to keep track of your news is the best choice you'll ever have to make out there.
          </p>
          {/* <p className='about__text'>
            The Practicum's curriculum provided a wide range of projects based
            on the following Full Stack Development technologies: HTML5, CSS3,
            flexbox, grid layout, BEM, Media queries, transition,
            JavaScript/JSX, DOM, Debugging, Git, Git/Github, Figma, Form
            validation, OOP, Webpack, NPM, React, React components, React Hooks,
            Node.js, Express.js, Database, MongoDB, Mongoose, Microsoft Azure,
            AWS.
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default About;
