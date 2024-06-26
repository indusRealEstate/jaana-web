import Link from "next/link"

const Category = () => {
	// const categories = [
	// 	{ icon: "flaticon-home-1", text: "Houses" },
	// 	{ icon: "flaticon-corporation", text: "Apartments" },
	// 	{ icon: "flaticon-network", text: "Office" },
	// 	{ icon: "flaticon-garden", text: "Villa" },
	// ]
	const categories = [
		{ icon: "flaticon-home-1", text: "Houses", value: "house" },
		{ icon: "flaticon-corporation", text: "Apartments", value: "apartment" },
		{ icon: "flaticon-network", text: "Office", value: "office" },
		{ icon: "flaticon-garden", text: "Villa", value: "villa" },
	]

	return (
		<div className='home4-icon-style mt20 d-none d-sm-flex animate-up-4'>
			{categories.map((category, index) => (
				// <Link
				//   key={index}
				//   href="/map-v2"
				//   className="d-flex align-items-center text-white ff-heading me-4"
				//   style={{
				//     color: "#F4EBD0 !important",
				//   }}
				// >
				//   <i className={`icon mr10 ${category.icon}`} /> {category.text}
				// </Link>
				<Link
					key={index}
					href={`/all-properties?categories=${category.value}`}
					className='d-flex align-items-center text-white ff-heading me-4'>
					<i className={`icon mr10 ${category.icon}`} /> {category.text}
				</Link>
			))}
		</div>
	)
}

export default Category
