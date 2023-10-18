"use client"
import listings from "@/data/listings"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import { getAllProperties } from "@/api/properties"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Skeleton } from "@mui/material"

const FilterProperties = () => {
	const [filteredListings, setFilteredListings] = useState([])
	const [selectedTag, setSelectedTag] = useState("all")

	// console.log(filteredListings)
	const [allProperties, setAllProperties] = useState([])

	const handleTagClick = (tag) => {
		setSelectedTag(tag)
	}

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "AED",
		maximumFractionDigits: 0,
	})

	const [loaded, setLoaded] = useState([])

	const reFilerData = allProperties.filter((prop) => {
		if (selectedTag == "all") {
			return true
		} else {
			return prop.property_type.toLowerCase() === selectedTag.toLowerCase()
		}
	})

	useEffect(() => {
		getAllProperties().then((prop) => {
			setAllProperties(prop)
		})
		setFilteredListings(reFilerData)
	}, [selectedTag, allProperties, loaded])

	return (
		<>
			<div className='row wow fadeInUp mt-5' data-wow-delay='100ms'>
				<div className='col-lg-6'>
					<div className='main-title2'>
						<h2 className='title'>Discover Popular Properties</h2>
					</div>
				</div>
				<div className='col-lg-6'>
					<div className='dark-light-navtab style2 text-start text-lg-end mt-0 mt-lg-4 mb-4'>
						<ul className='nav nav-pills justify-content-start justify-content-lg-end'>
							<li className='nav-item'>
								<button
									className={`nav-link mb10-sm ${
										selectedTag === "all" ? "active" : ""
									}`}
									onClick={() => handleTagClick("all")}>
									All
								</button>
							</li>
							<li className='nav-item'>
								<button
									className={`nav-link mb10-sm ${
										selectedTag === "house" ? "active" : ""
									}`}
									onClick={() => handleTagClick("house")}>
									House
								</button>
							</li>
							<li className='nav-item'>
								<button
									className={`nav-link mb10-sm ${
										selectedTag === "villa" ? "active" : ""
									}`}
									onClick={() => handleTagClick("villa")}>
									Villa
								</button>
							</li>
							<li className='nav-item'>
								<button
									className={`nav-link mb10-sm ${
										selectedTag === "office" ? "active" : ""
									}`}
									onClick={() => handleTagClick("office")}>
									Office
								</button>
							</li>
							<li className='nav-item'>
								<button
									className={`nav-link mb10-sm ${
										selectedTag === "apartment" ? "active" : ""
									}`}
									onClick={() => handleTagClick("apartment")}>
									Apartments
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* End .row */}

			<div className='row'>
				<div className='col-lg-12' data-aos='fade-up' data-aos-delay='300'>
					<div className='tab-content'>
						<div className='row'>
							{allProperties.length <= 0 ? (
								<Box
									sx={{
										display: "flex",
										height: "50vh",
										width: "100%",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<CircularProgress size={40} color='secondary' />
								</Box>
							) : filteredListings.length <= 0 ? (
								<Box
									sx={{
										display: "flex",
										height: "30vh",
										width: "100%",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Image
										src={`/images/svg/no-data.svg`}
										width={300}
										height={300}
										alt='No data Image'
									/>
								</Box>
							) : (
								filteredListings.map((listing, index) => (
									<div className='col-md-6 col-xl-4' key={listing.prop_id}>
										<div className='listing-style6'>
											<div className='list-thumb'>
												<Link
													href={{
														pathname: "/property-details",
														query: {
															prop_id: listing.prop_id,
														},
													}}>
													{!loaded.includes(index) && (
														<Skeleton
															variant='rectangular'
															className='height-50 bdrs12 width-auto'
															width={500}
															height={300}
														/>
													)}
													<LazyLoadImage
														src={`https://toprealtorsdubai.com/api/upload/properties/${
															JSON.parse(listing.images)[0]
														}`}
														className={`${
															!loaded.includes(index)
																? "opacity-0 position-absolute bdrs12 w-100 cover height-50"
																: "opacity-100 bdrs12 w-100 cover height-50 position-relative"
														}}`}
														width={500}
														height={300}
														alt='Image Alt'
														style={{
															maxHeight: "40rem",
														}}
														onLoad={() => {
															if (!loaded.includes(index)) {
																loaded.push(index)
																setLoaded(loaded)
															}
														}}
													/>
													{/* <Image
														width={386}
														height={334}
														className='w-100 cover'
														src={`https://toprealtorsdubai.com/api/upload/properties/${
															JSON.parse(listing.images)[0]
														}`}
														alt='listings'
													/> */}
												</Link>
												<div className='sale-sticker-wrap'>
													{!listing.forRent && (
														<div className='list-tag fz12'>
															<span className='flaticon-electricity me-2' />
															FEATURED
														</div>
													)}
												</div>

												{/* <div className='list-meta'>
													<div className='icons'>
														<a href='#'>
															<span className='flaticon-like' />
														</a>
														<a href='#'>
															<span className='flaticon-new-tab' />
														</a>
														<a href='#'>
															<span className='flaticon-fullscreen' />
														</a>
													</div>
												</div> */}
											</div>
											<Link
												href={{
													pathname: "/property-details",
													query: {
														prop_id: listing.prop_id,
													},
												}}>
												<div className='list-content'>
													<div className='list-price mb-2'>
														{formatter.format(listing.price)}
													</div>
													<h6 className='list-title'>
														<Link
															href={{
																pathname: "/property-details",
																query: {
																	prop_id: listing.prop_id,
																},
															}}>
															{listing.property_name}
														</Link>
													</h6>
													<p className='list-text'>{listing.address}</p>
												</div>
											</Link>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FilterProperties
