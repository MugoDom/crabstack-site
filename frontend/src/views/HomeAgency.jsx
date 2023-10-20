import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogMasonry from "./blog/BlogMasonry";
import CopyRightTwo from "../components/footer/CopyRightTwo";
import FooterTwo from "../components/footer/FooterTwo";
import BlogTwo from "../components/blog/BlogTwo";
import HeaderAgency from "../components/header/HeaderAgency";
import HeroAgency from "../components/HeroAgency";
import ListOne from "../components/list/ListOne";
import ListTwo from "../components/list/ListTwo";
import Team from "../components/Team";


const HomeAgency = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-agency">
      <Helmet>
        <title>Crabstack - Home</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="ptf-site-wrapper__inner">
        <HeaderAgency />
        {/* End Header Agency */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-agency">
            {/*=============================================
          Start Our Hero Section howcase 3
          ============================================== */}
            <div className="ptf-showcase-3 swiper-container">
              <div className="swiper-wrapper">
                <HeroAgency />
              </div>
            </div>

            {/*=============================================
          Start Service section
          ============================================== */}

            <section id="services">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1">What We Do</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                ></div>
                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "10.625rem",
                    "--bs-gutter-y": " 5.3125rem",
                  }}
                >
                  <div className="col-12 col-md-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2>Design</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      {/* <!--Divider--> */}
                      <div className="ptf-divider"></div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      {/* <!--Services List--> */}
                      <ListOne />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <h2>Advertising</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      {/* <!--Divider--> */}
                      <div className="ptf-divider"></div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      {/* <!--Services List--> */}
                      <ListTwo />
                    </div>
                  </div>
                </div>
              </div>

              
            </section>

            {/*=============================================
          Start Latest Works section
          ============================================== */}
            <section id="works">
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem", "--ptf-md": "5rem" }}
                id="works"></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 d-inline-flex">
                    Latest Works
                  </h2>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                ></div>
                
                <BlogMasonry />
              </div>
              
            </section>

            {/*=============================================
          Start Our Crew/Team section
          ============================================== */}
            <section className="ptf-custom--1569" id="team">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1">Our Crew</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                ></div>
              </div>
              <div className="container">
                <div className="ptf-team-member-grid ptf-team-member-grid--4-columns">
                  <Team />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
            {/*=============================================
          Start Blog section
          ============================================== */}
            <section id="blog">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-7">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="text-uppercase fw-semibold">
                        Blog
                      </h2>
                    </div>
                  </div>
                  
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                ></div>
                <div className="row">
                  <div className="col-lg-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <div
                        className="ptf-isotope-grid row"
                        style={{
                          "--bs-gutter-x": "3.75rem",
                          "--bs-gutter-y": "3rem",
                        }}
                      >
                        <BlogTwo />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <footer className="ptf-footer ptf-footer--style-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-2">
                    <div className="ptf-footer__top">
                      <FooterTwo />
                    </div>
                    {/* End .ptf-footer__top */}

                    <div className="ptf-footer__bottom">
                      <CopyRightTwo />
                    </div>
                    {/* End .ptf-footer__bottom */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}
    </div>
  );
};

export default HomeAgency;
