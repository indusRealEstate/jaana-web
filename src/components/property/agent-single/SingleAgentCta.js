import agents from "@/data/agents";
import Image from "next/image";
import React from "react";



const SingleAgentCta = ({id, allAgents}) => {

  const data = agents.filter((elm) => elm.id == id)[0] || agents[0];

//console.log(allAgents);

  const agentData = {
    // name: data.name,
    // company: "Modern House Real Estate",
    // reviews: "5.0 • 49 Reviews",
    // phone1: "+848 032 03 01",
    // phone2: "+848 032 03 01",
    social: [
      // { icon: "fab fa-facebook-f", link: "#" },
      // { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "https://instagram.com/top_dubai_realtor?igshid=OGQ5ZDc2ODk2ZA==" },
      { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/jaana-markkanen-08463717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    ],
  };
  
  return (
    
    <>
    {allAgents.map((listing, index) => (
      <div className="agent-single d-sm-flex align-items-center" key={index}>
        <div className="single-img mb30-sm">
          <Image
            width={172}
            height={172}
            style={{borderRadius:'50%',objectFit:'cover'}}
            src={`https://toprealtorsdubai.com/api/upload/agents/${listing.agent_image}`}
            alt="agents"
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml30 ml0-xs">
          <h2 className="title mb-0">{listing.agent_name != undefined ?listing.agent_name : ""}</h2>
          {/* <p className="fz15">
            Company Agent at <b>{agentData.company}</b>
          </p> */}
          <div className="agent-meta mb15 d-md-flex align-items-center">
            {/* <a className="text fz15 pe-2 bdrr1" href="#">
              <i className="fas fa-star fz10 review-color2 pr10" />
              {agentData.reviews}
            </a> */}
            <a className="text fz15 pe-2 ps-2 bdrr1" href="tel:971505527479">
              <i className="flaticon-call pe-1" />
              {listing.agent_mobile != undefined ? listing.agent_mobile : ""}
            </a>
            <a className="text fz15 pe-2 ps-2 bdrr1" href="">
              <i className="flaticon-email pe-1" />
              {listing.agent_email}
            </a>
            
          </div>
          <div className="agent-social">
            {agentData.social.map((socialItem, index) => (
              <a key={index} className="mr20" href={socialItem.link}>
                <i className={socialItem.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
       ))}
    </>
   
  );
};

export default SingleAgentCta;
