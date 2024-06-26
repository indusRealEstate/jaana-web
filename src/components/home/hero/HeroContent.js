"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

const HeroContent = ({ transferData }) => {
	const router = useRouter()
	const [activeTab, setActiveTab] = useState("all")

	const tabs = [
		{ id: "all", label: "All" },
		{ id: "buy", label: "Buy" },
		{ id: "rent", label: "Rent" },
	]

	const handleTabClick = (tab) => {
		setActiveTab(tab.id)
		transferData?.setSearchProperties({
			...transferData.searchProperties,
			tab: tab.label,
		})
	}

	return (
		<div className='advance-search-tab mt60 mt30-lg mx-auto animate-up-3'>
			<ul className='nav nav-tabs p-0 m-0'>
				{tabs.map((tab) => (
					<li className='nav-item' key={tab.id}>
						<button
							className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
							onClick={() => handleTabClick(tab)}>
							{tab.label}
						</button>
					</li>
				))}
			</ul>

			<div className='tab-content'>
				{tabs.map((tab) => (
					<div
						className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
						key={tab.id}>
						<div className='advance-content-style1'>
							<div className='row'>
								<div className='col-md-8 col-lg-9'>
									<div className='advance-search-field position-relative text-start'>
										<form className='form-search position-relative'>
											<div className='box-search'>
												<span className='icon flaticon-home-1' />
												<input
													className='form-control bgc-f7 bdrs12'
													type='text'
													name='search'
													placeholder={`Search Products for ${tab.label}`}
													onChange={(event) =>
														transferData?.setSearchProperties({
															...transferData.searchProperties,
															searchText: event.target.value,
														})
													}
												/>
											</div>
										</form>
									</div>
								</div>
								{/* End .col-md-8 */}

								<div className='col-md-4 col-lg-3'>
									<div className='d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0'>
										<button
											className='advance-search-btn'
											type='button'
											data-bs-toggle='modal'
											data-bs-target='#advanceSeachModal'>
											<span className='flaticon-settings' /> Advanced
										</button>
										<button
											className='advance-search-icon ud-btn btn-dark ms-4'
											type='button'
											onClick={(event) => {
												event.preventDefault()
												if (event.type === "click") {
													transferData?.search(transferData?.searchProperties)
												}
											}}
											// onClick={() => router.push("/all-properties")}
										>
											<span className='flaticon-search' />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default HeroContent
