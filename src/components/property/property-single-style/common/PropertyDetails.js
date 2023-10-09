import React from "react";

const PropertyDetails = ({proDetails}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AED",
  });
  const columns = [
    [
      
      {
        label: "Price",
        value: proDetails.price != undefined ? formatter.format(proDetails.price).replace('.00', '') : "",
      },
      {
        label: "Property Size",
        value: proDetails.area != undefined ? proDetails.area : "",
      },
      {
        label: "Bathrooms",
        value: proDetails.bath != undefined ? proDetails.bath : "",
      },
      {
        label: "Bedrooms",
        value: proDetails.bed != undefined ? proDetails.bed : "",
      },
    ],
    [
      {
        label: "Parking",
        value: proDetails.parking != undefined ? proDetails.parking : "",
      },
      {
        label: "Year Built",
        value: proDetails.year_built != undefined ? proDetails.year_built : "",
      },
      {
        label: "Property Type",
        value: proDetails.property_type != undefined ? proDetails.property_type : "",
      },
      {
        label: "Property Status",
        value: proDetails.property_status != undefined ? proDetails.property_status : "",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
