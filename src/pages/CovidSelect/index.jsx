import React from "react";

import { Img, List, Text } from "components";
import Header from "components/Header";

const CovidSelectPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-gray-900 flex flex-col md:gap-10 gap-24 items-center justify-start pb-24 w-full">
          <Header className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1146px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900_03 flex flex-1 flex-col gap-[27px] items-center justify-end p-10 sm:px-5 rounded-[12px] w-full">
              <Text
                className="mt-[9px] text-base text-red-A400"
                size="txtRobotoMedium16"
              >
                Confirmed
              </Text>
              <Img
                className="h-[38px] w-[38px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
              <Text
                className="text-2xl md:text-[22px] text-center text-red-A400 sm:text-xl"
                size="txtRobotoMedium24"
              >
                34285612
              </Text>
            </div>
            <div className="bg-blue_gray-900 flex flex-1 flex-col gap-[29px] items-center justify-end p-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-col gap-[27px] items-center justify-start mt-[9px] w-1/4 md:w-full">
                <Text
                  className="text-base text-light_blue-A700"
                  size="txtRobotoMedium16LightblueA700"
                >
                  Active
                </Text>
                <Img
                  className="h-[38px] w-[38px]"
                  src="images/img_clock.svg"
                  alt="clock"
                />
              </div>
              <Text
                className="text-2xl md:text-[22px] text-center text-light_blue-A700 sm:text-xl"
                size="txtRobotoMedium24LightblueA700"
              >
                165803
              </Text>
            </div>
            <div className="bg-gray-900_04 flex flex-1 flex-col gap-[27px] items-center justify-end p-10 sm:px-5 rounded-[12px] w-full">
              <Text
                className="mt-[9px] text-base text-green-600"
                size="txtRobotoMedium16Green600"
              >
                Recovered
              </Text>
              <Img
                className="h-[38px] w-[38px]"
                src="images/img_recovered1.svg"
                alt="recoveredOne"
              />
              <Text
                className="text-2xl md:text-[22px] text-center text-green-600 sm:text-xl"
                size="txtRobotoMedium24Green600"
              >
                33661339
              </Text>
            </div>
            <div className="bg-gray-900_06 flex flex-1 flex-col gap-[27px] items-center justify-end p-10 sm:px-5 rounded-[12px] w-full">
              <Text
                className="mt-[9px] text-base text-gray-600"
                size="txtRobotoMedium16Gray600"
              >
                Deceased
              </Text>
              <Img
                className="h-[38px] w-[38px]"
                src="images/img_breathing1.svg"
                alt="breathingOne"
              />
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                size="txtRobotoMedium24Gray600"
              >
                458470
              </Text>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default CovidSelectPage;
