"use client"
import { useEffect, useState } from "react"

const Bathroom = ({ transferData }) => {
	const bathOptions = [
		{ id: "bathAny", label: "any", value: "0", defaultChecked: true },
		{ id: "bathOnePlus", label: "1+", value: "1" },
		{ id: "bathTwoPlus", label: "2+", value: "2" },
		{ id: "bathThreePlus", label: "3+", value: "3" },
		{ id: "bathFourPlus", label: "4+", value: "4" },
		{ id: "bathFivePlus", label: "5+", value: "5" },
	]

	const [baths, setBaths] = useState()
	const [checked, setChecked] = useState("0")

	useEffect(() => {
		transferData?.setSearchProperties({
			...transferData.searchProperties,
			bath: baths,
		})
	}, [baths])

	return (
		<>
			{bathOptions.map((option, index) => (
				<div className='selection' key={index}>
					<input
						id={option.id}
						name='ybaths'
						type='radio'
						value={option.value}
						checked={option.value === checked}
						defaultChecked // Set the first option as defaultChecked
						onChange={(event) => {
							setChecked(event.target.value)
							setBaths(event.target.value)
						}}
					/>
					<label htmlFor={option.id}>{option.label}</label>
				</div>
			))}
		</>
	)
}

export default Bathroom
