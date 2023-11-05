import React from "react";

import { Img, Text } from "components";
import CovidErrorButton from "components/CovidErrorButton";

const CovidErrorPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start p-[230px] md:px-10 sm:px-5 w-full">
          <Img
            className="h-[300px]"
            src="images/img_group7484.svg"
            alt="group7484"
          />
          <Text
            className="mt-9 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100 text-center"
            size="txtRobotoMedium32Bluegray100"
          >
            PAGE NOT FOUND
          </Text>
          <Text
            className="mt-6 text-blue_gray-300 text-center text-xl"
            size="txtRobotoRegular20"
          >
            <>
              we’re sorry, the page you requested could not be found
              <br />
              Please go back to the homepage
            </>
          </Text>
          <CovidErrorButton className="flex flex-col font-inter items-center justify-start mb-6 mt-8 rounded w-auto" />
        </div>
      </div>
    </>
  );
};

export default CovidErrorPage;
