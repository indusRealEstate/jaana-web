"use client"
import DefaultHeader from "@/components/common/DefaultHeader"
import Footer from "@/components/common/default-footer"
import MobileMenu from "@/components/common/mobile-menu"

import React from "react"
import PropertyFiltering from "@/components/listing/grid-view/grid-default/PropertyFiltering"
import { useEffect, useState } from "react"
import { getAllProperties } from "@/api/properties"
import { Box, CircularProgress } from "@mui/material"
import { useRouter, useSearchParams } from "next/navigation"

const AllProperties = () => {
	const searchParams = useSearchParams()
	const searchRaw = searchParams.get("search")

	const categoryRow = searchParams.get("categories")
	const status = searchParams.get("status")

	const base64UrlDecode = (base64) => {
		// ['+', '/', '='],
		// ['-', '_', '#'],

		const text1 = new String(base64).replace(/-/g, "+")
		const text2 = text1.replace(/_/g, "/")
		const text3 = text2.replace(/#/g, "=")

		return text3
	}

	const searchData =
		searchRaw != null ? JSON.parse(atob(base64UrlDecode(searchRaw))) : undefined

	const [allProperties, setAllProperties] = useState([])

	useEffect(() => {
		getAllProperties()
			.then((response) => {
				setAllProperties(response)
			})
			.catch((error) => {
				console.log("error" + error)
			})
	}, [allProperties])

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
								<h2 className='title'>All Properties</h2>
								{/* <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">All</a>
                </div> */}
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
			{allProperties == "" ? (
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
				<PropertyFiltering
					allProperties={allProperties}
					prop_for={"All"}
					categoryRow={categoryRow}
					status={status}
					search={searchData}
				/>
			)}
			{/* Property Filtering */}

			{/* Start Our Footer */}
			{/* <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section> */}

			<section className='footer-style1 pt60 pb-0'>
				<Footer />
			</section>
			{/* End Our Footer */}
		</>
	)
}

export default AllProperties
