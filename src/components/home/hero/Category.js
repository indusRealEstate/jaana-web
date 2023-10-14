import Link from "next/link"
import { useEffect, useState } from "react"

const Category = ({ transferData }) => {
	// console.log(transferData)
	const categories = [
		{ icon: "flaticon-home-1", text: "Houses", value: "house" },
		{ icon: "flaticon-corporation", text: "Apartments", value: "apartment" },
		{ icon: "flaticon-network", text: "Office", value: "office" },
		{ icon: "flaticon-garden", text: "Villa", value: "villa" },
	]

	const [propertyCategory, setPropertyCategory] = useState("")

	useEffect(() => {}, [propertyCategory])

	return (
		<div className='home4-icon-style mt30 d-none d-sm-flex animate-up-4'>
			{categories.map((category, index) => (
				<Link
					key={index}
					href={`/all-properties?categories=${category.value}`}
					className='d-flex align-items-center dark-color ff-heading me-4 text-light'>
					<i className={`icon mr10 ${category.icon}`} /> {category.text}
				</Link>
			))}
		</div>
	)
}

export default Category
