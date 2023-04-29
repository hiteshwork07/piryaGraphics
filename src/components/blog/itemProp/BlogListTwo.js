import React from "react";
import { slugify } from "../../../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogListTwo = ({ data, StyleVar }) => {
  // const cate = data.categories.map((value, i) => {
  //     return (
  //         <Link to={process.env.PUBLIC_URL + `/category/${slugify(value)}`} key={i}>{value}{i !== data.categories.length - 1 && ","}</Link>
  //     )
  // });

  const dateStr = data.updatedAt;

  const date = new Date(dateStr);

  const options = { year: "numeric", month: "short", day: "numeric" };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={`rn-card ${StyleVar}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link
            to={process.env.REACT_APP_BASE_URL + `/blog-details/${data._id}`}
            className="image"
          >
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${data.blogImage}`}
              alt="Blog Image"
            />
          </Link>
        </div>
        <div className="content">
          <h4 className="title">
            <Link
              to={`/blog-details/${data._id}`}
            >
              {data.blogName}
            </Link>
          </h4>
          <ul className="rn-meta-list">
            {/* <li><Link to={process.env.REACT_APP_BASE_URL + `/archive/${slugify(data .author)}`}>{data.author}</Link></li> */}
            {/* <li className="separator">/</li> */}
            <li>{formattedDate}</li>
          </ul>
          <div className="description-container">
          <p className="descriptiion">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
BlogListTwo.propTypes = {
  data: PropTypes.object,
};
export default BlogListTwo;
