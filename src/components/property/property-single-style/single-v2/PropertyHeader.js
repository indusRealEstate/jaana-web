import {
	Box,
	Button,
	Tooltip,
	Skeleton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
} from "@mui/material"
import { useState } from "react"
import { TransitionProps } from "@mui/material/transitions"
import Image from "next/image"
import Link from "next/link"

const PropertyHeader = ({ headerdata }) => {
	// const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
	const [share, setShare] = useState(false)
	const [open, setOpen] = useState(false)
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "AED",
	})

	const printPage = (event) => {
		if (event.type === "click") {
			window.print()
		}
	}
	const openNewWindow = (event) => {
		// window.open(window.location.href)
		window.open(
			document.URL,
			"_blank",
			"location=yes,height=720,width=1200,scrollbars=yes,status=yes",
			window.location.href,
		)
	}

	const openSharBtn = (event) => {
		if (event.type == "click") {
			setShare(true)
			handleClickOpen()
		}
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	return (
		<>
			{share ? (
				<Dialog
					open={open}
					// TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
					aria-describedby='alert-dialog-slide-description'>
					<DialogTitle>
						<div className='row'>
							<div className='col-3'>
								<Link
									style={{
										padding: 0,
										border: "none",
										background: "none",
									}}
									href={`whatsapp://send?text=${window.location.href}" data-action="share/whatsapp/share" target="_blank"`}>
									<Image
										width={50}
										height={50}
										src='/images/socialMedia/whatsapp.svg'
									/>
								</Link>
							</div>
						</div>
					</DialogTitle>
					<DialogContent>
						<DialogContentText id='alert-dialog-slide-description'>
							Let Google help apps determine location. This means sending
							anonymous location data to Google, even when no apps are running.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Disagree</Button>
						<Button onClick={handleClose}>Agree</Button>
					</DialogActions>
				</Dialog>
			) : (
				<></>
			)}
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
							{/* <a className='icon mr10' href='#'>
								<span className='flaticon-like' />
							</a> */}
							<Tooltip title='New Window' placement='top'>
								<button
									onClick={(event) => openNewWindow(event)}
									className='icon mr10'
									style={{
										background: "none",
										padding: "0",
										// border: "none",
									}}
									href='#'>
									<span className='flaticon-new-tab' />
								</button>
							</Tooltip>

							<Tooltip title='Share' placement='top'>
								<button
									onClick={(event) => openSharBtn(event)}
									style={{
										background: "none",
										padding: "0",
										// border: "none",
									}}
									className='icon mr10'
									href='#'>
									<span className='flaticon-share-1' />
								</button>
							</Tooltip>
							<Tooltip title='Print' placement='top'>
								<button
									style={{
										background: "none",
										padding: "0",
										// border: "none",
									}}
									onClick={(event) => printPage(event)}
									className='icon'>
									<span className='flaticon-printer' />
								</button>
							</Tooltip>
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
