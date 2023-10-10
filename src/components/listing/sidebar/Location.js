"use client"
import Select from "react-select"

const Location = ({ filterFunctions }) => {
	const locationOptions = [
		{ value: "All Cities", label: "All Cities" },
		{ value: "Dubai Marina", label: "Dubai Marina" },
		{ value: "Downtown Dubai", label: "Downtown Dubai" },
		{ value: "Deira", label: "Deira" },
		{ value: "Palm Jumeirah", label: "Palm Jumeirah" },
		{ value: "Business Bay", label: "Business Bay" },
		{ value: "Jumeirah Lake Towers", label: "Jumeirah Lake Towers (JLT)" },
		{ value: "Bur Dubai", label: "Bur Dubai" },
		{ value: "Al Karama", label: "Al Karama" },
		{ value: "Jumeirah", label: "Jumeirah" },
		{ value: "Jumeirah Village Circle", label: "Jumeirah Village Circle" },
		{ value: "Emirates Hills", label: "Emirates Hills" },
		{ value: "Al Satwa", label: "Al Satwa" },
		{ value: "Jebel Ali", label: "Jebel Ali" },
		{ value: "Al Quoz", label: "Al Quoz" },
		{ value: "Dubai South", label: "Dubai South" },
		{ value: "Umm Suqiem", label: "Umm Suqiem" },
		{ value: "Al Safa", label: "Al Safa" },
		{ value: "Al Hamriyah", label: "Al Hamriyah" },
		{ value: "Palm Islands", label: "Palm Islands" },
		{ value: "Zabeel", label: "Zabeel" },
	]

	const customStyles = {
		option: (styles, { isFocused, isSelected, isHovered }) => {
			return {
				...styles,
				backgroundColor: isSelected
					? "#eb6753"
					: isHovered
					? "#eb675312"
					: isFocused
					? "#eb675312"
					: undefined,
			}
		},
	}

	return (
		<Select
			defaultValue={[locationOptions[0]]}
			name='colors'
			styles={customStyles}
			options={locationOptions}
			value={{
				value: filterFunctions.location,
				label: filterFunctions.location,
			}}
			className='select-custom filterSelect'
			classNamePrefix='select'
			onChange={(e) => filterFunctions?.handlelocation(e.value)}
			required
		/>
	)
}

export default Location
