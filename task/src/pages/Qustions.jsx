import React from "react";
import { Box, Typography } from "@mui/material";
const Qustions = () => {
  return (
    <div>
      <Box className="sm:px-5 px-8">
        <Box className="md:px-5 px-14 flex justify-center">
          <Box className="md:px-5 px-14 gap-6 flex flex-col items-center">
            <Typography className="text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-900">
              Frequently asked questions
            </Typography>
            <Typography className="text-xl font-normal text-gray-600">
              Everything you need to know about the product and billing.
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className="w-full max-w-md mx-auto">
        <div className="space-y-4">
          {/* Accordion Item 1 */}
          <div className="border-b">
            <button
              className="flex justify-between w-full p-4 text-left bg-gray-200 rounded-md focus:outline-none"
              onClick={() => toggleAccordion(0)}
            >
              <span className="text-xl font-semibold text-gray-800">
                Is there a free trial available?
              </span>
              <span className="text-xl">{open === 0 ? "-" : "+"}</span>
            </button>
            {open === 0 && (
              <div className="p-4 bg-gray-100">
                <p>
                  Yes, you can try us for free for 30 days. We offer a free
                  personalized onboarding call to help you get started.
                </p>
              </div>
            )}
          </div>

          {/* Accordion Item 2 */}
          <div className="border-b">
            <button
              className="flex justify-between w-full p-4 text-left bg-gray-200 rounded-md focus:outline-none"
              onClick={() => toggleAccordion(1)}
            >
              <span className="text-xl font-semibold text-gray-800">
                Can I change my plan later?
              </span>
              <span className="text-xl">{open === 1 ? "-" : "+"}</span>
            </button>
            {open === 1 && (
              <div className="p-4 bg-gray-100">
                <p>
                  Yes, you can change your plan at any time. We offer
                  flexibility to suit your needs.
                </p>
              </div>
            )}
          </div>

          {/* Accordion Item 3 */}
          <div className="border-b">
            <button
              className="flex justify-between w-full p-4 text-left bg-gray-200 rounded-md focus:outline-none"
              onClick={() => toggleAccordion(2)}
            >
              <span className="text-xl font-semibold text-gray-800">
                What is your cancellation policy?
              </span>
              <span className="text-xl">{open === 2 ? "-" : "+"}</span>
            </button>
            {open === 2 && (
              <div className="p-4 bg-gray-100">
                <p>
                  We offer a hassle-free cancellation policy. Simply reach out
                  to our support team to cancel your subscription.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="rounded-[16px] sm:p-[1.25rem] mx-[2.00rem] p-[2.00rem] gap-[2.00rem] flex flex-col items-center bg-gray-50 md:mx-0">
        <div className="w-[10%] flex justify-center md:w-full">
          <div className="flex w-full items-center">
            {/* Avatar 1 */}
            <div className="bg-[url('https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_48x48.png')] rounded-[24px] border-[1.5px] h-[3.00rem] flex w-full flex-col items-center self-end border-solid border-base-white bg-cover bg-no-repeat md:h-auto">
              <div className="rounded-[24px] border-[0.75px] w-[3.00rem] h-[3.00rem] border-solid border-gray-900-0"></div>
            </div>
            {/* Avatar 2 */}
            <div className="bg-[url('https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_56x56.png')] rounded-[28px] border-[1.5px] ml-[-1.00rem] h-[3.50rem] relative flex w-full flex-col items-center border-solid border-base-white bg-cover bg-no-repeat md:h-auto">
              <div className="rounded-[28px] border-[0.75px] w-[3.50rem] h-[3.50rem] border-solid border-gray-900-0"></div>
            </div>
          </div>
        </div>

        <div className="md:px-[1.25rem] px-[3.50rem] gap-[0.63rem] flex flex-col items-center justify-center">
          <h3 className="text-[1.25rem] font-semibold !text-gray-900-1">
            Still have questions?
          </h3>
          <p className="text-[1.13rem] font-normal !text-gray-600">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>

        <button className="min-w-[8.38rem] px-[1.19rem] rounded-lg border text-white border-solid border-red-400 font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[10px] h-[3.00rem] px-[1.25rem] text-[1.00rem] bg-red-600 shadow-xs text-base-white">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Qustions;
