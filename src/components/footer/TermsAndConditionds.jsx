import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <h2>Terms and Conditions for TravelTrove:</h2>
      <p>
        <strong>Introduction:</strong>
        Welcome to TravelTrove, a user-friendly and personalized travel platform that allows travelers to discover and publish their unique travel experiences and tour operators to showcase and manage their travel packages efficiently. By accessing or using the TravelTrove website and services, you agree to comply with these Terms and Conditions. If you do not agree with these terms, please refrain from using the platform.
      </p>
      <p>
        <strong>User Registration and Authentication:</strong>
        <ul>
          <li>2.1 Registration Process: To use TravelTrove, users must complete the registration process and provide accurate and current information. You are responsible for maintaining the confidentiality of your account information and password.</li>
          <li>2.2 Email Verification: TravelTrove uses a two-step authentication process, which includes email verification, to ensure the security of your account. You agree to verify your email during the registration process.</li>
        </ul>
      </p>
      <p>
        <strong>User Dashboard and Content Creation:</strong>
        <ul>
          <li>3.1 Custom User Dashboard: TravelTrove provides each traveler with a personalized user dashboard where they can effortlessly create and publish their travel experiences. The content published on the platform is subject to our content guidelines.</li>
          <li>3.2 Image Optimization: TravelTrove utilizes cloudinary integration to efficiently store and optimize images. You are responsible for ensuring that you have the necessary rights and permissions to use and publish images on the platform.</li>
        </ul>
      </p>
      {/* Add other sections as per the provided Terms and Conditions */}
      <p>
        <strong>Termination:</strong>
        TravelTrove reserves the right to terminate or suspend your access to the platform at any time and for any reason, including but not limited to a breach of these Terms and Conditions.
      </p>
      <p>
        <strong>Changes to Terms and Conditions:</strong>
        TravelTrove may update these Terms and Conditions from time to time. Any changes will be effective upon posting the revised Terms and Conditions on the platform. Continued use of the platform after such changes implies your acceptance of the updated terms.
      </p>
      <p>
        <strong>Contact:</strong>
        For any questions, concerns, or inquiries regarding these Terms and Conditions or the TravelTrove platform, please contact us at [email address].
      </p>
      <p>
        By using TravelTrove, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. Enjoy your travel experiences on TravelTrove!
      </p>
    </div>
  );
};

export default TermsAndConditions;
