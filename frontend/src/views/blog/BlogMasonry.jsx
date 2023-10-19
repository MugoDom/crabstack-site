import React from "react";
import BlogMasonryGrid from "../../components/blog/BlogMasonryGrid";


const BlogMasonry = () => {
  return (              
              <div className="container-xxl container-xxl--custom">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="ptf-isotope-grid">
                    {" "}
                    <BlogMasonryGrid />
                  </div>
                </div>
              </div>      
  );
};

export default BlogMasonry;
