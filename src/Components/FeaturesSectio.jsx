import React from "react";

// Removed framer-motion for simpler static design
const FeaturesSectio = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10">
          Amazing Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl text-blue-500 mb-4">
              {/* Icon or Image for the feature */}
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Be a Home Doctor
            </h3>
            <p className="text-gray-600">
              Bring healthcare to your doorstep with telemedicine and
              consultation features.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl text-green-500 mb-4">
              {/* Icon or Image for the feature */}
              <i className="fas fa-stethoscope"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              See All Medical Details
            </h3>
            <p className="text-gray-600">
              Access comprehensive medical records, appointments, and
              prescriptions.
            </p>
          </div> 
        
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl text-purple-500 mb-4">
              {/* Icon or Image for the feature */}
              <i className="fas fa-plus-circle"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Manage Your Health
            </h3>
            <p className="text-gray-600">
              Keep track of your health goals and progress with personalized
              insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectio;
