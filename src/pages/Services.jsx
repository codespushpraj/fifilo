import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Custom UI/UX Design, Development & Digital Marketing Solutions</title>
        <meta
          name="description"
          content="Explore the range of services offered by FIFILO Designs, including custom UI/UX design, web development, and digital marketing solutions. Tailored to meet your unique needs, our services combine creativity and technical expertise to drive results."
        />
        <meta
          name="keywords"
          content="UI/UX design services, web development solutions, digital marketing services, custom design solutions, creative design agency, professional web design, digital marketing strategies, UI/UX and development services"
        />
      </Helmet>
      <div className="comn__bnr service__bnr">
        <div className="container">
          <div className="bnr__content">
            <div className="left__bx" data-aos="fade-up" data-aos-duration="800">
              <h2>
                Custom <span>Design Solutions</span>
                <br />
                for Your Unique Needs
              </h2>
              <h6>
                Explore our personalized services crafted to meet your specific goals and bring your vision to
                <br /> life with creativity and precision.
              </h6>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <NavLink to="/contactus" className="btn">
                Lets Connect <span></span>
              </NavLink>
            </div>
            <div className="animation-wrapper">
              {/* <div className="stage">
                <div className="cubes ten1"></div>
                <div className="cubes ten1"></div>
                <div className="cubes ten1"></div>
                <div className="cubes ten1"></div>
                <div className="cubes ten1"></div>
                <div className="cubes ten1"></div>
                <div className="cubes ten1"></div>
                <div className="cubes ten1"></div>
                <div className="cubes ten1"></div>

                <div className="cubes ten1"></div>
                <div className="cubes ten2"></div>
                <div className="cubes ten2"></div>
                <div className="cubes ten2"></div>
                <div className="cubes ten2"></div>
                <div className="cubes ten2"></div>
                <div className="cubes ten2"></div>
                <div className="cubes ten2"></div>
                <div className="cubes ten2"></div>
                <div className="cubes ten2"></div>

                <div className="cubes ten2"></div>
                <div className="cubes ten3"></div>
                <div className="cubes ten3"></div>
                <div className="cubes ten3"></div>
                <div className="cubes ten3"></div>
                <div className="cubes ten3"></div>
                <div className="cubes ten3"></div>
                <div className="cubes ten3"></div>
                <div className="cubes ten3"></div>
                <div className="cubes ten3"></div>

                <div className="cubes ten3"></div>
                <div className="cubes ten4"></div>
                <div className="cubes ten4"></div>
                <div className="cubes ten4"></div>
                <div className="cubes ten4"></div>
                <div className="cubes ten4"></div>
                <div className="cubes ten4"></div>
                <div className="cubes ten4"></div>
                <div className="cubes ten4"></div>
                <div className="cubes ten4"></div>

                <div className="cubes ten4"></div>
                <div className="cubes ten5"></div>
                <div className="cubes ten5"></div>
                <div className="cubes ten5"></div>
                <div className="cubes ten5"></div>
                <div className="cubes ten5"></div>
                <div className="cubes ten5"></div>
                <div className="cubes ten5"></div>
                <div className="cubes ten5"></div>
                <div className="cubes ten5"></div>

                <div className="cubes ten5"></div>
                <div className="cubes ten6"></div>
                <div className="cubes ten6"></div>
                <div className="cubes ten6"></div>
                <div className="cubes ten6"></div>
                <div className="cubes ten6"></div>
                <div className="cubes ten6"></div>
                <div className="cubes ten6"></div>
                <div className="cubes ten6"></div>
                <div className="cubes ten6"></div>

                <div className="cubes ten6"></div>
                <div className="cubes ten7"></div>
                <div className="cubes ten7"></div>
                <div className="cubes ten7"></div>
                <div className="cubes ten7"></div>
                <div className="cubes ten7"></div>
                <div className="cubes ten7"></div>
                <div className="cubes ten7"></div>
                <div className="cubes ten7"></div>
                <div className="cubes ten7"></div>

                <div className="cubes ten7"></div>
                <div className="cubes ten8"></div>
                <div className="cubes ten8"></div>
                <div className="cubes ten8"></div>
                <div className="cubes ten8"></div>
                <div className="cubes ten8"></div>
                <div className="cubes ten8"></div>
                <div className="cubes ten8"></div>
                <div className="cubes ten8"></div>
                <div className="cubes ten8"></div>

                <div className="cubes ten8"></div>
                <div className="cubes ten9"></div>
                <div className="cubes ten9"></div>
                <div className="cubes ten9"></div>
                <div className="cubes ten9"></div>
                <div className="cubes ten9"></div>
                <div className="cubes ten9"></div>
                <div className="cubes ten9"></div>
                <div className="cubes ten9"></div>
                <div className="cubes ten9"></div>

                <div className="cubes ten9"></div>
              </div> */}

              <div className="main-wrapper">
                <div className="sphere-wrapper">
                  <div className="plane plane-1">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-2">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-3">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-4">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-5">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-6">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-7">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-8">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-9">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-10">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-11">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                  <div className="plane plane-12">
                    <div className="spoke spoke-1">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-2">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-3">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-4">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-5">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-6">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-7">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-8">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-9">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-10">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-11">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-12">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-13">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-14">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-15">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-16">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-17">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-18">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-19">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-20">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-21">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-22">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-23">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-24">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-25">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-26">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-27">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-28">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-29">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-30">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-31">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-32">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-33">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-34">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-35">
                      <div className="dot"></div>
                    </div>
                    <div className="spoke spoke-36">
                      <div className="dot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comn__serviceBox branding rn__section__gapTop" id="branding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="left__bx">
                <div data-aos="fade-up" data-aos-duration="800">
                  <h2>
                    <span>01</span>
                  </h2>
                  <h2>Branding.</h2>
                </div>

                <img src="assets/img/service-icon.png" alt="service-icon" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right__bx">
                <h6 data-aos="fade-up" data-aos-duration="800">
                  At Fifilo Designs, we understand that your brand is the essence of your business. Our branding services go beyond just creating a logo; we craft a comprehensive brand identity that
                  resonates with your audience and tells your story.
                </h6>

                <h6 data-aos="fade-up" data-aos-duration="800">
                  From market research and brand positioning to visual identity and messaging, we ensure every touchpoint reflects your unique value. Our team works closely with you to develop a brand
                  strategy that not only differentiates you from the competition but also builds lasting connections with your customers.
                </h6>

                <h6 data-aos="fade-up" data-aos-duration="800">
                  With our expertise, your brand will have a powerful and consistent presence across all platforms, driving recognition and loyalty.
                </h6>
                <div className="listing__bx" data-aos="fade-up" data-aos-duration="800">
                  <ul>
                    <li>Brand Strategy</li>
                    <li>Brand Identity</li>
                    <li>Visual Design</li>
                    <li>Brand Communication</li>
                    <li>Brand Monitoring and Management</li>
                    <li>Brand Launch and Promotion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comn__serviceBox uiux__design bg__dark rn__section__gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="left__bx">
                <div data-aos="fade-up" data-aos-duration="800">
                  <h2>
                    <span>02</span>
                  </h2>
                  <h2>UI/UX Design.</h2>
                </div>

                <img src="assets/img/service-icon.png" alt="service-icon" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right__bx">
                <h6 data-aos="fade-up" data-aos-duration="800">
                  User experience is at the heart of what we do at Fifilo Designs. Our UI/UX design services are focused on creating intuitive and engaging interfaces that delight users. We start by
                  understanding your users' needs and behaviors, then blend these insights with cutting-edge design principles to create seamless digital experiences. Whether it's a website, mobile
                  app, or any digital platform, our designs ensure ease of use and aesthetic appeal.
                </h6>

                <h6 data-aos="fade-up" data-aos-duration="800">
                  By prioritizing usability and accessibility, we help you deliver an experience that keeps users coming back. Our goal is to transform complex processes into simple, enjoyable
                  interactions.
                </h6>

                <div className="listing__bx" data-aos="fade-up" data-aos-duration="800">
                  <ul>
                    <li>UI/UX Design for Mobile</li>
                    <li>UI/UX Design for Web</li>
                    <li>User Research</li>
                    <li>Wireframe & Prototype</li>
                    <li>Data-Driven Design</li>
                    <li>Data Visualization</li>
                    <li>Landing Page Design</li>
                    <li>Website Design</li>
                    <li>Information Architecture</li>
                    <li>Website Redesign</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comn__serviceBox development rn__section__gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="left__bx">
                <div data-aos="fade-up" data-aos-duration="800">
                  <h2>
                    <span>03</span>
                  </h2>
                  <h2>Development.</h2>
                </div>

                <img src="assets/img/service-icon.png" alt="service-icon" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right__bx">
                <h6 data-aos="fade-up" data-aos-duration="800">
                  Bringing your digital vision to life requires robust and scalable development solutions, and that's exactly what we offer at Fifilo Designs. Our development team is adept at building
                  high-quality websites, mobile apps, and custom software tailored to your business needs.
                </h6>

                <h6 data-aos="fade-up" data-aos-duration="800">
                  Using the latest technologies and best practices, we ensure your digital solutions are not only functional but also future-proof. We focus on creating a seamless user experience,
                  with fast load times and responsive design that work across all devices.
                </h6>

                <h6 data-aos="fade-up" data-aos-duration="800">
                  Our commitment to quality and innovation ensures that your project is delivered on time and performs flawlessly.
                </h6>

                <div className="listing__bx">
                  <div data-aos="fade-up" data-aos-duration="800">
                    <h6>
                      <span>Web Development</span>
                    </h6>
                    <ul>
                      <li>MVP Development</li>
                      <li>SAAS Development</li>
                      <li>Web App Modernization</li>
                      <li>Third- Party Integrations</li>
                    </ul>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="800">
                    <h6>
                      <span>Mobile App Development</span>
                    </h6>
                    <ul>
                      <li>React Native</li>
                      <li>Java</li>
                      <li>Kotlin</li>
                      <li>Flutter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comn__serviceBox digital__marketing bg__dark rn__section__gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="left__bx">
                <div data-aos="fade-up" data-aos-duration="800">
                  <h2>
                    <span>04</span>
                  </h2>
                  <h2>Digital Marketing</h2>
                </div>

                <img src="assets/img/service-icon.png" alt="service-icon" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right__bx">
                <h6 data-aos="fade-up" data-aos-duration="800">
                  In today’s digital landscape, visibility is key to success. At Fifilo Designs, our digital marketing services are designed to enhance your online presence and drive meaningful
                  engagement. From search engine optimization (SEO) and content marketing to social media management and pay-per-click (PPC) advertising, we deploy strategies that attract and convert
                  your target audience.
                </h6>

                <h6 data-aos="fade-up" data-aos-duration="800">
                  Our data-driven approach ensures that every campaign is optimized for maximum impact and ROI. By understanding your business goals and audience, we craft compelling messages and
                  campaigns that boost your brand's visibility and growth in a crowded digital space.
                </h6>
                <div className="listing__bx" data-aos="fade-up" data-aos-duration="800">
                  <ul>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Franchise SEO</li>
                    <li>Link Building</li>
                    <li>Social Media Marketing</li>
                    <li>Pay Per Click (PPC) Management</li>
                    <li>Online Reputation Management (ORM)</li>
                    <li>Content Writing</li>
                    <li>Conversion Rate Optimization (CRO)</li>
                    <li>Web Hosting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our__tools rn__section__gapTop">
        <div className="container">
          <div className="main__heading" data-aos="fade-up" data-aos-duration="800">
            <h2>
              <span>Tools</span> we use <br />
              to get the job done.
            </h2>
          </div>

          <div className="row gx-lg-4 gx-md-3 gx-2 inner__gapTop justify-content-center">
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/figma.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/xd.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/sketch.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/illustrator.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/photoshop.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/invision.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/miro.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/balsamiq.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/zeplin.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/webflow.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
