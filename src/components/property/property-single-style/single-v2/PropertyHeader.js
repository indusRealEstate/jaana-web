import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"

const PropertyHeader = ({ headerdata }) => {
	// const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "AED",
	})

	// console.log
	return (
		<>
			<div className='col-lg-8'>
				<div className='single-property-content mb30-md'>
					<h2 className='sp-lg-title green-title-theme'>
						{headerdata.property_name != undefined ? (
							headerdata.property_name
						) : (
							<Box sx={{ width: 300 }}>
								<Skeleton animation='wave' />
							</Box>
						)}
					</h2>
					<div className='pd-meta mb15 d-md-flex align-items-center'>
						<p className='text fz15 mb-0 bdrr1 pr10 bdrrn-sm dark-title-theme'>
							{headerdata.address != undefined ? (
								headerdata.address
							) : (
								<Box sx={{ width: 300 }}>
									<Skeleton animation='wave' />
								</Box>
							)}
						</p>
					</div>
					<div className='property-meta d-flex align-items-center'>
						<a
							className='ff-heading text-thm fz15 bdrr1 pr10 bdrrn-sm'
							href='#'>
							<i className='fas fa-circle fz10 pe-2' />
							For{" "}
							{headerdata.property_status != undefined ? (
								headerdata.property_status
							) : (
								<Box sx={{ width: 300 }}>
									<Skeleton animation='wave' />
								</Box>
							)}
						</a>
						{/* <a
              className="ff-heading bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
              href="#"
            >
              <i className="far fa-clock pe-2" />5 years ago
            </a> */}
						{/* <a className="ff-heading ml10 ml0-sm fz15" href="#">
              <i className="flaticon-fullscreen pe-2 align-text-top" />
              8721
            </a> */}
					</div>
				</div>
			</div>
			{/* End .col-lg--8 */}

			<div className='col-lg-4'>
				<div className='single-property-content'>
					<div className='property-action text-lg-end'>
						<div className='d-flex mb20 mb10-md align-items-center justify-content-lg-end'>
							<a className='icon mr10' href='#'>
								<span className='flaticon-like' />
							</a>
							<a className='icon mr10' href='#'>
								<span className='flaticon-new-tab' />
							</a>
							<a className='icon mr10' href='#'>
								<span className='flaticon-share-1' />
							</a>
							<a className='icon'>
								<span className='flaticon-printer' />
							</a>
						</div>
						<h3 className='price mb-0 dark-title-theme'>
							{formatter.format(headerdata.price).replace(".00", "")}
						</h3>
						<p className='text space fz15 green-title-theme'>
							{headerdata.area}/sq ft
						</p>
					</div>
				</div>
			</div>
			{/* End .col-lg--4 */}
		</>
	)
}

export default PropertyHeader
