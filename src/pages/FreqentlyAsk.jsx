import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FreqentlyAsk() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="faq__section rn__section__gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div
                className="main__heading"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <p>FAQ’s</p>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="accordion" id="accordionExample">
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <h2 className="accordion-header" id="heading01">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse01"
                      aria-expanded="true"
                      aria-controls="collapse01"
                    >
                      What makes FIFILO Designs one of the top UI/UX design
                      firms?
                    </button>
                  </h2>
                  <div
                    id="collapse01"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading01"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h6>
                        Our blend of creativity, technical skills, and unique
                        film-inspired approach sets us apart as one of the best
                        UI/UX design agencies.
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <h2 className="accordion-header" id="heading02">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse02"
                      aria-expanded="false"
                      aria-controls="collapse02"
                    >
                      How do I start a project with FIFILO Designs?
                    </button>
                  </h2>
                  <div
                    id="collapse02"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading03"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h6>
                        Contact us through our form or give us a call. We’ll
                        discuss your project and show you how our UI/UX design
                        company can help.
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h2 className="accordion-header" id="heading03">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse03"
                      aria-expanded="false"
                      aria-controls="collapse03"
                    >
                      Which industries do you work with?
                    </button>
                  </h2>
                  <div
                    id="collapse03"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading03"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h6>
                        We work across various industries, providing top-tier
                        design solutions as a leading UI/UX design firm.
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <h2 className="accordion-header" id="heading04">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse04"
                      aria-expanded="false"
                      aria-controls="collapse04"
                    >
                      Can you handle both small and large projects?
                    </button>
                  </h2>
                  <div
                    id="collapse04"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading04"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h6>
                        Yes, we’re equipped to handle projects of all sizes,
                        whether it’s a small update or a large-scale design
                        initiative.
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h2 className="accordion-header" id="heading05">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse05"
                      aria-expanded="false"
                      aria-controls="collapse05"
                    >
                      How do you ensure high-quality work?
                    </button>
                  </h2>
                  <div
                    id="collapse05"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading06"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h6>
                        Our detailed process and commitment to excellence ensure
                        we deliver outstanding results, making us one of the
                        best user experiences companies in the industry.
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h2 className="accordion-header" id="heading06">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse06"
                      aria-expanded="false"
                      aria-controls="collapse06"
                    >
                      What makes FIFILO Designs the best company for UX design?
                    </button>
                  </h2>
                  <div
                    id="collapse06"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading06"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h6>
                        FIFILO Designs is one of the best UX design companies
                        due to our deep expertise in creating user-centered
                        solutions. We focus on understanding your users’ needs
                        and delivering designs that provide exceptional
                        experiences. Our innovative approach and dedication to
                        quality make us a top choice for businesses looking to
                        enhance their digital presence.
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
