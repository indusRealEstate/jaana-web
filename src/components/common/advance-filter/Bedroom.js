"use client"
import { useEffect, useState } from "react"

const Bedroom = ({ transferData }) => {
	const bedOptions = [
		{ id: "bedAny", label: "any", value: "0", defaultChecked: true },
		{ id: "bedOnePlus", label: "1+", value: "1" },
		{ id: "bedTwoPlus", label: "2+", value: "2" },
		{ id: "bedThreePlus", label: "3+", value: "3" },
		{ id: "bedFourPlus", label: "4+", value: "4" },
		{ id: "bedFivePlus", label: "5+", value: "5" },
	]

	const [beds, setBeds] = useState()
	const [checked, setChecked] = useState("0")

	useEffect(() => {
		transferData?.setSearchProperties({
			...transferData.searchProperties,
			beds: beds,
		})
	}, [beds, checked])

	return (
		<>
			{bedOptions.map((option, index) => (
				<div className='selection' key={index}>
					<input
						id={option.id}
						name='xbeds'
						type='radio'
						value={option.value}
						checked={option.value === checked}
						defaultChecked // Set the first option as defaultChecked
						onChange={(event) => {
							setChecked(event.target.value)
							setBeds(event.target.value)
						}}
					/>
					<label htmlFor={option.id}>{option.label}</label>
				</div>
			))}
		</>
	)
}

export default Bedroom
