"use client"

//import listings from "@/data/listings";
import AdvanceFilterModal from "@/components/common/advance-filter-two"
import { useEffect, useState } from "react"
import PaginationTwo from "../../PaginationTwo"
import ListingSidebar from "../../sidebar"
import FeaturedListings from "./FeatuerdListings"
import TopFilterBar from "./TopFilterBar"

export default function PropertyFiltering({ listings }) {
	// console.log(listings)
	const [filteredData, setFilteredData] = useState([])

	const [currentSortingOption, setCurrentSortingOption] = useState("Newest")

	const [sortedFilteredData, setSortedFilteredData] = useState([])

	const [pageNumber, setPageNumber] = useState(1)
	const [colstyle, setColstyle] = useState(false)
	const [pageItems, setPageItems] = useState([])
	const [pageContentTrac, setPageContentTrac] = useState([])

	useEffect(() => {
		setPageItems(
			sortedFilteredData.slice((pageNumber - 1) * 12, pageNumber * 12),
		)
		setPageContentTrac([
			(pageNumber - 1) * 12 + 1,
			pageNumber * 12,
			sortedFilteredData.length,
		])
	}, [pageNumber, sortedFilteredData])

	const [listingStatus, setListingStatus] = useState("All")
	const [propertyTypes, setPropertyTypes] = useState([])
	const [priceRange, setPriceRange] = useState([20, 100000000])
	const [bedrooms, setBedrooms] = useState(0)
	const [bathroms, setBathroms] = useState(0)
	const [location, setLocation] = useState("All Cities")
	const [squirefeet, setSquirefeet] = useState([])
	const [yearBuild, setyearBuild] = useState([])
	const [categories, setCategories] = useState([])
	const [propertyId, setPropertyId] = useState("")
	const [valueReset, setValueReset] = useState(false)
	const [dataChanged, setDataChange] = useState(false)
	const [loaded, setLoaded] = useState([])

	const resetFilter = () => {
		setListingStatus("All")
		setPropertyTypes([])
		setPriceRange([20, 100000000])
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
	}

	const handleImageLoading = (dataArray) => {
		if (dataArray.length === 0) {
			setLoaded([])
		}
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
		setPropertyId,
		setDataChange,
		setPropertyTypes,
		resetFilter,
		setValueReset,
		setLoaded,
		handleImageLoading,
		priceRange,
		listingStatus,
		propertyTypes,
		bedrooms,
		bathroms,
		location,
		squirefeet,
		yearBuild,
		categories,
		valueReset,
		propertyId,
		valueReset,
		dataChanged,
		loaded,
	}

	useEffect(() => {
		const refItems = listings.filter((elm) => {
			if (listingStatus == "All") {
				return true
			} else if (listingStatus == "Buy") {
				return elm.property_status.toLowerCase() === "sale"
			} else if (listingStatus == "Rent") {
				return elm.property_status.toLowerCase() === "rent"
			}
		})

		let filteredArrays = []

		if (propertyTypes.length > 0 && propertyTypes[0] !== "all") {
			const filtered = refItems.filter((elm) =>
				propertyTypes.includes(elm.property_type.toLowerCase()),
			)
			filteredArrays = [...filteredArrays, filtered]
		}
		filteredArrays = [
			...filteredArrays,
			refItems.filter((el) => Number(el.bed) >= Number(bedrooms)),
		]
		filteredArrays = [
			...filteredArrays,
			refItems.filter((el) => Number(el.bath) >= Number(bathroms)),
		]

		if (propertyId != "") {
			filteredArrays = [
				...filteredArrays,
				refItems.filter(
					(element) =>
						element.prop_id.toLowerCase() == propertyId.toLowerCase(),
				),
			]
		}

		// filteredArrays = [
		// 	...filteredArrays,
		// 	!categories.length
		// 		? [...refItems]
		// 		: refItems.filter((elm) =>
		// 				categories.every((elem) => elm.features.includes(elem)),
		// 		  ),
		// ]

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
			console.log(squirefeet)
			const filtered = refItems.filter(
				(elm) =>
					Number(elm.area) >= Number(squirefeet[0]) &&
					Number(elm.area) <= Number(squirefeet[1]),
			)
			filteredArrays = [...filteredArrays, filtered]
		}
		if (yearBuild.length > 0) {
			const filtered = refItems.filter(
				(elm) =>
					elm.year_built >= yearBuild[0] && elm.year_built <= yearBuild[1],
			)
			filteredArrays = [...filteredArrays, filtered]
		}

		if (filterFunctions.priceRange[0] > 20) {
			setValueReset(false)
		} else if (filterFunctions.priceRange[1] < 100000000) {
			setValueReset(false)
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
		propertyId,
		valueReset,
		dataChanged,
		loaded,
	])

	useEffect(() => {
		setPageNumber(1)
		if (currentSortingOption == "Newest") {
			const sorted = [...filteredData].sort(
				(a, b) => Number(b.year_built) - Number(a.year_built),
			)
			setSortedFilteredData(sorted)
		} else if (currentSortingOption.trim() == "Price Low") {
			const sorted = [...filteredData].sort(
				(a, b) => Number(a.price) - Number(b.price),
			)
			setSortedFilteredData(sorted)
		} else if (currentSortingOption.trim() == "Price High") {
			const sorted = [...filteredData].sort(
				(a, b) => Number(b.price) - Number(a.price),
			)
			setSortedFilteredData(sorted)
		} else {
			setSortedFilteredData(filteredData)
		}
	}, [filteredData, currentSortingOption])
	return (
		<section className='pt0 pb90 bgc-f7'>
			<div className='container'>
				{/* start mobile filter sidebar */}
				<div
					className='offcanvas offcanvas-start p-0'
					tabIndex='-1'
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

				{/* <!-- Advance Feature Modal Start --> */}
				<div className='advance-feature-modal'>
					<div
						className='modal fade'
						id='advanceSeachModal'
						tabIndex={-1}
						aria-labelledby='advanceSeachModalLabel'
						aria-hidden='true'>
						<AdvanceFilterModal filterFunctions={filterFunctions} />
					</div>
				</div>
				{/* <!-- Advance Feature Modal End --> */}

				<div className='row'>
					<TopFilterBar
						pageContentTrac={pageContentTrac}
						colstyle={colstyle}
						setColstyle={setColstyle}
						filterFunctions={filterFunctions}
						setCurrentSortingOption={setCurrentSortingOption}
					/>
				</div>
				{/* End TopFilterBar */}

				<div className='row'>
					<FeaturedListings
						colstyle={colstyle}
						data={pageItems}
						filterFunctions={filterFunctions}
					/>
				</div>
				{/* End .row */}

				<div className='row'>
					<PaginationTwo
						pageCapacity={12}
						data={sortedFilteredData}
						pageNumber={pageNumber}
						setPageNumber={setPageNumber}
					/>
				</div>
				{/* End .row */}
			</div>
			{/* End .container */}
		</section>
	)
}
