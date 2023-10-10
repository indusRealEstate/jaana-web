"use client"
import React, { useState, useEffect } from "react"
import InputRange from "react-input-range"
import "react-input-range/lib/css/index.css"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"

const PriceRange = ({ filterFunctions, dataReset }) => {
	const [price, setPrice] = useState({ value: { min: 20, max: 10000000 } })

	useEffect(() => {
		filterFunctions?.handlepriceRange([price.value.min || 0, price.value.max])
	}, [price])

	// price range handler
	// const handleOnChange = (value) => {
	// 	setPrice({ value })

	// }

	return (
		<>
			<div className='range-wrapper'>
				<InputRange
					formatLabel={() => ``}
					maxValue={10000000}
					minValue={0}
					value={{
						min: dataReset ? "20" : filterFunctions?.priceRange[0],
						max: dataReset ? "10000000" : filterFunctions?.priceRange[1],
					}}
					onChange={(value) => setPrice({ value })}
					// onChange={(value) => handleOnChange(value)}
					id='slider'
				/>
				<div className='d-flex align-items-center'>
					<span id='slider-range-value1'>
						{dataReset ? "20" : price.value.min}
					</span>
					<i className='fa-sharp fa-solid fa-minus mx-2 dark-color icon' />
					<span id='slider-range-value2'>
						{dataReset ? "10000000" : price.value.max}
					</span>
				</div>
			</div>
		</>
	)
}

export default PriceRange
