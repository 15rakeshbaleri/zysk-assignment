import React from "react";

const Footer = () => {
  return (
    <footer className="md:py-[1.25rem] py-[3.00rem] flex flex-col items-center bg-base-white">
      <div className="max-w-[80.00rem] sm:gap-[2.00rem] md:px-[1.25rem] gap-[4.00rem] mt-[1.00rem] mx-auto w-full grid grid-cols-1 gap-[4.00rem]">
        {/* Row 1 */}
        <div className="flex flex-col gap-[1.25rem] w-full">
          {/* Product Section */}
          <div className="gap-[0.88rem] w-full flex flex-col items-start">
            <p className="text-[0.88rem] font-semibold !text-blue_gray-500">
              Product
            </p>
            <ul className="gap-[0.75rem] flex flex-col items-start">
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Overview
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Features
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="gap-[1.00rem] flex flex-wrap items-center">
                    <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                      Solutions
                    </h6>
                    <p className="text-[0.75rem] font-medium !text-teal-800">
                      New
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Tutorials
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Pricing
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Releases
                  </h6>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-[1.25rem] w-full">
          {/* Company Section */}
          <div className="gap-[0.88rem] w-full flex flex-col items-start">
            <p className="text-[0.88rem] font-semibold !text-blue_gray-500">
              Company
            </p>
            <ul className="gap-[0.75rem] flex flex-col items-start">
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    About us
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Careers
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Press
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    News
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Media kit
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Contact
                  </h6>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-[1.25rem] w-full">
          {/* Resources Section */}
          <div className="gap-[0.88rem] w-full flex flex-col items-start">
            <p className="text-[0.88rem] font-semibold !text-blue_gray-500">
              Resources
            </p>
            <ul className="gap-[0.75rem] flex flex-col items-start justify-center">
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Blog
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Newsletter
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    API
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Docs
                  </h6>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col gap-[1.25rem] w-full">
          {/* Legal Section */}
          <div className="gap-[0.88rem] w-full flex flex-col items-start">
            <p className="text-[0.88rem] font-semibold !text-blue_gray-500">
              Legal
            </p>
            <ul className="gap-[0.75rem] flex flex-col items-start justify-center">
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Privacy Policy
                  </h6>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="text-[1.00rem] font-semibold !text-gray-600">
                    Terms of Use
                  </h6>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex flex-col gap-[1.25rem] w-full">
          {/* Add any extra section or leave empty */}
        </div>

        {/* Row 6 */}
        <div className="flex flex-col gap-[1.25rem] w-full">
          {/* Add any extra section or leave empty */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
