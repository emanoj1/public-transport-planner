import React from 'react';
import skedgoLogo from '../assets/skedgo_logo_large.webp';
import manojProfilePic from '../assets/manoj_polaroid_photo.png'
import '../App.css'; 


const About = () => {
  return (
    <div className="content-container">
      <h1>About the app</h1>
      <p>
      Welcome to <b>COMMUTER FYI</b>, a public transport planner app! 
      Seamlessly navigate your city's public transportation system with ease using our intuitive interface. 
      Whether you're commuting solo or in a group, our app provides up-to-the-minute information on predicted departure and arrival times for various modes of transportation, 
      covering over 400 cities and regions worldwide and integrating with 4000+ transport service providers. 
      Plan your journey efficiently and stay informed with our comprehensive public transport planner app.
      </p>
      <h1>About me</h1>
      <img src={manojProfilePic} alt="SkedGo Logo" className="manojProfilePic" />
      <p>Hi there! &#128075; My name is Manoj Kumar, and I am based in Sydney, Australia &#129432;</p> 
      <p>As part of a hackathon initiative from my bootcamp coding course, I built this web app! &#128640;</p>
      <p>Each student, either working solo or in a group, had the opportunity to create something that utilizes React, NodeJS, JavaScript, and an API. 
        I chose to build a public transport timetable app that helps commuters plan their departure & arrival for their chosen locations. 
        You can choose over 400 cities from across the world covering buses, trains, ferries, etc. 
        As time goes on, I am planning to cover as much of the global transit systems as possible! &#128653; </p>
      <p>Additionally, this is the first web app I have personally ever built and deployed to the world! 🥹 The launch day was Thursday, 30 May 2024! </p>
      <h1>Thank you!</h1>
      <img src={skedgoLogo} alt="SkedGo Logo" className="skedgoLogo" />
      <p>A massive shoutout to the folks (Tim, Mauro, and Adrian) at SkedGo, whose TripGo API was used to make this web app.
      Their support, patience, and understanding in helping an absolute coding newbie like me amidst their busy work schedule is truly heartwarming &#128079; Please check out their company's products and achievements <a href="https://skedgo.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <p>I also want to thank my tutor Alex and my classmates at my coding institute for helping me test and troubleshoot my app. Love you guys! &#9996; </p>
      <p>Finally, I extend my heartfelt thanks to you for visiting this website, and I hope you enjoy using this app. Your support motivates me to continue dreaming and building &#128151;</p>
      <p>Cheers!<br />Manoj</p>
    </div>
  );
};

export default About;
