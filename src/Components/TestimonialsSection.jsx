import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "General Practitioner",
      feedback:
        "This platform has revolutionized how I guide my patients. The ease of access to medical details and monitoring tools is simply outstanding!",
      image: "https://via.placeholder.com/100", // Replace with real image URL
    },
    {
      name: "Mr. John Doe",
      role: "Health Enthusiast",
      feedback:
        "I’ve gained so much confidence in managing my health. The detailed insights and user-friendly interface are game-changers.",
      image: "https://via.placeholder.com/100", // Replace with real image URL
    },
    {
      name: "Ms. Emily Carter",
      role: "Nutritionist",
      feedback:
        "The resources available here are unmatched. It's a great platform for anyone looking to improve their health management.",
      image: "https://via.placeholder.com/100", // Replace with real image URL
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-blue-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4">
                {testimonial.role}
              </p>
              <p className="text-gray-600 text-center italic">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
