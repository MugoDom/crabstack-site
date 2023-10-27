import React from "react";
// Homepage Demo

import HomeAgency from "../views/HomeAgency";

// Service
import ServiceDetails from "../views/ServiceDetails";


// Blog
import BlogDetailsSidebar from "../views/BlogDetailsSidebar";

// Portfolio

import WorksShowcase from "../views/portfolio/WorksShowcase";

// Others
import Contact from "../views/Contact";

import ComingSoon from "../views/ComingSoon";

import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeAgency />} />
        {/*  Homepage Demo */}
        <Route path="/home-agency" element={<HomeAgency />} />
        

        {/* Service */}
        <Route path="/service-details" element={<ServiceDetails />} />

        

        {/* Blog */}
       
        <Route path="/blog-details-sidebar" element={<BlogDetailsSidebar />} />

        {/* Portfolio */}
       
        <Route path="/works-showcase" element={<WorksShowcase />} />

        {/* others */}
        
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
