"use client"
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import React from "react";
import PropertyFiltering from "@/components/listing/grid-view/grid-default/PropertyFiltering";
import { useEffect, useState } from "react";
import { getAllProperties } from "@/api/properties";
import { Box, CircularProgress } from "@mui/material";

export const metadata = {
  title: "All Properties",
};

const AllProperties = () => {
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    getAllProperties()
      .then((response) => {
          //console.log(response.prop);
        setAllProperties(response);
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }, [allProperties]);
  return (

    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">All Properties</h2>
                {/* <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">All</a>
                </div> */}
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                  data-bs-toggle="offcanvas"
                  href="#listingSidebarFilter"
                  role="button"
                  aria-controls="listingSidebarFilter"
                >
                  <span className="flaticon-settings" /> Filter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      {allProperties == "" ? (
        <>
          <Box
            sx={{
              display: "flex",
              height: "50vh",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CircularProgress size={50}></CircularProgress>
          </Box>
        </>
      ) : ( 
      <PropertyFiltering allProperties = {allProperties}/>
      )}
      {/* Property Filtering */}

      {/* Start Our Footer */}
      {/* <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section> */}

      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AllProperties;
