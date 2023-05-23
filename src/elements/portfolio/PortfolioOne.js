import React, { useState, useEffect } from "react";
import PortfolioData from "../../data/portfolio/PortfolioData.json";
import PortfolioItem from "./PortfolioItem";
import { FaSpinner } from "react-icons/fa";
import GalleryOne from "../gallery/GalleryOne";
import ReactLoading from "react-loading";

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

const alldata = PortfolioData;
const PortfolioOne = ({ galleryData = [], galleryDataLoading }) => {
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
    setNoMorePost(true);
    // if (dataVisibleCount >= getAllItems.length) {
    // } else {
    //   setDataVisibleCount(tempCount);
    //   if (activeFilter === filters[0].text.toLowerCase()) {
    //     setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
    //   } else {
    //     setVisibleItems(
    //       getAllItems.filter(
    //         (data) => data.category === activeFilter && data.id <= tempCount
    //       )
    //     );
    //   }
    // }
  };
  const galleryArray = noMorePost ? galleryData : galleryData.slice(0, 6);
  
  const galleryArrayImages = galleryArray.map(
    (a) => `${process.env.REACT_APP_BASE_URL}${a.subCategoryImage}`
  );

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  function removewithfilter(arr) {
    let outputArray = arr.filter(function(v, i, self)
    {
         
        // It returns the index of the first
        // instance of each value
        return i == self.indexOf(v);
    });
     
    return outputArray;
}

  return (
    <>
      <div className="row mt_dec--30 row--15">
        {galleryDataLoading ? (
          <div className="center-flex">
            {" "}
            <ReactLoading
              type="spinningBubbles"
              color="#1B7284"
              height={"20%"}
              width={"20%"}
            />{" "}
          </div>
        ) : (
          <>
            {galleryArray.map((item) => {
              const popupLinkArray = galleryArray.map(
                (a) => `${process.env.REACT_APP_BASE_URL}${a.subCategoryImage}`
              );
              const popupLinkImage = [`${process.env.REACT_APP_BASE_URL}${item.subCategoryImage}` , ...popupLinkArray]
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={item._id}
                >
                  <GalleryOne galleryItem={item} popupLink={[...new Set(popupLinkImage)]} />
                </div>
              );
            })}
          </>
        )}
      </div>

      {galleryData.length > 6 && !noMorePost && (
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
      )}
    </>
  );
};

export default PortfolioOne;
