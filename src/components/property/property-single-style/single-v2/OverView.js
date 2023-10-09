import listings from "@/data/listings";
import React from "react";


const OverView = ({otherDetails}) => {
  //const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  

  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: otherDetails.bed != undefined ? otherDetails.bed : "",
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: otherDetails.bath != undefined ? otherDetails.bath : "",
    },
    {
      icon: "flaticon-event",
      label: "Year Built",
      value: otherDetails.year_built != undefined ? otherDetails.year_built : "",
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: otherDetails.parking != undefined ? otherDetails.parking : "",
    },
    {
      icon: "flaticon-expand",
      label: "Sqft",
      value: otherDetails.area != undefined ? otherDetails.area : "",
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: otherDetails.property_type != undefined ? otherDetails.property_type : "",
    },
  ]  
  return (
    <>
      {overviewData.map((item, index) => (
        <div key={index} className="col-sm-6 col-md-4 col-xl-2">
          <div className="overview-element mb30 d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
