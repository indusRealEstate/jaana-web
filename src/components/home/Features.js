const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Full conveyance for buyers and sellers",
      description:
      "Full conveyance for buyers and sellers involves the legal transfer of property ownership.",
    },
    {
      icon: "flaticon-review",
      title: "mortgage advisory service available",
      description:
        "Mortgage advisory services are readily available to assist borrowers in making informed decisions about home financing.",
    },
    {
      icon: "flaticon-secure-payment",
      title: "Better Values",
      description:
        "We are zealously focused on honesty as our primary value and have built our reputation on integrity."
    }
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            <p className="text mb-0 fz15">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
