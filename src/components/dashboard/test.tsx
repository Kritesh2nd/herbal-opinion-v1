// "use client";

// import React, { ChangeEvent, useEffect, useState } from "react";
// import DashboardSubTitle from "./DashboardSubTitle";
// import { contactData } from "@/src/constants";
// import { MdDeleteForever } from "react-icons/md";
// import { ContactDataType } from "@/src/types";
// import { IoIosArrowUp } from "react-icons/io";

// const ContactFormsContent = () => {
//   const exportCsvUrl = "#";
//   const [search, setSearch] = useState("");

//   const [dataList, setDataList] = useState<ContactDataType[]>([]);
//   const [activePage, setActivePage] = useState(0);
//   const dataLength = contactData.length;
//   const paginationLength =
//     Math.floor(dataLength / 5) + (dataLength % 5 > 0 ? 1 : 0);
//   const [startEnd, setStartEnd] = useState({ start: 0, end: 0 });

//   const handelActivePage = (type: string, i: number) => {
//     if (type == "left") {
//       setActivePage(activePage > 0 ? activePage - 1 : activePage);
//     } else if (type == "middle") {
//       setActivePage(i);
//     } else if (type == "right") {
//       setActivePage(
//         activePage <= paginationLength - 2 ? activePage + 1 : activePage
//       );
//     }
//   };

//   const handelSearch = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setSearch(e.target.value);
//   };

//   useEffect(() => {
//     const fiveItems = contactData.slice(0, 5);
//     setDataList(fiveItems);
//     setStartEnd({ start: activePage * 5 + 1, end: (activePage + 1) * 5 });
//   }, []);

//   useEffect(() => {
//     const start = activePage * 5 + 1;
//     const end = (activePage + 1) * 5;
//     const fiveItems = contactData.slice(start - 1, end);
//     setDataList(fiveItems);
//     setStartEnd({
//       start: start,
//       end: end <= dataLength ? end : dataLength,
//     });
//   }, [activePage]);

//   useEffect(() => {}, [startEnd]);
// };

// return (
//   <div className="flex flex-col h-full w-full overflow-y-auto py-6">
//     <div className="pb-6 px-6">
//       <DashboardSubTitle
//         displaySearch={true}
//         displayButton={false}
//         searchValue={search}
//         funcSearch={handelSearch}
//         url={exportCsvUrl}
//         title="Manage Contact Forms"
//         subTitle="Manage contact submissions for your healthcare website"
//       />
//     </div>
//     <div className="flex-1 flex-col px-3">
//       <table className={`w-full `}>
//         <thead className="bg-[#F9FAFB]">
//           <tr>
//             <td className="w-[18%] 2xl:py-7 xl:py-3 px-5">Full Name</td>
//             <td className="w-[23%] 2xl:py-7 xl:py-3 px-5">Email Address</td>
//             <td className="w-[15%] 2xl:py-7 xl:py-3 px-5">Phone Number</td>
//             <td className="w-[25%] 2xl:py-7 xl:py-3 px-5">Message</td>
//             <td className="w-[15%] 2xl:py-7 xl:py-3 px-5">Date Submitted</td>
//             <td className="w-[5%]  2xl:py-7 xl:py-3 px-5">Actions</td>
//           </tr>
//         </thead>

//         {dataList.map((item, index) => {
//           const [date, time] = item.submittedAt.toLocaleString().split(",");
//           return (
//             <tbody
//               key={item.id}
//               className={`${
//                 index == dataList.length - 1 ? "" : "border-b-1"
//               }  border-primary-lgray  h-[calc(20vh-65px)]`}
//             >
//               <tr>
//                 <td className="w-[25%] px-5 pt-5 pb-4">
//                   <div className="h-full overflow-auto nice-scrollbar transition-all duration-300">
//                     <div className="flex h-full">
//                       {item.message}
//                       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                       Adipisci accusantium incidunt ab saepe? Commodi sequi quas
//                       quisquam harum consectetur esse?
//                       {item.message}
//                     </div>
//                   </div>
//                 </td>
//               </tr>

