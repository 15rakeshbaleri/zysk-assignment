import React from "react";

const Beautiful = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* Container */}
        <div className="max-w-7xl mx-auto flex flex-col w-full px-8 md:px-5 gap-16">
          {/* Hero Section */}
          <div className="flex flex-col items-center px-14 md:px-5 gap-12">
            {/* New Feature Banner */}
            <div className="flex flex-col md:w-full w-[92%] items-center gap-5">
              <div className="flex items-center justify-center border border-red-600 bg-red-600/10 rounded-lg gap-3 p-2">
                <p className="border border-red-600 text-red-600 bg-white px-2 py-0.5 text-sm rounded-md">
                  New feature
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-red-600 font-medium text-sm">
                    Check out the team dashboard
                  </p>
                  <img
                    className="h-4"
                    src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_arrow_right.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
              <h1 className="text-center font-semibold text-gray-900 text-[3.13rem] tracking-[-0.06rem] sm:text-[2.5rem] md:text-[2.88rem]">
                Beautiful analytics to grow smarter
              </h1>
            </div>
            <p className="text-center text-gray-600 text-lg md:text-base leading-relaxed">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-800 font-semibold">
              <img
                className="h-5 w-5"
                src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_playcircle.svg"
                alt="Demo"
              />
              Demo
            </button>
            <button className="px-5 py-3 bg-red-600 text-white rounded-full font-semibold">
              Sign up
            </button>
          </div>
          {/* Image Section */}
          <div className="relative w-full h-[35rem] border-8 border-gray-900 rounded-lg overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_image_1.png"
              alt="Dashboard Preview"
            />
          </div>
        </div>
        {/* Footer Divider */}
        <div className="flex w-full justify-center bg-white">
          <div className="max-w-7xl w-full">
            <img
              className="w-full"
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_container.png"
              alt="Divider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beautiful;
