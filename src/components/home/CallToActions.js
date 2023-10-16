import Image from "next/image";
import Link from "next/link";

const CallToActions = () => {
  return (
    <div
      className="cta-banner bgc-thm-light mx-auto maxw1600 pt90 pt60-md pb90 pb60-md bdrs12 position-relative mx20-lg px20-md "
      data-aos="fade"
      data-aos-delay="300"
    >
      <div className="img-box-5">
        <Image
          width={104}
          height={118}
          className="img-1 bounce-y contain"
          src="/images/about/element-4.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-6">
            <div className="cta-style3">
              <h2 className="cta-title">Get Your Dream House</h2>
              <p className="cta-text mb25">
              We have been successfully active in business since 2004. During this time,{" "}
                <br className="d-none d-md-block" /> we have successfully assisted hundreds clients and we will be happy to guide you.
              </p>
              {/* /register */}
              <Link href="/contact-us" className="ud-btn btn-dark">
                Contact Us <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4 offset-xl-2 d-none d-lg-block">
            <div className="cta-img">
              <Image
                width={441}
                height={511}
                className="w-100 h-100 cover"
                src="/images/about/7.webp"
                alt="shape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActions;
