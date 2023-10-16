"use client";
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const NearbyinputData = ({ inputData, prop_id }) => {
  // const images = JSON.parse(inputData.images);
  // console.log(inputData);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AED",
  });

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featured-next__active",
          prevEl: ".featured-prev__active",
        }}
        pagination={{
          el: ".featured-pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {inputData.slice(0, 5).map((listing, index) =>
          listing.prop_id == prop_id ? (
            <></>
          ) : (
            <SwiperSlide key={index}>
              <div className="item">
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
                        className="cover"
                        src={`https://toprealtorsdubai.com/api/upload/properties/${
                          JSON.parse(listing.images)[0]
                        }`}
                        alt="listings"
                      />
                    </Link>
                    <div className="sale-sticker-wrap">
                      {listing.forRent && (
                        <div className="list-tag rounded-0 fz12">
                          <span className="flaticon-electricity" />
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
                      <span className="for-what">
                        For {listing.property_status}
                      </span>
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
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default NearbyinputData;
