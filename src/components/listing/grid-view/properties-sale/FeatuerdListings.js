"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle, listings }) => {
  //console.log(listings);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AED",
  });
  // {formatter.format(listing.price).replace('.00', '')}
  return (
    <>
      {data.map((listing) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4 col-xl-3"
          }  `}
          key={listing.id}
        >
          <div
            className={
              colstyle
                ? "listing-style1 listCustom listing-type"
                : "listing-style1"
            }
          >
            <div className="list-thumb">
              <Link
                href={{
                  pathname: "/property-details",
                  query: {
                    prop_id: listing.prop_id,
                  },
                }}
              >
                <Image
                  width={382}
                  height={248}
                  style={{ height: "170px" }}
                  className="w-100 cover"
                  src={`https://toprealtorsdubai.com/api/upload/properties/${
                    JSON.parse(listing.images)[0]
                  }`}
                  alt="listings"
                />
              </Link>
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>

              <div className="list-price">
                {formatter.format(listing.price).replace(".00", "")}
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link
                  href={{
                    pathname: "/property-details",
                    query: {
                      prop_id: listing.prop_id,
                    },
                  }}
                >
                  {listing.property_name}
                </Link>
              </h6>
              <p className="list-text">{listing.address}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} beds
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} bath
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.area} sqft
                </a>
              </div>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">For {listing.property_status}</span>
                <div className="icons d-flex align-items-center">
                  <a href="#" className="bg-theme">
                    <span className="flaticon-fullscreen paragraph-theme" />
                  </a>
                  <a href="#" className="bg-theme">
                    <span className="flaticon-new-tab paragraph-theme" />
                  </a>
                  <a href="#" className="bg-theme">
                    <span className="flaticon-like paragraph-theme" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
