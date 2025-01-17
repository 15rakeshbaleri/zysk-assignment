import React from "react";

const Footer = () => {
  return (
    <footer className="md:py-[1.25rem] py-[3.00rem] flex flex-col items-center bg-base-white">
      <div className="max-w-[80.00rem] sm:gap-[2.00rem] md:px-[1.25rem] gap-[4.00rem] mt-[1.00rem] mx-auto flex w-full flex-col">
        <div className="sm:px-[1.25rem] px-[2.00rem] flex">
          <div className="gap-[1.25rem] w-[90%] flex justify-between md:w-full md:flex-col">
            <div className="gap-[0.88rem] w-[18%] flex flex-col items-start md:w-full">
              <p className=" text-[0.88rem] font-semibold !text-blue_gray-500">
                Product
              </p>
              <ul className="gap-[0.75rem] flex flex-col items-start">
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Overview
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Features
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Solutions
                    </h6>
                    <p className=" text-[0.75rem] font-medium !text-teal-800">
                      New
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Tutorials
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Pricing
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Releases
                    </h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="gap-[0.88rem] w-[18%] flex flex-col items-start md:w-full">
              <p className=" text-[0.88rem] font-semibold !text-blue_gray-500">
                Company
              </p>
              <ul className="gap-[0.75rem] flex flex-col items-start">
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      About us
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Careers
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Press
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      News
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Media kit
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Contact
                    </h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="gap-[0.88rem] w-[18%] flex flex-col items-start md:w-full">
              <p className=" text-[0.88rem] font-semibold !text-blue_gray-500">
                Resources
              </p>
              <ul className="gap-[0.75rem] flex flex-col items-start">
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Blog
                    </h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6 className=" text-[1.00rem] font-semibold !text-gray-600">
                      Newsletter
                    </h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
