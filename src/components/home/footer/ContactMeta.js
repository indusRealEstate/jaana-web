import React from "react";

const ContactMeta = () => {
  const contactInfoData = [
    {
      text: "Address",
      info: "4H,Almas Tower,Jumeirah Lake Towers, Dubai,UAE.",
      link: "#", // Empty link value for the first object
    },
    {
      text: "Total Free Customer Care",
      info: "800 46387",
      link: "tel:+800 46387",
    },
    {
      text: "Need Live Support?",
      info: "info@indusre.ae",
      link: "info@indusre.ae",
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoData.map((contact, index) => (
        <div className="contact-info mb25" key={index}>
          <p className="text mb5">{contact.text}</p>
          {contact.link.startsWith("mailto:") ? (
            <h6 className="info-mail">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          ) : (
            <h6 className="info-phone">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
