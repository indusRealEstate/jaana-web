"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, CircularProgress, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const FeaturedListings = ({
  data,
  colstyle,
  filterFunctions,
  resetImageData,
}) => {
  //console.log( listings);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AED",
  });

  const loadImage = (event, index) => {
    if (event.type === "load") {
      if (!filterFunctions.loaded.includes(index)) {
        filterFunctions.loaded.push(index);
        filterFunctions?.setLoaded(filterFunctions.loaded);
      }
    }

    //
  };

  useEffect(() => {
    if (data.length === filterFunctions.loaded.length) {
      filterFunctions?.handleImageLoading(filterFunctions.loaded);
    }
  }, [data, filterFunctions.loaded]);

  return (
    <>
      {data == undefined ? (
        <Box
          sx={{
            display: "flex",
            height: "50vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={30} color="secondary" />
        </Box>
      ) : data.length <= 0 ? (
        <Box
          sx={{
            display: "flex",
            height: "30vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={`/images/svg/no-data.svg`}
            width={300}
            height={300}
            alt="Image no data"
          />
        </Box>
      ) : (
        data.map((listing, index) => (
          <div
            className={` ${
              colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4 col-xl-3"
            }  `}
            key={index}
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
                  {!filterFunctions.loaded.includes(index) && (
                    <Skeleton
                      variant="rectangular"
                      className="width-auto"
                      width={382}
                      height={248}
                      style={{ height: "200px" }}
                    />
                  )}
                  <LazyLoadImage
                    src={`https://toprealtorsdubai.com/api/upload/properties/${
                      JSON.parse(listing.images)[0]
                    }`}
                    className={`${
                      !filterFunctions.loaded.includes(index)
                        ? "opacity-0 position-absolute w-100 cover height-50"
                        : "opacity-100 w-100 cover height-50 position-relative"
                    }}`}
                    width={382}
                    height={248}
                    style={{ height: "200px" }}
                    alt="listings"
                    onLoad={(event) => loadImage(event, index)}
                    // onLoad={() => {
                    // 	if (!loaded.includes(index)) {
                    // 		loaded.push(index)
                    // 		setLoaded(loaded)
                    // 	}
                    // }}
                  />
                  {/* <Image
										width={382}
										height={248}
										style={{ height: "170px" }}
										className='w-100 cover'
										src={`https://toprealtorsdubai.com/api/upload/properties/${
											JSON.parse(listing.images)[0]
										}`}
										alt='listings'
									/> */}
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
                    <span className="flaticon-bed" /> {listing.bed}
                  </a>
                  <a href="#">
                    <span className="flaticon-shower" /> {listing.bath}
                  </a>
                  <a href="#">
                    <span className="flaticon-expand" /> {listing.area}
                  </a>
                </div>
                <hr className="mt-2 mb-2" />
                <div className="list-meta2 d-flex justify-content-between align-items-center">
                  <span className="for-what">For Rent</span>
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
        ))
      )}
    </>
  );
};

export default FeaturedListings;
