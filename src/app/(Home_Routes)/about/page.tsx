import React from "react";
import image1 from "../../../../public/img/about/image1.png";
import image2 from "../../../../public/img/about/image2.png";
import image3 from "../../../../public/img/about/image3.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section className="bg-tertiary gooper font-normal pb-[144px] ">
        <div className="lg:text-[61px] md:text-[49px] sm:text-[31px] text-[25px] py-[64px] px-5 text-center ">
          Our Story Begins with a Belief in
          <br />
          <span className="text-primary">Better Healing.</span>
        </div>
        <div className="flex gap-5 px-[100px]">
          <div className="w-1/3  pt-5 ">
            <Image
              src={image1}
              className="w-full h-full rounded-lg"
              alt="old couple"
            />
          </div>
          <div className="flex flex-col gap-5 w-1/3  pb-5 ">
            <div className="px-8 py-5 bg-white rounded-lg text-xl">
              “Founded by <b>Australians</b> who believe in natural wellness and
              compassionate care, especially for those who need it most.”
            </div>
            <div>
              <Image
                src={image2}
                className="w-full rounded-lg"
                alt="old couple"
              />
            </div>
          </div>
          <div className="w-1/3  pt-5 ">
            <Image
              src={image3}
              className="w-full h-full rounded-lg"
              alt="old couple"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
