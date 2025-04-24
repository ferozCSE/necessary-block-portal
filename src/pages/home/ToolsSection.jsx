import React from "react";
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
import { motion } from "framer-motion";
import HeadingSection from "../../components/HeadingSection";

const tools = [
  {
    icon: FiSettings,
    title: "Customizable Settings",
    description: "Easily configure tools to fit your project requirements.",
  },
  {
    icon: FiCode,
    title: "Developer-Friendly",
    description: "Optimized for developers with clean and efficient code.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description: "Build tools that look great on any device and screen size.",
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description:
      "Seamlessly connect with cloud services for better productivity.",
  },
];

const ToolsSection = () => {
  return (
    <section class="bg-gradient-to-br from-blue-500 to-red-200 py-20 px-5">
      <div className="max-w-screen-2xl mx-auto">
        {/* heading section */}
        {/* <div className='text-center mb-16'>
                    <p className='text-blue-600 font-semibold uppercase tracking-widest'>The tools you need</p>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 leading-tight'>
                        All-in-One Solution for Your Projects
                    </h2>
                    <p className="mt-4 text-gray-800 text-lg max-w-2xl mx-auto">
                        Power up your workflow with the most reliable and scalable development tools.
                    </p>
                </div> */}
        <HeadingSection
          heading="All-in-One Solution for Your Projects"
          subheading="The tools you need"
          description="Power up your workflow with the most reliable and scalable development tools."
        />

        {/* render tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 cursor-pointer">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 text-blue-600 rounded-full text-3xl">
                <tool.icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {tool.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        {/* button */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-4 text-lg rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300">
            🚀 Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
