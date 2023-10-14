"use client"
import { useEffect, useState } from "react"

const Amenities = ({ transferData }) => {
	const amenities = [
		[
			{ label: "Central A/C" },
			{ label: "Security" },
			{ label: "Balcony" },
			{ label: "Children's Play Area" },
			{ label: "Refrigerator" },
		],
		[
			{ label: "Shared Gym" },
			{ label: "Covered Parking" },
			{ label: "Private Pool" },
			{ label: "Furnished" },
			{ label: "Terrace" },
		],
		[
			{ label: "Kitchen Appliances" },
			{ label: "Built in Wardrobes" },
			{ label: "Unfurnished" },
			{ label: "Front yard" },
		],
	]
	const [allAmenities, setAmenities] = useState([])

	useEffect(() => {
		transferData?.setSearchProperties({
			...transferData.searchProperties,
			property_amenities: allAmenities,
		})
	}, [allAmenities])

	return (
		<>
			{amenities.map((column, columnIndex) => (
				<div className='col-sm-4' key={columnIndex}>
					<div className='widget-wrapper mb20'>
						<div className='checkbox-style1'>
							{column.map((amenity, amenityIndex) => (
								<label className='custom_checkbox' key={amenityIndex}>
									{amenity.label}
									<input
										type='checkbox'
										value={amenity.label}
										defaultChecked={amenity.defaultChecked}
										onChangeCapture={(event) => {
											if (event.target.checked) {
												if (!allAmenities.includes(event.target.value)) {
													allAmenities.push(event.target.value.toLowerCase())
													setAmenities(allAmenities)
												}
											} else {
												const index = allAmenities.findIndex(
													(am) => event.target.value == am,
												)
												if (index != null) {
													console.log(index)
													allAmenities.splice(index, 1)
												}
											}

											console.log(allAmenities)
										}}
									/>
									<span className='checkmark' />
								</label>
							))}
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Amenities
