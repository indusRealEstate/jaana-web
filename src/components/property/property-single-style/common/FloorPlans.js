import React, { useState } from "react"
import Image from "next/image"
import { Skeleton } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"

const floorPlanData = [
	{
		id: "first-floor",
		title: "First Floor",
		size: "1267 Sqft",
		bedrooms: "2",
		bathrooms: "2",
		price: "$920,99",
		imageSrc: "/images/listings/listing-single-1.png",
	},
	{
		id: "second-floor",
		title: "Second Floor",
		size: "1267 Sqft",
		bedrooms: "2",
		bathrooms: "2",
		price: "$920,99",
		imageSrc: "/images/listings/listing-single-1.png",
	},
	{
		id: "third-floor",
		title: "Third Floor",
		size: "1267 Sqft",
		bedrooms: "2",
		bathrooms: "2",
		price: "$920,99",
		imageSrc: "/images/listings/listing-single-1.png",
	},
]

const FloorPlans = ({ floorplanImage }) => {
	//console.log(floorplanImage);
	const floorimages =
		floorplanImage != undefined ? JSON.parse(floorplanImage) : []
	const [loaded, setLoaded] = useState([])
	return (
		<div className='accordion' id='accordionExample'>
			{floorimages.map((floorPlan, index) => (
				<div
					className={`accordion-item ${index === 0 ? "active" : ""}`}
					key={index}>
					<h2 className='accordion-header' id={`heading${index}`}>
						<button
							className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
							type='button'
							data-bs-toggle='collapse'
							data-bs-target={`#collapse${index}`}
							aria-expanded={index === 0 ? "true" : "false"}
							aria-controls={`collapse${index}`}>
							<span className='w-100 d-md-flex align-items-center'>
								<span className='mr10-sm'>
									{new String(Object.keys(floorPlan)).toUpperCase()}
								</span>
							</span>
						</button>
					</h2>
					<div
						id={`collapse${index}`}
						className={`accordion-collapse collapse ${
							index === 0 ? "show" : ""
						}`}
						aria-labelledby={`heading${index}`}
						data-parent='#accordionExample'>
						<div className='accordion-body text-center'>
							{!loaded.includes(index) && (
								<Skeleton
									variant='rectangular'
									className='height-50 width-auto bdrs12'
									width={736}
									height={544}
								/>
							)}
							<LazyLoadImage
								src={`https://toprealtorsdubai.com/api/upload/floorplan/${new String(
									Object.entries(floorPlan)[0][1],
								)}`}
								className={`${
									!loaded.includes(index)
										? "opacity-0 position-absolute bdrs12 pointer"
										: "opacity-100 bdrs12 pointer w-100 h-100 cover position-relative"
								}}`}
								width={736}
								height={544}
								alt='listing figureout'
								role='button'
								onLoad={() => {
									if (!loaded.includes(index)) {
										loaded.push(index)
										setLoaded(loaded)
									}
								}}
							/>
							{/* <Image
								width={736}
								height={544}
								className='w-100 h-100 cover'
								src={`https://toprealtorsdubai.com/api/upload/floorplan/${new String(
									Object.entries(floorPlan)[0][1],
								)}`}
								alt='listing figureout'
							/> */}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default FloorPlans
