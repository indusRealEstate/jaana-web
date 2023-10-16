"use client"
import AdvanceFilterModal from "@/components/common/advance-filter"
import HeroContent from "./HeroContent"
import Category from "./Category"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Hero = () => {
	const router = useRouter()
	const [searchProperties, setSearchProperties] = useState({
		tab: "all",
		property_amenities: [],
		searchText: "",
		priceRange: {
			min: 0,
			max: 10000000,
		},
		propertyType: [],
		propertyId: "",
		beds: "0",
		bath: "0",
		location: "All Cities",
		squareFeetRangeMin: "",
		squareFeetRangeMax: "",
	})

	const dataReset = (value) => {
		if (value === true) {
			setSearchProperties({
				tab: "all",
				property_amenities: [],
				searchText: "",
				priceRange: {
					min: 0,
					max: 10000000,
				},
				propertyType: [],
				propertyId: "",
				beds: "0",
				bath: "0",
				location: "All Cities",
				squareFeetRangeMin: "",
				squareFeetRangeMax: "",
			})
		}
	}

	const search = (value) => {
		console.log(value)
		router.push(
			`/all-properties?search=${base64UrlEncode(btoa(JSON.stringify(value)))}`,
		)
		dataReset(true)
	}

	const base64UrlEncode = (base64) => {
		const text1 = new String(base64).replace(/\+/g, "-")
		const text2 = text1.replace(/\//g, "_")
		const text3 = text2.replace(/=/g, "#")

		return text3
	}

	const transferData = {
		setSearchProperties,
		searchProperties,
		dataReset,
		search,
	}

	useEffect(() => {}, [transferData])
	return (
		<>
			<div className='inner-banner-style6'>
				<h2 className='hero-title text-white animate-up-1'>
					Find the perfect place to <br className='d-none d-xl-block' />
					Live with your family
				</h2>
				<p className='hero-text text-white fz15 animate-up-2'>
					Let’s find a home that’s perfect for you
				</p>
				<HeroContent transferData={transferData} />
			</div>
			{/* End Hero content */}

			{/* <!-- Advance Feature Modal Start --> */}
			<div className='advance-feature-modal'>
				<div
					className='modal fade'
					id='advanceSeachModal'
					tabIndex={-1}
					aria-labelledby='advanceSeachModalLabel'
					aria-hidden='true'>
					<AdvanceFilterModal transferData={transferData} />
				</div>
			</div>
			{/* <!-- Advance Feature Modal End --> */}
			<p
				className='h6 fw600 text-white fz14 animate-up-4 my-3'
				style={{
					color: "#F4EBD0 !important",
				}}>
				Or browse featured categories:
			</p>
			<Category transferData={transferData} />
		</>
	)
}

export default Hero
