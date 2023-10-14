"use client"
import AdvanceFilterModal from "@/components/common/advance-filter"
import Image from "next/image"
import { useEffect, useState } from "react"
import Category from "./Category"
import HeroContent from "./HeroContent"
import VideoBox from "./VideoBox"
import { useRouter } from "next/navigation"

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
			<div className='inner-banner-style4'>
				<h2 className='hero-title animate-up-1 text-light'>
					Easy Way to Find a <br className='d-none d-md-block' /> Perfect
					Property
				</h2>
				{/* <p className="hero-text fz15 animate-up-2">
          From as low as $10 per day with limited time offer discounts
        </p> */}

				<div className='home4-floatin-img'>
					{/* <Image
            width={140}
            height={120}
            className="img-1 spin-left d-none d-xl-block contain"
            src="/images/about/element-10.png"
            alt="image"
          /> */}
					<Image
						width={160}
						height={103}
						style={{ objectFit: "contain" }}
						className='img-2 bounce-y d-none d-xl-block'
						src='/images/about/element-9.png'
						alt='image'
					/>
					<VideoBox />
				</div>
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

			<Category transferData={transferData} />
		</>
	)
}

export default Hero
