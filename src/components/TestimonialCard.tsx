"use client";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../constants";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialCard = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-green-600 !w-3 !h-3 !rounded-full transition-all duration-300",
          bulletActiveClass: "!bg-primary !w-3 !h-3 !rounded-full",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.2, spaceBetween: 30 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="relative bg-[#E5EA98] rounded-2xl flex flex-col mt-10 mb-16 mx-15 p-6"
          >
            {/* Quote Icon */}
            <div>
              <div className="bg-primary rounded-full p-5 w-fit h-fit absolute -top-6 left-7">
                <FaQuoteLeft className="text-white text-3xl" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col h-full pt-12">
              <div className="relative flex items-start gap-4 flex-1">
                {/* Profile Image */}
                <div className="flex-shrink-0 ">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name || "User"}
                    className="absolute w-40 h-40 -left-20 rounded-full object-cover border-2 border-white shadow-md"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 pl-20">
                  <p className="text-[#1F1C1E] text-xl leading-relaxed mb-4 h-[130px]">
                    "{testimonial.content}"
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-yellow-400 text-xl"
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="text-right">
                <p className="text-primary text-xl">
                  {testimonial.name}
                </p>
                <p className="text-[#1F1C1E] text-xs">{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
