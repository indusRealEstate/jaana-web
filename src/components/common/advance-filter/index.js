"use client"
import Select from "react-select"
import PriceRange from "./PriceRange"
import Bedroom from "./Bedroom"
import Bathroom from "./Bathroom"
import Amenities from "./Amenities"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const AdvanceFilterModal = ({ transferData }) => {
	const onlyDigit = /^\d+$/

	const router = useRouter()
	const catOptions = [
		{ value: "all", label: "All properties" },
		{ value: "apartment", label: "Apartment" },
		{ value: "bungalow", label: "Bungalow" },
		{ value: "house", label: "House" },
		{ value: "loft", label: "Loft" },
		{ value: "office", label: "Office" },
		{ value: "townhome", label: "Townhome" },
		{ value: "villa", label: "Villa" },
	]
	const locationOptions = [
		{ value: "All Cities", label: "All Cities" },
		{ value: "Dubai Marina", label: "Dubai Marina" },
		{ value: "Downtown Dubai", label: "Downtown Dubai" },
		{ value: "Deira", label: "Deira" },
		{ value: "Palm Jumeirah", label: "Palm Jumeirah" },
		{ value: "Business Bay", label: "Business Bay" },
		{ value: "Jumeirah Lake Towers", label: "Jumeirah Lake Towers (JLT)" },
		{ value: "Bur Dubai", label: "Bur Dubai" },
		{ value: "Al Karama", label: "Al Karama" },
		{ value: "Jumeirah", label: "Jumeirah" },
		{ value: "Jumeirah Village Circle", label: "Jumeirah Village Circle" },
		{ value: "Emirates Hills", label: "Emirates Hills" },
		{ value: "Al Satwa", label: "Al Satwa" },
		{ value: "Jebel Ali", label: "Jebel Ali" },
		{ value: "Al Quoz", label: "Al Quoz" },
		{ value: "Dubai South", label: "Dubai South" },
		{ value: "Umm Suqiem", label: "Umm Suqiem" },
		{ value: "Al Safa", label: "Al Safa" },
		{ value: "Al Hamriyah", label: "Al Hamriyah" },
		{ value: "Palm Islands", label: "Palm Islands" },
		{ value: "Zabeel", label: "Zabeel" },
	]

	const [invalidMinArea, setInvalidMinArea] = useState(false)
	const [invalidMaxArea, setInvalidMaxArea] = useState(false)

	const customStyles = {
		option: (styles, { isFocused, isSelected, isHovered }) => {
			return {
				...styles,
				backgroundColor: isSelected
					? "#004d42"
					: isHovered
					? "#004d4254"
					: isFocused
					? "#004d4254"
					: undefined,
			}
		},
	}

	return (
		<div className='modal-dialog modal-dialog-centered modal-lg'>
			<div className='modal-content'>
				<div className='modal-header pl30 pr30'>
					<h5 className='modal-title' id='exampleModalLabel'>
						More Filter
					</h5>
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='modal'
						aria-label='Close'
					/>
				</div>
				{/* End modal-header */}

				<div className='modal-body pb-0'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='widget-wrapper'>
								<h6 className='list-title mb20'>Price Range</h6>
								<div className='range-slider-style modal-version'>
									<PriceRange transferData={transferData} />
								</div>
							</div>
						</div>
					</div>
					{/* End .row */}

					<div className='row'>
						<div className='col-sm-6'>
							<div className='widget-wrapper'>
								<h6 className='list-title'>Type</h6>
								<div className='form-style2 input-group'>
									<Select
										defaultValue={[catOptions[0]]}
										name='colors'
										options={catOptions}
										styles={customStyles}
										className='select-custom'
										classNamePrefix='select'
										required
										onChange={(event) =>
											transferData?.setSearchProperties({
												...transferData.searchProperties,
												propertyType: [event.value.toLowerCase()],
											})
										}
									/>
								</div>
							</div>
						</div>
						{/* End .col-6 */}

						<div className='col-sm-6'>
							<div className='widget-wrapper'>
								<h6 className='list-title'>Property ID</h6>
								<div className='form-style2'>
									<input
										type='text'
										className='form-control'
										placeholder='RT04949213'
										onChange={(event) =>
											transferData?.setSearchProperties({
												...transferData.searchProperties,
												propertyId: event.target.value,
											})
										}
									/>
								</div>
							</div>
						</div>
						{/* End .col-6 */}
					</div>
					{/* End .row */}

					<div className='row'>
						<div className='col-sm-6'>
							<div className='widget-wrapper'>
								<h6 className='list-title'>Bedrooms</h6>
								<div className='d-flex'>
									<Bedroom transferData={transferData} />
								</div>
							</div>
						</div>
						{/* End .col-md-6 */}

						<div className='col-sm-6'>
							<div className='widget-wrapper'>
								<h6 className='list-title'>Bathrooms</h6>
								<div className='d-flex'>
									<Bathroom transferData={transferData} />
								</div>
							</div>
						</div>
						{/* End .col-md-6 */}
					</div>
					{/* End .row */}

					<div className='row'>
						<div className='col-sm-6'>
							<div className='widget-wrapper'>
								<h6 className='list-title'>Location</h6>
								<div className='form-style2 input-group'>
									<Select
										defaultValue={[locationOptions[0]]}
										name='colors'
										styles={customStyles}
										options={locationOptions}
										className='select-custom'
										classNamePrefix='select'
										required
										onChange={(event) =>
											transferData?.setSearchProperties({
												...transferData.searchProperties,
												location: event.value.toLowerCase(),
											})
										}
									/>
								</div>
							</div>
						</div>
						{/* End .col-md-6 */}

						<div className='col-sm-6'>
							<div className='widget-wrapper'>
								<h6 className='list-title'>Square Feet</h6>
								<div className='space-area'>
									<div className='d-flex align-items-center justify-content-between'>
										<div className='form-style1'>
											<input
												type='text'
												className='form-control'
												placeholder='Min.'
												style={
													invalidMinArea
														? {
																border: "2px solid red",
														  }
														: {}
												}
												onChange={(event) => {
													try {
														if (!event.target.value.match(onlyDigit)) {
															setInvalidMinArea(true)
															throw new Error("Only digits can enter")
														} else {
															setInvalidMinArea(false)
															transferData?.setSearchProperties({
																...transferData.searchProperties,
																squareFeetRangeMin: event.target.value,
															})
														}
													} catch (error) {
														console.log(error.message)
													}
												}}
											/>
										</div>
										<span className='dark-color'>-</span>
										<div className='form-style1'>
											<input
												type='text'
												className='form-control'
												placeholder='Max'
												style={
													invalidMaxArea
														? {
																border: "2px solid red",
														  }
														: {}
												}
												onChange={(event) => {
													try {
														if (!event.target.value.match(onlyDigit)) {
															setInvalidMaxArea(true)
															throw new Error("Only digits can enter")
														} else {
															setInvalidMaxArea(false)
															transferData?.setSearchProperties({
																...transferData.searchProperties,
																squareFeetRangeMax: event.target.value,
															})
														}
													} catch (error) {
														console.log(error.message)
													}
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End .col-md-6 */}
					</div>
					{/* End .row */}

					<div className='row'>
						<div className='col-lg-12'>
							<div className='widget-wrapper mb0'>
								<h6 className='list-title mb10'>Features</h6>
							</div>
						</div>
						<Amenities transferData={transferData} />
					</div>
				</div>
				{/* End modal body */}

				<div className='modal-footer justify-content-between'>
					<button
						className='reset-button'
						onClick={(event) => {
							if (event.type === "click") {
								transferData?.dataReset(true)
							}
						}}>
						<span className='flaticon-turn-back' />
						<u>Reset all filters</u>
					</button>
					<div className='btn-area'>
						{/* /map-v1 */}
						<button
							data-bs-dismiss='modal'
							type='submit'
							className='ud-btn btn-thm'
							onClick={(event) => {
								event.preventDefault()
								if (event.type === "click") {
									transferData?.search(transferData?.searchProperties)
								}
							}}>
							<span className='flaticon-search align-text-top pr10' />
							Search
						</button>
					</div>
				</div>
				{/* End modal-footer */}
			</div>
		</div>
	)
}

export default AdvanceFilterModal
