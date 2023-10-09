import React from "react";

const PropertyFeaturesAminites = ({Features}) => {
  const Aminities = Features != undefined ? JSON.parse(Features) : [];

  return (
    <>
      {Aminities.map((row, rowIndex) => (
        <div key={rowIndex} className="col-sm-6 col-md-4">
          <div className="pd-list">
            
              <p key={rowIndex} className="text mb10">
                <i className="fas fa-circle fz6 align-middle pe-2" />
                {row}
              </p>
      
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
