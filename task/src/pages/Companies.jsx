import React from "react";

const Companies = () => {
  return (
    <div>
      <div class="bg-base-white">
        <div class="flex flex-col items-center gap-12 sm:gap-8 md:gap-6 mt-24">
          <div class="max-w-[80rem] px-8 md:px-5 mx-auto w-full">
            <div class="flex flex-col items-center gap-7">
              <p class="text-base font-medium text-gray-600">
                Join 4,000+ companies already growing
              </p>
              <div class="flex gap-6 md:flex-col w-full justify-between">
                <div class="flex items-center justify-center w-1/6 md:w-full">
                  <img
                    class="h-11"
                    src="path-to-arrow-left.svg"
                    alt="Arrow Left"
                    loading="lazy"
                  />
                  <img
                    class="w-[72%] h-5 object-contain"
                    src="path-to-logotype.svg"
                    alt="Logotype"
                    loading="lazy"
                  />
                </div>
                <div class="flex items-center justify-center w-1/6 md:w-full">
                  <img
                    class="h-11"
                    src="path-to-user.svg"
                    alt="User Icon"
                    loading="lazy"
                  />
                  <img
                    class="w-[72%] h-5 object-contain"
                    src="path-to-logotype-gray.svg"
                    alt="Logotype Gray"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
