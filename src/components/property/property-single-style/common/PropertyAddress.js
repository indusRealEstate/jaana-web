import React from "react";

const PropertyAddress = ({PropAddress}) => {
  const addresses = [
    {
      address: "10425 Tabor St",
      city: "Los Angeles",
      state: "California",
      zipCode: "90034",
      area: "Brookside",
      country: "United States",
    },
  ];
  

  return (
    <>
      {addresses.map((address, index) => (
        <div
          key={index}
          className={`col-md-6 col-xl-4 ${index === 1 ? "offset-xl-2" : ""}`}
        >
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color paragraph-theme">Address</p>
              <p className="fw600 mb10 ff-heading dark-color paragraph-theme">City</p>
              <p className="fw600 mb-0 ff-heading dark-color paragraph-theme">State/county</p>
            </div>
            <div className="pd-list">
              <p className="text mb10 text-light">{PropAddress.address != undefined ? PropAddress.address : ""}</p>
              <p className="text mb10 text-light">{PropAddress.city != undefined ? PropAddress.city : ""}</p>
              <p className="text mb-0 text-light">{PropAddress.country != undefined ? PropAddress.country : ""}</p>
            </div>
          </div>
        </div>
      ))}
      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${PropAddress.address}&t=m&z=14&output=embed&iwloc=near`}
          title={PropAddress.address}
          aria-label={PropAddress.address}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
