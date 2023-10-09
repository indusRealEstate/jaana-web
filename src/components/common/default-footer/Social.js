import React from "react";

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
    {
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/dubairealestate4you/",
    },
    {
      icon: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/jaana-markkanen-08463717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

  return (
    <div className="social-style1">
      {socialIcons.map((iconClass, index) => (
        <a key={index} href={iconClass.link}>
          <i className={iconClass.icon + " list-inline-item"} />
        </a>
      ))}
    </div>
  );
};

export default Social;
