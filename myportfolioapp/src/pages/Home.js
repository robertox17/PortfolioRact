import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='nameSub'>Hi my name is </p>
        <h1 className='Name'>Roberto Segura </h1>
      </header>
      <main>
        <section className='bio'>
          {/* <img src="profile-photo.jpg" alt="Profile Photo" /> */}
          <p>Hello! My name is Roberto and I am a junior full stack developer
            with a passion for building interactive and user-friendly web applications. I have a strong foundation in HTML, CSS, and JavaScript, and have recently been expanding my skillset to include technologies such as React, Node.js, and Express.
            I am a fast learner and enjoy tackling challenges and problem-solving in my work. In my free time, I enjoy staying up-to-date with the latest web development trends and technologies, as well as participating in hackathons and coding challenges to continue improving my skills. I am excited to join a dynamic team and contribute my skills and enthusiasm to impactful projects..</p>
        </section>
        <section className='list' >
          <h2>Skills</h2>
          <ul className='skills'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </section>
       
      </main>
      <Link to="/projects" className='btn'>Click Here To See My Work</Link>
    </div>
  );
};

export default Home