import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Switch } from "@/components/ui/switch";

const FormDesign = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-full sm:mt-16">
      <form action="" className="pt-2 px-2">
        <div className=" ">
          <div className="text-gray-600 text-xs font-semibold">
            LOAD & ROUTE
          </div>
          <div className="flex mt-2 gap-2">
            <ButtonGroup className="w-1/2 ">
              <Button
                variant="outline"
                className="w-[50%] font-normal   border-none bg-blue-700 text-white"
              >
                Full Load
              </Button>
              <Button
                variant="outline"
                className="w-[50%] border-2 border-gray-200 bg-gray-100"
              >
                Part Load
              </Button>
            </ButtonGroup>
            <ButtonGroup className="w-1/2">
              <Button
                variant="outline"
                className="w-full border-2 border-gray-200 bg-gray-100 flex justify-start items-center"
              >
                2025-07-12
              </Button>
            </ButtonGroup>
          </div>

          <div className="mt-2">
            <input
              type="text"
              placeholder="From:Loading City or Address"
              className="border w-full py-2 px-3 rounded-sm border-2 border-gray-200 bg-gray-100"
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="From:Unloading City or Address"
              className="border w-full py-2 px-3 rounded-sm border-2 border-gray-200 bg-gray-100"
            />
          </div>
        </div>
        <hr className="relative top-3 text-gray-100 font-bold" />
        <div className="relative top-5">
          <div className="text-gray-600 text-xs font-semibold">DETAILS</div>
          <div className="flex justify-between items-center">
            <div className="text-gray-800 font-medium">Trucks Required</div>
            <div className="flex gap-3">
              <span
                onClick={()=>setCount(count - 1)}
                className="bg-gray-300 p-1 rounded-full w-7 h-7 flex justify-center items-center font-bold "
              >
                -
              </span>
              <span className="text-xl font-semibold">{count}</span>
              <span
                onClick={()=>setCount(count + 1)}
                className="bg-gray-300 p-1 rounded-full w-7 h-7 flex justify-center items-center font-bold "
              >
                +
              </span>
            </div>
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Weight (MT)"
              className="border w-full py-2 px-3 rounded-sm border-2 border-gray-200 bg-gray-100"
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Product (e.g. Steel)"
              className="border w-full py-2 px-3 rounded-sm border-2 border-gray-200 bg-gray-100"
            />
          </div>
        </div>
        <hr className="relative top-8 text-gray-100 font-bold" />
        <div className="relative top-10">
          <div className="text-gray-600 text-xs font-semibold">
            PAYMENT & CONTACT
          </div>
          <div className="flex gap-2 mt-2 ">
            <div>
              {" "}
              <input
                type="text"
                placeholder="Rate (On Call)"
                className="border w-full py-2 px-3 rounded-sm border-2 border-gray-200 bg-gray-100"
              />
            </div>
            <div>
              {" "}
              <input
                type="text"
                placeholder="Enter Cash"
                className="border w-full py-2 px-3 rounded-sm border-2 border-gray-200 bg-gray-100"
              />
            </div>
          </div>
          <div className="w-full mt-2">
            <ButtonGroup className="w-full">
              <Button
                variant="outline"
                className="w-[33%] text-white font-normal border-none bg-blue-600 flex justify-center items-center"
              >
                To Pay
              </Button>
              <Button
                variant="outline"
                className="w-[33%] border-2 font-medium border-gray-200 bg-gray-100 flex justify-center items-center"
              >
                80% Adv
              </Button>
              <Button
                variant="outline"
                className="w-[33%] border-2 font-medium border-gray-200 bg-gray-100 flex justify-center items-center"
              >
                On Call
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <hr className="relative top-14 text-gray-100 font-bold" />
        <div className="relative top-16 ">
          <div className="flex justify-between">
            <div>Make this a Private Load</div>
            <Switch className="bg-red-500" />
          </div>
          <Button className="bg-blue-600 w-full relative top-2 p-5">
            Post Load
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormDesign;
