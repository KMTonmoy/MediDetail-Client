import React from "react";
import { FaStethoscope, FaPills, FaHeartbeat } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaStethoscope />,
      title: "Home Doctor Service",
      description:
        "Access expert guidance to become a home doctor and manage basic health needs.",
      color: "text-blue-500",
    },
    {
      icon: <FaPills />,
      title: "Medication Details",
      description:
        "View comprehensive details about medications, their uses, and side effects.",
      color: "text-purple-500",
    },
    {
      icon: <FaHeartbeat />,
      title: "Health Monitoring",
      description:
        "Track and monitor your health status with our intuitive tools and resources.",
      color: "text-green-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`text-5xl ${service.color} mb-6 flex justify-center`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
