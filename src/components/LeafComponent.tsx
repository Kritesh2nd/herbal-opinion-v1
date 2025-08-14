import Image from "next/image";
import React from "react";

const LeafComponent = ({
  mainStyle = "h-[420px] w-[200px]",
  subSize = "h-[360px] w-[360px]",
  subStyle = "right-6  rotate-[40deg] top-6",
  direction = "right",
}: {
  mainStyle?: string;
  subSize?: string;
  subStyle?: string;
  direction?: string;
}) => {
  return (
    <div
      className={`${direction}-0 ${mainStyle} -translate-y-1/2 absolute overflow-hidden`}
    >
      <div className={`${subSize} flex justify-center items-center relative`}>
        <div className={`${subStyle} absolute h-full w-full`}>
          <Image src="/img/home/leaf.png" alt="leaf" fill />
        </div>
      </div>
    </div>
  );
};

export default LeafComponent;
