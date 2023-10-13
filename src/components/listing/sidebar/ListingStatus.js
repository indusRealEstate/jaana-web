"use client"

import React, { useEffect } from "react"

const ListingStatus = ({ filterFunctions }) => {
	const options = [
		{ id: "flexRadioDefault3", label: "All", defaultChecked: true },
		{ id: "flexRadioDefault1", label: "Buy" },
		{ id: "flexRadioDefault2", label: "Rent" },
	]

	if (filterFunctions?.searchData != undefined) {
		useEffect(() => {
			filterFunctions?.handlelistingStatus(filterFunctions?.searchData.tab)
		}, [filterFunctions?.searchData])
	}

	return (
		<>
			{options.map((option) => (
				<div
					className='form-check d-flex align-items-center mb10'
					key={option.id}>
					<input
						className='form-check-input'
						type='radio'
						id={option.id}
						checked={
							filterFunctions?.listingStatus.toLowerCase() ==
							option.label.toLowerCase()
						}
						onChange={() => {
							console.log(option.label.toLowerCase())
							filterFunctions.handlelistingStatus(option.label)
						}}
					/>
					<label className='form-check-label' htmlFor={option.id}>
						{option.label}
					</label>
				</div>
			))}
		</>
	)
}

export default ListingStatus
