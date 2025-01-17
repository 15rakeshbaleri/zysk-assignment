import React from "react";

const Company = () => {
  return (
    <div>
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
                      src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_arrow_left.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250117T182912Z&X-Amz-Expires=25200&X-Amz-Signature=ec99de27d3226f969a864861555501a6feb27433c6deb567efe26a4d9320f572&X-Amz-SignedHeaders=host"
                      alt="Arrow Left"
                      loading="lazy"
                    />
                    <img
                      class="w-[72%] h-5 object-contain"
                      src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_logotype.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250117T182912Z&X-Amz-Expires=25200&X-Amz-Signature=d19c547103e3e0dc21f5d474faba8ac540610a5c168b2200975c29846329bc42&X-Amz-SignedHeaders=host"
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
    </div>
  );
};

export default Company;
