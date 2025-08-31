import React from "react";

const Loading = ({
  display,
  type = "three-bouncing-dots",
  page = "default",
  displayBg = true,
  fixHeight = false,
}: {
  display: boolean;
  type?: string;
  page?: string;
  displayBg?: boolean;
  fixHeight?: boolean;
}) => {
  return (
    <div
      className={`${display ? "flex" : "hidden"} ${
        fixHeight ? "h-[100vh]" : "h-full"
      }  w-full justify-center items-center absolute top-0 left-0`}
    >
      <div className="h-full w-full relative flex ">
        {displayBg && (
          <div className="bg-white opacity-50 absolute h-full w-full top-0 left-0"></div>
        )}
        <div className=" absolute h-full w-full flex justify-start items-center">
          <div
            className={`flex justify-center  ${
              page == "login" ? "w-[45%]" : "w-[100%]"
            }`}
          >
            {/* Loading... */}
            {type == "ring-spinner" && (
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            )}
            {type == "three-bouncing-dots" && (
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-lettuce rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-lettuce rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-lettuce rounded-full animate-bounce [animation-delay:-0.6s]"></div>
              </div>
            )}
            {/*
             */}
            {type == "pulsing-circle" && (
              <div className="w-10 h-10 bg-blue-500 rounded-full animate-ping"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
