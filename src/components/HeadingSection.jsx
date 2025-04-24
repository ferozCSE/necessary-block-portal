import React from "react";

const HeadingSection = ({ subheading, heading, description }) => {
  return (
    <div className="text-center mb-16">
      <p className="text-blue-600 font-semibold uppercase tracking-widest">
        {subheading}
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-gray-600 mt-4 sm:w-3/5 text-base mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default HeadingSection;
