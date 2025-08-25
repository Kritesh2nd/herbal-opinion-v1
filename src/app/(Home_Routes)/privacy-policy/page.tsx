"use client";

import { privacyPolicyData } from "@/src/constants/privacyPolicy";
import { PrivacyPolicyType, SubPointType } from "@/src/types";
import React from "react";

const formatBold = (text: string) => {
  const regex = /^([^:]+:)(.*)$/;
  const match = text.match(regex);

  if (text.slice(0, 4) == "::::") {
    const newText = text.slice(4);
    return newText;
  }

  if (!match) {
    return (
      <p className="flex flex-wrap">
        {text.split(" ").map((word, i) => (
          <span key={`small-span-${i}`} className="mr-1">
            {word}
          </span>
        ))}
      </p>
    );
  }

  const [_, boldPart, rest] = match;
  const boldWords = boldPart.trim().split(" ");
  const restWords = rest.trim().split(" ");

  return (
    <p className="flex flex-wrap">
      {boldWords.map((word, i) => (
        <span key={`bold-${i}`} className="font-bold mr-1">
          {word}
        </span>
      ))}
      {restWords.map((word, i) => (
        <span key={`rest-${i}`} className="font-normal mr-1">
          {word}
        </span>
      ))}
    </p>
  );
};

const DisplayContent = ({ item }: { item: PrivacyPolicyType }) => {
  const {
    id,
    title,
    titleColor,
    titleSize,
    titleBold,
    content,
    points,
    subPoints,
  } = item;

  return (
    <div className="flex flex-col gap-3">
      {title && (
        <div
          className={`${titleSize == 1 ? "text-xl" : "text-lg"} font-bold pt-3`}
        >
          {title}
        </div>
      )}
      {content &&
        content.length > 0 &&
        content.map((contentItem, index) => (
          <div
            key={"content" + id + "sub" + index}
            className="flex flex-col gap-2 leading-6"
          >
            {contentItem}
          </div>
        ))}
      {points &&
        points.length > 0 &&
        points.map((pointItem, index) => (
          <div
            key={`point-content-${index}`}
            className="flex flex-row  items-center pl-7 relative"
          >
            <span className="absolute h-[7px] w-[7px] rounded-full bg-primary-black top-[5px] left-[11px]"></span>
            {formatBold(pointItem)}
          </div>
        ))}

      {subPoints && subPoints?.length > 0 && (
        <div className="flex flex-col gap-2 ">
          {subPoints.map((subItem, index) => (
            <DisplaySubItem
              key={`special-point-content-${index}`}
              subItem={subItem}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const DisplaySubItem = ({
  subItem,
  index,
}: {
  subItem: SubPointType;
  index: number;
}) => {
  const { type, level, point, points } = subItem;
  return (
    <div className="flex flex-col gap-2 ">
      <div
        className={`${level == 1 && "pl-7"} ${level == 2 && "pl-14"} ${
          level == 3 && "pl-21"
        }`}
      >
        <div className=" felx relative leading-6">
          {type == "disk" && (
            <span
              className={`absolute h-[7px] w-[7px] mt-1 top-[1px] -left-[20px] bg-primary-black rounded-full`}
            ></span>
          )}
          {type == "circle" && (
            <span
              className={`absolute h-[7px] w-[7px] mt-1 top-[1px] -left-[20px] border border-primary-black rounded-full`}
            ></span>
          )}
          {type == "number" && (
            <span className={`absolute -top-[0px] -left-[20px] font-bold`}>
              {index + 1}.
            </span>
          )}
          {type == "none" && <div></div>}
          {formatBold(point)}
        </div>
      </div>
      <div>
        {points && points?.length > 0 && (
          <div className="flex flex-col gap-2 ">
            {points.map((subSubItem, indx) => (
              <DisplaySubItem
                key={`start-sub-item-${index}-sub-${indx}`}
                subItem={subSubItem}
                index={indx}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="">
      <div className="globalContainer flex flex-col py-20 text-primary-black">
        <section className="flex flex-col gap-4 pb-10">
          {privacyPolicyData.map((item) => (
            <DisplayContent
              key={`displaymain-upper-content-${item.id}`}
              item={item}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
