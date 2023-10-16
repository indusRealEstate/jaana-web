"use client"
import { Skeleton } from "@mui/material"
import Image from "next/image"
import "photoswipe/dist/photoswipe.css"
import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Gallery, Item } from "react-photoswipe-gallery"
import { FreeMode, Navigation, Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const PropertyGallery = ({ imagesRaw }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [loaded, setLoaded] = useState([])
	const [loadThumb, setLoadThumb] = useState([])
	useEffect(() => {}, [loaded])
	// const data = listings.filter((elm) => elm.id == id)[0] || listings[0]

	const seeAllImages = (event) => {
		console.log("hello")
	}

	return (
		<>
			<div className='ps-v6-slider nav_none mt30'>
				<Gallery className='h-100'>
					<Swiper
						// loop={true}
						spaceBetween={10}
						navigation={{
							prevEl: ".prev-btn",
							nextEl: ".next-btn",
						}}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[FreeMode, Navigation, Thumbs]}
						className='mySwiper2 position-relative'>
						{JSON.parse(imagesRaw).map((item, index) => (
							<SwiperSlide key={index} className='card border-0 h-100'>
								<div className='sp-img-content'>
									{!loaded.includes(index) && (
										<Skeleton
											variant='rectangular'
											className='height-50 width-auto bdrs12'
											width={1206}
											height={671}
										/>
									)}
									<Item
										original={`https://toprealtorsdubai.com/api/upload/properties/${item}`}
										thumbnail={`https://toprealtorsdubai.com/api/upload/properties/${item}`}
										width={1206}
										height={671}>
										{({ ref, open }) => (
											<Image
												width={1206}
												height={671}
												ref={ref}
												onClick={open}
												alt='gallery'
												src={`https://toprealtorsdubai.com/api/upload/properties/${item}`}
												className={`${
													!loaded.includes(index)
														? "opacity-0 position-absolute  bdrs12 pointer"
														: "opacity-100  bdrs12 pointer gallery-images position-relative"
												}}`}
												onLoad={(event) => {
													console.log(event)
													if (!loaded.includes(index)) {
														loaded.push(index)
														setLoaded(loaded)
													}
												}}
											/>
										)}
									</Item>
									<button
										className='all-tag popup-img border-0 pe-none'
										onClick={(event) => seeAllImages(event)}>
										See All {`${JSON.parse(imagesRaw).length}`} Photos
									</button>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</Gallery>

				<div className='row'>
					<div className='col-lg-5 col-md-7'>
						<Swiper
							onSwiper={setThumbsSwiper}
							loop={true}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							className='mySwiper mt20 h-100'>
							{JSON.parse(imagesRaw).map((item, i) => (
								<SwiperSlide key={i} className='card h-100 border-0'>
									{!loadThumb.includes(i) && (
										<Skeleton
											key={i}
											variant='rectangular'
											className='height-50 width-auto bdrs12'
											height={100}
											width={100}
										/>
									)}
									<LazyLoadImage
										src={`https://toprealtorsdubai.com/api/upload/properties/${
											JSON.parse(imagesRaw)[i]
										}`}
										className={`${
											!loadThumb.includes(i)
												? "opacity-0 position-absolute bdrs12 pointer"
												: "opacity-100 bdrs12 pointer w-100 h-100 cover position-relative"
										}}`}
										height={100}
										width={100}
										alt='image'
										role='button'
										onLoad={() => {
											if (!loadThumb.includes(i)) {
												loadThumb.push(i)
												setLoadThumb(loadThumb)
											}
										}}
									/>
									{/* <Image
										height={90}
										width={83}
										src={`https://toprealtorsdubai.com/api/upload/properties/${
											JSON.parse(imagesRaw)[i]
										}`}
										alt='image'
										className='w-100 bdrs12 cover pointer'
									/> */}
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	)
}

export default PropertyGallery
