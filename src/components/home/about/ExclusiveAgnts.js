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
				width={350}
				height={350}
				className='cover'
				style={{
					borderRadius: "10px",
					objectFit: "cover",
					objectPosition: "center",
				}}
				src='/images/agent/jaana.webp'
				alt='team'
			/>
		</div>
	)
}

export default ExclusiveAgnts
