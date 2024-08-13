import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const handleMessage = (event) => {
      if (event.data === 'formSubmitted') {
        navigate('/thank-you');
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
      {loading && (
        <div className="loader">Loading...</div>
      )}
      <iframe src="https://engineersahab.com/project/fifilo/fifilo-contact/" width="100%" frameBorder="0" onLoad={handleIframeLoad} style={{ display: loading ? 'none' : 'block' }}></iframe>
    </div>
  );
}