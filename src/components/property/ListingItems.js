
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingItems = ({data,listings}) => {
  //console.log(listings);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AED",
  });
  return (
    <>
     {data.length != 0 ? (
      data?.map((listing) => (
        <div className="col-md-6" key={listing.id}>
          <div className="listing-style1">
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
                className=""
                src={`https://toprealtorsdubai.com/api/upload/properties/${JSON.parse(listing.images)[0]}`}
                alt="listings"
              />
              </Link>
              <div className="sale-sticker-wrap">
                {listing.featured && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>

              <div className="list-price">
              {formatter.format(listing.price).replace('.00', '')} / <span>Year</span>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/property-details/${listing.prop_id}`}>{listing.property_name}</Link>
              </h6>
              <p className="list-text">{listing.address}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} bed
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
                  <a href="#">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))
        ) : (
          ""
        )}
    </>
  );
};

export default ListingItems;
