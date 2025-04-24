import React, { useState } from "react";
import HeadingSection from "../../components/HeadingSection";

const pricingPlans = [
  {
    name: "Freelancer",
    monthlyPrice: 25,
    yearlyPrice: 250,
    saves: "$25 USD per month, paid annually",
    features: [
      "1 Project",
      "Basic Support",
      "Access to all templates",
      "5GB Storage",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 65,
    yearlyPrice: 650,
    saves: "$55 USD per month, paid annually",
    features: [
      "5 Projects",
      "Priority Support",
      "Access to all templates",
      "25GB Storage",
      "Advanced Analytics",
    ],
  },
  {
    name: "Agency",
    monthlyPrice: 95,
    yearlyPrice: 950,
    saves: "$95 USD per month, paid annually",
    features: [
      "Unlimited Projects",
      "24/7 Support",
      "Access to all templates",
      "Unlimited Storage",
      "Custom Branding",
      "Team Collaboration",
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="section-container py-10 bg-gray-50">
      <HeadingSection
        heading="Choose Your Plan"
        subheading="Pricing"
        description="Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you."
      />

      {/* Toggle */}
      <div className="flex justify-center items-center space-x-4 mb-10">
        <span className="text-gray-600 font-medium">Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition duration-300"></div>
          <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition duration-300"></div>
        </label>
        <span className="text-gray-600 font-medium">Yearly</span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white border rounded-xl overflow-hidden p-8 text-center shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${
              plan.name === "Professional"
                ? "border-2 border-blue-600 bg-gradient-to-b from-blue-50 to-white"
                : ""
            }`}
          >
            {/* Badge */}
            {plan.name === "Professional" && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
            <p className="text-gray-500 text-sm mb-6">
              Best for {plan.name.toLowerCase()}s
            </p>

            <div className="text-4xl font-bold text-gray-800 mb-2">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-sm font-medium text-gray-500 ml-1">
                /{isYearly ? "year" : "month"}
              </span>
            </div>
            <p className="text-sm text-green-600 mb-6">
              {isYearly ? plan.saves : ""}
            </p>

            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-indigo-600 hover:to-blue-700 transition">
              Choose {plan.name}
            </button>

            {/* Feature list - aligned left */}
            <ul className="mt-6 space-y-3 text-gray-600 text-sm text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
