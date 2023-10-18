"use client"
import Link from "next/link"
import React from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@mui/material"

const MenuWidget = () => {
	const router = useRouter()
	const path = usePathname()
	const menuSections = [
		{
			title: "Popular Search",
			links: [
				{
					label: "Apartment for Buy",
					href: "/all-properties/?categories=apartment&status=buy",
				},
				{
					label: "Apartment for Rent",
					href: "/all-properties/?categories=apartment&status=rent",
				},
				{
					label: "Villa for Buy",
					href: "/all-properties/?categories=villa&status=buy",
				},
				{
					label: "Villa for Rent",
					href: "/all-properties/?categories=villa&status=rent",
				},
				{
					label: "House for Buy",
					href: "/all-properties/?categories=house&status=buy",
				},
				{
					label: "House for Rent",
					href: "/all-properties/?categories=house&status=rent",
				},
				{
					label: "Office for Buy",
					href: "/all-properties/?categories=office&status=buy",
				},
				{
					label: "Office for Rent",
					href: "/all-properties/?categories=office&status=rent",
				},
			],
		},
		{
			title: "Quick Links",
			links: [
				{ label: "Home", href: "/all-properties/?categories=house" },
				{ label: "All Properties", href: "/all-properties/?categories=all" },
				{ label: "Sale", href: "/properties-sale" },
				{ label: "Rent", href: "/properties-rent" },
				{ label: "About Agent", href: "/agent-details" },
				{ label: "About Us", href: "/about" },
				{ label: "Contact Us", href: "/contact-us" },
			],
		},
		{
			title: "Discover",
			links: [
				{ label: "Dubai Marina", href: "/all-properties" },
				{ label: "Business Bay", href: "/all-properties" },
				{ label: "Al Barsha", href: "/all-properties" },
				{ label: "Downtown", href: "/all-properties" },
			],
		},
	]

	return (
		<>
			{menuSections.map((section, index) => (
				<div className='col-auto' key={index}>
					<div className='link-style1 mb-3'>
						<h6 className='text-white mb25'>{section.title}</h6>
						<ul className='ps-0'>
							{section.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									{path == "/all-properties/" ? (
										<a href={link.href}>{link.label}</a>
									) : (
										<Link href={link.href}>{link.label}</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</>
	)
}

export default MenuWidget
