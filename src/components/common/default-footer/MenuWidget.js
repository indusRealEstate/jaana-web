import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Apartment for Rent", href: "/all-properties" },
        { label: "Apartment Low to High", href: "/all-properties" },
        { label: "Offices for Buy", href: "/all-properties" },
        { label: "Offices for Rent", href: "/all-properties" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/home" },
        { label: "All Properties", href: "/all-properties" },
        { label: "Sale", href: "/properties-sale" },
        { label: "Rent", href: "/properties-rent" },
        { label: "About Agent", href: "/agent-details" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
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
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
