import React from 'react';
import skedgoLogo from '../assets/skedgo_logo_large.webp';
import '../App.css'; 


const About = () => {
  return (
    <div className="content-container">
      <h1>About Me</h1>
      <p>Hi there! &#128075; My name is Manoj Kumar, and I am based in Sydney, Australia &#129432;</p> 
      <p>As part of a hackathon initiative from my bootcamp coding course, I built this web app! &#128640;</p>
      <p>Each student, either working solo or in a group, had the opportunity to create something that utilizes React, NodeJS, JavaScript, and an API. I chose to build a public transport timetable app that helps commuters see their upcoming journey times. It covers select regions across the world and includes various types of public transport like buses, trains, ferries, etc.</p>
      <p>I regularly use public transport every day, and I will be using this app going forward! &#128653; Slightly partial :)</p>
      <p>Additionally, this is the first web app I have ever built and deployed (30/5/24), and it's an exciting day for me! 🥹 Ten months ago, I had no idea how to create one.</p>
      <h1>Thank you!</h1>
      <p>A massive shoutout to the folks (Tim, Mauro, and Adrian) at SkedGo, whose TripGo API was used to make this web app. </p>
      <img src={skedgoLogo} alt="SkedGo Logo" className="skedgoLogo" />
      <p>Their support, patience, and understanding in helping an absolute coding newbie like me amidst their busy work schedule is truly heartwarming &#128079; Please check out their company's products and achievements <a href="https://skedgo.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <p>I also want to thank my tutor Alex and my classmates at my coding institute for helping me test and troubleshoot my app. Love you guys! &#9996; </p>
      <p>Finally, I extend my heartfelt thanks to you for visiting this website, and I hope you enjoy using this app. Your support motivates me to continue dreaming and building &#128151;</p>
      <p>Cheers!<br />Manoj</p>
    </div>
  );
};

export default About;
