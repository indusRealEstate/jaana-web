"use client"

import React, { useEffect } from "react"

const FindPropertyById = ({ filterFunctions }) => {
	return (
		<div className='search_area'>
			<input
				type='text'
				className='form-control'
				placeholder='What is the property id you are looking for'
				defaultValue={filterFunctions.searchId}
				onChange={(e) => filterFunctions?.setSearchId(e.target.value)}
			/>
			<label>
				<span className='flaticon-search' />
			</label>
		</div>
	)
}

export default FindPropertyById
