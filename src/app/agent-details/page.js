"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FormContact from "@/components/property/FormContact";

import ProfessionalInfo from "@/components/property/ProfessionalInfo";
import ReviewBoxForm from "@/components/property/ReviewBoxForm";
import ListingItemsContainer from "@/components/property/agency-single/ListingItems";

import SingleAgentCta from "@/components/property/agent-single/SingleAgentCta";
import AllReviews from "@/components/property/reviews";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAgentDetails } from "@/api/properties";
import React from "react";
import { useSearchParams } from "next/navigation";
import { getAgentsAllProperties } from "@/api/properties";
import { getAllAgents } from "@/api/properties";
import { Box, CircularProgress } from "@mui/material";

export const metadata = {
  title: "Agents",
};

const AgentDetails = ({ params }) => {
  // const searchParams = useSearchParams();
  // const agent_id = searchParams.get("agent_id");
  // //console.log(agent_id);

  // const [agentInfo, setagentInfo] = useState([]);
  // const [agentProp, setagentProp] = useState([]);
  // getAgentDetails(agent_id).then((response) => {
  //   setagentInfo(response);
  //   //console.log(response);
  //   getAgentsAllProperties(agent_id).then((item) => {
  //     setagentProp(item);
  //     // console.log(item);
  //   });
  // });

  const [allAgents, setAllAgents] = useState([]);

  useEffect(() => {
    getAllAgents()
      .then((response) => {
         //console.log(response);
        setAllAgents(response);
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }, [allAgents]);
  //console.log(allAgents);

  // const firstPara = new String(desc)
  //   .split(" ")
  //   .filter((words, index) => index < 50)
  //   .toString()
  //   .replace(/,/g, " ");

  // const lastPara = new String(desc)
  //   .split(" ")
  //   .filter((words, index) => index > 50)
  //   .toString()
  //   .replace(/,/g, " ");
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Agent Single Section Area */}
      
     
      {allAgents == "" ? (
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
         <section className="agent-single pt60">
        <div className="cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7">
                { allAgents != undefined? <SingleAgentCta id={params.id}  allAgents={allAgents}/>:(
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
                )}
               
                <div className="img-box-11 position-relative d-none d-xl-block">
                  <Image
                    width={120}
                    height={120}
                    className="img-1 spin-right"
                    src="/images/about/element-3.png"
                    alt="agents"
                  />
                  <Image
                    width={41}
                    height={11}
                    className="img-2 bounce-x"
                    src="/images/about/element-5.png"
                    alt="agents"
                  />
                  <Image
                    width={57}
                    height={49}
                    className="img-3 bounce-y"
                    src="/images/about/element-7.png"
                    alt="agents"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End cta-agent */}
        {allAgents.map((listing) => (
        <div className="container">
          <div className="row wow fadeInUp" data-aos-delay="300">
            <div className="col-lg-8 pr40 pr20-lg">
              <div className="row">
                <div className="col-lg-12">
                  <div className="agent-single-details mt30 pb30 bdrb1">
                    <h6 className="fz17 mb30">About Agent</h6>
                    <p className="text">{listing.agent_description}</p>
                    <div className="agent-single-accordion">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                            style={{}}
                          >
                            <div className="accordion-body p-0">
                              <p className="text">
                               
                              </p>
                            </div>
                          </div>
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
                            {/* <button
                              className="accordion-button p-0 collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Show more
                            </button> */}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
              {/* {agentProp != undefined ? (
                <ListingItemsContainer agentProp={agentProp} />
              ) : (
                ""
              )} */}

              <div className="row">
                <div className="col-lg-12">
                  {/* <AllReviews /> */}
                  {/* End  AllReviews */}

                  {/* <div className="bsp_reveiw_wrt">
                    <h6 className="fz17">Leave A Review</h6>
                    <ReviewBoxForm />
                  </div> */}
                  {/* End ReviewBoxForm */}
                </div>
              </div>
            </div>
            {/* End .col-lg-8 */}

            <div className="col-lg-4">
              <div className="agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                <h4 className="form-title mb25">Contact Form</h4>
                <FormContact />
              </div>
              <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                <ProfessionalInfo />
              </div>
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
          ))}
      </section>
        
        </>)}
     
      {/* End Agent Single Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AgentDetails;
