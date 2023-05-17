import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading"
import BlogDetailsContent from "../components/blog/BlogDetailsContent";
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import api from "../api/api";

const BlogDetails = ({
  match: {
    params: { id },
  },
}) => {
  const [blogInfo, setBlogInfo] = useState({});
  const [blogInfoLoading, setBlogInfoLoading] = useState(false);

  const getBlogData = () => {
    setBlogInfoLoading(true)
    try {
      api
        .get("/api/blog/v1/")
        .then((response) => {
          const currentPageDetails = response.data?.application.find(
            (a) => a._id === id
          );
          setBlogInfo(currentPageDetails);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log("err", err);
    }finally{
      setBlogInfoLoading(false)
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <>
      <SEO title="Blog Details || PRIY Graphics | Printing | Advertising Services in Surat" />
      <Layout>
        <div className="rn-blog-details-area">
          {blogInfoLoading ? <div className="center-flex"> <ReactLoading type="spinningBubbles" color="#1B7284" height={'20%'} width={'20%'} /> </div> : <>{Object.keys(blogInfo).length && (
            <BlogDetailsContent data={blogInfo} />
          )}</>}
          
        </div>
      </Layout>
    </>
  );
};
export default BlogDetails;
