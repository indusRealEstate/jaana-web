"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

// const images = [
//   {
//     src: "/images/listings/listing-single-3.jpg",
//     alt: "2.jpg",
//   },
//   {
//     src: "/images/listings/listing-single-5.jpg",
//     alt: "5.jpg",
//   },
// ];

const PropertyGallery = ({ imagesRaw }) => {
  const images = imagesRaw != undefined ? JSON.parse(imagesRaw) : [];
  return (
    <>
      <Gallery>
        <div className="col-sm-9">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={`https://toprealtorsdubai.com/api/upload/properties/${images[0]}`}
                thumbnail={`https://toprealtorsdubai.com/api/upload/properties/${images[0]}`}
                width={890}
                height={510}
          
              >
                {({ ref, open }) => (
                  <Image
                    src={`https://toprealtorsdubai.com/api/upload/properties/${images[0]}`}
                    width={890}
                    height={510}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-3">
          <div className="row">
            {images.map((image, index) => (
              
              <div className="col-sm-12 ps-lg-0" key={index}>
                <div className="sp-img-content">
                  {/* <div
                    className={`popup-img preview-img-${index + 2} sp-img mb10`}
                  > */}
                    
                    {/* {console.log(image.filter((e,index) => index!=0))} */}
                    {index != 0 ? (
                    <Item
                      original={`https://toprealtorsdubai.com/api/upload/properties/${image}`}
                      thumbnail={`https://toprealtorsdubai.com/api/upload/properties/${image}`}
                      width={890}
                      height={510}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={250}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={`https://toprealtorsdubai.com/api/upload/properties/${image}`}
                          alt={"img"}
                        />
                      )}
                    </Item>
                    ):""}
                  </div>
                </div>
              // </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
