"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { ContactDataType } from "@/src/types";
import { formatDateTime } from "@/src/app/utils";
import { MdDeleteForever } from "react-icons/md";
import DashboardSubTitle from "@/src/components/dashboard/DashboardSubTitle";
import {
  getContactPaginated,
  getContactSearchResults,
  getContactCsv,
  deleteContactById,
} from "../action";

export interface ContactDataProps {
  data: ContactDataType[];
  metadata: {
    currentLimit: number;
    currentPage: number;
    totalItems: number;
    totalPages: number;
  };
}

const ContactFormsContent = () => {
  const [search, setSearch] = useState("");
  const [dataList, setDataList] = useState<ContactDataType[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [dataLength, setDataLength] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentLimit, setCurrentLimit] = useState<number>(0);
  const [paginationLength, setPaginationLength] = useState<number>(0);

  const handelActivePage = (type: string, i: number) => {
    if (type == "left") {
      setActivePage(activePage > 0 ? activePage - 1 : activePage);
    }
    if (type == "middle") {
      setActivePage(i);
    }
    if (type == "right") {
      setActivePage(
        activePage <= paginationLength - 2 ? activePage + 1 : activePage
      );
    }
  };

  const fetchContactPaginated = async (page: number) => {
    const data: ContactDataProps = await getContactPaginated(page, 5);
    handelPageData(data);
  };

  const handelSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    console.log("searchValue", searchValue);

    if (e.target.value.length > 2) {
      fetchContactSearchResutl(1, search);
    }
  };

  const handelPageData = (data: ContactDataProps) => {
    const totalItems = data.metadata.totalItems;
    setDataLength(totalItems);
    setCurrentPage((data.metadata.currentPage - 1) * 5 + 1);
    const currentLimit =
      (data.metadata.currentPage - 1) * 5 + data.metadata.currentLimit;
    setCurrentLimit(currentLimit <= totalItems ? currentLimit : totalItems);
    setPaginationLength(
      Math.floor(totalItems / 5) + (totalItems % 5 > 0 ? 1 : 0)
    );
    setDataList(data.data);
  };

  const fetchContactSearchResutl = async (page: number, search: string) => {
    const data = await getContactSearchResults(page, 5, "fullname", search);
    handelPageData(data);
  };

  const fetchContactCsv = async () => {
    const response = await getContactCsv();

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    // If API sends filename in headers
    const contentDisposition = response.headers["content-disposition"];
    let fileName = "contacts.csv";
    if (contentDisposition) {
      const match = contentDisposition.match(/filename="?([^"]+)"?/);
      if (match && match[1]) fileName = match[1];
    }

    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  const deletePricing = async (id: number) => {
    try {
      const response = await deleteContactById(id);
      console.log("delete response", response);
      fetchContactPaginated(activePage + 1);
    } catch (error) {
      console.log("error in fetching contact", error);
    }
  };

  useEffect(() => {
    if (search.length > 2) {
      fetchContactSearchResutl(activePage + 1, search);
    } else {
      fetchContactPaginated(activePage + 1);
    }
  }, [activePage, search]);

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto py-6">
      {/* section 1: page title */}
      <section className="pb-6 px-6">
        <DashboardSubTitle
          displaySearch={true}
          displayButton={true}
          displayIcon={false}
          searchValue={search}
          name="Download CSV"
          funcSearch={handelSearch}
          funcBtn={fetchContactCsv}
          title="Manage Contact Forms"
          subTitle="Manage contact submissions for your healthcare website"
        />
      </section>

      {/* section 2: table */}
      <section className="flex-1 flex-col px-3 ">
        <div className=" h-[calc(94vh-200px)]">
          <table className={`w-full h-full `}>
            <thead className="bg-[#F9FAFB]">
              <tr>
                <td className="w-[18%] 2xl:py-7 xl:py-3 px-5 font-semibold">
                  Full Name
                </td>
                <td className="w-[28%] 2xl:py-7 xl:py-3 px-5 font-semibold">
                  Email Address
                </td>
                {/* <td className="w-[15%] 2xl:py-7 xl:py-3 px-5 font-semibold">Phone Number</td> */}
                <td className="w-[28%] 2xl:py-7 xl:py-3 px-5 font-semibold">
                  Message
                </td>
                <td className="w-[14%] 2xl:py-7 xl:py-3 px-5 font-semibold">
                  Date Submitted
                </td>
                <td className="w-[12%]  2xl:py-7 xl:py-3 px-5 font-semibold text-center">
                  Actions
                </td>
              </tr>
            </thead>
            {dataList.map((item, index) => {
              const { formattedDate, formattedTime } = formatDateTime(
                item.submittedAt.toLocaleString()
              );
              return (
                <tbody
                  key={item.id}
                  className={`${
                    index == dataList.length - 1 ? "" : "border-b-1"
                  }  border-primary-lgray  h-[calc(20vh-65px)]`}
                >
                  <tr>
                    <td className="w-[18%] px-5 pt-5 pb-4">
                      <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
                        <div className="flex h-full">{item.fullname}</div>
                      </div>
                    </td>
                    <td className="w-[28%] px-5 pt-5 pb-4">
                      <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
                        <div className="flex h-full">{item.email}</div>
                      </div>
                    </td>
                    <td className="w-[28%] px-5 pt-5 pb-4">
                      <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
                        <div className="flex h-full">
                          {item.message ? (
                            item.message
                          ) : (
                            <div className="pl-5">-</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="w-[14%] px-5 pt-5 pb-4">
                      <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
                        <div className="flex h-full">
                          {formattedDate} <br />
                          {formattedTime}
                        </div>
                      </div>
                    </td>
                    <td className="w-[12%]">
                      <div className="h-full w-full flex justify-center items-center">
                        <MdDeleteForever
                          className="text-2xl cursor-pointer hover:text-chilly-paper transition-colors duration-300 ease-in-out "
                          onClick={() => {
                            deletePricing(item.id);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
            {dataList.length == 0 && (
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <div className=" text-center text-primary-dgray">
                      No contacts found in database
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
            {dataList.length < 4 &&
              Array.from({ length: 5 - dataList.length }).map((_, i) => (
                <tbody key={i}>
                  <tr>
                    <td></td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </section>

      {/* section 3: pagination */}
      <section className="flex px-7 text-primary-dgray">
        <div className="flex items-center">
          {dataLength > 0 &&
            "Showing " +
              currentPage +
              " to " +
              currentLimit +
              " of " +
              dataLength +
              " results"}
        </div>
        <div className="flex flex-1 justify-end">
          <div className="flex text-primary-black">
            {dataLength > 0 && (
              <div
                className="flex justify-center items-center h-10 w-7 rounded-l-md cursor-pointer border"
                onClick={() => handelActivePage("left", 0)}
              >
                <IoIosArrowUp className="-rotate-[90deg]" />
              </div>
            )}

            {Array.from({ length: paginationLength }).map((_, i) => (
              <div
                key={i}
                className={`${
                  activePage == i
                    ? "bg-farm-green text-white border-farm-green"
                    : "bg-white text-primary-black border"
                } flex justify-center items-center h-10 w-10 border cursor-pointer`}
                onClick={() => handelActivePage("middle", i)}
              >
                {i + 1}
              </div>
            ))}
            {dataLength > 0 && (
              <div
                className="flex justify-center items-center h-10 w-7 rounded-r-md cursor-pointer border"
                onClick={() => handelActivePage("right", 0)}
              >
                <IoIosArrowUp className="rotate-[90deg]" />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFormsContent;
