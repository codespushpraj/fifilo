import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, useLocation } from "react-router-dom";
import useCursorPosition from "../layout/useCursorPosition";

export default function Services() {
  useCursorPosition('dark__bnr');
  const location = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.slice(1));
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1)); // Remove `#` and get the ID
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
      }
    }, [location]);

    return null;
  }

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
              <h2>Custom Design<br /><span>Crafted for Impact</span></h2>
              <h6>Bring your vision to life with personalized digital solutions. From UI/UX design to web development and digital marketing, we turn your ideas into smooth, high-performing experience.</h6>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <NavLink to="/contact-us/" className="btn">
                Lets Connect <span></span>
              </NavLink>
            </div>
            <div className="animation-wrapper">
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

      <div className="comn__serviceBox branding lite__bnr rn__section__gapTop" id="branding">
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

                <div class="shapes shapes-1"></div>
                {/* <img src="assets/img/service-icon.png" alt="service-icon" /> */}
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right__bx">
                <h6 data-aos="fade-up" data-aos-duration="800">Branding is more than a logo—it's your voice, your story, and your identity in a single, powerful presence. We create brand identities that cut through the noise and connect with your audience. From strategy to visual identity, we fuse creativity with insight to build a brand that not only stands out but leaves a lasting impression. </h6>

                <h6 data-aos="fade-up" data-aos-duration="800">Let’s shape a brand that’s uniquely yours, with a seamless experience that sparks recognition, loyalty, and growth across every platform.</h6>

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

      <div className="comn__serviceBox uiux__design dark__bnr rn__section__gapTop" id="uiux-design">
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

                <div class="shapes shapes-2"></div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right__bx">
                <h6 data-aos="fade-up" data-aos-duration="800">The user experience drives everything we do. Our UI UX design services are built around creating intuitive, visually engaging, and seamless digital interactions that users love. We dive deep into understanding your audience, what they need, how they think, and how they behave—to create designs that blend innovation with usability.</h6>

                <h6 data-aos="fade-up" data-aos-duration="800">From websites to mobile apps, we design interfaces that are not just beautiful but functional, accessible, and built to keep your users engaged. We believe in simplifying complexity, ensuring that every interaction is smooth and enjoyable. Whether you’re looking to build from scratch or enhance your current platform, our designs elevate the user experience and keep your audience coming back for more.</h6>

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

      <div className="comn__serviceBox development lite__bnr rn__section__gapTop" id="development">
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

                <div class="shapes shapes-3"></div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right__bx">
                <h6 data-aos="fade-up" data-aos-duration="800">We create digital ecosystems tailored to your business vision. Our expert development team specializes in crafting scalable, high-performance websites, mobile applications, and custom software that are designed to grow your business.</h6>

                <h6 data-aos="fade-up" data-aos-duration="800">We ensure your digital solutions are responsive, fast, and built for today’s multi-device world with cutting-edge technologies. From seamless functionality to sleek user interfaces, our focus is on delivering an experience that not only meets your needs but exceeds your users' expectations.</h6>

                <h6 data-aos="fade-up" data-aos-duration="800">Ready to perform at the highest level?</h6>

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

      <div className="comn__serviceBox digital__marketing dark__bnr rn__section__gapTop" id="digital-marketing">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="left__bx">
                <div data-aos="fade-up" data-aos-duration="800">
                  <h2>
                    <span>04</span>
                  </h2>
                  <h2>Digital Marketing.</h2>
                </div>

                <div class="shapes shapes-4"></div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="right__bx">
                <h6 data-aos="fade-up" data-aos-duration="800">We transform your online presence into a powerful engine for growth. In an ever-evolving digital world, we craft dynamic marketing strategies that cut through the noise—whether it's SEO, content marketing, social media management, or PPC advertising. Our team drives engagement and conversions by reaching the right people at the right time.</h6>

                <h6 data-aos="fade-up" data-aos-duration="800">We take a data-driven approach to ensure every campaign delivers measurable results, increasing visibility and ROI. </h6>
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
                <img src="assets/img/zeplin.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/react.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/node.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/javascript.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/php.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/wordpress.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/html.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/css.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/google-ads.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/facebook-ads.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/google-analytics.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="card__bx">
                <img src="assets/img/mailchimp.png" data-aos="zoom-in" alt="card__bx" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
