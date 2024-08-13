import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
const jobs = [
  { id: 1, category: "design", title: "UI UX Designer", location: "Indore, WFO", experience: "3 - 5 Years" },
  { id: 2, category: "design", title: "UI UX Designer", location: "Indore, Remote", experience: "3 - 5 Years" },
  { id: 3, category: "development", title: "MEAN Stack", location: "Indore, WFO", experience: "3 - 5 Years" },
  { id: 4, category: "development", title: "MERN Stack", location: "Indore, WFO", experience: "3 - 5 Years" },
  { id: 5, category: "development", title: "ReactJS", location: "Indore, WFO", experience: "3 - 5 Years" },
  { id: 6, category: "development", title: "AngularJS", location: "Indore, WFO", experience: "3 - 5 Years" },
  { id: 7, category: "development", title: "NodeJS", location: "Indore, WFO", experience: "3 - 5 Years" },
  { id: 8, category: "marketing", title: "Digital Marketing", location: "Indore, WFO", experience: "3 - 5 Years" },
];
export default function Career() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [filter, setFilter] = useState("*");

  const filteredJobs = filter === "*" ? jobs : jobs.filter((job) => job.category === filter);

  return (
    <>
      <Helmet>
        <title>Careers at FIFILO Designs | Join Our Creative Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at FIFILO Designs. Join a dynamic team where talent meets opportunity, and contribute to innovative UI/UX design, web development, and digital marketing projects."
        />
        <meta
          name="keywords"
          content="careers at FIFILO Designs, join our team, design jobs, UI/UX design careers, web development jobs, digital marketing positions, creative career opportunities, design studio jobs"
        />
      </Helmet>
      <div className="comn__bnr service__bnr">
        <div className="container">
          <div className="bnr__content">
            <div className="left__bx" data-aos="fade-up" data-aos-duration="800">
              <h2>
                Where Talent Meets
                <br /> <span>Opportunity!</span>
              </h2>
              <h6>
                Join our dynamic team and take your career to the next level. Discover exciting opportunities <br />
                where your skills and creativity can thrive.
              </h6>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <NavLink to="/career" className="btn">
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
      <div className="career__section rn__section__gapTop">
        <div className="container">
          <div className="row gx-lg-4 gx-md-3">
            <div className="col-lg-4 col-md-4" data-aos="flip-left" data-aos-duration="800">
              <div className="card__bx">
                <img src="assets/img/icon-01.svg" alt="career__section" />
                <h5>Innovative and Impactful Projects</h5>
                <span>Our mission is to create digital experiences that wow users. We use the latest tech and creative ideas to go beyond expectations and achieve real results for our clients.</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-aos="flip-left" data-aos-duration="800">
              <div className="card__bx">
                <img src="assets/img/icon-02.svg" alt="careerimg" />
                <h5>Supportive Environment</h5>
                <span>Our mission is to create digital experiences that wow users. We use the latest tech and creative ideas to go beyond expectations and achieve real results for our clients.</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-aos="flip-left" data-aos-duration="800">
              <div className="card__bx">
                <img src="assets/img/icon-03.svg" alt="careerimg" />
                <h5>Continuous Learning & Growth</h5>
                <span>Our mission is to create digital experiences that wow users. We use the latest tech and creative ideas to go beyond expectations and achieve real results for our clients.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="open__roles rn__section__gapTop">
        <div className="container">
          <div className="main__heading" data-aos="fade-up">
            <h2>
              Open <span>Roles</span>
            </h2>
            <p>Please send a cover letter and resume to jobs@fifilo.com or apply below.</p>
          </div>

          <div className="isotope__filter inner__gapTop">
            <div className="filters" data-aos="fade-up">
              <ul>
                <li className={filter === "*" ? "is-checked" : ""} onClick={() => setFilter("*")}>
                  All Jobs
                </li>
                <li className={filter === "design" ? "is-checked" : ""} onClick={() => setFilter("design")}>
                  Design
                </li>
                <li className={filter === "development" ? "is-checked" : ""} onClick={() => setFilter("development")}>
                  Development
                </li>
                <li className={filter === "marketing" ? "is-checked" : ""} onClick={() => setFilter("marketing")}>
                  Sales & Marketing
                </li>
              </ul>
            </div>

            <div className="rows inner__gapTop grid" data-aos="fade-up" data-aos-duration="800">
              {filteredJobs.map((job) => (
                <div key={job.id} className={`col-12 grid-item ${job.category}`}>
                  <div className="card__bx">
                    <div className="left__bx">
                      <h5>{job.title}</h5>
                      <h6>
                        <span>
                          <img src="assets/img/marker-pin-01.svg" alt="location" />
                          {job.location}
                        </span>{" "}
                        | <span>{job.experience}</span>
                      </h6>
                    </div>
                    <NavLink to="/" className="btn btn__primary">
                      Apply <img src="assets/img/arrow-up-right.svg" alt="apply" />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
