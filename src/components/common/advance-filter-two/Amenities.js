"use client"

const Amenities = ({ filterFunctions }) => {
	const amenities = [
		[
			{ label: "Central A/C" },
			{ label: "Security", defaultChecked: true },
			{ label: "Balcony", defaultChecked: true },
			{ label: "Children's Play Area", defaultChecked: true },
		],
		[
			{ label: "Shared Gym" },
			{ label: "Covered Parking" },
			{ label: "Private Pool" },
			{ label: "Furnished" },
		],
		[
			{ label: "Kitchen Appliances" },
			{ label: "Built in Wardrobes" },
			{ label: "Unfurnished" },
			{ label: "Front yard" },
		],
		[{ label: "Refrigerator" }, { label: "Terrace" }],
	]

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
										checked={filterFunctions?.categories.includes(
											amenity.label,
										)}
										onChange={() =>
											filterFunctions?.handlecategories(amenity.label)
										}
										type='checkbox'
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
