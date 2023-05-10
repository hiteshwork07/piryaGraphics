import React from 'react';
import {slugify} from "../../../utils";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { getFormatedData } from '../../../utils/helper';


const BlogList = ({ data, StyleVar }) => {
   
    
    return (
        <div style={{height : "100%"}} className={`rn-card ${StyleVar}`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/blog-details/${data._id}`} className="image">
                        <img src={`${process.env.REACT_APP_BASE_URL}/${data.blogImage}`} alt="Blog Image" />
                    </Link>
                </div>
                <div className="content">
                    <ul className="rn-meta-list">
                        {/* <li><Link to={process.env.PUBLIC_URL + `/archive/${slugify(data.author)}`}>{data.author}</Link></li>
                        <li className="separator">/</li> */}
                        <li>{getFormatedData(data.createdAt)}</li>
                    </ul>
                    <h4 className="title">
                        <Link to={process.env.PUBLIC_URL + `/blog-details/${data._id}`}>
                            {data.blogName}
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;