//               {/* <tr>
//                 <td className="w-[18%] px-5 pt-5 pb-4 ">
//                   <div className="h-full overflow-auto nice-scrollbar transition-all duration-300">
//                     <div className="flex h-full">{item.fullname}</div>
//                   </div>
//                 </td>
//                 <td className="w-[23%] px-5 pt-5 pb-4">
//                   <div className="h-full overflow-auto nice-scrollbar transition-all duration-300">
//                     <div className="flex h-full">{item.email}</div>
//                   </div>
//                 </td>
//                 <td className="w-[15%] px-5 pt-5 pb-4">
//                   <div className="h-full overflow-auto nice-scrollbar transition-all duration-300">
//                     <div className="flex h-full">{item.phone}</div>
//                   </div>
//                 </td>
//                 <td className="w-[25%] px-5 pt-5 pb-4">
//                   <div className="h-full overflow-auto nice-scrollbar transition-all duration-300">
//                     <div className="flex h-full">
//                       {item.message}
//                       Lorem ipsum dolor, sit amet consectetur adipisicing
//                       elit. Adipisci accusantium incidunt ab saepe? Commodi
//                       sequi quas quisquam harum consectetur esse?
//                       {item.message}
//                     </div>
//                   </div>
//                 </td>
//                 <td className="w-[15%] px-5 pt-5 pb-4">
//                   <div className="h-full overflow-auto nice-scrollbar transition-all duration-300">
//                     <div className="flex h-full">
//                       {date} <br />
//                       {time}
//                     </div>
//                   </div>
//                 </td>
//                 <td className="w-[5%]">
//                   <div className="h-full w-full flex justify-center items-center">
//                     <MdDeleteForever className="text-2xl cursor-pointer hover:text-chilly-paper transition-colors duration-300 ease-in-out " />
//                   </div>
//                 </td>
//               </tr> */}
//             </tbody>
//           );
//         })}
//       </table>
//     </div>
//     <div className="flex px-7 text-primary-dgray">
//       <div className="flex items-center">
//         {dataLength &&
//           "Showing " +
//             startEnd.start +
//             " to " +
//             startEnd.end +
//             " of " +
//             dataLength +
//             " results"}
//       </div>
//       <div className="flex flex-1 justify-end">
//         <div className="flex text-primary-black">
//           <div
//             className="flex justify-center items-center h-10 w-7 rounded-l-md cursor-pointer border"
//             onClick={() => handelActivePage("left", 0)}
//           >
//             <IoIosArrowUp className="-rotate-[90deg]" />
//           </div>

//           {Array.from({ length: paginationLength }).map((_, i) => (
//             <div
//               key={i}
//               className={`${
//                 activePage == i
//                   ? "bg-farm-green text-white border-farm-green"
//                   : "bg-white text-primary-black border"
//               } flex justify-center items-center h-10 w-10 border cursor-pointer`}
//               onClick={() => handelActivePage("middle", i)}
//             >
//               {i + 1}
//             </div>
//           ))}

//           <div
//             className="flex justify-center items-center h-10 w-7 rounded-r-md cursor-pointer border"
//             onClick={() => handelActivePage("right", 0)}
//           >
//             <IoIosArrowUp className="rotate-[90deg]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// export default ContactFormsContent;

// "use client";

// import { contactData } from "@/src/constants";
// import { ContactDataType } from "@/src/types";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { ChangeEvent } from "react";
// import { IoIosArrowUp } from "react-icons/io";
// import { MdDeleteForever } from "react-icons/md";
// import DashboardSubTitle from "./DashboardSubTitle";

// const ContactFormsContent = () => {
//   const exportCsvUrl = "#";
//   const [search, setSearch] = useState("");

//   const [dataList, setDataList] = useState<ContactDataType[]>([]);
//   const [activePage, setActivePage] = useState(0);
//   const dataLength = contactData.length;
//   const paginationLength =
//     Math.floor(dataLength / 5) + (dataLength % 5 > 0 ? 1 : 0);
//   const [startEnd, setStartEnd] = useState({ start: 0, end: 0 });

//   const handelActivePage = (type: string, i: number) => {
//     if (type == "left") {
//       setActivePage(activePage > 0 ? activePage - 1 : activePage);
//     } else if (type == "middle") {
//       setActivePage(i);
//     } else if (type == "right") {
//       setActivePage(
//         activePage <= paginationLength - 2 ? activePage + 1 : activePage
//       );
//     }
//   };

//   const handelSearch = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     console.log("e.target.value", e.target.value);
//     setSearch(e.target.value);
//   };

//   useEffect(() => {
//     const fiveItems = contactData.slice(0, 5);
//     setDataList(fiveItems);
//     setStartEnd({ start: activePage * 5 + 1, end: (activePage + 1) * 5 });
//   }, []);

//   useEffect(() => {
//     const start = activePage * 5 + 1;
//     const end = (activePage + 1) * 5;
//     const fiveItems = contactData.slice(start - 1, end);
//     setDataList(fiveItems);
//     setStartEnd({
//       start: start,
//       end: end <= dataLength ? end : dataLength,
//     });
//   }, [activePage]);

