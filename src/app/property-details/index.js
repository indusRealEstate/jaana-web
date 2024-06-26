"use client";
import { getPropertyDetails, getSimilarProperties } from "@/api/properties";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import ContactWithAgent from "@/components/property/property-single-style/single-v2/ContactWithAgent";
import OverView from "@/components/property/property-single-style/single-v2/OverView";
import PropertyHeader from "@/components/property/property-single-style/single-v2/PropertyHeader";
import ScheduleForm from "@/components/property/property-single-style/single-v2/ScheduleForm";
import PropertyGallery from "@/components/property/property-single-style/single-v8/PropertyGallery";
import { Box, CircularProgress } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const PropertyDetailsPage = () => {
  const searchParams = useSearchParams();
  const prop_id = searchParams.get("prop_id");

  const [data, setData] = useState("");
  const [inputData, setInputData] = useState("");

  getPropertyDetails(prop_id).then((response) => {
    setData(response);
    getSimilarProperties(response.property_type).then((props) => {
      setInputData(props);
    });
  });

  // useEffect(() => {

  // 	// if (data != "") {

  // 	// }
  // }, [data, inputData, prop_id])

  return (
    <>
      {data == "" ? (
        <>
          <Box
            sx={{
              display: "flex",
              height: "60rem",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={50}></CircularProgress>
          </Box>
        </>
      ) : (
        <>
          {/* Main Header Nav */}
          <DefaultHeader />
          {/* End Main Header Nav */}

          {/* Mobile Nav  */}
          <MobileMenu />
          {/* End Mobile Nav  */}

          {/* Property All Single V1 */}
          <section className="pt60 pb0 bg-theme-white">
            <div className="container">
              <div className="row">
                <PropertyHeader headerdata={data} />
              </div>
              {/* End .row */}

              <div className="row mb30 mt30">
                <PropertyGallery imagesRaw={data.images} />
              </div>
              {/* End .row */}

              <div className="row mt30">
                <OverView otherDetails={data} />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Property All Single V1  */}

          <section className="pt60 pb90 bgc-f7">
            <div className="container">
              <div className="row wrap">
                <div className="col-lg-8">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30 title-theme">
                      Property Description
                    </h4>
                    <ProperytyDescriptions ProDescriptions={data} />
                    {/* End property description */}

                    <h4 className="title fz17 mb30 mt50 title-theme">
                      Property Details
                    </h4>
                    <div className="row">
                      <PropertyDetails proDetails={data} />
                    </div>
                  </div>
                  {/* End .ps-widget */}

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30 mt30 title-theme">
                      Address
                    </h4>
                    <div className="row">
                      <PropertyAddress PropAddress={data} />
                    </div>
                  </div>
                  {/* End .ps-widget */}

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30 title-theme">
                      Features &amp; Amenities
                    </h4>
                    <div className="row">
                      <PropertyFeaturesAminites Features={data.features} />
                    </div>
                  </div>
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Energy Class</h4>
                    <div className="row">
                      <EnergyClass />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  {/* End .ps-widget */}
                  {data.floorplan != "" ? (
                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                      <h4 className="title fz17 mb30 title-theme">
                        Floor Plans
                      </h4>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="accordion-style1 style2">
                            <FloorPlans floorplanImage={data.floorplan} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {data.video != "" ? (
                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                      <h4 className="title fz17 mb30 title-theme">Video</h4>
                      <div className="row">
                        <PropertyVideo
                          videoId={data.video}
                          imgs={data.images}
                        />
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">360° Virtual Tour</h4>
                    <div className="row">
                      <VirtualTour360 />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">What&apos;s Nearby?</h4>
                    <div className="row">
                      <PropertyNearby />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Walkscore</h4>
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="fw400 mb20">
                          10425 Tabor St Los Angeles CA 90034 USA
                        </h4>
                        <WalkScore />
                      </div>
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Mortgage Calculator</h4>
                    <div className="row">
                      <MortgageCalculator />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="row">
                      <PropertyViews />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Home Value</h4>
                    <div className="row">
                      <HomeValueChart />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative bg-theme2">
                    <h4 className="title fz17 mb30 text-light">
                      Get More Information
                    </h4>
                    <InfoWithForm agentsDetails={data} />
                  </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="row">
                     
                      <AllReviews />
                    </div>
                  </div> */}
                  {/* End .ps-widget */}

                  {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Leave A Review</h4>
                    <div className="row">
                      <ReviewBoxForm />
                    </div> 
                  </div> */}
                  {/* End .ps-widget */}
                </div>
                {/* End .col-8 */}

                <div className="col-lg-4">
                  <div className="column">
                    <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative bg-theme2">
                      <h6 className="title fz17 mb30 text-light">
                        Get More Information
                      </h6>
                      <ContactWithAgent contactAgent={data} />
                      <ScheduleForm contactform={data} />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row mt30 align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="main-title">
                    {inputData == "" ? (
                      <h2 className="title">Discover Our Featured Listings</h2>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                {/* End header */}

                <div className="col-auto mb30">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-auto">
                      <button className="featured-prev__active swiper_button">
                        <i className="far fa-arrow-left-long" />
                      </button>
                    </div>
                    {/* End prev */}

                    <div className="col-auto">
                      <div className="pagination swiper--pagination featured-pagination__active" />
                    </div>
                    {/* End pagination */}

                    <div className="col-auto">
                      <button className="featured-next__active swiper_button">
                        <i className="far fa-arrow-right-long" />
                      </button>
                    </div>
                    {/* End Next */}
                  </div>
                  {/* End .col for navigation and pagination */}
                </div>
                {/* End .col for navigation and pagination */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="property-city-slider">
                    {inputData != "" ? (
                      <NearbySimilarProperty
                        inputData={inputData}
                        prop_id={prop_id}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
          </section>

          {/* Start Our Footer */}
          <section className="footer-style1 pt60 pb-0">
            <Footer />
          </section>
          {/* End Our Footer */}
        </>
      )}
    </>
  );
};

export default PropertyDetailsPage;
