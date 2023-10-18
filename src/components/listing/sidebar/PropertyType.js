"use client"

import React, { useEffect } from "react"

const PropertyType = ({ filterFunctions }) => {
	const options = [
		{ label: "Apartment" },
		{ label: "Bungalow" },
		{ label: "House" },
		{ label: "Loft" },
		{ label: "Office" },
		{ label: "Townhome" },
		{ label: "Villa" },
	]

	return (
		<>
			<label className='custom_checkbox'>
				All
				<input
					type='checkbox'
					checked={!filterFunctions?.propertyTypes.length}
					onChange={(e) => {
						filterFunctions?.setPropertyTypes([])
					}}
				/>
				<span className='checkmark' />
			</label>
			{options.map((option, index) => (
				<label className='custom_checkbox' key={index}>
					{option.label}
					<input
						type='checkbox'
						checked={filterFunctions?.propertyTypes.includes(
							option.label.toLowerCase(),
						)}
						onChange={(e) => {
							filterFunctions.handlepropertyTypes(option.label.toLowerCase())
						}}
					/>
					<span className='checkmark' />
				</label>
			))}
		</>
	)
}

export default PropertyType
