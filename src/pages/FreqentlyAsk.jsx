import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FreqentlyAsk() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="faq__section dark__bnr rn__section__gapTop">
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
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="800"
                >
                  <h2 className="accordion-header" id="heading01">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse01" aria-expanded="true" aria-controls="collapse01">
                      What is your UI/UX design process?
                    </button>
                  </h2>
                  <div id="collapse01" className="accordion-collapse collapse show" aria-labelledby="heading01" data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h6>Our UI/UX design process starts with understanding your business objectives and user needs through research. We then move to wireframing, prototyping, and design, followed by user testing and feedback. We iterate until the design meets your expectations and user requirements.</h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="900"
                >
                  <h2 className="accordion-header" id="heading02">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse02" aria-expanded="false" aria-controls="collapse02">
                      What tools do you use for UI/UX design?
                    </button>
                  </h2>
                  <div id="collapse02" className="accordion-collapse collapse" aria-labelledby="heading03" data-bs-parent="#accordionExample" >
                    <div className="accordion-body">
                      <h6>We use industry-standard tools like Adobe XD, Figma, and Sketch for design and prototyping. These tools help us create high-fidelity designs and interactive prototypes.</h6>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
                  <h2 className="accordion-header" id="heading03">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse03" aria-expanded="false" aria-controls="collapse03">
                      Can you provide examples of your previous UI/UX projects?
                    </button>
                  </h2>
                  <div id="collapse03" className="accordion-collapse collapse" aria-labelledby="heading03" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>Yes, we can share case studies and examples of our past UI/UX projects to showcase our design capabilities and the results we’ve achieved for our clients.</h6>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
                  <h2 className="accordion-header" id="heading04">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse04" aria-expanded="false" aria-controls="collapse04">
                      Which industries do you work with?
                    </button>
                  </h2>
                  <div id="collapse04" className="accordion-collapse collapse" aria-labelledby="heading04" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>We work with many industries, offering high-quality design solutions as a leading UI/UX design firm. This includes technology, healthcare, finance, e-commerce, education, entertainment and so on. We create designs that fit each industry’s needs perfectly.</h6>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
                  <h2 className="accordion-header" id="heading05">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse05" aria-expanded="false" aria-controls="collapse05">
                      Do you work with clients from different locations?
                    </button>
                  </h2>
                  <div id="collapse05" className="accordion-collapse collapse" aria-labelledby="heading05" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h6>Yes, we work with clients from all over the world. Whether you’re nearby or across the globe, we’re equipped to handle projects remotely and ensure seamless communication and collaboration</h6>
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
