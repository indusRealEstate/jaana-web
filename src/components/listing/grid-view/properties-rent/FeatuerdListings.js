"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";
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
    if (data.length === 0) {
      filterFunctions?.setLoaded([]);
    }
  }, [data, filterFunctions.loaded]);

  const [share, setShare] = useState(false);
  const [open, setOpen] = useState(false);
  const [sharingUrl, setSharingUrl] = useState("");

  const openSharBtn = (event, url) => {
    if (event.type == "click") {
      setShare(true);
      handleClickOpen();
      setSharingUrl(url);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openNewWindow = (event, url) => {
    // window.open(window.location.href)
    window.open(
      url,
      "_blank",
      "location=yes,height=800,width=1400,scrollbars=yes,status=yes",
      url
    );
  };

  return (
    <>
      {share ? (
        <Dialog
          open={open}
          // TransitionComponent={Transition}
          width={1000}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                padding: 0,
              }}
            >
              <li>
                <Button
                  style={{
                    padding: 0,
                    border: "none",
                    background: "none",
                  }}
                  onClick={(event) => {
                    if (event.type === "click") {
                      window.open(`whatsapp://send?text=${sharingUrl}`);
                    }
                  }}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/images/socialMedia/whatsapp.svg"
                    alt="WhatsApp"
                  />
                </Button>
              </li>
            </ul>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Button
                className="copiedText"
                style={{
                  padding: 0,
                  border: "none",
                  background: "none",
                  width: 500,
                }}
                onClick={(event) => {
                  if (event.type === "click") {
                    const copyText = navigator.clipboard.writeText(sharingUrl);

                    if (copyText) {
                      console.log(copyText);
                    }
                  }
                }}
              >
                <div className="input-group">
                  <input
                    className="form-control"
                    value={sharingUrl}
                    disabled
                    style={{
                      color: "#5f5f5f",
                    }}
                  />
                  <div className="input-group-text">
                    <span>
                      <Image
                        width={20}
                        height={20}
                        src={`/images/commonIcons/copy.svg`}
                        alt="Copy"
                      />
                    </span>
                  </div>
                </div>
              </Button>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <></>
      )}
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
                    <Tooltip title="Share">
                      <a
                        href="#"
                        className="bg-theme"
                        onClick={(event) =>
                          openSharBtn(
                            event,
                            "https://toprealtorsdubai.com/property-details/?prop_id=" +
                              listing.prop_id
                          )
                        }
                      >
                        <span className="flaticon-share-1 paragraph-theme" />
                      </a>
                    </Tooltip>
                    <Tooltip title="Open In New Tab">
                      <a
                        href="#"
                        className="bg-theme"
                        onClick={(event) =>
                          openNewWindow(
                            event,
                            "https://toprealtorsdubai.com/property-details/?prop_id=" +
                              listing.prop_id
                          )
                        }
                      >
                        <span className="flaticon-new-tab paragraph-theme" />
                      </a>
                    </Tooltip>
                    {/* <a href="#" className="bg-theme">
                      <span className="flaticon-like paragraph-theme" />
                    </a> */}
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
