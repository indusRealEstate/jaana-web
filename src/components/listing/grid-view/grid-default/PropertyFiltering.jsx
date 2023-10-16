"use client";

import listings from "@/data/listings";
import React, { useState, useEffect } from "react";
import ListingSidebar from "../../sidebar";
import TopFilterBar from "./TopFilterBar";
import FeaturedListings from "./FeatuerdListings";

import PaginationTwo from "../../PaginationTwo"
import { object } from "prop-types"

export default function PropertyFiltering({
	allProperties,
	prop_for,
	search,
	categoryRow,
}) {
	const [filteredData, setFilteredData] = useState([])

	const [searchData, setSearchData] = useState(search)

	const [currentSortingOption, setCurrentSortingOption] = useState("Newest")

  const [sortedFilteredData, setSortedFilteredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const [colstyle, setColstyle] = useState(false);
  const [pageItems, setPageItems] = useState([]);

  const [pageContentTrac, setPageContentTrac] = useState([]);

  useEffect(() => {
    setPageItems(
      sortedFilteredData.slice((pageNumber - 1) * 8, pageNumber * 8)
    );
    setPageContentTrac([
      (pageNumber - 1) * 8 + 1,
      pageNumber * 8,
      sortedFilteredData.length,
    ]);
  }, [pageNumber, sortedFilteredData]);

	const [listingStatus, setListingStatus] = useState(
		searchData != undefined ? search.tab : prop_for,
	)
	// const [listingStatus, setListingStatus] = useState(prop_for)
	const [propertyTypes, setPropertyTypes] = useState(
		categoryRow != null
			? categoryRow
			: searchData != undefined
			? search.propertyType
			: [],
	)

	const [priceRange, setPriceRange] = useState(
		searchData != undefined
			? [search.priceRange.min, search.priceRange.max]
			: [0, 10000000],
	)
	const [bedrooms, setBedrooms] = useState(
		searchData != undefined ? search.beds : 0,
	)
	const [bathroms, setBathroms] = useState(
		searchData != undefined ? search.bath : 0,
	)
	let wordArray = []
	if (searchData != undefined) {
		searchData.location.split(" ").map((item) => {
			if (!wordArray.includes(item.charAt(0).toUpperCase() + item.slice(1))) {
				wordArray.push(item.charAt(0).toUpperCase() + item.slice(1))
			}
		})
	}

	const [location, setLocation] = useState(
		search != undefined ? wordArray.toString().replace(",", " ") : "All Cities",
	)
	const [squirefeet, setSquirefeet] = useState(
		search != undefined
			? [search.squareFeetRangeMin, search.squareFeetRangeMax]
			: [],
	)
	const [yearBuild, setyearBuild] = useState([])
	const [categories, setCategories] = useState(
		search != undefined ? search.property_amenities : [],
	)

	const [searchQuery, setSearchQuery] = useState("")
	const [searchId, setSearchId] = useState(
		searchData != undefined ? searchData.propertyId : "",
	)
	const [valueReset, setValueReset] = useState(false)

  const resetFilter = () => {
    setListingStatus("All");
    setPropertyTypes([]);
    setPriceRange([0, 10000000]);
    setBedrooms(0);
    setBathroms(0);
    setLocation("All Cities");
    setSquirefeet([]);
    setyearBuild([0, 2050]);
    setCategories([]);
    setCurrentSortingOption("Newest");
    document.querySelectorAll(".filterInput").forEach(function (element) {
      element.value = null;
    });

		document.querySelectorAll(".filterSelect").forEach(function (element) {
			element.value = "All Cities"
		})
		setValueReset(true)
		window.scrollTo(0, 0)
		setSearchData(undefined)
	}

  const handlelistingStatus = (elm) => {
    setListingStatus((pre) => (pre == elm ? "All" : elm));
  };

	const handlepropertyTypes = (elm) => {
		if (elm.toLowerCase() == "all") {
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
		setSearchData,
		setPropertyTypes,
		setSearchQuery,
		resetFilter,
		setSearchId,
		searchId,
		priceRange,
		listingStatus,
		propertyTypes,
		bedrooms,
		bathroms,
		location,
		squirefeet,
		yearBuild,
		categories,
		searchData,
	}

  useEffect(() => {
    if (filterFunctions.priceRange[0] > 20) {
      setValueReset(false);
    } else if (filterFunctions.priceRange[1] < 10000000) {
      setValueReset(false);
    }
  }, [filterFunctions, valueReset]);

	useEffect(() => {
		if (searchData == undefined) {
		}
		// filter properties according to the purpose of the property
		const refItems = allProperties.filter((elm) => {
			if (listingStatus.toLowerCase() == "all") {
				return true
			} else if (listingStatus.toLowerCase() == "buy") {
				return elm.property_status == "sale"
			} else if (listingStatus.toLowerCase() == "rent") {
				return elm.property_status == "rent"
			}
		})

    let filteredArrays = [];

		// property type checking
		if (propertyTypes.length > 0) {
			if (!propertyTypes.includes("all")) {
				const filtered = refItems.filter((elm) => {
					return propertyTypes.includes(elm.property_type.toLowerCase())
				})
				filteredArrays = [...filteredArrays, filtered]
			} else {
				filteredArrays = [refItems]
			}
		}

		// filter bedrooms
		filteredArrays = [
			...filteredArrays,
			refItems.filter((el) => el.bed >= bedrooms),
		]

		// filter bathrooms
		filteredArrays = [
			...filteredArrays,
			refItems.filter((el) => el.bath >= bathroms),
		]
		// console.log(refItems)

		// filter search text
		filteredArrays = [
			...filteredArrays,
			refItems.filter(
				(el) =>
					el.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
					el.prop_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
					el.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
					el.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
					el.property_status
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					el.property_type.toLowerCase().includes(searchQuery.toLowerCase()),
			),
		]

		// filter search by property id
		filteredArrays = [
			...filteredArrays,
			refItems.filter((el) =>
				el.prop_id.toLowerCase().includes(searchId.toLowerCase()),
			),
		]

		// filter features
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
          (el) => el.city.toLowerCase() == location.toLowerCase()
        ),
      ];
    }

    if (priceRange.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          Number(elm.price) >= priceRange[0] &&
          Number(elm.price) <= priceRange[1]
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    if (squirefeet.length > 0 && squirefeet[1]) {
      const filtered = refItems.filter(
        (elm) =>
          elm.area >= Number(squirefeet[0]) && elm.area <= Number(squirefeet[1])
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (yearBuild.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          elm.year_built >= Number(yearBuild[0]) &&
          elm.year_built <= Number(yearBuild[1])
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    const commonItems = refItems.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );

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
		searchId,
		// allProperties,
		searchData,
	])

	const setScreenWidth = (width) => {
		setWindowWidth(width)
	}

	const [windowWidth, setWindowWidth] = useState("")

	useEffect(() => {
		setScreenWidth(window.innerWidth)
	}, [window.innerWidth])

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
				<div className='row gx-xl-5'>
					{/* className='col-lg-5 d-none d-lg-block' */}
					<div
						className={
							windowWidth <= 1024
								? "col-lg-4  d-none d-lg-block"
								: "col-lg-5 col-md-4 d-none d-lg-block"
						}>
						<ListingSidebar
							filterFunctions={filterFunctions}
							dataReset={valueReset}
						/>
					</div>
					{/* End .col-lg-4 */}

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
					{/* col-lg-7 col-12 */}

					<div
						className={
							windowWidth <= 1024
								? "col-lg-8 col-12"
								: "col-lg-7 col-md-8 col-12"
						}>
						<div className='row align-items-center mb20'>
							<TopFilterBar
								pageContentTrac={pageContentTrac}
								colstyle={colstyle}
								setColstyle={setColstyle}
								setCurrentSortingOption={setCurrentSortingOption}
							/>
						</div>
						{/* End TopFilterBar */}

            <div className="row mt15">
              <FeaturedListings colstyle={colstyle} data={pageItems} />
            </div>
            {/* End .row */}

            <div className="row">
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
  );
}
