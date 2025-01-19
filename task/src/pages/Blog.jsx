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
              src="https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cY-afauHT8gBUz23YzZLpdOuyq10bjBYYAv-VM59MS70NdF-Wua9lWNlZjNL8h2VLKc5DEkt5F-ZfHRgFBsyTo-qvAu~CjfgtagCUjKpQl-S~EkSkKmj9bXzMKNO05v27fDeV7Ws01gozHD4zy-hRmJ9V-Ho7ISzHdBxJ36b8bj2Yyx8TqbyIrdOeFLsoCAVdlMRDSYn1FuNhafj~vHTh~l7RXRb4IA3U9pcZJ~4YoE2L1AfDzxcNLFcTuogCK-G48f0-~dQ~aAf1Av19KIndye6bmfDKl6JQEW9O~G4LixPhAi5qcMpg1RHHkk9q3lkylsEoVQbEVKWxjFGWAeNbQ__"
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
                        "url(https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600)",
                    }}
                  >
                    <div
                      className="rounded-full border-[0.75px] w-[2.50rem] h-[2.50rem] border-solid border-gray-900-0 bg-cover bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url(https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600)",
                      }}
                    ></div>
                  </div>

                  <div className="flex flex-1 flex-col items-start justify-center mx-1">
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
              src="https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MW7O~X-iOlMEZZchzxuVn8bvkWGYawHbzF7HeHCOweoYF3MXRiSnP6D0q2PLrIkYOyU~~VxNXfSqq~s2Pk3NhWAnriIWJog3ty-hiTv02AcyP8fIKlavMjb9iunz8H-7JhFhuMCLjxZpYjQuvbQZUhWB6rRqxXKDDOoHq6tkBeepl1v5cWT1krR8OXnqLcAcbHlhpSYIlBvZprQr0A7FnS1DXlFvUesvYXRJRKtH5Cauu6zbJbXCrLNi3haTPBlzhayKU531pUHJkfGMAgyERNyEzmNzFTwXVD9uO6bgQQ4tUlDLa4zD~MQLGr1~Pgy4ncM6YRi0zZCZKtU-UQJskA__"
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
                        "url(https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600)",
                    }}
                  >
                    <div
                      className="rounded-full border-[0.75px] w-[2.50rem] h-[2.50rem] border-solid border-gray-900-0 bg-cover bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url(https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600)",
                      }}
                    ></div>
                  </div>

                  <div className="flex flex-1 flex-col items-start justify-center mx-1">
                    <p className="text-[0.88rem] font-semibold !text-gray-900-1">
                      Phoenix Baker
                    </p>
                    <p className="text-[0.88rem] font-normal !text-gray-600">
                      19 Jan 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-[1.50rem] w-[32%] flex flex-col md:w-full">
            <img
              className="h-[15.00rem] w-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ii9iXqMR1o1BGn9I22mgQmKa2iMc6Kxt3iFju-CM~F0DvSxRPtya7YEvZWzS6JjeE-xbqpUVL5StRV0bwM3Nj-NUTrXfw7-G6Ky8xffCdETGGZbqBCh8WiHAjbVYhRKB6EYD3YcKn1ytcTqkQk758jjG4G8OpBtEp1SVGOzwhDZ4knnGtqRXFF~QUk97y81kkembJUOIDhbkJ329aMxiF~oWRzWQKZ-GHb2Zp68pMndmQ-eZwjf4sVyUFfb0xUdyfZ0ax5HuHfmO7mpu57bIjpMZli3uxoBVmfXcHPBg9gAK1wtQUzE-unQUyU3DoUpjJ9SwejglYkhTcIIySW7-IA__"
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
                        "url(https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600)",
                    }}
                  >
                    <div
                      className="rounded-full border-[0.75px] w-[2.50rem] h-[2.50rem] border-solid border-gray-900-0 bg-cover bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url(https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600)",
                      }}
                    ></div>
                  </div>

                  <div className="flex flex-1 flex-col items-start justify-center mx-1">
                    <p className="text-[0.88rem] font-semibold !text-gray-900-1">
                      Lana Steiner
                    </p>
                    <p className="text-[0.88rem] font-normal !text-gray-600">
                      18 Jan 2024
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
