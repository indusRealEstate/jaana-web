"use client"
import React, { useState } from "react"
import InputRange from "react-input-range"
import "react-input-range/lib/css/index.css"

const PriceRange = ({ transferData }) => {
	const [price, setPrice] = useState({ value: { min: 20, max: 10000000 } })

	// price range handler
	const handleOnChange = (value) => {
		setPrice({ value })
		transferData?.setSearchProperties({
			...transferData.searchProperties,
			priceRange: value,
		})
	}

	return (
		<>
			<div className='range-wrapper'>
				<InputRange
					formatLabel={() => ``}
					maxValue={10000000}
					minValue={0}
					value={price.value}
					onChange={(value) => handleOnChange(value)}
					id='slider'
				/>
				<div className='d-flex align-items-center'>
					<span id='slider-range-value1'>${price.value.min}</span>
					<i className='fa-sharp fa-solid fa-minus mx-2 dark-color icon' />
					<span id='slider-range-value2'>${price.value.max}</span>
				</div>
			</div>
		</>
	)
}

export default PriceRange