//   useEffect(() => {
//     console.log(activePage, startEnd);
//   }, [startEnd]);
//   return (
//     <div className="flex flex-col h-full w-full overflow-y-auto py-6">
//       <div className="pb-6 px-6">
//         <DashboardSubTitle
//           displaySearch={true}
//           displayButton={false}
//           searchValue={search}
//           funcSearch={handelSearch}
//           url={exportCsvUrl}
//           title="Manage Contact Forms"
//           subTitle="Manage contact submissions for your healthcare website"
//         />
//       </div>
//       <div className="flex-1 border border-black px-3">
//         <table className={`w-full `}>
//           <thead className="bg-[#F9FAFB]">
//             <tr>
//               <td className="w-[10%] 2xl:py-7 xl:py-3 px-5">Full Name</td>
//               <td className="w-[20%] 2xl:py-7 xl:py-3 px-5">Email Address</td>
//               <td className="w-[10%] 2xl:py-7 xl:py-3 px-5">Phone Number</td>
//               <td className="w-[20%] 2xl:py-7 xl:py-3 px-5">Message</td>
//               <td className="w-[15%] 2xl:py-7 xl:py-3 px-5">Date Submitted</td>
//               <td className="w-[5%]  2xl:py-7 xl:py-3 px-5">Actions</td>
//             </tr>
//           </thead>

//           {dataList.map((item, index) => {
//             const [date, time] = item.submittedAt.toLocaleString().split(",");
//             return (
//               <tbody
//                 key={item.id}
//                 className={`${
//                   index == dataList.length - 1 ? "" : "border-b-1"
//                 }  border-primary-lgray  h-[calc(20vh-65px)]`}
//               >
//                 <tr>
//                   <td className="w-[10%] px-5 pt-5 pb-4">
//                     <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
//                       <div className="flex h-full">{item.fullname}</div>
//                     </div>
//                   </td>
//                   <td className="w-[20%] px-5 pt-5 pb-4">
//                     <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
//                       <div className="flex h-full">{item.email}</div>
//                     </div>
//                   </td>
//                   <td className="w-[10%] px-5 pt-5 pb-4">
//                     <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
//                       <div className="flex h-full">{item.phone}</div>
//                     </div>
//                   </td>
//                   <td className="w-[20%] px-5 pt-5 pb-4">
//                     <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
//                       <div className="flex h-full">
//                         {" 1 "}+{item.message}+{" 2 "}+{item.message}+{" 3 "}+
//                         {item.message}+{" 4 "}+{item.message}+{" 5 "}+
//                         {item.message}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="w-[15%] px-5 pt-5 pb-4">
//                     <div className="h-full overflow-y-auto nice-scrollbar transition-all duration-300">
//                       <div className="flex h-full">
//                         {date} <br />
//                         {time}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="w-[5%]">
//                     <div className="h-full w-full flex justify-center items-center">
//                       <MdDeleteForever className="text-2xl cursor-pointer hover:text-chilly-paper transition-colors duration-300 ease-in-out " />
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             );
//           })}
//         </table>
//       </div>
//       <div className="flex px-7 text-primary-dgray">
//         <div className="flex items-center">
//           {dataLength &&
//             "Showing " +
//               startEnd.start +
//               " to " +
//               startEnd.end +
//               " of " +
//               dataLength +
//               " results"}
//         </div>
//         <div className="flex flex-1 justify-end">
//           <div className="flex text-primary-black">
//             <div
//               className="flex justify-center items-center h-10 w-7 rounded-l-md cursor-pointer border"
//               onClick={() => handelActivePage("left", 0)}
//             >
//               <IoIosArrowUp className="-rotate-[90deg]" />
//             </div>

//             {Array.from({ length: paginationLength }).map((_, i) => (
//               <div
//                 key={i}
//                 className={`${
//                   activePage == i
//                     ? "bg-farm-green text-white border-farm-green"
//                     : "bg-white text-primary-black border"
//                 } flex justify-center items-center h-10 w-10 border cursor-pointer`}
//                 onClick={() => handelActivePage("middle", i)}
//               >
//                 {i + 1}
//               </div>
//             ))}

//             <div
//               className="flex justify-center items-center h-10 w-7 rounded-r-md cursor-pointer border"
//               onClick={() => handelActivePage("right", 0)}
//             >
//               <IoIosArrowUp className="rotate-[90deg]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactFormsContent;
