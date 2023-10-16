import Link from "next/link";
import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Apartment for Rent", href: "#" },
        { label: "Apartment Low to Hide", href: "#" },
        { label: "Offices for Buy", href: "#" },
        { label: "Offices for Rent", href: "#" },
      ],
    },

    // {
    //   title: "Discover",
    //   links: [
    //     { label: "Miami", href: "#" },
    //     { label: "Los Angeles", href: "#" },
    //     { label: "Chicago", href: "#" },
    //     { label: "New York", href: "#" },
    //   ],
    // },
  ];

  return (
    <>
      <div className="col-sm-6 col-lg-3">
        <div className="footer-widget mb-4 mb-lg-5 ps-0 ps-lg-5">
          <div className="link-style1 light-style mb-3">
            <h6 className="mb25">Quick Links</h6>
            <ul className="ps-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/all-properties">All Propeties</Link>
              </li>
              <li>
                <Link href="/rent">Rent</Link>
              </li>
              <li>
                <Link href="/sale">Sale</Link>
              </li>
              <li>
                <Link href="/agents">Agents</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        {menuSections.map((section, index) => (
          <div className="footer-widget mb-4 mb-lg-5 ps-0 ps-lg-5" key={index}>
            <div className="link-style1 light-style mb30 ">
              <h6 className="mb25">{section.title}</h6>
              <ul className="link-list ps-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* End .col */}
    </>
  );
};

export default MenuWidget;
