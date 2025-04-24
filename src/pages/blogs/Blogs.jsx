import React from "react";
import HeadingSection from "../../components/HeadingSection";

const blogs = [
  {
    id: 1,
    image: "/images/blogs/blog1.png",
    category: "Technology",
    title: "How AI is Shaping the Future of Web Development",
    description:
      "Discover how artificial intelligence is transforming the way we build and design websites.",
    authorImage: "/images/authors/author1.png",
    authorName: "John Doe",
    authorRole: "Tech Blogger",
  },
  {
    id: 2,
    image: "/images/blogs/blog2.png",
    category: "Design",
    title: "10 Tips for Creating Stunning UI/UX Designs",
    description:
      "Learn the secrets to designing user interfaces that captivate and convert users.",
    authorImage: "/images/authors/author2.png",
    authorName: "Jane Smith",
    authorRole: "UX Designer",
  },
  {
    id: 3,
    image: "/images/blogs/blog3.png",
    category: "Development",
    title: "Understanding JavaScript Closures in Depth",
    description:
      "A comprehensive guide to one of the most powerful concepts in JavaScript.",
    authorImage: "/images/authors/author3.png",
    authorName: "Mark Johnson",
    authorRole: "Frontend Developer",
  },
  {
    id: 4,
    image: "/images/blogs/blog4.png",
    category: "Business",
    title: "Why Digital Transformation is Essential for Success",
    description:
      "Explore how businesses can thrive by adopting digital transformation strategies.",
    authorImage: "/images/authors/author4.png",
    authorName: "Emily Carter",
    authorRole: "Business Analyst",
  },
];

const Blogs = () => {
  return (
    <div className="section-container bg-gradient-to-br from-blue-100 via-purple-100 to-white py-16 ">
      <HeadingSection
        heading="Latest Articles and Insights"
        subheading="Our Blogs"
        description=""
      />

      {/* Blog container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 cursor-pointer">
        {blogs.map(
          ({
            id,
            image,
            title,
            category,
            description,
            authorImage,
            authorName,
            authorRole,
          }) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out group"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog content */}
              <div className="p-5">
                <p className="text-xs text-blue-500 font-semibold uppercase tracking-wide mb-2">
                  {category}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {description}
                </p>

                {/* Author info */}
                <div className="flex items-center pt-4 border-t border-gray-200">
                  <img
                    src={authorImage}
                    alt={authorName}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {authorName}
                    </h4>
                    <p className="text-xs text-gray-500">{authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;
