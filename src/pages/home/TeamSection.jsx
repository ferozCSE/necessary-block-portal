import React from "react";

import HeadingSection from "../../components/HeadingSection";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router";

const teamMembers = [
  {
    id: 1,
    image: "/images/members/person1.png",
    name: "John Doe",
    role: "CEO",
    linkedIn: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    facebook: "https://facebook.com/johndoe",
  },
  {
    id: 2,
    image: "/images/members/person2.png",
    name: "Jane Smith",
    role: "CTO",
    linkedIn: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://instagram.com/janesmith",
    facebook: "https://facebook.com/janesmith",
  },
  {
    id: 3,
    image: "/images/members/person3.png",
    name: "Mark Johnson",
    role: "Designer",
    linkedIn: "https://linkedin.com/in/markjohnson",
    twitter: "https://twitter.com/markjohnson",
    instagram: "https://instagram.com/markjohnson",
    facebook: "https://facebook.com/markjohnson",
  },
  {
    id: 4,
    image: "/images/members/person4.png",
    name: "Emily Carter",
    role: "Developer",
    linkedIn: "https://linkedin.com/in/emilycarter",
    twitter: "https://twitter.com/emilycarter",
    instagram: "https://instagram.com/emilycarter",
    facebook: "https://facebook.com/emilycarter",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="section-container">
        <HeadingSection
          heading="Meet The Experts"
          subheading="Our Team"
          description=""
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>

                {/* Social icons */}
                <div className="flex justify-center space-x-4 mb-4">
                  <a href={member.linkedIn} target="_blank" rel="noreferrer">
                    <FaLinkedinIn className="text-gray-500 hover:text-blue-600 transition" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter className="text-gray-500 hover:text-sky-400 transition" />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram className="text-gray-500 hover:text-pink-500 transition" />
                  </a>
                  <a href={member.facebook} target="_blank" rel="noreferrer">
                    <FaFacebookF className="text-gray-500 hover:text-blue-800 transition" />
                  </a>
                </div>

                {/* Button */}
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:from-indigo-500 hover:to-blue-600 transition duration-300">
                  Contact {member.name.split(" ")[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
