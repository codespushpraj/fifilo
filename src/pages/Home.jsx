import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import FreqentlyAsk from "./FreqentlyAsk";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  const heroBnrRef = useRef(null);
  const heroBnrImgWrapRef = useRef(null);
  const gridRef = useRef([]);
  useEffect(() => {
    const cursorOffset = function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.style.setProperty("--cursor-x", x + "px");
      this.style.setProperty("--cursor-y", y + "px");
    };

    const heroBnrElement = heroBnrRef.current;
    const heroBnrImgWrapElement = heroBnrImgWrapRef.current;

    if (heroBnrElement) {
      heroBnrElement.addEventListener("mousemove", cursorOffset);
    }
    if (heroBnrImgWrapElement) {
      heroBnrImgWrapElement.addEventListener("mousemove", cursorOffset);
    }

    gridRef.current.forEach((gridElement) => {
      gridElement.addEventListener("mousemove", function (e) {
        const cards = gridElement.querySelectorAll(".card");
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--cursor-x", x + "px");
          card.style.setProperty("--cursor-y", y + "px");
        });
      });
    });

    $(document).ready(function () {
      // Add active class on click
      $(".services__card").on("click", function () {
        // Remove active class from all cards
        $(".services__card").removeClass("active");
        // Add active class to the clicked card
        $(this).addClass("active");
      });
    });
    $(document).ready(function () {
      var h2Tag = $(".about__section h2");
      var hasClass = false;

      $(window).scroll(function () {
        var aboutSection = $(".about__section h2");
        var offset = aboutSection.offset();

        if (offset) {
          var windowHeight = $(window).height();
          var scrollPos = $(window).scrollTop();

          if (scrollPos + windowHeight > offset.top) {
            if (!hasClass) {
              h2Tag.addClass("color-change");
              hasClass = true;
            }
          } else {
            if (hasClass) {
              h2Tag.removeClass("color-change");
              hasClass = false;
            }
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const $video = $("#testimonialsVideo");

      if ($video.length) {
        const rect = $video[0].getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          $video[0].play().catch((error) => {
            console.error("Error playing video:", error);
          });
        } else {
          $video[0].pause();
        }
      }
    };

    const handleUserInteraction = () => {
      $(document).on("scroll", handleScroll);
      // Remove the interaction listener after the first interaction
      $(document).off("click keydown", handleUserInteraction);
    };

    // Add the interaction listener
    $(document).on("click keydown", handleUserInteraction);

    return () => {
      // Cleanup event listeners
      $(document).off("scroll", handleScroll);
      $(document).off("click keydown", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './assets/js/custom.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Top UI/UX Design, Web Development, and Digital Marketing Services | FIFILO Designs</title>
        <meta
          name="description"
          content="FIFILO Designs offers expert UI/UX design, web development, and digital marketing services. Elevate your brand with our creative and tech-savvy team. Contact us today!"
        />
        <meta
          name="keywords"
          content="ui ux design agency,ui ux design company,ui ux design firm,ui ux studio,ui ux design services,user interface design,best ui ux design agency,top ux design firms,best user experience companies,best company for ux designer,top ux design firms"
        />
      </Helmet>
      <div className="hero__bnr" ref={heroBnrRef}>
        <div className="container">
          <div className="bnr__content">
            {/* heading */}
            <h1 data-aos="fade-up" data-aos-duration="800">
              Design & dev studio for <br />
              you <span>in the fast lane</span>
            </h1>
            <h6 data-aos="fade-up" data-aos-duration="800">
              Elevate Your Brand with Our Premier UI/UX Design Services. Partner with the Best <span>UI/UX Design</span> Company and Watch Your Vision Shine!
            </h6>

            <NavLink to="/services" className="button first">
              Services<span></span>
            </NavLink>
            <NavLink to="/contactus" className="button second">
              Lets Talk<span></span>
            </NavLink>
            <NavLink to="/work" className="button third">
              Our Work<span></span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="about__section rn__section__gapTop"  data-aos="fade-up" data-aos-duration="800">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2>
                At FIFILO Designs, we’re more than just a UI/UX design studio. As a leading UI/UX design agency, we blend creativity and technical expertise to deliver exceptional digital experiences.
                With our unique background in film, we offer a fresh perspective that sets us apart as one of the best UI/UX design companies. Whether you're a startup or an established brand, our
                UI/UX design firm transforms your ideas into immersive and impactful digital solutions.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="our__work bg__dark rn__section__gapTop">
        <div className="container">
          <div className="main__heading" data-aos="fade-up" data-aos-duration="800">
            <p>Our work</p>
            <h2>
              Featured <span>Case Studies</span>
            </h2>
          </div>
          <div className="inner__gapTop row">
            <div className="col-12" data-aos="fade-right" data-aos-duration="800">
              <div className="card__caseStudies">
                <div className="top__keywords">
                  <span>Development</span>
                  <span>UI/UX Design</span>
                </div>
                <h4>
                  TribeStays{" "}
                  <NavLink to="/tribestays" className="btn">
                    <img src="assets/img/arrow-up-right.svg" alt="case-studies" />
                  </NavLink>
                </h4>
                <p>Creating a new hub for vital research & resources</p>
                <div className="img__box">
                  <img src="assets/img/case-studies-01.png" alt="case-studies" />
                </div>
              </div>
            </div>

            <div className="col-12" data-aos="fade-left" data-aos-duration="800">
              <div className="card__caseStudies">
                <div className="top__keywords">
                  <span>Branding</span>
                  <span>UI/UX Design</span>
                </div>
                <h4>
                  Cure Hub{" "}
                  <NavLink to="/curehub" className="btn">
                    <img src="assets/img/arrow-up-right.svg" alt="case-studies" />
                  </NavLink>
                </h4>
                <p>Make hitting the GYM a habit you will love the App.</p>
                <div className="img__box">
                  <img src="assets/img/case-studies-02.png" alt="case-studies" />
                </div>
              </div>
            </div>

            <div className="col-12" data-aos="fade-right" data-aos-duration="800">
              <div className="card__caseStudies">
                <div className="top__keywords">
                  <span>UI/UX Design</span>
                  <span>Website Development</span>
                </div>
                <h4>
                  SPV Mortgages{" "}
                  <NavLink to="/spvmortgages" className="btn">
                    <img src="assets/img/arrow-up-right.svg" alt="case-studies" />
                  </NavLink>
                </h4>
                <p>Maximizing Tax Efficiency with SPV Limited Company Mortgages</p>
                <div className="img__box">
                  <img src="assets/img/case-studies-03.png" alt="case-studies" />
                </div>
              </div>
            </div>
          </div>
          <div className="inner__gapTop" data-aos="fade-up" data-aos-duration="800">
            <NavLink to="/work" className="btn btn__primary m-auto">
              VIEW ALL <img src="assets/img/arrow-up-right.svg" alt="case-studies" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="our__services rn__section__gapTop">
        <div className="container">
          <div className="main__heading" data-aos="fade-up" data-aos-duration="800">
            <p>Our Services</p>
            <h2>
              <span>Services</span> we’re Offering
            </h2>
          </div>
          <div className="inner__gapTop">
            <div className="services__card active">
              <div className="row" data-aos="fade-up" data-aos-duration="800">
                <div className="col-lg-2 col-md-3">
                  <h5>Branding</h5>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="center__bx">
                    <h6>
                      Our branding services are designed to establish a distinctive and memorable identity for your business. We focus on creating a cohesive image that resonates with your audience
                      and reinforces your brand's values. Our branding services include:
                    </h6>
                    <div className="service__inr">
                      <ul>
                        <li>Brand Strategy</li>
                        <li>Brand Identity</li>
                        <li>Visual Design</li>
                        <li>Brand Communication</li>
                        <li>Brand Monitoring and Management</li>
                        <li>Brand Launch and Promotion</li>
                      </ul>
                      <NavLink to="/services" className="btn btn__primary">
                        View <img src="assets/img/arrow-up-right.svg" alt="home" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="img__bx">
                    <img src="assets/img/service-icon.svg" alt="home" />
                  </div>
                </div>
              </div>
            </div>
            <div className="brdr" data-aos="fade-up" data-aos-duration="900"></div>
            <div className="services__card">
              <div className="row" data-aos="fade-up" data-aos-duration="900">
                <div className="col-lg-2 col-md-3">
                  <h5>UI UX Design</h5>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="center__bx">
                    <h6>
                      Our UI/UX design services are focused on creating exceptional digital experiences that captivate and engage users. We believe that great user experience is essential for building
                      trust and loyalty. Our approach includes:
                    </h6>
                    <div className="service__inr">
                      <ul>
                        <li>User Interface Design</li>
                        <li>User Experience Design</li>
                        <li>Usability Testing</li>
                        <li>Prototyping and Wireframing</li>
                        <li>Interaction Design</li>
                      </ul>
                      <NavLink to="/services" className="btn btn__primary">
                        View <img src="assets/img/arrow-up-right.svg" alt="home" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="img__bx">
                    <img src="assets/img/service-icon.svg" alt="home" />
                  </div>
                </div>
              </div>
            </div>
            <div className="brdr" data-aos="fade-up" data-aos-duration="1000"></div>
            <div className="services__card">
              <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-lg-2 col-md-3">
                  <h5>Web Development</h5>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="center__bx">
                    <h6>
                      Our web development services combine creativity and functionality to build websites that are both visually stunning and highly effective. We ensure your website supports your
                      brand and provides a great user experience. Our development services include:
                    </h6>
                    <div className="service__inr">
                      <ul>
                        <li>Custom Web Development</li>
                        <li>Responsive Design</li>
                        <li>E-Commerce Solutions</li>
                        <li>Content Management Systems (CMS)</li>
                        <li>Website Maintenance</li>
                      </ul>
                      <NavLink to="/services" className="btn btn__primary">
                        View <img src="assets/img/arrow-up-right.svg" alt="home" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="img__bx">
                    <img src="assets/img/service-icon.svg" alt="home" />
                  </div>
                </div>
              </div>
            </div>
            <div className="brdr" data-aos="fade-up" data-aos-duration="1100"></div>
            <div className="services__card">
              <div className="row" data-aos="fade-up" data-aos-duration="1100">
                <div className="col-lg-2 col-md-3">
                  <h5>Digital Marketing</h5>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="center__bx">
                    <h6>
                      Our digital marketing services are designed to boost your online presence and drive targeted traffic to your business. We analyze your audience and implement strategies to
                      achieve your marketing goals. Our digital marketing services include:
                    </h6>
                    <div className="service__inr">
                      <ul>
                        <li>SEO (Search Engine Optimization)</li>
                        <li>PPC (Pay-Per-Click) Advertising</li>
                        <li>Social Media Marketing</li>
                        <li>Analytics and Reporting</li>
                      </ul>
                      <NavLink to="/services" className="btn btn__primary">
                        View <img src="assets/img/arrow-up-right.svg" alt="home" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="img__bx">
                    <img src="assets/img/service-icon.svg" alt="home" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our__testimonials rn__section__gapTop">
        <div className="container">
          <div className="main__heading" data-aos="fade-up" data-aos-duration="800">
            <p>Testimonials</p>
            <h2>
              Reviews from our <br />
              Satisfied <span>Customers</span>
            </h2>
          </div>
          <div className="inner__gapTop">
            <div className="video-container" data-aos="fade-up" data-aos-duration="800">
              <video id="testimonialsVideo" controls loop>
                <source src="assets/img/client-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="inner__gapTop row" data-aos="fade-up" data-aos-duration="800">
            <div className="col-lg-11">
              <div className="slider__card">
                <div className="testimonials__slide owl-carousel">
                  <div className="item__slide">
                    <h5>
                      I had an opportunity to work with Fifilo Design Studio Team. One of the best UI UX designers team I have ever worked with. They know UX process in depth and have problem solving
                      skills. With the help of Fifilo Team my business growth is now exponential and they did a fantastic job for me. I will highly recommend them for any project.
                    </h5>

                    <div className="clients">
                      <div className="img__bx">
                        <img src="assets/img/bob_coper.png" alt="clients" />
                      </div>
                      <div className="c__details">
                        <h6>Bob Cooper</h6>
                        <p>Chief Innovation Officer – JW Pepper & Son, Inc.</p>
                      </div>
                    </div>
                  </div>

                  <div className="item__slide">
                    <h5>
                      I had an opportunity to work with Fifilo Design Studio Team. One of the best UI UX designers team I have ever worked with. They know UX process in depth and have problem solving
                      skills. With the help of Fifilo Team my business growth is now exponential and they did a fantastic job for me. I will highly recommend them for any project.
                    </h5>

                    <div className="clients">
                      <div className="img__bx">
                        <img src="assets/img/bob_coper.png" alt="clients" />
                      </div>
                      <div className="c__details">
                        <h6>Bob Cooper</h6>
                        <p>Chief Innovation Officer – JW Pepper & Son, Inc.</p>
                      </div>
                    </div>
                  </div>

                  <div className="item__slide">
                    <h5>
                      I had an opportunity to work with Fifilo Design Studio Team. One of the best UI UX designers team I have ever worked with. They know UX process in depth and have problem solving
                      skills. With the help of Fifilo Team my business growth is now exponential and they did a fantastic job for me. I will highly recommend them for any project.
                    </h5>

                    <div className="clients">
                      <div className="img__bx">
                        <img src="assets/img/bob_coper.png" alt="clients" />
                      </div>
                      <div className="c__details">
                        <h6>Bob Cooper</h6>
                        <p>Chief Innovation Officer – JW Pepper & Son, Inc.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-counter">
                  <h6>
                    <span className="current-slide">1</span>/<span className="total-slides">1</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-1">
              <div className="owl-nav">
                <button className="owl-prev">
                  <img src="assets/img/chevron-left.svg" alt="owl-nav" />
                </button>
                <button className="owl-next">
                  <img src="assets/img/chevron-right.png" alt="owl-nav" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our__clients rn__section__gapTop">
        <div className="container">
          <div className="main__heading">
            <p>Trust they show</p>
            <h2>
              Our <span>Clients</span>
            </h2>
          </div>
          <div className="row inner__gapTop gx-0">
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-01.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-02.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-03.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-04.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-05.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-06.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-07.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-08.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-09.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-10.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-11.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-17.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-12.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-13.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-14.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-15.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-16.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card__logo">
                <img src="assets/img/clients-logo-18.png" data-aos="zoom-in" data-aos-duration="1200" alt="clients-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FreqentlyAsk />
    </>
  );
}
