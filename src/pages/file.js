import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <img src="profile-photo.jpg" alt="Profile Photo" />
          <p>Hi, my name is [Name] and I am a web developer. I have been working in the industry for [Number] years and have a passion for building interactive and user-friendly websites. In my free time, I enjoy [Hobby] and [Hobby].</p>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>Description of project 1...</p>
              <a href="#">View Project</a>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Description of project 2...</p>
              <a href="#">View Project</a>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>Description of project 3...</p>
              <a href="#">View Project</a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Copyright 2021</p>
      </footer>
    </div>
  );
}

export default App;
