import React, { useEffect, useState } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogPropTwo from "./itemProp/BlogPropTwo";
import api from "../../api/api";

const BlogListView = () => {
  const [blogList, setBlogList] = useState({data:[], loading : true});

  const getBlogData = () => {
    try {
      api
        .get("/api/blog/v1/")
        .then((response) => {
          setBlogList({data:response.data?.application, loading : false});
        })
        .catch((error) => {
          console.log(error);
          setBlogList({data:[], loading : false});
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
      <SEO title="Blog List View || PRIY Graphics | Printing | Advertising Services in Surat - React Business  Template" />
      <Layout>
        <div className="main-content">
          {/* Start Blog Area  */}
          <div className="rn-blog-area rn-section-gap">
            <div className="container">
              <div className="row mt_dec--30">
                <BlogPropTwo
                  blogList={blogList}
                  column="col-lg-6 mt--30"
                  StyleVarProp="box-card-style-default card-list-view"
                />
              </div>
            </div>
          </div>
          {/* End Blog Area  */}
        </div>
      </Layout>
    </>
  );
};

export default BlogListView;
