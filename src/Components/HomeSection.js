import React from "react";

const HomeSection = ({ reference }) => {
  return (
    <div ref={reference} className="  relative h-screen bg-gray-900 text-white">
      <img
        src="/world.jpg"
        alt="image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-md">
          "Welcome to TreeMap: Discover global tree coverage and<br></br>{" "}
          pinpoint areas in need of reforestation.<br></br> Join us in our
          mission to promote environmental conservation and <br></br>create a
          greener future. Explore, act, and make a difference today."
        </h1>
        {/* create a button here */}
      </div>
    </div>
  );
};

export default HomeSection;
