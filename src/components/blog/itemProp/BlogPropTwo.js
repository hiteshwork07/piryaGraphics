import React, { useState, useEffect } from "react";
import BlogClassicData from "../../../data/blog/BlogList.json";
import BlogListTwo from "./BlogListTwo";
import ReactLoading from "react-loading";
import filters from "./Filters";

const alldataBLog = BlogClassicData;
const BlogPropTwo = ({ column, blogList = {}, StyleVarProp }) => {
  const { data, loading } = blogList;
  const [getAllItems] = useState(alldataBLog);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [noMorePost, setNoMorePost] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  const handleLoadmorebl = (e) => {
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
            (data) => data.text === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };
  return (
    <>
      <div className="col-lg-12">
        <div className="row row--15">
          {loading ? (
            <div className="center-flex">
            <ReactLoading
              type="spinningBubbles"
              color="#1B7284"
              height={"20%"}
              width={"20%"}
            />
            </div>
          ) : (
            <>
              {" "}
              {data.map((item) => (
                <div key={item._id} className={column}>
                  <BlogListTwo StyleVar={StyleVarProp} data={item} />
                </div>
              ))}{" "}
            </>
          )}
        </div>
      </div>
      <div className="col-lg-12">
        <div className="rwt-load-more text-center mt--60">
          {/* <button
                        className="btn btn-default btn-icon"
                        onClick={handleLoadmorebl}
                        disabled={noMorePost ? "disabled" : null}
                        style={{color :"#fff"}}
                    >
                        {noMorePost ? (
                        "No Post Here"
                        ) : (
                        <span>
                            View More Post 
                            <span className="icon">
                                <FaSpinner />
                            </span>
                        </span>
                        )}
                    </button> */}
        </div>
      </div>
    </>
  );
};
export default BlogPropTwo;
