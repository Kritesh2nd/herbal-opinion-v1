"use client";

import React, { useEffect, useState } from "react";
import DashboardSubTitle from "./DashboardSubTitle";
import { contactData } from "@/src/constants";
import { MdDeleteForever } from "react-icons/md";
import { ContactDataType } from "@/src/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ContactFormsContent = () => {
  const [dataList, setDataList] = useState<ContactDataType[]>([]);

  const dataLength = contactData.length;
  const paginationLength = dataLength / 5;

  useEffect(() => {
    const firstFive = contactData.slice(0, 5);
    setDataList(firstFive);
  }, []);

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto py-6">
      <div className="pb-6 px-6">
        <DashboardSubTitle
          displaySearch={true}
          displayButton={false}
          url="/dashboard"
          title="Manage Contact Forms"
          subTitle="Manage contact submissions for your healthcare website"
        />
      </div>
      <div className="flex-1 flex-col px-3">
        <table className="w-full h-full">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <td className="py-7 px-5">Full Name</td>
              <td className="py-7 px-5">Email Address</td>
              <td className="py-7 px-5">Phone Number</td>
              <td className="py-7 px-5">Message</td>
              <td className="py-7 px-5">Date Submitted</td>
              <td className="py-7 px-5">Actions</td>
            </tr>
          </thead>

          {dataList.map((item) => {
            const [date, time] = item.submittedAt.toLocaleString().split(",");
            return (
              <tbody key={item.id}>
                <tr>
                  <td className="border-b-1 border-primary-lgray w-[18%] px-5 pt-5 pb-4">
                    {item.fullname}
                  </td>
                  <td className="border-b-1 border-primary-lgray w-[23%] px-5 pt-5 pb-4">
                    {item.email}
                  </td>
                  <td className="border-b-1 border-primary-lgray w-[15%] px-5 pt-5 pb-4">
                    {item.phone}
                  </td>
                  <td className="border-b-1 border-primary-lgray w-[25%] px-5 pt-5 pb-4">
                    {item.message}
                  </td>
                  <td className="border-b-1 border-primary-lgray w-[15%] px-5 pt-5 pb-4">
                    {date} <br />
                    {time}
                  </td>
                  <td className="border-b-1 border-primary-lgray w-[5%] px-5 pt-5 pb-4 ">
                    <div className="h-full w-full flex justify-center items-center">
                      <MdDeleteForever className="text-2xl cursor-pointer hover:text-chilly-paper transition-colors duration-300 ease-in-out " />
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className="flex border px-7 text-primary-dgray">
        <div className="flex">
          {dataLength > 0
            ? "Showing 1 to " +
              (dataLength >= 5 ? 5 : dataLength) +
              " of " +
              dataLength +
              " results"
            : ""}
        </div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">{paginationLength}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ContactFormsContent;

/*

generate me 17 dummy data for this

export interface ContactDataType {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  message: string;
  contactAgree: boolean;
  submittedAt: Date;
}

*/
