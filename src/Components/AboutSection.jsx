import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16  ">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              We are committed to empowering individuals to take charge of their
              health. Our platform provides comprehensive solutions, enabling
              you to easily manage medical details, access trusted resources,
              and stay informed.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're a healthcare professional or a home doctor, we
              provide the tools you need to make informed decisions and offer
              care that matters. Our mission is to make healthcare accessible
              and efficient for everyone.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <img
              src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?semt=ais_hybrid"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
