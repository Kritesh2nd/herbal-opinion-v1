"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { CreatePricingDto, pricingDataType } from "@/src/types";
import DashboardSubTitle from "@/src/components/dashboard/DashboardSubTitle";
// toast.success("Login successful!.");
import {
  createPricing,
  getAllPricing,
  getPricingById,
  updatePricingById,
  deletePricingById,
} from "../action";
import Loading from "@/src/components/Loading";

const PricingCard = ({
  price,
  fetchPricing,
  updateForm,
}: {
  price: pricingDataType;
  fetchPricing: () => void;
  updateForm: (id: number) => void;
}) => {
  const {
    id,
    name,
    description,
    originalPrice,
    currentPrice,
    free,
    shortDescription,
    features,
  } = price;

  const deletePricing = async (id: number) => {
    try {
      const response = await deletePricingById(id);
      fetchPricing();
    } catch (error) {
      console.log("Error in fetching pricing", error);
    }
  };

  return (
    <div className="flex flex-col shadow-[0_2px_5px_rgba(0,0,0,0.30)] p-6 rounded-lg">
      <div className="text-[20px] text-primary-black pb-3">{name}</div>
      <div className="text-xl text-primary-dgray  pb-4">{description}</div>
      {!free ? (
        <div className="flex gap-2 pb-6">
          <span className="flex items-end text-primary-dgray text-[20px] ">
            <s>${originalPrice}</s>
          </span>
          <span className="text-lettuce text-[25px] ">${currentPrice}</span>
        </div>
      ) : (
        <div className="text-lettuce text-[25px] pb-6">FREE</div>
      )}
      <div className=" pb-4 text-primary-dgray">{shortDescription}</div>
      <div className=" text-[16px] text-primary-dgray flex flex-col gap-4 pb-6 ">
        {features.map((item) => (
          <div className="flex gap-2" key={item}>
            <div className="">
              <MdOutlineCheck className="text-xl text-lettuce" />
            </div>
            <div className="text-primary-black">{item}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-end">
        <div className="flex justify-between gap-3 ">
          <button className="flex justify-center px-5 py-[10px] text-lg rounded-sm flex-1 text-lettuce border cursor-pointer transition-all duration-300 hover:bg-[rgba(43,161,73,.3)]  hover:border-lettuce">
            <div
              className="flex items-center gap-2 justify-center"
              onClick={() => {
                updateForm(id);
              }}
            >
              <div>
                <BiSolidEdit />
              </div>
              <div className="-mb-1">Edit</div>
            </div>
          </button>
          <button className="flex justify-center px-5 py-[10px] text-lg rounded-sm flex-1 text-chilly-paper border cursor-pointer  transition-all duration-300 hover:bg-[rgba(188,33,65,.3)]  hover:border-chilly-paper">
            <div className="flex items-center gap-2 justify-center">
              <div>
                <MdDeleteForever />
              </div>
              <div
                className="-mb-1"
                onClick={() => {
                  deletePricing(id);
                }}
              >
                Delete
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingForm = ({
  updateFormId,
  updateForm,
  toggelShowForm,
  fetchPricing,
}: {
  updateFormId: number;
  updateForm: boolean;
  toggelShowForm: () => void;
  fetchPricing: () => void;
}) => {
  const [formData, setFormData] = useState<CreatePricingDto>({
    name: "",
    description: "",
    originalPrice: 0,
    currentPrice: 0,
    free: false,
    shortDescription: "",
    features: ["", "", ""],
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFeatureChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = e.target.value;

    setFormData({
      ...formData,
      features: newFeatures,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage("");
    setError("");
    setLoading(true);

    const filteredFeatrue = formData.features.filter(
      (item) => item.trim() !== ""
    );

    const filteredForm: CreatePricingDto = {
      ...formData,
      originalPrice: parseInt(formData.originalPrice.toString()),
      currentPrice: parseInt(formData.currentPrice.toString()),
      features: filteredFeatrue,
    };

    try {
      const response = updateForm
        ? await updatePricingById(filteredForm, updateFormId)
        : await createPricing(filteredForm);

      if (response?.statusCode >= 400) {
        console.log("Error", error);
      } else {
        setFormData({
          name: "",
          description: "",
          originalPrice: 0,
          currentPrice: 0,
          free: false,
          shortDescription: "",
          features: ["", "", ""],
        });
        toggelShowForm();
        fetchPricing();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const addFeature = () => {
    const length = formData.features.length;
    if (length <= 4) {
      setFormData({ ...formData, features: [...formData.features, ""] });
    }
  };
  const deleteFeature = (index: number) => {
    const length = formData.features.length;
    if (index < length) {
      setFormData({
        ...formData,
        features: formData.features.filter((_, i) => i !== index),
      });
    }
  };

  const handelUpdateForm = async () => {
    const response: pricingDataType = await getPricingById(updateFormId);
    setFormData({
      name: response.name,
      description: response.description,
      originalPrice: response.originalPrice,
      currentPrice: response.currentPrice,
      free: response.free,
      shortDescription: response.shortDescription,
      features: response.features,
    });
  };

  useEffect(() => {
    if (updateForm) {
      handelUpdateForm();
    }
  }, [updateForm]);

  return (
    <div className="flex flex-col h-auto w-full ">
      <div className="flex flex-row justify-between text-[25px] p-6 pb-4 items-center border-b-1 border-primary-lgray ">
        <h2>{updateForm ? "Edit Pricing Plan" : "Add New Pricing Plan"}</h2>
        <span className=" cursor-pointer" onClick={toggelShowForm}>
          <RxCross2 />
        </span>
      </div>
      <form className="w-full flex flex-col gap-4 p-6 pt-4">
        <div>
          <label htmlFor="name" className="text-primary-black">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="dashdoardInputStyle"
            placeholder="e.g., Initial Consultation"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-primary-black">
            Description
          </label>
          <textarea
            id="description"
            className="dashdoardInputStyle h-28 resize-none"
            placeholder="e.g., Personalized care starts here, doctor reviewed plan tailored to your needs."
            required
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        </div>
        <div className="flex flex-row gap-5">
          <div className="min-w-0 flex-3 ">
            <label htmlFor="originalPrice" className="text-primary-black">
              Original Price (Optional)
            </label>
            <input
              type="number"
              id="originalPrice"
              className="dashdoardInputStyle"
              placeholder="e.g., 39"
              required
              onChange={handleChange}
              value={formData.originalPrice}
            />
          </div>
          <div className="min-w-0 flex-3 ">
            <label htmlFor="currentPrice" className="text-primary-black">
              Current Price
            </label>
            <input
              type="number"
              id="currentPrice"
              className="dashdoardInputStyle"
              placeholder="e.g., 29"
              required
              onChange={handleChange}
              value={formData.currentPrice}
            />
          </div>
          <div className="flex justify-start flex-col min-w-0 flex-1 ">
            <div className="text-primary-black">Free</div>
            <div
              className={`w-13 h-7 flex items-center mt-2 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                formData.free ? "bg-lettuce" : "bg-gray-300"
              }`}
              onClick={() => setFormData({ ...formData, free: !formData.free })}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  formData.free ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="shortDescription" className="text-primary-black">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            className="dashdoardInputStyle h-18 resize-none"
            placeholder="e.g., Ideal for ongoing care seekers."
            required
            onChange={handleChange}
            value={formData.shortDescription}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div>Features</div>
            <div>
              <div onClick={addFeature} className="text-lettuce cursor-pointer">
                + Add Feature
              </div>
            </div>
          </div>
          {formData &&
            formData.features &&
            formData.features.map((item, index) => {
              return (
                <div className="flex gap-2 " key={index}>
                  <input
                    type="text"
                    className="dashdoardInputStyle"
                    placeholder="e.g., Expert 1-on-1 consult"
                    required
                    onChange={(e) => {
                      handleFeatureChange(e, index);
                    }}
                    value={item}
                  />
                  <div className="flex items-center">
                    <CiTrash
                      className="text-primary-dgray hover:text-chilly-paper transition-all duration-150 cursor-pointer text-2xl"
                      onClick={() => {
                        deleteFeature(index);
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex justify-end gap-4 pt-2">
          <button
            type="reset"
            className="py-3 px-5 border-1 border-primary-dgray text-primary-black rounded-md cursor-pointer"
            onClick={toggelShowForm}
          >
            <div className="-mb-1 ">Cancel</div>
          </button>
          <button
            type="submit"
            className="py-3 px-5 border-1 border-farm-green bg-farm-green text-primary-white rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            <div className="-mb-1 ">Save Plan</div>
          </button>
        </div>
      </form>
    </div>
  );
};

const Pricing = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [updateFormId, setUpdateFromId] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);

  const [pricings, setPricings] = useState<pricingDataType[]>([]);

  const toggelShowForm = () => {
    setUpdateForm(!showForm);
    setShowForm(!showForm);
  };

  const toggelUpdateForm = (id: number) => {
    setUpdateForm(!updateForm);
    toggelShowForm();
    setUpdateFromId(id);
  };

  const fecthAllPricing = async () => {
    const data = await getAllPricing();
    setPricings(data);
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      await fecthAllPricing();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto py-5 px-7 relative">
      <div className="pb-6">
        <DashboardSubTitle
          funcBtn={() => {
            setShowForm(!showForm);
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {pricings &&
          pricings.map((item) => {
            return (
              <PricingCard
                price={item}
                key={item.id}
                fetchPricing={fecthAllPricing}
                updateForm={toggelUpdateForm}
              />
            );
          })}
      </div>

      {/* add/edit pricing */}
      {showForm && (
        <div className="absolute h-full w-full top-0 left-0">
          <div className="h-full w-full relative">
            <div className="absolute h-full w-full bg-black opacity-5"></div>
            <div className="absolute h-full w-full ">
              <div className="h-full w-full flex justify-center items-center ">
                <div className="flex justify-center bg-white items-start w-[580px] h-[calc(100vh-200px)] rounded-lg overflow-hidden overflow-y-auto hideScroll shadow-[0_2px_4px_rgba(0,0,0,0.30)] ">
                  <div className=" bg-white ">
                    <PricingForm
                      updateForm={updateForm}
                      toggelShowForm={toggelShowForm}
                      updateFormId={updateFormId}
                      fetchPricing={fecthAllPricing}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Loading display={loading} />
    </div>
  );
};

export default Pricing;
