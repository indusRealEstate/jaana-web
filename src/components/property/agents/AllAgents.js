import agents from "@/data/agents";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box, CircularProgress } from "@mui/material";

const AllAgents = ({data,listings}) => {
  return (
    <>
    {listings == "" ? (
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
        <>
        {listings.map((agent) => (
        <div className="col" key={agent.id}>
          <div className="feature-style2 mb30">
            <div className="feature-img">
              <Link 
                href={{
                  pathname: "/agent-details",
                  query: {
                    agent_id: agent.agent_id,
                  },
                }}>
                <Image
                  width={210}
                  height={240}
                  className="bdrs12 w-100 h-100 cover"
                  src={`https://toprealtorsdubai.com/api/upload/agents/${agent.agent_image}`}
                  alt="agents"
                />
              </Link>
            </div>
            <div className="feature-content pt20">
              <h6 className="title mb-1">
              <Link 
                href={{
                  pathname: "/agent-details",
                  query: {
                    agent_id: agent.agent_id,
                  },
                }}>{agent.agent_name}</Link>
              </h6>
              <p className="text fz15">{agent.designation}</p>
            </div>
          </div>
        </div>
      ))}</>
      )}
      
    </>
  );
};

export default AllAgents;
