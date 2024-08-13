import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import $ from "jquery"; // import jQuery
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function About() {
  useEffect(() => {
    $(document).ready(function () {
      // Add 'active' class to the first .stroke-circle initially
      $(".border-section").first().find(".stroke-circle").addClass("active");
      $(".border-section").first().siblings(".col-lg-3").find(".card__bx").addClass("active");

      // Handle border section height adjustment and class addition
      $(window).on("scroll", function () {
        $(".border-section").each(function () {
          var $this = $(this);
          var $row = $this.closest(".row"); // Find the closest parent row to find the corresponding .card__bx
          var $cardBx = $row.find(".card__bx"); // Find .card__bx within the same row

          if ($this.length) {
            // Ensure the element exists
            var sectionTop = $this.offset().top;
            var sectionHeight = $this.height();
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();

            // Calculate start and end points for the section
            var startOffset = sectionTop - windowHeight * 0.4; // Adjust as needed
            var endOffset = sectionTop + sectionHeight - windowHeight * 0.4; // Adjust as needed

            var scrollPercentage = 0;

            if (scrollPosition >= startOffset && scrollPosition <= endOffset) {
              scrollPercentage = (scrollPosition - startOffset) / (endOffset - startOffset);
              // Add class to .stroke-circle and .card__bx
              $this.find(".stroke-circle").addClass("active");
              $cardBx.addClass("active");
            } else if (scrollPosition > endOffset) {
              scrollPercentage = 1;
              // Add class to .stroke-circle and .card__bx
              $this.find(".stroke-circle").addClass("active");
              $cardBx.addClass("active");
            } else {
              // Remove class when not in range
              $this.find(".stroke-circle").removeClass("active");
              $cardBx.removeClass("active");
            }

            // Ensure scrollPercentage is between 0 and 1
            scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

            // Apply the height based on scrollPercentage
            $this.find(".stroke-border").css("height", scrollPercentage * 100 + "%");
          }
        });
      });

      // Trigger the scroll event initially to set the initial state
      $(window).trigger("scroll");
    });
  }, []);
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Helmet>
        <title>About Us | FIFILO Designs | Innovative UI/UX Design Studio</title>
        <meta
          name="description"
          content="Discover the story behind FIFILO Designs, a creative UI/UX design studio founded by Mohsin Khan and Abhishek Joshi. Learn about our mission, vision, values, and how we deliver exceptional digital experiences through innovative design solutions."
        />
        <meta
          name="keywords"
          content="UI/UX design studio, about FIFILO Designs, creative design agency, UI/UX design team, digital design experts, Mohsin Khan Abhishek Joshi, design studio story, innovative design studio"
        />
      </Helmet>
      <div className="comn__bnr about__bnr">
        <video src="assets/img/glowing-marbles.mp4" muted loop autoPlay></video>
        <div className="container">
          <div className="bnr__content">
            <div className="left__bx" data-aos="fade-up" data-aos-duration="800">
              <h2>
                Explore Our <br />
                <span>Design Studio's Story</span>
              </h2>
              <h6>Learn more about who we are, what we do, and why we’re passionate about creating exceptional digital experiences.</h6>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <NavLink to="/contactus" className="btn">
                Lets Connect <span></span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="about__fifilo rn__section__gapTop">
        <div className="container">
          <div className="main__heading" data-aos="fade-up" data-aos-duration="800">
            <p>Who we are</p>
            <h2>
              <span>About</span> FIFILO Designs
            </h2>
          </div>
          <div className="row gx-lg-4 gx-md-3 inner__gapTop">
            <div className="col-12">
              <div className="top__bx" data-aos="fade-up" data-aos-duration="800">
                <h6>
                  Welcome to FIFILO Designs! Founded by Mohsin Khan and Abhishek Joshi, we’re a creative studio that blends design, development, and digital marketing. With a unique background in
                  independent film, we bring a fresh perspective to every project. Whether you're looking for UI/UX design, web development, or digital marketing, we’re here to turn your vision into a
                  standout digital experience. From startups to established brands, we craft solutions that are as innovative as they are effective.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-aos="flip-left" data-aos-duration="800">
              <div className="card__bx">
                <img src="assets/img/about-01.svg" alt="about" />
                <h5>Mission</h5>
                <span>
                  Our mission is to create outstanding digital experiences that exceed expectations. We blend the latest technology with creative thinking to deliver real results for our clients
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-aos="flip-left" data-aos-duration="800">
              <div className="card__bx">
                <img src="assets/img/about-02.svg" alt="about" />
                <h5>Vision</h5>
                <span>We envision a future where digital solutions are revolutionary, setting new benchmarks for creativity and user-centric design.</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-aos="flip-left" data-aos-duration="800">
              <div className="card__bx">
                <img src="assets/img/about-03.svg" alt="about" />
                <h5>Values</h5>
                <span>
                  At FIFILO Designs, our core values drive everything we do: creativity, integrity, focus on the user, collaboration, and a commitment to continuous improvement. These principles guide
                  us in crafting impactful and transformative digital experiences.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our__process rn__section__gapTop bg__dark">
        <div className="container">
          <div className="main__heading" data-aos="fade-up" data-aos-duration="800">
            <p>Process</p>
            <h2>
              Our Work <span>Process</span>
            </h2>
          </div>

          <div className="inner__gapTop row justify-content-center">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-2 center__bx">
                  <div className="border-section">
                    <div className="stroke-circle">
                      <img src="assets/img/stars-02.svg" alt="icon" />
                    </div>
                    <div className="stroke-border">
                      <div className="arrow-down">
                        <img src="assets/img/arrow-down.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-10 offset-md-7" data-aos="fade-up" data-aos-duration="800">
                  <div className="card__bx">
                    <h5>Discovery:</h5>
                    <p>We start by understanding your goals and challenges. This helps us align our expertise in design, development, and digital marketing with your vision.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 col-10 offset-xl-2 offset-lg-1" data-aos="fade-up" data-aos-duration="800">
                  <div className="card__bx">
                    <h5>Strategy:</h5>
                    <p>We develop a tailored strategy that outlines the best approach for your project, whether it’s a new design, a website overhaul, or a marketing campaign.</p>
                  </div>
                </div>
                <div className="col-lg-1 col-2 center__bx">
                  <div className="border-section">
                    <div className="stroke-circle">
                      <img src="assets/img/search-refraction.svg" alt="icon" />
                    </div>
                    <div className="stroke-border">
                      <div className="arrow-down">
                        <img src="assets/img/arrow-down.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-2 center__bx">
                  <div className="border-section">
                    <div className="stroke-circle">
                      <img src="assets/img/pen-tool-02.svg" alt="icon" />
                    </div>
                    <div className="stroke-border">
                      <div className="arrow-down">
                        <img src="assets/img/arrow-down.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-10 offset-md-7">
                  <div className="card__bx" data-aos="fade-up" data-aos-duration="800">
                    <h5>Design & Development:</h5>
                    <p>In this phase, we turn insights into engaging designs and build functional, user-friendly websites. Our development team ensures that everything works seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 col-10 offset-xl-2 offset-lg-1" data-aos="fade-up" data-aos-duration="800">
                  <div className="card__bx">
                    <h5>Implementation:</h5>
                    <p>We carefully implement and integrate the solutions, making sure they meet your expectations and deliver the results you need.</p>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-2 center__bx">
                  <div className="border-section">
                    <div className="stroke-circle">
                      <img src="assets/img/stand.svg" alt="icon" />
                    </div>
                    <div className="stroke-border">
                      <div className="arrow-down">
                        <img src="assets/img/arrow-down.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-2 center__bx">
                  <div className="border-section">
                    <div className="stroke-circle">
                      <img src="assets/img/hand-shake.svg" alt="icon" />
                    </div>
                    <div className="stroke-border">
                      <div className="arrow-down">
                        <img src="assets/img/arrow-down.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-10 offset-md-7">
                  <div className="card__bx" data-aos="fade-up" data-aos-duration="800">
                    <h5>Optimization & Support:</h5>
                    <p>After launch, we continue to refine and support your project to ensure it performs optimally and adapts to any evolving needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our__team rn__section__gapTop">
        <div className="container">
          <div className="row gx-3 gx-xl-4">
            <div className="col-lg-3 col-md-12">
              <div className="main__heading" data-aos="fade-up" data-aos-duration="800">
                <p>Team</p>
                <h2>
                  Our <span>Team</span>,<br /> Your Design Partners
                </h2>
                <span className="title">Revolutionizing digital landscapes with intuitive design, we craft seamless user experiences that transcend</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/mohsin-khan.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Mohsin Khan</p>
                    <span>Co-Founder & CEO</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/mohsinkhan1710/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/abhishek-joshi.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Abhishek Joshi</p>
                    <span>Co-Founder & CTO</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/abhishek-joshi-5872b4285/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/amit-bisen.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Amit Bisen</p>
                    <span>Technical Lead</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/amitbisen/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/vivek-pratap.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Vivek Pratap</p>
                    <span>Sr. Business Executive</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/vivek-pratap-singh-456419a3/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/pushpraj-patel.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Pushpraj Patel</p>
                    <span>Sr. Web Developer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/patel-pusp/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/rakesh-patel.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Rakesh Patel</p>
                    <span>Sr. UI UX Designer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/rakesh--patel/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/khalid-ali.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Khalid Ali</p>
                    <span>Ui UX Designer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/sayyedkhalidali/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/sakshi-satani.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Sakshi Satani</p>
                    <span>Ui UX Designer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/sakshi-satani-360b061b1/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/sahiba-jain.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Sahiba Jain</p>
                    <span>HR Manager</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/sahiba-jain-57b7901ab/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/monika-nagwani.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Monika Nagwani</p>
                    <span>Ui UX Designer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/monika-nagwani-0a0064227/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/aman-chorasiya.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Aman Chourasiya</p>
                    <span>Ui UX Designer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/amanux26/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/abdul-razique.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Abdul Razique</p>
                    <span>Ui UX Designer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/abdul-razique-800a1023b/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/gagan-vishwakarma.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Gagan Vishwakarma</p>
                    <span>Web Developer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/gagan-vishwakarma-97ba7a234/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/shreyansh-tiwari.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Shreyansh Tiwari</p>
                    <span>UI UX Designer</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/shreyansign/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="team__card" data-aos="fade-up" data-aos-duration="800">
                <div className="img__team">
                  <img src="assets/img/mujahid-khan.png" alt="our-team" />
                </div>
                <div className="team__detail">
                  <div>
                    <p>Mujahid Khan</p>
                    <span>Executive - Business Development</span>
                  </div>
                  <NavLink to="https://www.linkedin.com/in/mujahid-khan-156386179/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="16" fill="#0A66C2" />
                      <path
                        d="M23.501 7.2002H8.49942C8.15484 7.2002 7.82438 7.33708 7.58073 7.58073C7.33708 7.82438 7.2002 8.15484 7.2002 8.49942V23.501C7.2002 23.8455 7.33708 24.176 7.58073 24.4197C7.82438 24.6633 8.15484 24.8002 8.49942 24.8002H23.501C23.8455 24.8002 24.176 24.6633 24.4197 24.4197C24.6633 24.176 24.8002 23.8455 24.8002 23.501V8.49942C24.8002 8.15484 24.6633 7.82438 24.4197 7.58073C24.176 7.33708 23.8455 7.2002 23.501 7.2002ZM12.446 22.1932H9.79986V13.788H12.446V22.1932ZM11.1211 12.6232C10.8209 12.6215 10.528 12.5309 10.2793 12.3629C10.0305 12.1949 9.83714 11.957 9.72351 11.6792C9.60987 11.4014 9.58107 11.0961 9.64075 10.8019C9.70043 10.5078 9.84592 10.2379 10.0588 10.0263C10.2718 9.81474 10.5426 9.67099 10.8371 9.6132C11.1317 9.55541 11.4367 9.58616 11.7138 9.70158C11.9909 9.81701 12.2276 10.0119 12.394 10.2617C12.5604 10.5115 12.6491 10.805 12.6489 11.1052C12.6517 11.3062 12.614 11.5056 12.5381 11.6917C12.4622 11.8778 12.3496 12.0467 12.2071 12.1884C12.0645 12.33 11.8949 12.4415 11.7083 12.5162C11.5217 12.5909 11.322 12.6273 11.1211 12.6232ZM22.1993 22.2005H19.5544V17.6086C19.5544 16.2544 18.9788 15.8364 18.2356 15.8364C17.451 15.8364 16.681 16.428 16.681 17.6429V22.2005H14.0349V13.7941H16.5795V14.9589H16.6138C16.8692 14.4419 17.7639 13.5582 19.1291 13.5582C20.6055 13.5582 22.2005 14.4345 22.2005 17.0012L22.1993 22.2005Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq__section rn__section__gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="main__heading" data-aos="fade-up" data-aos-duration="800">
                <p>FAQ’s</p>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="800">
                  <h2 className="accordion-header" id="heading01">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse01" aria-expanded="true" aria-controls="collapse01">
                      What is your process for ensuring high-quality work?
                    </button>
                  </h2>
                  <div id="collapse01" className="accordion-collapse collapse show" aria-labelledby="heading01" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>
                        We follow a structured process that includes discovery, strategy, design and development, implementation, and ongoing optimization. This approach ensures we deliver
                        high-quality work that meets your goals.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="900">
                  <h2 className="accordion-header" id="heading02">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse02" aria-expanded="false" aria-controls="collapse02">
                      How can I get in touch with FIFILO Designs?
                    </button>
                  </h2>
                  <div id="collapse02" className="accordion-collapse collapse" aria-labelledby="heading03" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>You can contact us through our website’s contact form, by phone, or via email. We’re here to answer any questions and discuss how we can help with your next project.</h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
                  <h2 className="accordion-header" id="heading03">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse03" aria-expanded="false" aria-controls="collapse03">
                      How does FIFILO Designs ensure client satisfaction?
                    </button>
                  </h2>
                  <div id="collapse03" className="accordion-collapse collapse" aria-labelledby="heading03" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>
                        We focus on open communication and collaboration with our clients throughout the project. By understanding their vision and keeping them involved in every stage, we ensure that
                        the final outcome aligns with their expectations and delivers outstanding results.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="1100">
                  <h2 className="accordion-header" id="heading04">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse04" aria-expanded="false" aria-controls="collapse04">
                      Can you provide testimonials or success stories from previous clients?
                    </button>
                  </h2>
                  <div id="collapse04" className="accordion-collapse collapse" aria-labelledby="heading04" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>
                        Yes, we’re happy to share testimonials and success stories from our past clients. These endorsements highlight the positive impact of our work and the satisfaction of those
                        we’ve collaborated with. Feel free to check our website or contact us for specific examples.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                  <h2 className="accordion-header" id="heading05">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse05" aria-expanded="false" aria-controls="collapse05">
                      How can I stay updated with your latest projects and news?
                    </button>
                  </h2>
                  <div id="collapse05" className="accordion-collapse collapse" aria-labelledby="heading06" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>
                        To stay updated, you can follow us on our social media channels, subscribe to our newsletter, or regularly visit our blog. We share updates about our latest projects, industry
                        insights, and company news through these platforms.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="1400">
                  <h2 className="accordion-header" id="heading06">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse06" aria-expanded="false" aria-controls="collapse06">
                      What kinds of technologies and tools do you use in your projects?
                    </button>
                  </h2>
                  <div id="collapse06" className="accordion-collapse collapse" aria-labelledby="heading06" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>
                        We use a range of cutting-edge technologies and tools tailored to the needs of each project. This includes design software like Adobe XD and Figma, development frameworks such
                        as React and Angular, and marketing tools for analytics and automation.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
