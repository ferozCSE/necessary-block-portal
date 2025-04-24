import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FiArrowRight } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className="section-container text-center py-10 bg-gray-50 rounded-xl">
      <HeadingSection
        heading="Stay Updated with Our Newsletter"
        subheading=""
        description="Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
      />

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition">
          <span>Subscribe Now</span>
          <FiArrowRight className="text-xl" />
        </button>
        <button className="border border-blue-600 px-6 py-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition">
          Learn More(আরো দেখো)
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
