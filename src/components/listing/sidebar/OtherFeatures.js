"use client"

import React from "react"

const OtherFeatures = ({ filterFunctions }) => {
	const featuresLeftColumn = [
		{ label: "Central A/C" },
		{ label: "Security", defaultChecked: true },
		{ label: "Balcony", defaultChecked: true },
		{ label: "Children's Play Area", defaultChecked: true },
		{ label: "Shared Gym" },
		{ label: "Covered Parking" },
		{ label: "Private Pool" },
	]

	const featuresRightColumn = [
		{ label: "Furnished" },
		{ label: "Kitchen Appliances" },
		{ label: "Built in Wardrobes" },
		{ label: "Unfurnished" },
		{ label: "Front yard" },
		{ label: "Refrigerator" },
		{ label: "Terrace" },
	]

	return (
		<div className='row'>
			<div className='col-lg-6'>
				<div className='checkbox-style1'>
					{featuresLeftColumn.map((feature, index) => (
						<label className='custom_checkbox' key={index}>
							{feature.label.charAt(0).toUpperCase() + feature.label.slice(1)}
							<input
								checked={filterFunctions?.categories.includes(
									feature.label.toLowerCase(),
								)}
								type='checkbox'
								onChange={() =>
									filterFunctions?.handlecategories(feature.label.toLowerCase())
								}
							/>
							<span className='checkmark' />
						</label>
					))}
				</div>
			</div>
			{/* End .col-6 */}

			<div className='col-lg-6'>
				<div className='checkbox-style1'>
					{featuresRightColumn.map((feature, index) => (
						<label className='custom_checkbox' key={index}>
							{feature.label}

							<input
								type='checkbox'
								onChange={() =>
									filterFunctions?.handlecategories(feature.label)
								}
								defaultChecked={feature.defaultChecked}
							/>
							<span className='checkmark' />
						</label>
					))}
				</div>
			</div>
			{/* End .col-6 */}
		</div>
	)
}

export default OtherFeatures
