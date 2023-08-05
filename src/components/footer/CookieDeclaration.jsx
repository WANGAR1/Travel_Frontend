import React, { useState } from 'react';

const CookieDeclaration = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
    // You can set a flag in local storage to remember user's cookie preference
    localStorage.setItem('cookiesAccepted', 'true');
  };

  if (!showCookieBanner) {
    return null; // Do not show the cookie banner if user already accepted cookies
  }

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to enhance your experience on TravelTrove. By continuing to use our website, you
        consent to the use of cookies as described in our Cookie Declaration.
      </p>
      <div className="cookie-buttons">
        <button onClick={handleAcceptCookies}>Accept Cookies</button>
        <a href="/privacy">Learn More</a> {/* Link to your privacy policy page */}
      </div>
    </div>
  );
};

export default CookieDeclaration;
