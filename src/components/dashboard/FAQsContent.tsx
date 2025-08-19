"use client";

import React, { ChangeEvent, useState } from "react";
import DashboardSubTitle from "./DashboardSubTitle";
import { RxCross2 } from "react-icons/rx";
import { faqData } from "@/src/constants";
import { FaqDataType } from "@/src/types";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const FaqItem = ({ faq }: { faq: FaqDataType }) => {
  const { question, answer } = faq;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-xl border border-primary-lgray text-primary-black py-4 px-6 ">
      <div className="flex flex-row items-center">
        <div
          className="flex-1 -mb-1 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {question}
        </div>
        <div className="flex items-center gap-2 text-xl">
          <div className="cursor-pointer">
            <BiSolidEdit />
          </div>
          <div className="cursor-pointer">
            <MdDeleteForever />
          </div>
          <div
            className={`${
              open ? "rotate-0" : "rotate-180"
            } transform transition-transform ease-in-out duration-300 cursor-pointer`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <IoIosArrowUp />
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "max-h-40" : "max-h-0"
        } transition-all ease-in-out duration-300 overflow-hidden`}
      >
        <div className="pt-3">
          {answer} {answer}
        </div>
      </div>
    </div>
  );
};

const FaqForm = ({
  updateForm,
  toggelShowForm,
}: {
  updateForm: boolean;
  toggelShowForm: () => void;
}) => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    display: true,
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage("");
    setError("");
    setLoading(true);
    console.log("formData", formData);
  };
  return (
    <div className="flex flex-col h-auto w-full">
      <div className="flex flex-row justify-between text-[25px] p-6 pb-4 items-center border-b-1 border-primary-lgray">
        <h2>{updateForm ? "Edit FAQ" : "Add New FAQ"}</h2>
        <span className=" cursor-pointer" onClick={toggelShowForm}>
          <RxCross2 />
        </span>
      </div>
      <form className="w-full flex flex-col gap-5 p-6 pt-4">
        <div className="flex flex-col">
          <label htmlFor="question" className="text-primary-black">
            Question
          </label>
          <textarea
            id="question"
            className="dashdoardInputStyle h-20 resize-none"
            placeholder="e.g., Ideal for ongoing care seekers."
            required
            onChange={handleChange}
            value={formData.question}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="answer" className="text-primary-black">
            Answer
          </label>
          <textarea
            id="answer"
            className="dashdoardInputStyle h-36 resize-none"
            placeholder="e.g., Ideal for ongoing care seekers."
            required
            onChange={handleChange}
            value={formData.answer}
          ></textarea>
        </div>
        <div className="flex justify-end gap-4 pt-2">
          <button
            type="reset"
            className="py-3 px-5 border-1 border-primary-dgray bg-white transition-all duration-200 hover:bg-[rgba(98,91,95,.1)] text-primary-black rounded-md cursor-pointer"
          >
            <div className="-mb-1 ">Cancel</div>
          </button>
          {!updateForm && (
            <button
              type="reset"
              className="py-3 px-5 border-1 border-farm-green bg-white transition-all duration-200 hover:bg-[rgba(20,95,72,.2)] text-farm-green rounded-md cursor-pointer"
            >
              <div className="-mb-1 ">Add Another</div>
            </button>
          )}
          <button
            type="reset"
            className="py-3 px-6 border-1 border-farm-green bg-farm-green text-primary-white rounded-md transition-all duration-200  cursor-pointer"
          >
            <div className="-mb-1 ">Save</div>
          </button>
        </div>
      </form>
    </div>
  );
};

const FAQsContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);

  const toggelShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto p-6">
      <div className="pb-6">
        <DashboardSubTitle
          name="Add New FAQ"
          title="Manage FAQs"
          subTitle="Manage frequently asked questions for your healthcare website"
          funcBtn={toggelShowForm}
        />
      </div>
      <div className="flex flex-col gap-4 ">
        {faqData.map((item) => (
          <FaqItem key={item.id} faq={item} />
        ))}
      </div>
      {/* add/edit pricing */}
      {showForm && (
        <div className="absolute h-full w-full top-0 left-0">
          <div className="h-full w-full relative">
            <div className="absolute h-full w-full bg-black opacity-5"></div>
            <div className="absolute h-full w-full">
              <div className="h-full w-full flex justify-center items-center">
                <div className="flex justify-center items-center w-[580px] h-[calc(100vh-180px)]">
                  <div className="w-full overflow-y-auto bg-white rounded-lg  shadow-[0_2px_4px_rgba(0,0,0,0.30)]">
                    <FaqForm
                      updateForm={updateForm}
                      toggelShowForm={toggelShowForm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQsContent;
