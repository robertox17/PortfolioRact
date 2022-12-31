import React from 'react';
// import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2> My Projects</h2>
          <div className="project-card">
            <h3>Netflix and  Grill </h3>
            <img width='400px' alt="Netflix Grill" src="https://user-images.githubusercontent.com/108193561/210130658-03ef9c74-969c-4bde-8923-33feef733354.png"/>
            <p>We have created a simple date night selector application that allows two users to cycle through 10 options for movies and 6 options for cuisine types. After Profile 1 has gone through and selected their "likes" and "Dislikes" for movies they then move to cuisine types. Profile 2 will have an abbreviated array to select from based upon Profile 1's "likes". After they have matched movies and cuisine types, the application will provide a display of their matched movie and will generate a restaurant based upon their share like of cuisine type.
The code used the jquery, materialize and two APIs; IMDb and Travel Advisor. The IMDb API is used to generate an array of the top movies in theaters and we have chosen to reduce the array to the top 10 for brevity. The Travel advisor API is used to populate a restaurant based upon the cuisine types the users have agreed to.</p>
            <a href="https://joejhansen.github.io/netflix-and-grill/" className="btn">View Project</a>
          </div>
          <div className="project-card">
            <h3>Toxicity</h3>
            <img width="400" alt="Screen Shot 2022-10-31 at 12 35 18 PM" src="https://user-images.githubusercontent.com/108193561/210131601-04b8cdeb-d30b-4bb4-8c68-b221149d348b.png"/>
            <p>Description: A pseudonymous social media application that allows an anonymous safe line of communication in your local area. A social platform that will allow the user to create an account privately and allow to express toxic posts/behavior in a local forum to share with many other users worldwide.</p>
            <a href="https://toxicity2000.herokuapp.com/profile" className="btn">View Project</a>
          </div>
          <div className="project-card">
            <h3>Cocos Barbershop</h3>
            <img width="400" alt="Screenshot 2022-12-26 at 10 48 47 PM" src="https://user-images.githubusercontent.com/108193561/209624193-6f6ffdb8-97c0-4496-b116-81450753a4ba.png"/>
            <p>This was my first attempt on building a website by myself. I wanted to make something meaningful and it sure did make something that I can surely be proud of. This website was for my brothers barbershop. It has the function to book an appointment and see appointments. It will also block out booked appointments.</p>
            <a href="https://github.com/robertox17/barbershopProject101" className="btn">View Project</a>
          </div>
    </div>
  );
}

export default Projects;
