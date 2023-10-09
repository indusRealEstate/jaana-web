import Image from "next/image"

const ExclusiveAgnts = () => {
	const agents = [
		{
			name: "Marvin McKinney",
			role: "Real Estate Agent",
			image: "/images/team/a1.jpg",
		},
		{
			name: "Ralph Edwards",
			role: "Real Estate Agent",
			image: "/images/team/a2.jpg",
		},
		{
			name: "Annette Black",
			role: "Real Estate Agent",
			image: "/images/team/a3.jpg",
		},
		{
			name: "Jane Cooper",
			role: "Real Estate Agent",
			image: "/images/team/a4.jpg",
		},
	]

	return (
		<div>
			<h4 className='title mb20'>
				<span className='text-thm'></span> Exclusive Agent
			</h4>
			<Image
				width={300}
				height={250}
				className='wa'
				style={{
					borderRadius: "10px",
				}}
				src='/images/team/jaana.jpeg'
				alt='team'
			/>
		</div>
	)
}

export default ExclusiveAgnts
