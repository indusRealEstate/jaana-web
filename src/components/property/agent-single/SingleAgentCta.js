import Image from "next/image"
import React from "react"
import agentDetails from "../../../data/agent-details"

const SingleAgentCta = () => {
	const agentData = {
		social: [
			{
				icon: "fab fa-instagram",
				link: "https://instagram.com/top_dubai_realtor?igshid=OGQ5ZDc2ODk2ZA==",
			},
			{
				icon: "fab fa-linkedin-in",
				link: "https://www.linkedin.com/in/jaana-markkanen-08463717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
			},
		],
	}
	return (
		<>
			<div className='agent-single d-sm-flex align-items-center'>
				<div className='single-img mb30-sm'>
					<Image
						width={172}
						height={172}
						style={{ borderRadius: "50%", objectFit: "cover" }}
						src='/images/agent/jaana.webp'
						alt='agents'
					/>
				</div>
				{/* End single image */}
				<div className='single-contant ml30 ml0-xs'>
					<h2 className='title mb-0 title-theme'>{agentDetails.name}</h2>
					{/* <p className="fz15">
            Company Agent at <b>{agentData.company}</b>
          </p> */}
					<div className='agent-meta mb15 d-md-flex align-items-center'>
						{/* <a className="text fz15 pe-2 bdrr1" href="#">
              <i className="fas fa-star fz10 review-color2 pr10" />
              {agentData.reviews}
            </a> */}
						<a
							className='text fz15 pe-2 ps-2 bdrr1 paragraph-theme'
							href='tel:971505527479'>
							<i className='flaticon-call pe-1' />
							{agentDetails.mobile_no}
						</a>
						<a className='text fz15 pe-2 ps-2 bdrr1 paragraph-theme' href='mailto:jaana.markkanen@indusre.ae&body=Hello!'>
							<i className='flaticon-email pe-1' />
							{agentDetails.email}
						</a>
					</div>
					<div className='agent-social'>
						{agentData.social.map((socialItem, index) => (
							<a
								key={index}
								className='mr20 paragraph-theme'
								href={socialItem.link}>
								<i className={socialItem.icon} />
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default SingleAgentCta
