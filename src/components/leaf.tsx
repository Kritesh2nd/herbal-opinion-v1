import Image from "next/image";
import React from "react";

const LeafComponent = () => {
  return (
    <div className="absolute w-[491px] h-[336px] -left-56 -top-[150px]">
      <Image
        src="/img/home/leaf.png"
        alt="leaf"
        width={500}
        height={500}
        className="object-cover w-full h-fit rotate-[120deg] "
      />
    </div>
  );
};

export default LeafComponent;
