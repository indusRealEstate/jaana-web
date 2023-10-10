"use client"

import listings from "@/data/listings"
import React, { useState, useEffect } from "react"
import ListingSidebar from "../../sidebar"
import TopFilterBar from "./TopFilterBar"
import FeaturedListings from "./FeatuerdListings"

import PaginationTwo from "../../PaginationTwo"

export default function PropertyFiltering({ allProperties, prop_for }) {
	const [filteredData, setFilteredData] = useState([])

	const [currentSortingOption, setCurrentSortingOption] = useState("Newest")

	const [sortedFilteredData, setSortedFilteredData] = useState([])
	const [pageNumber, setPageNumber] = useState(1)

	const [colstyle, setColstyle] = useState(false)
	const [pageItems, setPageItems] = useState([])

	const [pageContentTrac, setPageContentTrac] = useState([])

	useEffect(() => {
		setPageItems(sortedFilteredData.slice((pageNumber - 1) * 8, pageNumber * 8))
		setPageContentTrac([
			(pageNumber - 1) * 8 + 1,
			pageNumber * 8,
			sortedFilteredData.length,
		])
	}, [pageNumber, sortedFilteredData])

	const [listingStatus, setListingStatus] = useState(prop_for)
	const [propertyTypes, setPropertyTypes] = useState([])
	const [priceRange, setPriceRange] = useState([0, 10000000])
	const [bedrooms, setBedrooms] = useState(0)
	const [bathroms, setBathroms] = useState(0)
	const [location, setLocation] = useState("All Cities")
	const [squirefeet, setSquirefeet] = useState([])
	const [yearBuild, setyearBuild] = useState([])
	const [categories, setCategories] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	const [valueReset, setValueReset] = useState(false)

	const resetFilter = () => {
		setListingStatus("All")
		setPropertyTypes([])
		setPriceRange([0, 10000000])
		setBedrooms(0)
		setBathroms(0)
		setLocation("All Cities")
		setSquirefeet([])
		setyearBuild([0, 2050])
		setCategories([])
		setCurrentSortingOption("Newest")
		document.querySelectorAll(".filterInput").forEach(function (element) {
			element.value = null
		})

		document.querySelectorAll(".filterSelect").forEach(function (element) {
			element.value = "All Cities"
		})
		setValueReset(true)
		window.scrollTo(0, 0)
	}

	const handlelistingStatus = (elm) => {
		setListingStatus((pre) => (pre == elm ? "All" : elm))
	}

	const handlepropertyTypes = (elm) => {
		if (elm == "All") {
			setPropertyTypes([])
		} else {
			setPropertyTypes((pre) =>
				pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm],
			)
		}
	}
	const handlepriceRange = (elm) => {
		setPriceRange(elm)
	}
	const handlebedrooms = (elm) => {
		setBedrooms(elm)
	}
	const handlebathroms = (elm) => {
		setBathroms(elm)
	}
	const handlelocation = (elm) => {
		console.log(elm)
		setLocation(elm)
	}
	const handlesquirefeet = (elm) => {
		setSquirefeet(elm)
	}
	const handleyearBuild = (elm) => {
		setyearBuild(elm)
	}
	const handlecategories = (elm) => {
		if (elm == "All") {
			setCategories([])
		} else {
			setCategories((pre) =>
				pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm],
			)
		}
	}
	const filterFunctions = {
		handlelistingStatus,
		handlepropertyTypes,
		handlepriceRange,
		handlebedrooms,
		handlebathroms,
		handlelocation,
		handlesquirefeet,
		handleyearBuild,
		handlecategories,
		priceRange,
		listingStatus,
		propertyTypes,
		resetFilter,

		bedrooms,
		bathroms,
		location,
		squirefeet,
		yearBuild,
		categories,
		setPropertyTypes,
		setSearchQuery,
	}

	useEffect(() => {
		if (filterFunctions.priceRange[0] > 20) {
			setValueReset(false)
		} else if (filterFunctions.priceRange[1] < 10000000) {
			setValueReset(false)
		}
	}, [filterFunctions, valueReset])

	useEffect(() => {
		const refItems = allProperties.filter((elm) => {
			if (listingStatus == "All") {
				return true
			} else if (listingStatus == "Buy") {
				return elm.property_status == "sale"
			} else if (listingStatus == "Rent") {
				return elm.property_status == "rent"
			}
		})

		let filteredArrays = []

		// if (propertyTypes.length > 0) {
		// 	const filtered = refItems.filter((elm) =>
		// 		propertyTypes.includes(elm.propertyType),
		// 	)
		// 	filteredArrays = [...filteredArrays, filtered]
		// }

		if (propertyTypes.length > 0) {
			if (propertyTypes[0] != "all") {
				const filtered = refItems.filter((elm) => {
					return propertyTypes.includes(elm.property_type)
				})
				filteredArrays = [...filteredArrays, filtered]
			} else {
				filteredArrays = [refItems]
			}
		}

		filteredArrays = [
			...filteredArrays,
			refItems.filter((el) => el.bed >= bedrooms),
		]
		filteredArrays = [
			...filteredArrays,
			refItems.filter((el) => el.bath >= bathroms),
		]
		filteredArrays = [
			...filteredArrays,
			refItems.filter(
				(el) =>
					el.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
					el.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
					el.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
					el.property_status
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					el.property_type.toLowerCase().includes(searchQuery.toLowerCase()),
				// el.features
				// 	.join(" ")
				// 	.toLowerCase()
				// 	.includes(searchQuery.toLowerCase()),
			),
		]

		filteredArrays = [
			...filteredArrays,
			!categories.length
				? [...refItems]
				: refItems.filter((elm) =>
						categories.every((elem) =>
							JSON.parse(elm.features.toLowerCase()).includes(
								elem.toLowerCase(),
							),
						),
				  ),
		]

		if (location != "All Cities") {
			filteredArrays = [
				...filteredArrays,
				refItems.filter(
					(el) => el.city.toLowerCase() == location.toLowerCase(),
				),
			]
		}

		if (priceRange.length > 0) {
			const filtered = refItems.filter(
				(elm) =>
					Number(elm.price) >= priceRange[0] &&
					Number(elm.price) <= priceRange[1],
			)
			filteredArrays = [...filteredArrays, filtered]
		}

		if (squirefeet.length > 0 && squirefeet[1]) {
			const filtered = refItems.filter(
				(elm) =>
					elm.area >= Number(squirefeet[0]) &&
					elm.area <= Number(squirefeet[1]),
			)
			filteredArrays = [...filteredArrays, filtered]
		}
		if (yearBuild.length > 0) {
			const filtered = refItems.filter(
				(elm) =>
					elm.year_built >= Number(yearBuild[0]) &&
					elm.year_built <= Number(yearBuild[1]),
			)
			filteredArrays = [...filteredArrays, filtered]
		}

		const commonItems = refItems.filter((item) =>
			filteredArrays.every((array) => array.includes(item)),
		)

		setFilteredData(commonItems)
	}, [
		listingStatus,
		propertyTypes,
		priceRange,
		bedrooms,
		bathroms,
		location,
		squirefeet,
		yearBuild,
		categories,
		searchQuery,
		// allProperties,
	])

	useEffect(() => {
		setPageNumber(1)
		if (currentSortingOption == "Newest") {
			const sorted = [...filteredData].sort(
				(a, b) => a.yearBuilding - b.yearBuilding,
			)
			setSortedFilteredData(sorted)
		} else if (currentSortingOption.trim() == "Price Low") {
			const sorted = [...filteredData].sort((a, b) => a.price - b.price)
			setSortedFilteredData(sorted)
		} else if (currentSortingOption.trim() == "Price High") {
			const sorted = [...filteredData].sort((a, b) => b.price - a.price)
			setSortedFilteredData(sorted)
		} else {
			setSortedFilteredData(filteredData)
		}
	}, [filteredData, currentSortingOption])

	return (
		<section className='pt0 pb90 bgc-f7'>
			<div className='container'>
				<div className='row gx-xl-5'>
					<div className='col-lg-4 d-none d-lg-block'>
						<ListingSidebar
							filterFunctions={filterFunctions}
							dataReset={valueReset}
						/>
					</div>
					{/* End .col-lg-4 */}

					{/* start mobile filter sidebar */}
					<div
						className='offcanvas offcanvas-start p-0'
						tabindex='-1'
						id='listingSidebarFilter'
						aria-labelledby='listingSidebarFilterLabel'>
						<div className='offcanvas-header'>
							<h5 className='offcanvas-title' id='listingSidebarFilterLabel'>
								Listing Filter
							</h5>
							<button
								type='button'
								className='btn-close text-reset'
								data-bs-dismiss='offcanvas'
								aria-label='Close'></button>
						</div>
						<div className='offcanvas-body p-0'>
							<ListingSidebar filterFunctions={filterFunctions} />
						</div>
					</div>
					{/* End mobile filter sidebar */}

					<div className='col-lg-8'>
						<div className='row align-items-center mb20'>
							<TopFilterBar
								pageContentTrac={pageContentTrac}
								colstyle={colstyle}
								setColstyle={setColstyle}
								setCurrentSortingOption={setCurrentSortingOption}
							/>
						</div>
						{/* End TopFilterBar */}

						<div className='row mt15'>
							<FeaturedListings colstyle={colstyle} data={pageItems} />
						</div>
						{/* End .row */}

						<div className='row'>
							<PaginationTwo
								pageCapacity={8}
								data={sortedFilteredData}
								pageNumber={pageNumber}
								setPageNumber={setPageNumber}
							/>
						</div>
						{/* End .row */}
					</div>
					{/* End .col-lg-8 */}
				</div>
				{/* End .row */}
			</div>
			{/* End .container */}
		</section>
	)
}
