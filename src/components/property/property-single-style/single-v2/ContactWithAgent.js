import Image from "next/image";
import React from "react";
import Link from "next/link";

const ContactWithAgent = ({contactAgent}) => {
  const agent_image = contactAgent != undefined ? contactAgent.agent_image : " ";
  const agent_name = contactAgent != undefined ? contactAgent.agent_name : " ";
  const agent_mobile = contactAgent != undefined ? contactAgent.agent_mobile : " ";
  //console.log(agent_image);
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb25">
        <div className="single-img mb30-sm">
          <Image
            width={90}
            height={90}
            className="w90"
            src={`https://toprealtorsdubai.com/api/upload/agents/${agent_image}`}
            alt="avatar"
          />
        </div>
        <div className="single-contant ml20 ml0-xs">
          <h6 className="title mb-1">{agent_name}</h6>
          <div className="agent-meta mb10 d-md-flex align-items-center">
            <a className="text fz15" href="tel:+971505527479">
              <i className="flaticon-call pe-1" />
              {agent_mobile}
            </a>
          </div>
          {/* <a href="" className="text-decoration-underline fw600"> */}
          <Link className="text-decoration-underline fw600"
                          href={{
                            pathname: "/all-properties",

                          }}
                        >

            View Listings
        </Link>
        </div>
      </div>
      {/* End agent-single */}
    </>
  );
};

export default ContactWithAgent;
