import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery"; // import jQuery
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../layout/Loader";

export default function ContactUs() {

  useEffect(() => {
    $(document).ready(function () {
      if (window.location.pathname === '/contact-us/') {
        $('.footer').addClass('contact-footer');
      } else {
        $('.footer').removeClass('contact-footer');
      }
    });
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const handleMessage = (event) => {
      if (event.data === 'formSubmitted') {
        navigate('/thank-you/');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="contactPage bg__dark">
      {loading && <Loader />}
      <iframe
        src="https://www.fifilo.com/contact/"
        width="100%"
        frameBorder="0"
        onLoad={handleIframeLoad}
        style={{ display: loading ? 'none' : 'block' }}
      ></iframe>
    </div>
  );
}
