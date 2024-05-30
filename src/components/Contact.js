// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="content-container">
//       <h1>Contact Us</h1>
//       <p>You can reach us at this contact email id!</p>
//     </div>
//   );
// };

// export default Contact;

import React, { useEffect } from 'react';
import './Contact.css'; 

const Contact = () => {
  useEffect(() => {
    // Load all embeds on the page
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="tally-embed-container">
      {/* The embed code provided by Tally */}
      <iframe
        data-tally-src="https://tally.so/embed/nPE9dx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="613"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact form"
      ></iframe>
      </div>
    </div>
  );
};

export default Contact;
