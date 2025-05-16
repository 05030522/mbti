import React from "react";

const Terms = ({
  companyName = "__________", // Default placeholder
  serviceName = "[Your Service Name/App Name]", // Default placeholder
  effectiveDate = "[Date]", // Default placeholder
  privacyPolicyUrl = "#", // Default placeholder link
  serviceDescription = "[Briefly describe what your service/app does...]", // Default placeholder
  prohibitedActivities = "[List prohibited activities relevant to your service...]", // Default placeholder
  noticePeriod = "30", // Default notice period in days
  jurisdiction = "[Your Jurisdiction, e.g., State of California, USA]", // Default placeholder
  contactEmail = "[Your Contact Email Address]", // Default placeholder
  contactPageUrl = null, // Optional contact page URL
  contactPageText = "Contact Us Page", // Default text for contact page link
  physicalAddress = null, // Optional physical address
}) => {
  return (
    <div style={{ margin: "0 2.5em" }}>
      <div>
        {" "}
        {/* Or use React.Fragment <>...</> if no wrapping div needed */}
        <h1>Terms of Service</h1>
        <p>
          <strong>Effective Date:</strong> {effectiveDate}
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to {serviceName} (the &ldquo;Service&rdquo;), provided by{" "}
          <code className="placeholder">{companyName}</code> (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &quot;our&quot;). Please read these Terms of
          Service (&quot;Terms&quot;) carefully before using our Service. By
          accessing or using the Service, including signing in via Google, you
          signify your agreement to be bound by these Terms and our{" "}
          <a href={privacyPolicyUrl}>Privacy Policy</a>, which is incorporated
          herein by reference. If you do not agree to these Terms, you may not
          access or use the Service.
        </p>
        <h2>2. Service Description</h2>
        <p>
          The Service provides {serviceDescription}. Access to and use of
          certain features of the Service requires authentication, which can be
          facilitated through your Google Account via Google OAuth.
        </p>
        <h2>3. Google Account Integration (Google Sign-In)</h2>
        <ul>
          <li>
            <strong>Authentication:</strong> To use the Service, you may be
            required or have the option to sign in using your Google Account
            credentials (&quot;Google Sign-In&quot;).
          </li>
          <li>
            <strong>Permissions:</strong> By using Google Sign-In, you authorize
            us to access certain information from your Google Account necessary
            to provide the Service. The specific information requested will be
            presented to you by Google during the authorization process (the
            &quot;OAuth consent screen&quot;). This typically includes
            information like your name, email address, and profile picture.
          </li>
          <li>
            <strong>Data Usage:</strong> We will access, use, and store the
            information obtained through Google Sign-In solely in accordance
            with our <a href={privacyPolicyUrl}>Privacy Policy</a> and for the
            purpose of providing and improving the Service, authenticating your
            identity, and enabling Service features.
          </li>
          <li>
            <strong>Google&apos;s Terms:</strong> Your use of Google Sign-In is
            also subject to Google&apos;s own Terms of Service and Privacy
            Policy. <code className="placeholder">{companyName}</code> is not
            responsible for Google&apos;s actions, policies, or the security of
            your Google Account.
          </li>
          <li>
            <strong>Account Security:</strong> You are responsible for
            maintaining the security of your Google Account credentials. Any
            activity occurring under your account when signed in via Google will
            be deemed your activity.
          </li>
        </ul>
        <h2>4. Privacy</h2>
        <p>
          Your privacy is important to us. Our{" "}
          <a href={privacyPolicyUrl}>Privacy Policy</a> explains how we collect,
          use, and disclose information obtained from you, including information
          accessed via Google Sign-In. Please review it carefully.
        </p>
        <h2>5. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>
            Use the Service only for lawful purposes and in accordance with
            these Terms.
          </li>
          <li>
            Provide accurate information, understanding that some information
            may be automatically populated from your Google Account.
          </li>
          <li>
            Maintain the confidentiality and security of your account access,
            including your Google Account used for sign-in.
          </li>
          <li>Not misuse the Service or interfere with its operation.</li>
        </ul>
        <h2>6. Prohibited Conduct</h2>
        <p>
          You agree not to engage in any of the following prohibited activities:{" "}
          {/* Consider making this a list prop if it's long */}
          {prohibitedActivities}.
        </p>
        <h2>7. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are
          and will remain the exclusive property of{" "}
          <code className="placeholder">{companyName}</code> and its licensors.
          Our trademarks and trade dress may not be used in connection with any
          product or service without the prior written consent of{" "}
          <code className="placeholder">{companyName}</code>.
        </p>
        <h2>8. Termination</h2>
        <p>
          We may terminate or suspend your access to the Service immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach the Terms. You may cease
          using the Service at any time. Upon termination, your right to use the
          Service will immediately cease. If you wish to disconnect your Google
          Account, you can typically manage permissions within your Google
          Account settings.
        </p>
        <h2>9. Disclaimers</h2>
        <p>
          <strong>
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; BASIS.
          </strong>{" "}
          <code className="placeholder">{companyName}</code> EXPRESSLY DISCLAIMS
          ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT
          NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
          SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
        </p>
        <h2>10. Limitation of Liability</h2>
        <p>
          <strong>
            IN NO EVENT SHALL <code className="placeholder">{companyName}</code>
            , NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR
            AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES,
          </strong>{" "}
          INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR
          OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF
          OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT
          OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE
          SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR
          TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT
          (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE
          HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
        </p>
        <h2>11. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material, we will provide at
          least {noticePeriod} days&apos; notice prior to any new terms taking
          effect. What constitutes a material change will be determined at our
          sole discretion. By continuing to access or use our Service after
          those revisions become effective, you agree to be bound by the revised
          terms.
        </p>
        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of {jurisdiction}, without regard to its conflict of law
          provisions.
        </p>
        <h2>13. Contact Us</h2>
        <div className="contact-info">
          {" "}
          {/* Use className instead of class */}
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            <code className="placeholder">{companyName}</code>
            <br /> {/* Self-closing tag */}
            {contactEmail && (
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            )}
            {contactEmail && <br />} {/* Add line break if email exists */}
            {contactPageUrl && <a href={contactPageUrl}>{contactPageText}</a>}
            {contactPageUrl && <br />}{" "}
            {/* Add line break if contact page URL exists */}
            {physicalAddress && physicalAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
