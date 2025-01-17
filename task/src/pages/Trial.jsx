import React from "react";

const Trail = () => {
  return (
    <div className="md:py-[1.25rem] py-[6.00rem] flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-[80.00rem] md:px-[1.25rem] px-[3.50rem] gap-[2.38rem] mx-auto flex w-full flex-col items-center">
        <div className="md:px-[1.25rem] px-[3.50rem] gap-[1.38rem] flex flex-col items-center">
          <h1 className="sm:text-[2.00rem] md:text-[2.13rem] text-[2.25rem] tracking-[0.00rem] font-semibold !text-gray-900-1">
            Start your free trial
          </h1>
          <p className="text-[1.25rem] font-normal !text-gray-600">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div className="gap-[0.75rem] flex">
          <button className="min-w-[8.00rem] px-[1.19rem] rounded-lg border border-solid border-blue_gray-100 font-semibold text-blue_gray-800 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[10px] h-[3.00rem] px-[1.25rem] text-[1.00rem] bg-base-white shadow-xs">
            Learn more
          </button>
          <button className="min-w-[8.00rem] px-[1.19rem] rounded-lg border border-solid text-white border-red-400 font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[10px] h-[3.00rem] px-[1.25rem] text-[1.00rem] bg-red-600 shadow-xs text-base-white">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trail;
