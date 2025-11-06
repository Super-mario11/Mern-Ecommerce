import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter-form">
      <p>Subscribe to our newsletter for the latest updates.</p>
      <form>
        <input type="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
