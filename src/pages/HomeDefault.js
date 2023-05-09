import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import HeaderTopNews from "../common/header/HeaderTopNews";
import FooterOne from "../common/footer/FooterOne";
import Copyright from "../common/footer/Copyright";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import Separator from "../elements/separator/Separator";
import TimelineOne from "../elements/timeline/TimelineOne";
import VideoItem from "../elements/video/VideoItem";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import api from "../api/api";
var BlogListData = BlogClassicData.slice(0, 3);

const PopupData = [
  {
    id: "01",
    image: "./images/bg/bg-image-4.jpg",
    popupLink: [
      "https://www.youtube.com/embed/ctsT5Y-InqE?autoplay=1&mute=1&enablejsapi=1",
    ],
  },
];

const HomeDefault = () => {
  const [portfolioData, setPortFolioData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [blogList, setBlogList] = useState([]);

  const getBlogData = () => {
    try {
      api
        .get("/api/blog/v1/")
        .then((response) => {
          setBlogList(response.data?.application);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log("err", err);
    }
  };


  
  const getCategoryData = (id) => {
    if (!id) return;
    try {
      api
        .get(`/api/subCategory/${id}`)
        .then((response) => {
          setGalleryData(response.data?.application);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() =>{
    getBlogData()
  },[])

  useEffect(() => {
    if (portfolioData.length) {
      const firstCategory = portfolioData[0];
      const { _id } = firstCategory || {};
      getCategoryData(_id);
    }
  }, [portfolioData]);

  return (
    <>
      <SEO title="PRIY Graphics Printing  Advertising Services in Surat ,Gujarat ,India" />
      <main className="page-wrapper">
        {/* <HeaderTopNews /> */}
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
          setPortFolioData={setPortFolioData}
        />

        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 variation-default height-850 bg_image"
          data-black-overlay="8"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-3.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <span className="subtitle">
                    Your Partner for Marketing Success
                  </span>
                  <h1 className="title display-one">
                    Graphics | Printing | Advertising
                  </h1>
                  <p className="description">
                    Your one-stop solution for exceptional design, service,
                    quality, and value in all your graphics, printing and
                    advertising needs.{" "}
                  </p>
                  <div className="button-group">
                    <a
                      className="btn-default btn-medium round btn-icon"
                      href="/contact"
                    >
                      Contact Us{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gapBottom pt--100">
          <div className="container">
            <ServiceOne
              serviceStyle="service__style--1 icon-circle-style"
              textAlign="text-center"
              isHomePage
            />
          </div>
        </div>
        {/* End Service Area  */}

        <Separator />
        {/* Start Portfolio Area  */}
        <div className="rwt-portfolio-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Portfolio"
                  title={portfolioData[0]?.categoryName}
                  description="Explore our portfolio of innovative and effective design solutions that have helped our clients succeed."
                />
              </div>
            </div>
            <PortfolioOne galleryData={galleryData} Column="col-lg-4 col-md-6 col-12 mt--30 portfolio" />
          </div>
        </div>
        {/* End Portfolio Area  */}

        <Separator />
        {/* Start Timeline Area  */}
        {/* <div className="rwt-timeline-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Working Process"
                  title="Business Working Process."
                  description="We provide company and finance service for <br /> startups and company business."
                />
              </div>
            </div>
            <div className="row mt_dec--20">
              <div className="col-lg-12">
                <TimelineOne />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Timeline Area  */}

        {/* Start Video Area  */}
        <div className="rwt-video-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              {PopupData.map((item) => (
                <div className="col-lg-12" key={item.id}>
                  <VideoItem galleryItem={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Video Area  */}

        <Separator />

        {/* Start Elements Area  */}
        <div className="rwt-elements-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Client Feedback"
                  title="Testimonial."
                />
              </div>
            </div>
            <TestimonialOne
              column="col-lg-3 col-md-6 col-12"
              teamStyle="card-style-default testimonial-style-one style-two border-gradient"
            />
          </div>
        </div>
        {/* End Elements Area  */}

        <Separator />
        <div className="blog-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Latests Blog"
                  title="Insights and Inspiration"
                  description="Discover the latest trends, tips, and tricks in graphics, printing, and advertising."
                />
              </div>
            </div>
            <div className="row row--15">
              {blogList.map((item) => (
                <div
                  key={item._id}
                  className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30"
                >
                  <BlogList StyleVar="box-card-style-default" data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Start Elements Area  */}
        <div className="rwt-callto-action-area rn-section-gapBottom">
          <div className="wrapper">
            <CalltoActionFive />
          </div>
        </div>
        {/* End Elements Area  */}

        <FooterOne />
        <Copyright />
      </main>
    </>
  );
};
export default HomeDefault;
