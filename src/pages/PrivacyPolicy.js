import React from "react";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import SEO from "../common/SEO";
import Layout from "../common/Layout";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy || Priy Graphics" />
      <Layout>
        <BreadcrumbOne
          title="Privacy Policy"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Privacy Policy"
        />
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <h4 className="title">
                Privacy Policy
                </h4>
                <p className="mb--10">
                At Priy Design and Printing Agency, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share information about you when you use our website.
                </p>
              </div>

              <div className="mt-4 row">
                <h4 className="title">
                Information We Collect
                </h4>
                <p className="mb--10">
                When you visit our website, we may collect certain information about you, including your IP address, the type of device you are using to access our website, the pages you visit on our website, and other similar information. We may also collect information about you through cookies or similar technologies.
                </p>
              </div>

              <div className="mt-4 row">
                <h4 className="title">
                How We Use Your Information
                </h4>
                <p className="mb--10">
                We use the information we collect to improve our website and services, to communicate with you about our products and services, and to personalize your experience on our website.
                </p>
              </div>

              <div className="mt-4 row">
                <h4 className="title">
                How We Share Your Information
                </h4>
                <p className="mb--10">
                We may share your information with third-party service providers who assist us with website analytics, marketing, and other similar services. We may also share your information as required by law or to protect our rights or the rights of others.
                </p>
              </div>

              <div className="mt-4 row">
                <h4 className="title">
                Your Choices
                </h4>
                <p className="mb--10">
                You have the right to opt-out of certain communications from us, such as marketing emails. You can also disable cookies on your device or browser, but this may affect your ability to use certain features of our website.
                </p>
              </div>

              <div className="mt-4 row">
                <h4 className="title">
                Security
                </h4>
                <p className="mb--10">
                We take appropriate measures to protect your information from unauthorized access, disclosure, or misuse. However, no security measures are foolproof, and we cannot guarantee the security of your information.
                </p>
              </div>

              <div className="mt-4 row">
                <h4 className="title">
                Changes to Our Privacy Policy
                </h4>
                <p className="mb--10">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
                </p>
              </div>

              <div className="mt-4 row">
                <h4 className="title">
                Contact Us
                </h4>
                <p className="mb--10">
                If you have any questions or concerns about our Privacy Policy, please contact us at  contact@priygraphics.com.
                </p>
              </div>
            </div>
          </div>
          {/* End Contact Area  */}
        </div>
      </Layout>
    </>
  );
};
export default PrivacyPolicy;
