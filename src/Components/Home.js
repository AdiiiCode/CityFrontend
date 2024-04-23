import React, { useEffect, useRef, useState } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import MapSection from "./MapSection";
import FeedbackSection from "./FeedbackSection";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://city-server-sable.vercel.app:5000/Home/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const mapRef = useRef(null);
  const feedbackRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-gray-900 pb-1">
      <div className="fixed left-0 top-0 w-full z-50 bg-gray-900 py-6 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="w-20 mx-20" />
        </Link>
        <div className="max-w-xl flex justify-end items-center mr-20">
          <div className="flex items-center space-x-40">
            <button
              className="text-white mr-4 hover:text-gray-300"
              onClick={() => scrollToRef(homeRef)}
            >
              Home
            </button>
            <button
              className="text-white mr-4 hover:text-gray-300"
              onClick={() => scrollToRef(aboutRef)}
            >
              About
            </button>
            <button
              className="text-white hover:text-gray-300"
              onClick={() => scrollToRef(mapRef)}
            >
              Map
            </button>
            <button
              className="text-white hover:text-gray-300"
              onClick={() => scrollToRef(feedbackRef)}
            >
              Feedback
            </button>
          </div>
        </div>
      </div>
      <HomeSection reference={homeRef} />
      <AboutSection reference={aboutRef} />
      <MapSection reference={mapRef} />
      <FeedbackSection reference={feedbackRef} />
    </nav>
  );
};

export default Navbar;
