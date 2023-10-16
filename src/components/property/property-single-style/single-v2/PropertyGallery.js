"use client"
import { Gallery, Item } from "react-photoswipe-gallery"
import "photoswipe/dist/photoswipe.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Skeleton } from "@mui/material"
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
	const [loaded, setLoaded] = useState([])

	const images = imagesRaw != undefined ? JSON.parse(imagesRaw) : []
	const [mainImageLoaded, setMainImageLoaded] = useState(false)
	useEffect(() => {}, [loaded, mainImageLoaded])
	console.log(mainImageLoaded)
	return (
		<>
			<Gallery>
				<div className='col-sm-9'>
					<div className='sp-img-content mb15-md'>
						<div className='popup-img preview-img-1 sp-img'>
							{!mainImageLoaded && (
								<Skeleton
									variant='rectangular'
									className='height-50 bdrs12 width-auto'
									width={890}
									height={565}
								/>
							)}
							<Item
								original={`https://toprealtorsdubai.com/api/upload/properties/${images[0]}`}
								thumbnail={`https://toprealtorsdubai.com/api/upload/properties/${images[0]}`}
								width={890}
								height={510}>
								{({ ref, open }) => (
									<LazyLoadImage
										src={`https://toprealtorsdubai.com/api/upload/properties/${images[0]}`}
										className={`${
											!mainImageLoaded
												? "opacity-0 position-absolute w-100 cover height-50"
												: "opacity-100  w-100 cover height-50 position-relative"
										}}`}
										width={890}
										height={565}
										// ref={ref}
										// onClick={open}
										alt='image'
										role='button'
										onLoad={(event) => {
											console.log(event)
											setMainImageLoaded(true)
										}}
									/>
									// <Image
									// 	src={`https://toprealtorsdubai.com/api/upload/properties/${images[0]}`}
									// width={890}
									// height={565}
									// ref={ref}
									// onClick={open}
									// alt='image'
									// role='button'
									// className='cover'
									// 	onLoad={(event) => {
									// 		console.log(event)
									// 		setMainImageLoaded(true)
									// 	}}
									// />
								)}
							</Item>
						</div>
					</div>
				</div>
				{/* End .col-6 */}

				<div className='col-sm-3'>
					<div className='row'>
						{images.map(
							(image, index) =>
								index > 0 &&
								index < 4 && (
									<div className='col-sm-12 ps-lg-0' key={index}>
										<div className='sp-img-content mb-1 sp-img'>
											{/* <div
                    className={`popup-img preview-img-${index + 2} sp-img mb10`}
                  > */}

											{/* {console.log(image.filter((e,index) => index!=0))} */}
											{!loaded.includes(index) && (
												<Skeleton
													variant='rectangular'
													className='height-50 width-auto'
													width={270}
													height={180}
												/>
											)}
											<Item
												original={`https://toprealtorsdubai.com/api/upload/properties/${image}`}
												thumbnail={`https://toprealtorsdubai.com/api/upload/properties/${image}`}
												width={890}
												height={510}>
												{({ ref, open }) => (
													<LazyLoadImage
														src={`https://toprealtorsdubai.com/api/upload/properties/${image}`}
														className={`${
															!loaded.includes(index)
																? "opacity-0 position-absolute w-100 cover height-50"
																: "opacity-100  w-100 cover height-50 position-relative"
														}}`}
														width={270}
														height={180}
														alt='Image Alt'
														style={{
															maxHeight: "40rem",
														}}
														// ref={ref}
														// onClick={open}
														onLoad={() => {
															if (!loaded.includes(index)) {
																loaded.push(index)
																setLoaded(loaded)
															}
														}}
													/>
													// <Image
													// 	width={270}
													// 	height={250}
													// 	className='w-100 h-100 cover'
													// 	ref={ref}
													// 	onClick={open}
													// 	role='button'
													// 	src={`https://toprealtorsdubai.com/api/upload/properties/${image}`}
													// 	alt={"img"}
													// />
												)}
											</Item>
											{/* </div> */}
										</div>
									</div>
								),
						)}
					</div>
				</div>
			</Gallery>
		</>
	)
}

export default PropertyGallery
