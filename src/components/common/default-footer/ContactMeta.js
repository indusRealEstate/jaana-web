import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Whatsapp",
      phone: "+800 46387",
      phoneLink: "tel:+800 46387", // Changed phoneLink to tel: URI
      whatsapp:"whatsapp://send?abid=&text=Hello%2C%20World!"
    },
    {
      title: "Email",
      mail: "jaana.markkanen@indusre.ae",
      mailLink: "mailto:jaana.markkanen@indusre.ae", // Changed mailLink to direct email address
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href="https://wa.me/971505527479">Contact Via Whatsapp</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
