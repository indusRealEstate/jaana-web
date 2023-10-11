"use client"
import Select from "react-select"
import PriceRange from "./PriceRange"
import Bedroom from "./Bedroom"
import Bathroom from "./Bathroom"
import Amenities from "./Amenities"
import { useRouter } from "next/navigation"

const AdvanceFilterModal = ({ transferData }) => {
	const router = useRouter()
	const catOptions = [
		{ value: "Banking", label: "Apartments" },
		{ value: "Bungalow", label: "Bungalow" },
		{ value: "Houses", label: "Houses" },
		{ value: "Loft", label: "Loft" },
		{ value: "Office", label: "Office" },
		{ value: "Townhome", label: "Townhome" },
		{ value: "Villa", label: "Villa" },
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

	// const featuresLeftColumn = [
	// 	{ label: "Central A/C" },
	// 	{ label: "Security", defaultChecked: true },
	// 	{ label: "Balcony", defaultChecked: true },
	// 	{ label: "Children's Play Area", defaultChecked: true },
	// 	{ label: "Shared Gym" },
	// 	{ label: "Covered Parking" },
	// 	{ label: "Private Pool" },
	// ]

	// const featuresRightColumn = [
	// 	{ label: "Furnished" },
	// 	{ label: "Kitchen Appliances" },
	// 	{ label: "Built in Wardrobes" },
	// 	{ label: "Unfurnished" },
	// 	{ label: "Front yard" },
	// 	{ label: "Refrigerator" },
	// 	{ label: "Terrace" },
	// ]

	const customStyles = {
		option: (styles, { isFocused, isSelected, isHovered }) => {
			return {
				...styles,
				backgroundColor: isSelected
					? "#eb6753"
					: isHovered
					? "#eb675312"
					: isFocused
					? "#eb675312"
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
												propertyType: event,
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
									<Bathroom />
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
											/>
										</div>
										<span className='dark-color'>-</span>
										<div className='form-style1'>
											<input
												type='text'
												className='form-control'
												placeholder='Max'
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
								<h6 className='list-title mb10'>Amenities</h6>
							</div>
						</div>
						<Amenities />
					</div>
				</div>
				{/* End modal body */}

				<div className='modal-footer justify-content-between'>
					<button className='reset-button'>
						<span className='flaticon-turn-back' />
						<u>Reset all filters</u>
					</button>
					<div className='btn-area'>
						{/* /map-v1 */}
						<button
							data-bs-dismiss='modal'
							type='submit'
							className='ud-btn btn-thm'
							onClick={() => router.push("#")}>
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
