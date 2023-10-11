import React from "react";
import Link from "next/link";
const Social = () => {
  const socialIcons = [
    
    // "fab fa-facebook-f",
    // "fab fa-twitter",
    // "fab fa-instagram",
    // "fab fa-linkedin-in",
    // {
    //   icon: "fab fa-facebook-f",
    //   link: "/images/listings/townhouse.jpg",
    // },
    // {
    //   icon: "fab fa-twitter",
    //   link: "/images/listings/apartment.jpg",
    // },
    // https://instagram.com/top_dubai_realtor?igshid=OGQ5ZDc2ODk2ZA==
    {
      icon: "fab fa-instagram",
      link: "https://instagram.com/top_dubai_realtor?igshid=OGQ5ZDc2ODk2ZA=="
    },
    {
      icon: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/jaana-markkanen-08463717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

  return (
    <div className="social-style1">
      {socialIcons.map((iconClass, index) => (
        // <Link key={index} href={iconClass.link}>
        //    <i className={iconClass.icon + " list-inline-item"} />
        // </Link>
        <a key={index} href={iconClass.link} target="_blank">
          <i className={iconClass.icon + " list-inline-item"} />
        </a>
      ))}
    </div>
  );
};

export default Social;
