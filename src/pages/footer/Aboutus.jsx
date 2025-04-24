import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building trust through quality services and customer satisfaction
            since 2015
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-blue-600 flex items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-blue-100 text-lg">
                  To provide exceptional services that empower our customers and
                  create lasting value through innovation, integrity, and
                  outstanding customer experiences.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 text-lg">
                  To be the most trusted and preferred service provider in our
                  industry, recognized for our commitment to excellence and
                  positive community impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 bg-blue-100 flex items-center justify-center">
                <svg
                  className="h-32 w-32 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  John Smith
                </h3>
                <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With 15+ years of industry experience, John leads our company
                  with vision and passion.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 bg-green-100 flex items-center justify-center">
                <svg
                  className="h-32 w-32 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Sarah Johnson
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  Operations Director
                </p>
                <p className="text-gray-600">
                  Sarah ensures our operations run smoothly and our customers
                  stay happy.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 bg-purple-100 flex items-center justify-center">
                <svg
                  className="h-32 w-32 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Michael Chen
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  Technology Lead
                </p>
                <p className="text-gray-600">
                  Michael drives our technological innovation and digital
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to work with us?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We'd love to hear about your project and how we can help bring your
            ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
