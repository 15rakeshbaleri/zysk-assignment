import React from "react";
import IconButton from "@mui/material/IconButton";
import CallMadeIcon from "@mui/icons-material/CallMade";
const Blog = () => {
  return (
    <div className="py-[6.00rem] flex flex-col items-center justify-center bg-base-white">
      <div className="max-w-[80.00rem] sm:gap-[1.94rem] md:px-[1.25rem] px-[2.00rem] gap-[3.88rem] mx-auto flex w-full flex-col">
        <div className="flex items-start justify-center md:flex-col">
          <div className="gap-[1.38rem] flex flex-1 flex-col items-start self-center md:self-stretch">
            <div className="gap-[0.63rem] flex flex-col items-start justify-center self-stretch">
              <h2 className="text-[1.00rem] font-semibold !text-red-400">
                Our blog
              </h2>

              <div className="flex justify-between w-full items-center gap-[0.75rem]">
                <h3 className="sm:text-[2.00rem] md:text-[2.13rem] text-[2.25rem] tracking-[0.00rem] font-semibold !text-gray-900-1">
                  Latest blog posts
                </h3>
                <button className="min-w-[9.25rem] px-[1.19rem] rounded-lg border border-solid border-red-400 text-white font-semibold flex items-center justify-center cursor-pointer whitespace-nowrap h-[3.00rem] px-[1.25rem] text-[1.00rem] bg-red-600 shadow-xs">
                  View all posts
                </button>
              </div>
            </div>

            <p className="text-[1.25rem] font-normal !text-gray-600">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
        </div>
        <div className="gap-[2.00rem] flex flex-row ">
          <div className="gap-[1.50rem] w-[32%] flex flex-col md:w-full">
            <img
              className="h-[15.00rem] w-full object-cover"
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250117T182912Z&X-Amz-Expires=25200&X-Amz-Signature=ba24a1071f4cf95f557d2591acfb5f5735d24e43785d4131fe3aad3b6223059d&X-Amz-SignedHeaders=host"
              alt="Design"
              loading="lazy"
            />
            <div className="gap-[1.50rem] flex flex-col self-stretch">
              <div className="gap-[0.38rem] flex flex-col items-start justify-center">
                <p className="text-[0.88rem] font-semibold !text-red-600">
                  Design
                </p>
                <div className="gap-[0.50rem] flex flex-col self-stretch">
                  <div className="gap-[1.25rem] flex items-center justify-between">
                    <h4 className="text-[1.50rem] font-semibold !text-gray-900-1">
                      UX review presentations
                    </h4>
                    <IconButton>
                      <CallMadeIcon />
                    </IconButton>
                  </div>
                  <p className="leading-[1.50rem] text-[1.00rem] font-normal !text-gray-600">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                </div>
                <div className="gap-[0.75rem] flex">
                  <div
                    className="bg-[url(https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_56x56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250117T182912Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=4a8d867c8d1c3f0e62008eb002f09a498c5273f27389d1148446da570e0b66ed&amp;X-Amz-SignedHeaders=host)] rounded-[20px] w-[10%] h-[2.50rem] flex flex-col items-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url(https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_56x56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250117T182912Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=4a8d867c8d1c3f0e62008eb002f09a498c5273f27389d1148446da570e0b66ed&amp;X-Amz-SignedHeaders=host)",
                    }}
                  >
                    <div className="rounded-[20px] border-[0.75px] w-[2.50rem] h-[2.50rem] border-solid border-gray-900-0"></div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-center">
                    <p className="text-[0.88rem] font-semibold !text-gray-900-1">
                      Olivia Rhye
                    </p>
                    <p className="text-[0.88rem] font-normal !text-gray-600">
                      20 Jan 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-[1.50rem] w-[32%] flex flex-col md:w-full">
            <img
              className="h-[15.00rem] w-full object-cover"
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_image_240x384.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250117T182912Z&X-Amz-Expires=25200&X-Amz-Signature=6cd2808beae0671b82486a3c89bb047dee39fb475bac7955680752227ba825e0&X-Amz-SignedHeaders=host"
              alt="Design"
              loading="lazy"
            />
            <div className="gap-[1.50rem] flex flex-col self-stretch">
              <div className="gap-[0.38rem] flex flex-col items-start justify-center">
                <p className="text-[0.88rem] font-semibold !text-red-600">
                  Product
                </p>
                <div className="gap-[0.50rem] flex flex-col self-stretch">
                  <div className="gap-[1.25rem] flex items-center justify-between">
                    <h4 className="text-[1.50rem] font-semibold !text-gray-900-1">
                      Migrating to Linear 101
                    </h4>
                    <IconButton>
                      <CallMadeIcon />
                    </IconButton>
                  </div>
                  <p className="leading-[1.50rem] text-[1.00rem] font-normal !text-gray-600">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get started.
                  </p>
                </div>
                <div className="gap-[0.75rem] flex">
                  <div
                    className="bg-[url(https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_56x56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250117T182912Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=4a8d867c8d1c3f0e62008eb002f09a498c5273f27389d1148446da570e0b66ed&amp;X-Amz-SignedHeaders=host)] rounded-[20px] w-[10%] h-[2.50rem] flex flex-col items-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url(https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_56x56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250117T182912Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=4a8d867c8d1c3f0e62008eb002f09a498c5273f27389d1148446da570e0b66ed&amp;X-Amz-SignedHeaders=host)",
                    }}
                  >
                    <div className="rounded-[20px] border-[0.75px] w-[2.50rem] h-[2.50rem] border-solid border-gray-900-0"></div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-center">
                    <p className="text-[0.88rem] font-semibold !text-gray-900-1">
                      Olivia Rhye
                    </p>
                    <p className="text-[0.88rem] font-normal !text-gray-600">
                      20 Jan 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-[1.50rem] w-[32%] flex flex-col md:w-full">
            <img
              className="h-[15.00rem] w-full object-cover"
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_image_2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250117T182912Z&X-Amz-Expires=25200&X-Amz-Signature=e7b2d88f8b3774c75348ad3f040f0c2b79a513b18e0693379af3d26923a305ba&X-Amz-SignedHeaders=host"
              alt="Design"
              loading="lazy"
            />
            <div className="gap-[1.50rem] flex flex-col self-stretch">
              <div className="gap-[0.38rem] flex flex-col items-start justify-center">
                <p className="text-[0.88rem] font-semibold !text-red-600">
                  Product
                </p>
                <div className="gap-[0.50rem] flex flex-col self-stretch">
                  <div className="gap-[1.25rem] flex items-center justify-between">
                    <h4 className="text-[1.50rem] font-semibold !text-gray-900-1">
                      Building your API stack
                    </h4>
                    <IconButton>
                      <CallMadeIcon />
                    </IconButton>
                  </div>
                  <p className="leading-[1.50rem] text-[1.00rem] font-normal !text-gray-600">
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and managing them.
                  </p>
                </div>
                <div className="gap-[0.75rem] flex">
                  <div
                    className="bg-[url(https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_56x56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250117T182912Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=4a8d867c8d1c3f0e62008eb002f09a498c5273f27389d1148446da570e0b66ed&amp;X-Amz-SignedHeaders=host)] rounded-[20px] w-[10%] h-[2.50rem] flex flex-col items-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url(https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_56x56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWP4RIAAMUL%2F20250117%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250117T182912Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=4a8d867c8d1c3f0e62008eb002f09a498c5273f27389d1148446da570e0b66ed&amp;X-Amz-SignedHeaders=host)",
                    }}
                  >
                    <div className="rounded-[20px] border-[0.75px] w-[2.50rem] h-[2.50rem] border-solid border-gray-900-0"></div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-center">
                    <p className="text-[0.88rem] font-semibold !text-gray-900-1">
                      Olivia Rhye
                    </p>
                    <p className="text-[0.88rem] font-normal !text-gray-600">
                      20 Jan 2024
                    </p>
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

export default Blog;
