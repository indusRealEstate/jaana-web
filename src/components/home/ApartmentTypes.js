// "use client";
// import apartmentTypes from "@/data/apartmentTypes2";
// import Image from "next/image";
// import Link from "next/link";
// import { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

// const ApartmentTypes = () => {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         modules={[Navigation, Pagination]}
//         navigation={{
//           nextEl: ".apartment-type2-next__active",
//           prevEl: ".apartment-type2-prev__active",
//         }}
//         pagination={{
//           el: ".apartment-type2_pagination__active",
//           clickable: true,
//         }}
//         breakpoints={{
//           300: {
//             slidesPerView: 2,
//             spaceBetween: 15,
//           },
//           768: {
//             slidesPerView: 3,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//           1200: {
//             slidesPerView: 5,
//           },
//         }}
//       >
//         {apartmentTypes.slice(0, 5).map((apartment, index) => (
//           <SwiperSlide key={index}>
//             <div className="item">
//               <Link href="#">
//                 <div className="apartment-style1">
//                   <div className="apartment-img">
//                     <Image
//                       width={217}
//                       height={223}
//                       className="w-100 h-100 cover"
//                       style={{height:"9rem !important",
//                     objectFit:"cover",
//                   objectPosition:"center"}}
//                       src={apartment.imageSrc}
//                       alt="apartment city"
//                     />
//                   </div>
//                   <div className="apartment-content">
//                     <h6 className="title mb-0">{apartment.title}</h6>
//                     <p className="text mb-0">
//                       {apartment.properties} Properties
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default ApartmentTypes;

"use client";
import apartmentTypes from "@/data/apartmentTypes2";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { getAllProperties } from "@/api/properties";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "@mui/material";

const ApartmentTypes = () => {
  const [house, setHouse] = useState([]);
  const [apartment, setApartment] = useState([]);
  const [office, setOffice] = useState([]);
  const [villa, setVilla] = useState([]);
  const [penthouse, setPenthouse] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    getAllProperties()
      .then((props) => {
        setAllProperties(props);
        setVilla(
          props.filter((prop) => prop.property_type.toLowerCase() == "villa")
            .length
        );
        setHouse(
          props.filter((prop) => prop.property_type.toLowerCase() == "house")
            .length
        );
        setApartment(
          props.filter(
            (prop) => prop.property_type.toLowerCase() == "apartment"
          ).length
        );
        setPenthouse(
          props.filter(
            (prop) => prop.property_type.toLowerCase() == "penthouse"
          ).length
        );
        setOffice(
          props.filter((prop) => prop.property_type.toLowerCase() == "office")
            .length
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [house, apartment, office, villa, penthouse, allProperties]);

  const property_types = [
    {
      title: "House",
      value: "house",
      imageSrc: "/images/listings/townhouse.jpg",
      properties: house,
    },
    {
      title: "Apartments",
	  value: "apartment",
      imageSrc: "/images/listings/apartment.jpg",
      properties: apartment,
    },

    {
      title: "Villa",
	  value: "villa",
      imageSrc: "/images/listings/villa.jpg",
      properties: villa,
    },
    {
      title: "PentHouse",
	  value: "penthouse",
      imageSrc: "/images/listings/penthouse.webp",
      properties: penthouse,
    },
    {
      title: "Office",
	  value: "office",
      imageSrc: "/images/listings/office.jpg",
      properties: office,
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".apartment-type2-next__active",
          prevEl: ".apartment-type2-prev__active",
        }}
        pagination={{
          el: ".apartment-type2_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {property_types.map((apartment, index) => (
          <SwiperSlide key={index}>
            {apartment.properties != 0 ? (
              <div className="item">
                <Link
                  href={{
                    pathname: "/all-properties",
                    query: {
                      categories: apartment.value,
                    },
                  }}
                >
                  <div className="apartment-style1">
                    <div className="apartment-img">
                      <Image
                        width={217}
                        height={223}
                        className="w-100 cover"
                        style={{
                          maxHeight: "9rem",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        src={apartment.imageSrc}
                        alt="apartment city"
                      />
                    </div>
                    <div className="apartment-content">
                      <h6 className="title mb-0">{apartment.title}</h6>
                      <p className="text mb-0">
                        {apartment.properties} Properties
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ApartmentTypes;
