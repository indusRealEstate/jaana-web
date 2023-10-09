import MobileMenu from "@/components/common/mobile-menu";
import CallToActions from "@/components/home/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import PropertiesByCities from "@/components/home/PropertiesByCities";
import Hero from "@/components/home/hero";
import Blog from "@/components/common/Blog";
import Features from "@/components/home/Features";
import Link from "next/link";
import Funfact from "@/components/home/Funfact";
import ApartmentTypes from "@/components/home/ApartmentTypes";
import About from "@/components/home/about";
import Testimonial from "@/components/home/Testimonial";
import FilterProperties from "@/components/home/FilterProperties";
//import Footer from "@/components/home/footer";
 import Footer from "@/components/common/default-footer";
 import Skeleton from '@mui/material/Skeleton';
export const metadata = {
  title: "Top Realtors Dubai | Explore Properties",
};

const HomePage = () => {
  const url = "/images/home/5.webp";
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V1 */}
      <section className="home-banner-style4 p0 bgc-white">
        <div className="home-style4 maxw1600 bdrs24 position-relative mx-auto mx20-lg" style={{
          backgroundImage : `url(${url})`
        }}>
          
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V4 */}

      {/* Explore property-city */}
      {/* <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Properties by Cities</h2>
                
              </div>
            </div>
           

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="#">
                  See All Cities
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          
          </div>
        

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities />
              </div>
            </div>
          </div>
       
        </div>
      </section> */}
      {/* End Explore property-city */}

      {/* Popular Property */}
      <section className="pt-0 pb60" style={{marginTop:"3rem;"}}>
        <div className="container">
          <FilterProperties />
        </div>
      </section>

      {/* Abut intro */}
      <section className="pt30 pb-0">
        <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">
                    Let’s find the right <br className="d-none d-md-block" />{" "}
                    buyers and sellers for you
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features />
                </div>
                <Link href="/contact" className="ud-btn btn-dark">
                  Contact Us
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Abut intro */}

      {/* Funfact */}
      <section className="pt45 pb-0">
        <div className="container maxw1600 bdrb1 pb50">
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay="300ms"
          >
            {/* <Funfact /> */}
          </div>
        </div>
      </section>
      {/* End Funfact */}

      {/* Property Cities */}
      <section className="pb80 pb30-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Explore Apartment Types</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="apartment-type2-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination apartment-type2_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="apartment-type2-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <ApartmentTypes />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End property cities */}

      {/* About Us */}
      <section className="pt0 pb40-md">
        <About />
      </section>
      {/* End About Us */}

      {/* Our Testimonials */}
      {/* <section className="pt0 pb40-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">People Love Living with Realton</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="testimonila_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                

                <div className="col-auto">
                  <div className="pagination swiper--pagination testimonila_pagination__active" />
                </div>
              

                <div className="col-auto">
                  <button className="testimonila_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
               
              </div>
            </div>
           
          </div>
       

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Testimonials */}

      {/* Our Partners */}
      <section className="our-partners p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the dubai’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{
                  marginBottom: "4rem",
                  marginTop:"1rem"
                }}
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Explore Blog */}
      {/* <section className="mb75 mb0-md pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        
        </div>
      </section> */}
      {/* Explore Blog */}

      {/* Our CTA */}
      <section className="our-cta p-0 mb-2 pt-3">
        <CallToActions />
      </section>
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default HomePage;
