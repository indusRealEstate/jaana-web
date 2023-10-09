"use client";
import agents from "@/data/agents";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useState, useEffect } from "react";
import { getAllAgents } from "@/api/properties";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Agents = () => {
  const [allAgents, setAllAgents] = useState([]);

  useEffect(() => {
    getAllAgents()
      .then((response) => {
        //  console.log(response);
        setAllAgents(response);
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }, [allAgents]);
 // console.log(allAgents);
 
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".agent_next__active",
          prevEl: ".agent_prev__active",
        }}
        pagination={{
          el: ".agent_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        autoplay={{ delay: 3000 }} // Set the desired delay for autoplay
      >
        {/* {agents.slice(0, 7).map((agent, index) => ( */}
        {allAgents.length != 0 ? (
        allAgents.map((listing,index) => (
          <SwiperSlide key={index}>
            <div className="item" key={index}>
    
              <Link
                          href={{
                            pathname: "/agent-details",
                            query: {
                              agent_id: listing.agent_id,
                            },
                          }}
                        >
                <div className="team-style1">
                  <div className="team-img">
                    <Image
                      width={217}
                      height={248}
                      className="w-100 h-100 cover"
                      src={`https://toprealtorsdubai.com/api/upload/agents/${
                              listing.agent_image
                            }`}
                      alt="agent team"
                    />
                  </div>
                  <div className="team-content pt20">
                    <h6 className="name mb-1">{listing.agent_name}</h6>
                    <p className="text fz15 mb-0">{listing.designation}</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
       ))
       ) : (
         <Box sx={{ display: "flex", height: "20rem", width: "100%" }}>
           <CircularProgress size={30} color="secondary" />
         </Box>
       )}
      </Swiper>
    </>
  );
};

export default Agents;
