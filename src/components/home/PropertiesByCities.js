"use client";

import cities from "@/data/propertyByCities";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PropertiesByCities = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: ".property-by-city-next__active",
          prevEl: ".property-by-city-prev__active",
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {cities.slice(0, 1).map((city) => (
          <SwiperSlide key={city.id}>
            <div className="item">
              <div className="feature-style3 text-center">
                <div className="feature-img rounded-circle">
                <Link href="/all-properties">
                  <Image
                    width={176}
                    height={176}
                    className="cover"
                    src={city.image}
                    alt="cities"
                  />
                   </Link>
                </div>
               
                <div className="feature-content pt25">
                  <div className="top-area">
                    <h6 className="title mb-1">
                    {/* /map-v3 */}
                      <Link href="/all-properties">{city.name}</Link>
                    </h6>
                    <p className="fz15 fw400 dark-color mb-0">
                      3 Properties
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="rounded-arrow arrowY-center-position">
        <button className="property-by-city-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
       

        <button className="property-by-city-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
       
      </div> */}
      {/* End .col for navigation  */}
    </>
  );
};

export default PropertiesByCities;
