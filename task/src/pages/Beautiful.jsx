import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { IconButton } from "@mui/material";
const Beautiful = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="max-w-7xl mx-auto flex flex-col w-full px-8 md:px-5 gap-5">
          <div className="flex flex-col items-center px-3 md:px-5 gap-12">
            <div className="flex flex-col md:w-full w-[92%] items-center gap-5">
              <div className="flex items-center justify-center border border-red-600 bg-red-600/10 rounded-3xl gap-1">
                <p className="border m-1 border-red-600 text-red-600 bg-white px-2 py-0.5 text-sm  rounded-3xl">
                  New feature
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-red-600 font-medium text-sm">
                    Check out the team dashboard
                  </p>
                  <IconButton>
                    <ArrowForwardIcon className="text-red-600 font-medium text-sm" />
                  </IconButton>
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
          <div className="flex gap-3 justify-center">
            <button className="flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-gray-800 font-semibold">
              <IconButton>
                <PlayCircleOutlineIcon />
              </IconButton>
              Demo
            </button>
            <button
              className="px-7
             py-2  bg-red-600 text-white rounded-full font-semibold"
            >
              Sign up
            </button>
          </div>
          {/* Image Section */}
          <div className="relative w-full h-[30rem] border-t-8 border-l-8 border-r-8 border-gray-900 rounded-lg overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/77d8/9fa1/a69b18701253a32f7e394acfc433d49b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YS-Jtc0-Ve3jaOlOlp-9BpWzlsaMDBADGur869~rLULf71EfaukCJIkRchKg-DjBbHimGJwC3GM-lXYm30LtvL0akS~RqwVXYKhLcTwpqKuZpBNHn4ruGFvsQn-3eTDILJNHJqeu5ZLWTSn1YUSzRuLAKh04dIXPRI16Iss4z8lzFWeSCelmpRBjrIrcnEyuhstpzderuRACZmfRHygbOpj9hN4r9gyUfZ3tNyM8saQGuW8UgF7Yg-XbdeMJWnJ4EaYMyl91Yy3Pb7saIyc5IK1zVcVUljHvUHqOkpwHoUY-LKgk2QQDSm3jKVpYzSuIzCu6-U3qmF~EtGM9nYpS3g__"
              alt="Dashboard Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beautiful;
