import React from "react";

import { Img, Line, List, Text } from "components";
import Header from "components/Header";

const CovidSearchPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start pb-24 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[72px] items-start justify-start mt-16 p-6 md:px-5 shadow-bs w-[58%] md:w-full"
              style={{
                backgroundImage: "url('images/img_search_blue_gray_900.svg')",
              }}
            >
              <div className="flex flex-row gap-2 items-start justify-start ml-2 md:ml-[0] w-[18%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="text-base text-blue_gray-300"
                  size="txtRobotoRegular16"
                >
                  Enter the State
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[979px] mt-[113px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                  <Text
                    className="text-base text-red-A400"
                    size="txtRobotoMedium16"
                  >
                    Confirmed
                  </Text>
                  <Text
                    className="text-base text-light_blue-A700"
                    size="txtRobotoMedium16LightblueA700"
                  >
                    Active
                  </Text>
                  <Text
                    className="text-base text-green-600"
                    size="txtRobotoMedium16Green600"
                  >
                    Recovered
                  </Text>
                  <Text
                    className="text-base text-gray-600"
                    size="txtRobotoMedium16Gray600"
                  >
                    Deceased
                  </Text>
                </div>
                <div className="md:gap-10 gap-64 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-[94%] md:w-full">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_recovered1.svg"
                    alt="recoveredOne"
                  />
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_breathing1.svg"
                    alt="breathingOne"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-red-A400 sm:text-xl"
                    size="txtRobotoMedium24"
                  >
                    34285612
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-light_blue-A700 sm:text-xl"
                    size="txtRobotoMedium24LightblueA700"
                  >
                    165803
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-green-600 sm:text-xl"
                    size="txtRobotoMedium24Green600"
                  >
                    33661339
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                    size="txtRobotoMedium24Gray600"
                  >
                    458470
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-col items-center justify-start max-w-[1146px] mt-[104px] mx-auto outline outline-[1px] outline-blue_gray-700 md:px-5 py-[25px] rounded-[12px] shadow-bs1 w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start mb-2 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                  <Text
                    className="text-base text-gray-50"
                    size="txtRobotoBold16"
                  >
                    States/UT
                  </Text>
                  <Img
                    className="h-5 ml-4 md:ml-[0] w-5"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                  <Img
                    className="h-5 ml-3 md:ml-[0] w-5"
                    src="images/img_menu.svg"
                    alt="menu_One"
                  />
                  <Text
                    className="md:ml-[0] ml-[149px] text-base text-gray-50"
                    size="txtRobotoBold16"
                  >
                    Confirmed
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[126px] text-base text-gray-50"
                    size="txtRobotoBold16"
                  >
                    Active
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[124px] text-base text-gray-50"
                    size="txtRobotoBold16"
                  >
                    Recovered
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[107px] text-base text-gray-50"
                    size="txtRobotoBold16"
                  >
                    Deceased
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[87px] text-base text-gray-50"
                    size="txtRobotoBold16"
                  >
                    Population
                  </Text>
                </div>
                <Line className="bg-blue_gray-700 h-px w-full" />
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[116px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-[95%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Andhra Pradesh
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Arunachal Pradesh
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Assam
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Bihar
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Chhattisgarh
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Goa
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Gujarat
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Haryana
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      <>Himachal Pradesh</>
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Jharkhand
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Karnataka
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Kerala
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Madhya Pradesh
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Maharashtra
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Manipur
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Meghalaya
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Mizoram
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Nagaland
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      <>Odisha</>
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Punjab
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Rajasthan
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Sikkim
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Tamil Nadu
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Telangana
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Tripura
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Uttarakhand
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Uttar Pradesh
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      West Bengal
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Andaman and Nicobar Islands
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Chandigarh
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[34px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      <>
                        Dadra and Nagar Haveli <br />
                        and Daman & Diu
                      </>
                    </Text>
                    <Text
                      className="mt-7 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      The Government of NCT of Delhi
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Ladakh
                    </Text>
                    <Text
                      className="mt-10 text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Lakshadweep
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-100 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Puducherry
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start w-full">
                    <Text
                      className="text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      11871
                    </Text>
                    <Text
                      className="mt-10 text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      60,871
                    </Text>
                    <Text
                      className="mt-[37px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-10 text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      2,871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      4,871
                    </Text>
                    <Text
                      className="mt-[37px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      2671
                    </Text>
                    <Text
                      className="mt-[38px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      487
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[38px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      124
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      24
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      1
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      1624
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[38px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      112
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      7248
                    </Text>
                    <Text
                      className="mt-[38px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      1124
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      2461
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      1148
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      11246
                    </Text>
                    <Text
                      className="mt-[51px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      671
                    </Text>
                    <Text
                      className="mt-[50px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      187
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-red-A400 text-right text-sm"
                      size="txtRobotoMedium14RedA400"
                    >
                      871
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start w-full">
                    <Text
                      className="text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      11871
                    </Text>
                    <Text
                      className="mt-[38px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      2871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      2671
                    </Text>
                    <Text
                      className="mt-[38px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      487
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[38px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      124
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      24
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      1
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      1624
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[38px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      112
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      7248
                    </Text>
                    <Text
                      className="mt-[38px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      1124
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      2461
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      1148
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      11246
                    </Text>
                    <Text
                      className="mt-[51px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      671
                    </Text>
                    <Text
                      className="mt-[50px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      187
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-light_blue-A700 text-right text-sm"
                      size="txtRobotoMedium14LightblueA700"
                    >
                      871
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start w-full">
                    <Text
                      className="text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      11871
                    </Text>
                    <Text
                      className="mt-[38px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      2871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      2671
                    </Text>
                    <Text
                      className="mt-[38px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      487
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[38px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      124
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      24
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      1
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      1624
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[38px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      112
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      7248
                    </Text>
                    <Text
                      className="mt-[38px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      1124
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      2461
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      1148
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      11246
                    </Text>
                    <Text
                      className="mt-[51px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      671
                    </Text>
                    <Text
                      className="mt-[50px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      187
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-green-600 text-right text-sm"
                      size="txtRobotoMedium14Green600"
                    >
                      871
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start w-full">
                    <Text
                      className="text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      11871
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      2871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      2671
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      487
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      124
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      24
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      1
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      1624
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      112
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      7248
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      1124
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      2461
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      1148
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      11246
                    </Text>
                    <Text
                      className="mt-[51px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      671
                    </Text>
                    <Text
                      className="mt-[50px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      187
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-gray-600 text-right text-sm"
                      size="txtRobotoMedium14Gray600"
                    >
                      871
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start w-full">
                    <Text
                      className="text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      11871
                    </Text>
                    <Text
                      className="mt-[38px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      2871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      2671
                    </Text>
                    <Text
                      className="mt-[38px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      487
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      6871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[38px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      124
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      24
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      1
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      71
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      1624
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[38px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      112
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      7248
                    </Text>
                    <Text
                      className="mt-[38px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      1124
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      60871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      2461
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      1148
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      11246
                    </Text>
                    <Text
                      className="mt-[51px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      671
                    </Text>
                    <Text
                      className="mt-[50px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      246
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      187
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      4871
                    </Text>
                    <Text
                      className="mt-[39px] text-blue_gray-300 text-right text-sm"
                      size="txtRobotoMedium14Bluegray300"
                    >
                      871
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <Text
              className="mt-[123px] text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
              size="txtRobotoMedium24Gray50"
            >
              <span className="text-gray-50 font-breeserif font-normal">
                COVID19
              </span>
              <span className="text-blue-A200 font-breeserif font-normal">
                INDIA
              </span>
            </Text>
            <Text
              className="mt-[26px] text-base text-blue_gray-300 text-center"
              size="txtRobotoRegular16"
            >
              we stand with everyone fighting on the front lines
            </Text>
            <div className="flex flex-row gap-16 items-start justify-center mt-[25px] md:px-5 w-[19%] md:w-full">
              <Img
                className="h-[46px] mt-[11px]"
                src="images/img_user.svg"
                alt="user"
              />
              <Img
                className="h-[61px]"
                src="images/img_instagram.svg"
                alt="instagram"
              />
              <Img
                className="h-10 mt-2"
                src="images/img_twitterbirdlogo2012.svg"
                alt="twitterbirdlogo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidSearchPage;
