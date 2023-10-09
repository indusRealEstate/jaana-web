import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Form from "@/components/pages/contact/Form";
import Office from "@/components/pages/contact/Office";

export const metadata = {
  title: "Contact Us|| Top Realtors Dubai",
};

const Contact = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Our Contact With Map */}
      <section className="p-0">
        <iframe
          className="home8-map contact-page"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9705159772866!2d55.13862987611368!3d25.068988436880367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d04d580eb8d%3A0x8d223d86886fa136!2sIndus%20Real%20Estate%20LLC%20(DMCC%20Branch)!5e0!3m2!1sen!2sae!4v1696587153581!5m2!1sen!2sae" width="600" height="450" style={{border:0}} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"
          title="Indus Real Estate - Dubai"
          aria-label="Indus Real Estate - Dubai"
        />
        
      </section>
      {/* End Our Contact With Map */}

      {/* Start Our Contact Form */}
      <section>
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-lg-5 position-relative">
              <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
                <h4 className="form-title mb25">
                  Have questions? Get in touch!
                </h4>
                <Form />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 offset-lg-2">
              <h2 className="mb30 text-capitalize">
                We’d love to hear <br className="d-none d-lg-block" />
                from you.
              </h2>
              <p className="text">
              We have been successfully active in business since 2004. During this time, we have successfully assisted hundreds clients and we will be happy to guide you.
              </p>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Our Contact Form */}

      {/* Visit our Office */}
      {/* <section className="pt0 pb90 pb10-md">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title">Visit Our Office</h2>
                <p className="paragraph">
                  Realton has more than 9,000 offices of all sizes and all
                  potential of session.
                </p>
              </div>
            </div>
          </div>
          

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <Office />
          </div>
        
        </div>
      </section>
       */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Contact;
