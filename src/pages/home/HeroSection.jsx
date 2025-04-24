import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import bannerImg from "../../assets/bannar1.png";
import { FaRegCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <div className="max-w-screen-2xl container mx-auto px-5 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side */}
        <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
            Creative Web Design <br className="hidden md:block" />
            <span className="text-blue-600">For Business Growth</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses already growing with our smart digital solutions.
            Let us take your brand to the next level!
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-blue-600 text-white px-7 py-3 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md">
              <span>Get Started</span>
              <FiArrowRight className="text-xl" />
            </button>
            <button className="border-2 border-blue-600 px-7 py-3 rounded-full text-blue-600 text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-md">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 relative animate-fade-in">
          <div className="relative group rounded-xl overflow-hidden shadow-2xl">
            <img
              src={bannerImg}
              alt="Hero Banner"
              className="w-full h-auto object-cover rounded-xl"
            />
            <button
              onClick={openModal}
              className="absolute inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaRegCirclePlay className="text-white text-6xl hover:text-blue-500 transition-transform transform hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
              >
                &times;
              </button>
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/MFLVmAE4cqg?si=UPUe18pgwrLNhdYD"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
