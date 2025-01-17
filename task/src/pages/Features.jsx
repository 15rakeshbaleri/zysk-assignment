import React from "react";

import { Button, Card, CardContent, Typography } from "@mui/material";
const Features = () => {
  return (
    <div class="py-24 flex flex-col items-center justify-center bg-white">
      <div class="max-w-screen-xl px-6 gap-16 mx-auto flex flex-col">
        <div class="text-center space-y-4">
          <h2 class="text-red-600 text-lg font-semibold">Features</h2>
          <h3 class="text-3xl md:text-4xl text-gray-900 font-semibold">
            Analytics that feels like it’s from the future
          </h3>
          <p class="text-lg text-gray-600">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <button class="w-12 h-12 bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
              <img src="your-image-url" alt="Feature 1" class="w-6 h-6" />
            </button>
            <div class="text-center mt-4">
              <h5 class="text-xl font-semibold text-gray-900">
                Share team inboxes
              </h5>
              <p class="text-gray-600 mt-2">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <button class="w-12 h-12 bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
              <img src="your-image-url" alt="Feature 2" class="w-6 h-6" />
            </button>
            <div class="text-center mt-4">
              <h5 class="text-xl font-semibold text-gray-900">
                Deliver instant answers
              </h5>
              <p class="text-gray-600 mt-2">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <button class="w-12 h-12 bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
              <img src="your-image-url" alt="Feature 3" class="w-6 h-6" />
            </button>
            <div class="text-center mt-4">
              <h5 class="text-xl font-semibold text-gray-900">
                Manage your team with reports
              </h5>
              <p class="text-gray-600 mt-2">
                Measure what matters with easy-to-use reports. You can filter,
                export, and drill down on the data in just a couple of clicks.
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <button class="w-12 h-12 bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
              <img src="your-image-url" alt="Feature 4" class="w-6 h-6" />
            </button>
            <div class="text-center mt-4">
              <h5 class="text-xl font-semibold text-gray-900">
                Connect with customers
              </h5>
              <p class="text-gray-600 mt-2">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <button class="w-12 h-12 bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
              <img src="your-image-url" alt="Feature 4" class="w-6 h-6" />
            </button>
            <div class="text-center mt-4">
              <h5 class="text-xl font-semibold text-gray-900">
                Connect with customers
              </h5>
              <p class="text-gray-600 mt-2">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <button class="w-12 h-12 bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
              <img src="your-image-url" alt="Feature 4" class="w-6 h-6" />
            </button>
            <div class="text-center mt-4">
              <h5 class="text-xl font-semibold text-gray-900">
                Connect with customers
              </h5>
              <p class="text-gray-600 mt-2">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
