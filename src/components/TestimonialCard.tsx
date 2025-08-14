"use client";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../constants";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const TestimonialCard = ({ bgwhite = false }: { bgwhite?: boolean }) => {
  return (
    <div className={`${bgwhite ? "bg-light-green " : "bg-white "} py-10 `}>
      <div className="globalContainer py-16 px-4">
        <h2 className="titleLevel2 gooper text-farm-green mb-12">
          What Our Members Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className=" mb-10">
              <div className=" sm:h-[352px] h-auto ">
                <div
                  className={`${
                    !bgwhite ? "bg-light-green " : "bg-white "
                  } flex flex-col-reverse sm:flex-row items-center sm:mt-11 sm:ml-24 rounded-xl p-4 h-[calc(100%-44px)] relative  `}
                >
                  <div className="flex sm:flex-col flex-col-reverse  sm:mt-11 sm:ml-24 sm:pt-6 sm:pl-8 ">
                    <div className="text-primary-black sm:text-xl text-lg pb-4">
                      {item.content}
                    </div>
                    <div className="flex gap-1 mb-3 sm:justify-start justify-center">
                      {Array(item.rating)
                        .fill(null)
                        .map((_, index) => (
                          <FaStar
                            key={index}
                            className="text-yellow-400 text-xl"
                          />
                        ))}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-farm-green sm:text-xl text-lg sm:text-right text-center">
                        {item.name}
                      </div>
                      <div className="text-[13px] text-primary-black sm:text-right text-center sm:pb-0 pb-2">
                        {item.title}
                      </div>
                    </div>
                    <div className="flex justify-center mb-[150px] sm:hidden">
                      <div className="absolute  h-[125px] w-[125px]  rounded-full  overflow-hidden">
                        <Image
                          src={item.image}
                          fill
                          alt={item.name}
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex hidden justify-center items-center h-19 w-19 bg-farm-green rounded-full absolute top-0 left-[26px] -translate-y-1/2">
                    <FaQuoteLeft className="text-white text-3xl" />
                  </div>

                  <div className="sm:h-[188px] sm:w-[188px] hidden sm:block h-auto w-auto bg-stone-100 rounded-full sm:absolute sm:top-[50%]  left-0 sm:-translate-x-1/2 -translate-y-1/2 overflow-hidden ">
                    <div className="sm:h-full sm:w-auto h-[120px] w-[120px]  ">
                      <Image
                        src={item.image}
                        fill
                        alt={item.name}
                        className="object-cover -red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCard;
