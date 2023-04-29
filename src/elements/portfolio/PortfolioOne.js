import React, { useState, useEffect } from "react";
import PortfolioData from "../../data/portfolio/PortfolioData.json";
import PortfolioItem from "./PortfolioItem";
import { FaSpinner } from "react-icons/fa";
import GalleryOne from "../gallery/GalleryOne";

const filters = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "design",
  },
  {
    id: 3,
    text: "art",
  },
  {
    id: 4,
    text: "development",
  },
];

const PopupData = [
    {
        id: "01",
        image: "./images/portfolio/portfolio-01.jpg",
        popupLink: [
            './images/portfolio/portfolio-01.jpg',
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
            './images/portfolio/portfolio-03.jpg',
            './images/portfolio/portfolio-04.jpg',
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
            './images/portfolio/portfolio-05.jpg',
        ],
    },
    {
        id: "02",
        image: "./images/portfolio/portfolio-02.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    },
    {
        id: "03",
        image: "./images/portfolio/portfolio-03.jpg",
        popupLink: [
            './images/portfolio/portfolio-03.jpg',
        ],
    },
    {
        id: "04",
        image: "./images/portfolio/portfolio-04.jpg",
        popupLink: [
            './images/portfolio/portfolio-04.jpg',
        ],
    },
    {
        id: "05",
        image: "./images/portfolio/portfolio-04.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    },
    {
        id: "06",
        image: "./images/portfolio/portfolio-05.jpg",
        popupLink: [
            './images/portfolio/portfolio-05.jpg',
        ],
    },
]

const alldata = PortfolioData;
const PortfolioOne = ({ Column }) => {
  const [getAllItems] = useState(alldata);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(6);
  const [noMorePost, setNoMorePost] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount >= getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <>
      <div className="row mt_dec--30 row--15">
        {PopupData.map((item) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
            key={item.id}
          >
            <GalleryOne galleryItem={item} />
          </div>
        ))}
      </div>

      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rwt-load-more text-center mt--50">
            <button
              className="btn btn-default btn-large btn-icon"
              onClick={handleLoadmore}
              disabled={noMorePost ? "disabled" : null}
            >
              {noMorePost ? (
                "No Item Here"
              ) : (
                <span>
                  Load More
                  <span className="icon">
                    <FaSpinner />
                  </span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioOne;
