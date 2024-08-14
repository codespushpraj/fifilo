import { useEffect } from "react";
import Navbar from "./layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layout/Footer.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import $ from "jquery"; // import jQuery
import anime from "animejs";
import Career from "./pages/Career.jsx";
import CureHub from "./casestudies/CureHub.jsx";
import FestiveFolks from "./casestudies/FestiveFolks.jsx";
import Interact from "./casestudies/Interact.jsx";
import SPVMortgages from "./casestudies/SPVMortgages.jsx";
import TribeStays from "./casestudies/TribeStays.jsx";
import ThankYou from "./pages/thank-you.jsx";
import ScrollToTop from "./layout/Scrolltotop.jsx";
import AOS from "aos";
import "owl.carousel";
import "aos/dist/aos.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import './assets/css/style.css';
// import './assets/css/responsive.css';
function App() {
  useEffect(() => {
    $(document).ready(function () {
      function fitElementToParent(el, padding) {
        var timeout = null;
        function resize() {
          if (timeout) clearTimeout(timeout);
          anime.set(el, { scale: 1 });
          var pad = padding || 0;
          var parentEl = el.parentNode;
          var elOffsetWidth = el.offsetWidth - pad;
          var parentOffsetWidth = parentEl.offsetWidth;
          var ratio = parentOffsetWidth / elOffsetWidth;
          timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
        }
        resize();
        window.addEventListener("resize", resize);
      }
    });
  });
  useEffect(() => {
    AOS.init();
  });
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/curehub" element={<CureHub />} />
        <Route path="/festivefolks" element={<FestiveFolks />} />
        <Route path="/interact" element={<Interact />} />
        <Route path="/spvmortgages" element={<SPVMortgages />} />
        <Route path="/tribestays" element={<TribeStays />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
