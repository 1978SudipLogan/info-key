import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Eye,
  Phone,
  RefreshCcw,
  CircleSmall,
  Circle,
  MapPin,
  Calendar,
  Ellipsis,
  CircleDot,
} from "lucide-react";

const Design = () => {
  const todayData = [
    {
      id: 1,
      from: "Mumbai, Maharashtra",
      to: "Delhi, NCR",
      status: "Active",
      posted: "0h ago",
      dateRange: "Oct 10 - Oct 11",
      trucks: 8,
      weight: "22 MT",
      rate: "₹55,000 / Truck",
      product: "Electronics",
      views: 125,
      calls: 12,
    },
    {
      id: 2,
      from: "Pune, Maharashtra",
      to: "Bengaluru, Karnataka",
      status: "Active",
      posted: "1h ago",
      dateRange: "Oct 10 - Oct 11",
      trucks: 5,
      weight: "18 MT",
      rate: "₹48,000 / Truck",
      product: "Furniture",
      views: 87,
      calls: 9,
    },
    {
      id: 3,
      from: "Ahmedabad, Gujarat",
      to: "Chennai, Tamil Nadu",
      status: "Active",
      posted: "2h ago",
      dateRange: "Oct 10 - Oct 12",
      trucks: 10,
      weight: "25 MT",
      rate: "₹60,000 / Truck",
      product: "Textiles",
      views: 142,
      calls: 15,
    },
    {
      id: 4,
      from: "Jaipur, Rajasthan",
      to: "Kolkata, West Bengal",
      status: "Active",
      posted: "3h ago",
      dateRange: "Oct 9 - Oct 10",
      trucks: 6,
      weight: "20 MT",
      rate: "₹52,000 / Truck",
      product: "Machinery",
      views: 76,
      calls: 10,
    },
    {
      id: 5,
      from: "Surat, Gujarat",
      to: "Hyderabad, Telangana",
      status: "Active",
      posted: "5h ago",
      dateRange: "Oct 10 - Oct 11",
      trucks: 7,
      weight: "21 MT",
      rate: "₹50,000 / Truck",
      product: "Garments",
      views: 98,
      calls: 8,
    },
    {
      id: 1,
      from: "Mumbai, Maharashtra",
      to: "Delhi, NCR",
      status: "Active",
      posted: "0h ago",
      dateRange: "Oct 10 - Oct 11",
      trucks: 8,
      weight: "22 MT",
      rate: "₹55,000 / Truck",
      product: "Electronics",
      views: 125,
      calls: 12,
    },
    {
      id: 2,
      from: "Pune, Maharashtra",
      to: "Bengaluru, Karnataka",
      status: "Active",
      posted: "1h ago",
      dateRange: "Oct 10 - Oct 11",
      trucks: 5,
      weight: "18 MT",
      rate: "₹48,000 / Truck",
      product: "Furniture",
      views: 87,
      calls: 9,
    },
    {
      id: 3,
      from: "Ahmedabad, Gujarat",
      to: "Chennai, Tamil Nadu",
      status: "Active",
      posted: "2h ago",
      dateRange: "Oct 10 - Oct 12",
      trucks: 10,
      weight: "25 MT",
      rate: "₹60,000 / Truck",
      product: "Textiles",
      views: 142,
      calls: 15,
    },
    {
      id: 4,
      from: "Jaipur, Rajasthan",
      to: "Kolkata, West Bengal",
      status: "Active",
      posted: "3h ago",
      dateRange: "Oct 9 - Oct 10",
      trucks: 6,
      weight: "20 MT",
      rate: "₹52,000 / Truck",
      product: "Machinery",
      views: 76,
      calls: 10,
    },
    {
      id: 5,
      from: "Surat, Gujarat",
      to: "Hyderabad, Telangana",
      status: "Active",
      posted: "5h ago",
      dateRange: "Oct 10 - Oct 11",
      trucks: 7,
      weight: "21 MT",
      rate: "₹50,000 / Truck",
      product: "Garments",
      views: 98,
      calls: 8,
    },
  ];

  const pastData = [
    {
      id: 2,
      from: "Pune, Maharashtra",
      to: "Kolkata, WB",
      status: "Completed",
      posted: "3d ago",
      dateRange: "Jul 1 - Jul 2",
      trucks: 5,
      weight: "18 MT",
      rate: "₹48000 / Truck",
      product: "Furniture",
      views: 87,
      calls: 9,
    },
  ];

  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="bg-gray-100 w-full h-full sm:mt-16">
      <div className="relative top-2">
        <hr className="text-gray-300" />
        <div className="bg-white flex justify-between items-center h-16 px-3 rounded-tl-xl rounded-tr-xl">
          <h3 className="font-semibold text-xl">My Posted Loads</h3>
          <Button className="bg-white border-2 border-blue-600 text-blue-600 rounded-lg">
            Post Load
          </Button>
        </div>
        <hr className="text-gray-100" />
        <div className="bg-white h-14 w-full flex justify-center items-center">
          <div className="w-[95%] h-[80%]   bg-gray-100 rounded-lg flex justify-around items-center ">
            <Button
              onClick={() => setActiveTab("today")}
              className={`w-[47%]  ${
                activeTab === "today"
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              Active
            </Button>
            <Button
              onClick={() => setActiveTab("post")}
              className={`w-[47%]  ${
                activeTab === "post"
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              Past
            </Button>
          </div>
        </div>
        <hr className="text-gray-200 " />

        <div className="relative top-2">
          <div className="w-full  flex flex-col sm:flex-row md:flex-row flex-wrap px-0 sm:px-4 gap-3 ">
            {todayData.map((data, index) => (
              <div className="bg-white w-[90%] sm:w-[80%] md:w-[47%] lg:w-[30%] 2xl:w-[25%] mx-auto p-2 rounded-lg shadow-md space-y-4">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col gap-2 w-[60%] ">
                    <div className="flex gap-2 ">
                      <span>
                        <CircleDot className="text-xs text-gray-500 font-extrabold p-1" />
                      </span>
                      <span className="font-semibold">{data.from}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <MapPin className="text-blue-500 p-1" />
                      </span>
                      <span className="font-bold">{data.to}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <Calendar className="text-xs text-gray-500 font-extrabold p-1" />
                      </span>
                      <span className="font-semibold">{data.dateRange}</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-end items-end">
                      <div className="flex">
                        <span className="text-green-500  ">
                          <CircleSmall />
                        </span>
                        <span className="font-semibold text-green-600">
                          {data.status}
                        </span>
                      </div>
                      <div className="text-gray-500 font-normal">
                        Posted {data.posted}
                      </div>
                    </div>

                    <div className="bg-green-200 px-1 text-sm py-1 rounded-md text-green-800 font-semibold">
                      {data.trucks} Trucks Available
                    </div>
                  </div>
                </div>
                <hr className="text-gray-100" />
                <div className="flex flex-col relative  ">
                  <div className="flex justify-between items-center h-10 bottom-2 relative px-1 ">
                    <div className="flex flex-col">
                      <span className="font-extralight">Weight</span>
                      <span className="text-gray-950 font-semibold relative bottom-1">
                        {data.weight}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-extralight">Rate</span>
                      <span className="text-gray-950 font-semibold relative bottom-1">
                        {data.rate}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-extralight">Product</span>
                      <span className="text-gray-950 font-semibold relative bottom-1">
                        {data.product}
                      </span>
                    </div>
                  </div>
                  <hr className="text-gray-100" />
                  <div className="flex justify-between items-center relative top-1 py-2">
                    <div className="flex   gap-2 xs:gap-4">
                      <div className="flex gap-1">
                        <span>
                          <Eye className="text-xs p-1" />
                        </span>
                        <span className="text-gray-700 text-xs  flex  items-center font-semibold">
                          {data.views}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span>
                          <Phone className="text-blue-700 font-semibold p-1 " />
                        </span>
                        <span className="text-blue-700">{data.calls}</span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2 xs:gap-4 items-center  ">
                      <div>
                        <span className="text-blue-600 font-semibold text-xs">
                          Details
                        </span>
                      </div>
                      <div className="flex border p-1 rounded-md border-blue-500 border-3">
                        <span>
                          <RefreshCcw className="text-blue-500 p-1 font-bold" />
                        </span>
                        <span className="text-blue-600">Refresh</span>
                      </div>
                      <div>
                        <span>
                          <Ellipsis className="text-gray-500" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
