import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer rn__section__gapTop pb-0">
        <div className="container">
          <div className="top__box">
            <h2>
              <span data-aos="fade-right">Let’s Work Together</span>{" "}
              <NavLink to="/contactus" className="btn" data-aos="fade-left">
                <img src="assets/img/arrow-up-right-b.svg" alt="" />
              </NavLink>
            </h2>
          </div>

          <div className="center__bx">
            <ul className="ftr__menu">
              <li>
                <NavLink to="/work">work</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
              <li>
                <NavLink to="/services">services</NavLink>
              </li>
              <li>
                <NavLink to="/career">career</NavLink>
              </li>
              <li>
                <NavLink to="/">privacy</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">contact</NavLink>
              </li>
            </ul>
            <div className="center__inr">
              <div className="ftr__logo">
                <img src="assets/img/logo-dark.svg" alt="footer" />
              </div>
              <ul className="social__media">
                <li>
                  <NavLink to="https://www.facebook.com/fifilodesign" target="_blank">
                    <img src="assets/img/facebook.svg" alt="facebook" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://x.com/Fifilodesigns" target="_blank">
                    <img src="assets/img/x.svg" alt="x" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://www.instagram.com/fifilodesigns/" target="_blank">
                    <img src="assets/img/instagram.svg" alt="instagram" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://www.linkedin.com/company/fifilodesigns/" target="_blank">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/">
                    <img src="assets/img/dribble.svg" alt="dribble" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <img src="assets/img/youtube.svg" alt="youtube" />
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="bottom__bx">
            <p>2024 FIFILO Designs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
