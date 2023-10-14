const Social = () => {
	const socialLinks = [
		// {
		// 	id: 1,
		// 	iconClass: "fab fa-facebook-f",
		// 	href: "#",
		// },
		// {
		// 	id: 2,
		// 	iconClass: "fab fa-twitter",
		// 	href: "#",
		// },
		{
			id: 3,
			iconClass: "fab fa-instagram",
			href: "#",
		},
		{
			id: 4,
			iconClass: "fab fa-linkedin-in",
			href: "https://www.linkedin.com/in/jaana-markkanen-08463717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
		},
	]

	return (
		<>
			{socialLinks.map((link, index) => (
				<a className='me-3' href={link.href} key={index}>
					<i className={link.iconClass}></i>
				</a>
			))}
		</>
	)
}

export default Social
