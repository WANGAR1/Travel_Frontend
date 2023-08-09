import React from 'react';
import Header from '../header/Header';

const PrivacyPolicy = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="privacy-policy">
      <h2>Data Collection and Usage:</h2>
      <p>
        <strong>1.1 Personal Information:</strong> TravelTrove collects and stores essential personal
        information from users during the registration and login process, such as name, email address, and
        phone number. This information is used to create and manage user accounts, provide personalized
        experiences, and facilitate communication with users.
      </p>
      <p>
        <strong>1.2 Travel Experiences and Packages:</strong> Users can voluntarily publish their unique
        travel experiences, and tour operators can showcase their travel packages on the platform. These
        published details are visible to other users to enhance the travel discovery process.
      </p>
      <p>
        <strong>1.3 Itinerary and Travel Details:</strong> Tour operators provide detailed itineraries and
        travel package information to help users make informed booking decisions. These details are made
        accessible to users but are not used for any other purpose.
      </p>

      <h2>Data Sharing and Third Parties:</h2>
      <p>
        <strong>2.1 Limited Sharing:</strong> TravelTrove does not share personal information, travel
        experiences, or travel package details with third parties for marketing or advertising purposes
        without explicit user consent.
      </p>
      <p>
        <strong>2.2 Cloudinary Integration:</strong> The cloudinary integration ensures that images uploaded
        by users and tour operators are securely stored and optimized. Cloudinary acts as a data processor, and
        any data shared with them is governed by their privacy policies.
      </p>

      <h2>Data Security and Protection:</h2>
      <p>
        <strong>3.1 Encryption:</strong> TravelTrove employs encryption protocols to protect user data during
        transmission and storage, including personal information and payment details.
      </p>
      <p>
        <strong>3.2 Secure Access:</strong> Access to user data is restricted to authorized personnel only, and
        stringent access controls are in place to prevent unauthorized access.
      </p>

      <h2>User Control and Consent:</h2>
      <p>
        <strong>4.1 Opt-in Consent:</strong> TravelTrove seeks user consent before collecting and processing
        personal information. Users have the right to withdraw their consent at any time.
      </p>
      <p>
        <strong>4.2 Account Management:</strong> Users can access and update their personal information through
        their custom user dashboard.
      </p>

      <h2>Cookies and Tracking:</h2>
      <p>
        <strong>5.1 Cookies:</strong> TravelTrove uses cookies to enhance user experience and provide personalized
        services. Users have the option to accept or decline cookies through their browser settings.
      </p>
      <p>
        <strong>5.2 Tracking:</strong> The platform uses analytics tools to analyze user behavior and improve services.
        All tracking is done anonymously, and individual user data is not linked to any analytical data.
      </p>

      <h2>Children's Privacy:</h2>
      <p>
        <strong>6.1 Age Restriction:</strong> TravelTrove is intended for users who are at least 18 years old. The
        platform does not knowingly collect personal information from children under the age of 18.
      </p>

      <h2>Data Retention:</h2>
      <p>
        <strong>7.1 Data Storage:</strong> TravelTrove retains user data as long as it is necessary to provide services
        and fulfill legal obligations. Users can request the deletion of their accounts and associated data.
      </p>

      <h2>Updates to the Privacy Policy:</h2>
      <p>
        <strong>8.1 Notification:</strong> Users will be notified of any updates to the privacy policy, and the revised
        policy will be made accessible on the platform.
      </p>

      <p>
        By using TravelTrove, users agree to the terms outlined in this Privacy Policy. The policy ensures the protection
        of user data and maintains transparency in data collection and usage practices.
      </p>
    </div>
  </div>
    
  );
};

export default PrivacyPolicy;
