import React from "react";
import HeadingSection from "../../components/HeadingSection";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-white to-slate-200">
      <div className="section-container">
        <HeadingSection
          heading="What Our Clients Say"
          subheading="Testimonials"
          description="Our happy clients share their success stories and experiences with us."
        />

        {/* testimonial carousel */}
        <div className="w-full">
          <div className="carousel w-full rounded-xl">
            {/* Slide 1 */}
            <div
              id="slide1"
              className="carousel-item relative w-full gap-6 flex-col md:flex-row"
            >
              <TestimonialCard
                logo="/images/logos/logo1.png"
                feedback="Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu."
                name="John Doe"
                role="CEO, TechCorp"
                initial="J"
              />
              <TestimonialCard
                logo="/images/logos/logo2.png"
                feedback="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sequi amet alias dolor natus at quod facere corrupti."
                name="Jane Smith"
                role="Marketing Lead, BizSoft"
                initial="S"
              />
              <NavArrows prev="#slide4" next="#slide2" />
            </div>

            {/* Slide 2 */}
            <div
              id="slide2"
              className="carousel-item relative w-full gap-6 flex-col md:flex-row"
            >
              <TestimonialCard
                logo="/images/logos/logo1.png"
                feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores odit, fugit laboriosam eius temporibus nisi."
                name="Abdul Haque"
                role="CEO, TechCorp"
                initial="A"
              />
              <TestimonialCard
                logo="/images/logos/logo2.png"
                feedback="Reiciendis obcaecati. Illum distinctio impedit qui dolorem possimus atque nobis in molestiae eligendi molestias officia sint."
                name="Watson Smith"
                role="Marketing Lead, BizSoft"
                initial="W"
              />
              <NavArrows prev="#slide1" next="#slide3" />
            </div>

            {/* Slide 3 */}
            <div
              id="slide3"
              className="carousel-item relative w-full gap-6 flex-col md:flex-row"
            >
              <TestimonialCard
                logo="/images/logos/logo1.png"
                feedback="Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu."
                name="Kabir Tapai"
                role="CEO, TechCorp"
                initial="K"
              />
              <TestimonialCard
                logo="/images/logos/logo2.png"
                feedback="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sequi amet alias dolor natus at quod facere corrupti."
                name="Jane Smith"
                role="Marketing Lead, BizSoft"
                initial="S"
              />
              <NavArrows prev="#slide2" next="#slide4" />
            </div>

            {/* Slide 4 */}
            <div
              id="slide4"
              className="carousel-item relative w-full gap-6 flex-col md:flex-row"
            >
              <TestimonialCard
                logo="/images/logos/logo1.png"
                feedback="Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu."
                name="John Doe"
                role="CEO, TechCorp"
                initial="J"
              />
              <TestimonialCard
                logo="/images/logos/logo2.png"
                feedback="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sequi amet alias dolor natus at quod facere corrupti."
                name="Jane Smith"
                role="Marketing Lead, BizSoft"
                initial="S"
              />
              <NavArrows prev="#slide3" next="#slide1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable TestimonialCard Component
const TestimonialCard = ({ logo, feedback, name, role, initial }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
    <img
      src={logo}
      alt="logo"
      className="size-24 object-contain mx-auto mb-4"
    />
    <p className="text-gray-600 italic text-sm md:text-base mb-4 text-center">{`"${feedback}"`}</p>
    <div className="flex flex-col items-center space-y-2 mt-4">
      <div className="size-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-xl font-semibold shadow-md">
        {initial}
      </div>
      <h3 className="text-base font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

// Reusable Navigation Arrows
const NavArrows = ({ prev, next }) => (
  <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 left-5 right-5">
    <a href={prev} className="btn btn-circle bg-white shadow hover:bg-blue-100">
      ❮
    </a>
    <a href={next} className="btn btn-circle bg-white shadow hover:bg-blue-100">
      ❯
    </a>
  </div>
);

export default Testimonials;
