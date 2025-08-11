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
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-green-600 !w-3 !h-3 !rounded-full transition-all duration-300",
          bulletActiveClass: "!bg-green-700 !w-3 !h-3 !rounded-full",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.1, spaceBetween: 60 },
        }}
        className="relative testimonial-swiper mt-20"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-2xl p-6 mx-2 min-h-[280px] flex flex-col"
          >
            {/* Quote Icon */}
            <div>
              <div className="bg-primary rounded-full p-5 w-fit h-fit absolute -top-11 z-10">
                <FaQuoteLeft className="text-white text-3xl" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col h-full pt-12">
              <div className="flex items-start gap-4 flex-1">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name || "User"}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-yellow-400 text-sm"
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="text-right">
                <p className="font-semibold text-gray-800 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-xs">{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
