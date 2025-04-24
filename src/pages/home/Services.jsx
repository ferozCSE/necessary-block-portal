import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FiActivity, FiCompass, FiTruck, FiCalendar } from "react-icons/fi";

const services = [
  {
    icon: FiCalendar,
    title: "Customizable Settings",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse.",
  },
  {
    icon: FiCompass,
    title: "Developer-Friendly",
    description:
      "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ac sed lectus iaculis.",
  },
  {
    icon: FiActivity,
    title: "Responsive Design",
    description:
      "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque hendrerit.",
  },
  {
    icon: FiTruck,
    title: "Cloud Integration",
    description:
      "Pellentesque auctor adipiscing lacus viverra. Arcu, nibh purus urna amet sagittis quis tellus.",
  },
];

const Services = () => {
  return (
    <div className="max-w-screen-2xl container bg-gradient-to-br from-blue-200 via-white to-slate-100 mx-auto py-20 px-5">
      <HeadingSection
        heading="Explore our range of professional services tailored to meet your business needs."
        subheading="Our Services"
        description="We're committed to delivering solutions that elevate your brand and business goals."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 md:w-4/5 mx-auto mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 text-white p-4 rounded-full shadow-lg">
                <service.icon className="text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
