import React from "react";
import Image from "next/image";

const SingleAgentInfo = ({agentsDetails}) => {
  // console.log(agents);
  const agent_image = agentsDetails != undefined ? agentsDetails.agentsDetails.agent_image : " ";
 //console.log(agentsDetails.agentsDetails.agent_image);
  const agentData = {
    id: 1,
    name: "Arlene McCoy",
    phoneNumbers: ["(920) 012-3421", "(920) 012-4390"],
    socialMedia: [ {
      icon: "instagram",
      link: "https://www.instagram.com/dubairealestate4you/",
    },
    {
      icon: "linkedin-in",
      link: "https://www.linkedin.com/in/jaana-markkanen-08463717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },],
  };

  return (
    <div className="agent-single d-sm-flex align-items-center bdrb1 mb30 pb25">
      <div className="single-img mb30-sm">
        <Image
          width={90}
          height={90}
          className="w90"
          src={`https://toprealtorsdubai.com/api/upload/agents/${agent_image}`}
          alt="agent"
        />
      </div>
      <div className="single-contant ml30 ml0-xs">
        <h6 className="title mb-1 paragraph-theme">{agentsDetails.agentsDetails.agent_name}</h6>
        <div className="agent-meta mb10 d-md-flex align-items-center">
          {/* {agentData.phoneNumbers.map((phoneNumber, index) => ( */}
            <a className="text fz15 pe-2 bdrr1 paragraph-theme" href="tel:+971505527479">
              <i className="flaticon-call pe-1 ps-1" />
              {agentsDetails.agentsDetails.agent_mobile}
            </a>
          {/* ))} */}
          <a className="text fz15 ps-2 paragraph-theme" href="https://wa.me/971505527479">
            <i className="flaticon-whatsapp pe-1" />
            WhatsApp
          </a>
        </div>
        <div className="agent-social">
          {agentData.socialMedia.map((social, index) => (
            <a key={index} className="mr20 paragraph-theme" href={social.link}>
              <i className={`fab fa-${social.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleAgentInfo;
