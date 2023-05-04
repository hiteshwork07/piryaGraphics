import React from "react";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import SEO from "../common/SEO";
import Layout from "../common/Layout";

const TermsAndConditions = () => {
  return (
    <>
      <SEO title="Terms and Condition || Priy Graphics" />
      <Layout>
        <BreadcrumbOne
          title="Terms and Condition"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Terms and Condition"
        />
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <h4 className="title">
                Terms and Condition
                </h4>
                <p className="mb--10">
                Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website.
                </p>
              </div>

              <div className="mt-4 row">
                <p className="mb--10">
                By accessing this website, we assume you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.
                </p>
              </div>

              <div className="mt-4 row">
                <p className="mb--10">
                The content on this website is for general information purposes only and is subject to change without notice.
                </p>
              </div>

              <div className="mt-4 row">
               
                <p className="mb--10">
                We do not guarantee the accuracy, completeness, or timeliness of the information on this website. You acknowledge that any reliance on such information is at your own risk.
                </p>
              </div>

              <div className="mt-4 row">
                
                <p className="mb--10">
                This website may contain links to third-party websites that are not under our control. We have no responsibility for the content, policies, or practices of any linked website.
                </p>
              </div>

              <div className="mt-4 row">
                
                <p className="mb--10">
                Your use of this website is subject to all applicable laws and regulations. You are responsible for complying with all such laws and regulations.
                </p>
              </div>

              <div className="mt-4 row">
                
                <p className="mb--10">
                We reserve the right to modify or terminate this website at any time without notice. We are not liable for any damages resulting from the modification or termination of this website.
                </p>
              </div>

              <div className="mt-4 row">
                
                <p className="mb--10">
                By using this website, you agree to indemnify and hold us harmless from any claims, damages, losses, or expenses arising from your use of this website.
                </p>
              </div>

              <div className="mt-4 row">
                
                <p className="mb--10">
                These terms and conditions are governed by and construed in accordance with the laws of Surat, Gujarat, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Surat, Gujarat.
                </p>
              </div>

              <div className="mt-4 row">
                
                <p className="mb--10">
                If you have any questions or concerns about these terms and conditions, please contact us.
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
export default TermsAndConditions;
