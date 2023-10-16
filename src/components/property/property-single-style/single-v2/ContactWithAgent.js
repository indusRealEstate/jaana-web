import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ContactWithAgent = ({ contactAgent }) => {
	const agent_image = contactAgent != undefined ? contactAgent.agent_image : " "
	const agent_name = contactAgent != undefined ? contactAgent.agent_name : " "
	const agent_mobile =
		contactAgent != undefined ? contactAgent.agent_mobile : " "
	//console.log(agent_image);

	const [loaded, setLoaded] = useState(false)
	return (
		<>
			<div className='agent-single d-sm-flex align-items-center pb25'>
				<div className='single-img mb30-sm'>
					<Image
						width={90}
						height={90}
						className='w90'
						style={{
							objectFit: "cover",
							objectPosition: "center",
							borderRadius: 50,
							boxShadow: "rgb(0 0 0 / 36%) 1px 3px 6px 2px",
						}}
						src={`https://toprealtorsdubai.com/api/upload/agents/${agent_image}`}
						alt='avatar'
						onLoad={() => {
							setLoaded(true)
						}}
					/>
				</div>
				<div className='single-contant ml20 ml0-xs'>
					<h6 className='title mb-1 paragraph-theme'>{agent_name}</h6>
					<div className='agent-meta mb10 d-md-flex align-items-center'>
						<a className='text fz15 paragraph-theme' href='tel:+971505527479'>
							<i className='flaticon-call pe-1' />
							{agent_mobile}
						</a>
					</div>
					{/* <a href="" className="text-decoration-underline fw600"> */}
					<Link
						className='text-decoration-underline fw600 paragraph-theme'
						href={{
							pathname: "/all-properties",
						}}>
						View Listings
					</Link>
				</div>
			</div>
			{/* End agent-single */}
		</>
	)
}

export default ContactWithAgent
