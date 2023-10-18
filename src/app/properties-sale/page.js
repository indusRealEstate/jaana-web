"use client"
import DefaultHeader from "@/components/common/DefaultHeader"

import Footer from "@/components/common/default-footer"
import MobileMenu from "@/components/common/mobile-menu"

import ProperteyFiltering from "@/components/listing/grid-view/properties-sale/PropertyFiltering"
import { useEffect, useState } from "react"
import { getAllSaleProperties } from "@/api/properties"
import { Box, CircularProgress } from "@mui/material"
import React from "react"

const PropertiesSale = () => {
	const [saleProperties, setSaleProperties] = useState([])

	getAllSaleProperties().then((prop) => {
		setSaleProperties(prop)
	})

	return (
		<>
			{/* Main Header Nav */}
			<DefaultHeader />
			{/* End Main Header Nav */}

			{/* Mobile Nav  */}
			<MobileMenu />
			{/* End Mobile Nav  */}

			{/* Breadcumb Sections */}

			<section className='breadcumb-section bgc-f7'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcumb-style1'>
								<h2 className='title'>Properties For Sale</h2>
								<div className='breadcumb-list'>
									<a href='/'>Home</a>
									<a href='#'>For Sale</a>
								</div>
								<a
									className='filter-btn-left mobile-filter-btn d-block d-lg-none'
									data-bs-toggle='offcanvas'
									href='#listingSidebarFilter'
									role='button'
									aria-controls='listingSidebarFilter'>
									<span className='flaticon-settings' /> Filter
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* End Breadcumb Sections */}

			{/* Property Filtering */}

			{saleProperties == "" || saleProperties == undefined ? (
				<>
					<Box
						sx={{
							display: "flex",
							height: "50vh",
							width: "100%",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<CircularProgress size={50}></CircularProgress>
					</Box>
				</>
			) : (
				<ProperteyFiltering listings={saleProperties} />
			)}

			{/* Property Filtering */}

			{/* Start Our Footer */}
			<section className='footer-style1 pt60 pb-0'>
				<Footer />
			</section>

			{/* End Our Footer */}
		</>
	)
}

export default PropertiesSale
