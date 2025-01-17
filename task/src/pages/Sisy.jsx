import React from "react";
import { Box, Typography, Avatar, Grid } from "@mui/material";

const Sisy = () => {
  return (
    <Box className="flex flex-col items-center bg-gray-50 py-20">
      <Box className="max-w-screen-lg mx-auto w-full">
        <Box className="px-6 sm:px-12 mt-24">
          <Box className="gap-8 flex flex-col items-center">
            <Box className="gap-2 flex items-center">
              <img
                className="h-10"
                src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_music.svg"
                alt="Music"
                loading="lazy"
              />
              <img
                className="mb-1 w-4/5 h-5 object-contain"
                src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_logotype_gray_900_1_22x104.svg"
                alt="Logotype"
                loading="lazy"
              />
            </Box>
            <Typography className="text-3xl sm:text-4xl md:text-5xl text-center font-medium text-gray-900">
              We’ve been using Untitled to kick start every new project and
              can’t imagine working without it.
            </Typography>
            <Box className="px-14 sm:px-32 gap-4 flex flex-col items-center mt-8">
              <Grid container justifyContent="center">
                <Grid
                  item
                  className="bg-cover bg-no-repeat rounded-full w-16 h-16"
                  style={{
                    backgroundImage:
                      "url('https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_avatar_64x64.png')",
                  }}
                >
                  <Box className="border border-solid border-gray-900 w-16 h-16 rounded-full" />
                </Grid>
              </Grid>
              <Box className="gap-1 flex flex-col items-center mt-3">
                <Typography className="text-lg font-semibold text-gray-900">
                  Candice Wu
                </Typography>
                <Typography className="text-base font-normal text-gray-600">
                  Product Manager, Sisyphus
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-center w-full bg-white">
        <Box className="max-w-screen-lg mx-auto w-full">
          <img
            className="h-1 object-cover w-full"
            src="https://dhws-production.s3.ap-south-1.amazonaws.com/678a8aa8a58033001c177b55/678a8ae81919a0002206d9b6/678a8ae81919a0002206d9bb/appSource/images/img_container.png"
            alt="Container"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sisy;
