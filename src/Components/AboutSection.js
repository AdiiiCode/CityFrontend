import React from "react";

const AboutSection = ({ reference }) => {
  return (
    <div ref={reference} className="relative h-screen bg-gray-900 text-white">
      <img
        src="/trees.jpg"
        alt="image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-md">
          ""TreeMap's mission is to harness technology for environmental
          advocacy,<br></br> empowering users to visualize global tree coverage
          and<br></br> take action towards reforestation. We strive to foster a
          community <br></br>dedicated to preserving Earth's ecosystems,
          promoting sustainable living,<br></br> and creating a greener,
          healthier planet for all.""
        </h1>
      </div>
    </div>
  );
};

export default AboutSection;
