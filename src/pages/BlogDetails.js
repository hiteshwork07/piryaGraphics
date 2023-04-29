import React, { useEffect, useState } from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import BlogDetailsContent from '../components/blog/BlogDetailsContent';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import api from '../api/api';

const BlogDetails = ({match: {params: {id}}}) => {
    
    const [blogInfo, setBlogInfo] = useState({});

    const getBlogData = () => {
      try {
        api
          .get("/api/blog/v1/")
          .then((response) => {
            const currentPageDetails = response.data?.application.find((a) => a._id === id);
            setBlogInfo(currentPageDetails);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log("err", err);
      }
    };
  
    useEffect(() => {
        getBlogData();
    }, []);

    return (
        <>
            <SEO title="Blog Details || Doob" />
            <Layout>
                <div className="rn-blog-details-area">
                    {Object.keys(blogInfo).length && <BlogDetailsContent data={blogInfo}  />}
                </div>
            </Layout>
        </>
    )
}
export default BlogDetails;