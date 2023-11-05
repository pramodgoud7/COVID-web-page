import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Covid2StateDropdown from "components/Covid2StateDropdown";
import Header1 from "components/Header1";

const Covid2StatePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start pb-24 w-full">
          <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
            <Header1 className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col items-start justify-start max-w-[1146px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50"
                    size="txtRobotoMedium48"
                  >
                    Andhra Pradesh
                  </Text>
                  <Text
                    className="text-blue_gray-100 text-lg"
                    size="txtRobotoRegular18"
                  >
                    Last update on march 28th 2021.
                  </Text>
                </div>
                <div className="flex flex-col items-end justify-start">
                  <Text
                    className="text-base text-blue_gray-300"
                    size="txtRobotoMedium16Bluegray300"
                  >
                    <>Tested</>
                  </Text>
                  <Text
                    className="mt-1 text-2xl md:text-[22px] text-blue_gray-300 text-right sm:text-xl"
                    size="txtRobotoMedium24Bluegray300"
                  >
                    2 0239490
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[63px] w-[93%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-gray-900_03 flex md:flex-1 flex-col gap-[27px] items-center justify-end p-10 sm:px-5 rounded-[12px] w-[26%] md:w-full">
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
                  <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-[64%] md:w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-[97%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
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
                      <div className="md:gap-10 gap-64 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[97%] md:w-full">
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
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
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
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[114px] mt-16 w-[68%] md:w-full">
                <Img
                  className="h-[468px]"
                  src="images/img_group7354.svg"
                  alt="group7354"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-blue_gray-300 text-xl"
                    size="txtRobotoMedium20Bluegray300"
                  >
                    NCP report{" "}
                  </Text>
                  <Text
                    className="mt-[29px] text-base text-gray-100"
                    size="txtRobotoMedium16Gray100"
                  >
                    Population
                  </Text>
                  <Text
                    className="mt-2.5 text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                    size="txtRobotoMedium24Bluegray300"
                  >
                    52221000{" "}
                  </Text>
                  <Text
                    className="mt-[35px] text-base text-gray-100"
                    size="txtRobotoMedium16Gray100"
                  >
                    Tested
                  </Text>
                  <Text
                    className="mt-3 text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                    size="txtRobotoMedium24Bluegray300"
                  >
                    15021036{" "}
                  </Text>
                  <Text
                    className="mt-[18px] text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    <>(As of 29 Marchper source)</>
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[103px] md:text-3xl sm:text-[28px] text-[32px] text-red-A400"
                size="txtRobotoMedium32"
              >
                Top Districts
              </Text>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[119px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[33px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[98%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="mb-0.5 mt-[7px] text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Vizianagaram
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[98%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        <>East Godavari</>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[77%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        <>Chittoor</>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[72%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Guntur
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        West Godavari
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[81%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Prakasam
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[82%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="mb-0.5 mt-[7px] text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Anantapur
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="mb-0.5 mt-[7px] text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Visakhapatnam
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[93%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        S.P.S. Nellore
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[73%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Kurnool
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[81%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Prakasam
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[82%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="mb-0.5 mt-[7px] text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Anantapur
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="mb-0.5 mt-[7px] text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Visakhapatnam
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[93%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        S.P.S. Nellore
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[73%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Kurnool
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[77%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Krishna
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="mb-0.5 mt-[7px] text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Y.S.R. Kadapa
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[90%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Srikakulam
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[77%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Kurnool
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[21px] items-end justify-start w-[91%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                        size="txtRobotoMedium24Bluegray300"
                      >
                        77077
                      </Text>
                      <Text
                        className="my-1 text-base text-blue_gray-300"
                        size="txtRobotoMedium16Bluegray300"
                      >
                        Other State
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="sm:h-[1191px] md:h-[1332px] h-[431px] md:ml-[0] ml-[54px] mt-[95px] relative w-[91%] md:w-full">
                <Text
                  className="ml-auto mr-[118px] mt-[73px] text-base text-blue-900"
                  size="txtRobotoMedium16Blue900"
                >
                  1.6L
                </Text>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-12 items-end justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-2 items-center justify-start md:mt-0 mt-[45px] w-4/5 md:w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-[97%] md:w-full">
                          <Text
                            className="text-base text-pink-900"
                            size="txtRobotoMedium16Pink900"
                          >
                            1.4L
                          </Text>
                          <Text
                            className="text-base text-pink-900"
                            size="txtRobotoMedium16Pink900"
                          >
                            1.4L
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                          <div className="bg-pink-900 h-[328px] rounded-tl-lg rounded-tr-lg w-[8%]"></div>
                          <div className="flex flex-col gap-2 items-center justify-start sm:mt-0 mt-[26px]">
                            <Text
                              className="text-base text-pink-900"
                              size="txtRobotoMedium16Pink900"
                            >
                              98.2K
                            </Text>
                            <div className="bg-pink-900 h-[274px] rounded-tl-lg rounded-tr-lg w-full"></div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start sm:mt-0 mt-[11px]">
                            <Text
                              className="text-base text-pink-900"
                              size="txtRobotoMedium16Pink900"
                            >
                              1L
                            </Text>
                            <div className="bg-pink-900 h-[289px] rounded-tl-lg rounded-tr-lg w-full"></div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start">
                            <Text
                              className="text-base text-pink-900"
                              size="txtRobotoMedium16Pink900"
                            >
                              1.2L
                            </Text>
                            <div className="bg-pink-900 h-[300px] rounded-tl-lg rounded-tr-lg w-full"></div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start sm:mt-0 mt-[49px]">
                            <Text
                              className="text-base text-pink-900"
                              size="txtRobotoMedium16Pink900"
                            >
                              96.4K
                            </Text>
                            <div className="bg-pink-900 h-[251px] rounded-tl-lg rounded-tr-lg w-full"></div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start sm:mt-0 mt-[33px]">
                            <Text
                              className="text-base text-pink-900"
                              size="txtRobotoMedium16Pink900"
                            >
                              98.2K
                            </Text>
                            <div className="bg-pink-900 h-[267px] rounded-tl-lg rounded-tr-lg w-full"></div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start sm:mt-0 mt-[11px]">
                            <Text
                              className="text-base text-pink-900"
                              size="txtRobotoMedium16Pink900"
                            >
                              1L
                            </Text>
                            <div className="bg-pink-900 h-[289px] rounded-tl-lg rounded-tr-lg w-full"></div>
                          </div>
                          <div className="bg-pink-900 h-[328px] rounded-tl-lg rounded-tr-lg w-[8%]"></div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-3 items-center justify-start w-[6%] md:w-full">
                        <Text
                          className="text-base text-pink-900"
                          size="txtRobotoMedium16Pink900"
                        >
                          1.4L
                        </Text>
                        <div className="bg-pink-900 h-[369px] rounded-tl-lg rounded-tr-lg w-full"></div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-3 items-center justify-start md:mt-0 mt-[117px] w-[6%] md:w-full">
                        <Text
                          className="text-base text-pink-900"
                          size="txtRobotoMedium16Pink900"
                        >
                          96.4K
                        </Text>
                        <div className="bg-pink-900 h-[251px] rounded-tl-lg rounded-tr-lg w-full"></div>
                      </div>
                    </div>
                    <div className="gap-[55px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 items-center justify-between w-full">
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        02 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        03 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        04 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        05 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        06 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        07 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        08 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        09 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        10 JUN
                      </Text>
                      <Text
                        className="flex-1 text-base text-pink-900 w-full"
                        size="txtRobotoMedium16Pink900"
                      >
                        11 JUN
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="mt-[103px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100"
                size="txtRobotoMedium32Bluegray100"
              >
                Spread Trends
              </Text>
              <div className="flex flex-row items-center justify-start mt-[34px] w-1/4 md:w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[140px] text-center text-xl"
                  shape="square"
                  color="gray_900_05"
                  size="sm"
                >
                  Cumulative
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[140px] ml-1 text-center text-xl"
                  shape="square"
                  color="gray_900_01"
                  size="sm"
                >
                  Daily
                </Button>
              </div>
              <Covid2StateDropdown className="flex flex-col font-inter items-start justify-start mt-8 w-[486px] sm:w-full" />
              <div className="bg-gray-900_03 flex flex-col font-roboto items-center justify-start mt-12 pb-[23px] sm:px-5 px-[23px] rounded-[12px] w-full">
                <div className="flex md:flex-col flex-row gap-2 items-start justify-start w-[97%] md:w-full">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[54px]">
                    <Text
                      className="text-base text-red-A400"
                      size="txtRobotoMedium16"
                    >
                      4k
                    </Text>
                    <Text
                      className="mt-[26px] text-base text-red-A400"
                      size="txtRobotoMedium16"
                    >
                      3k
                    </Text>
                    <Text
                      className="mt-[35px] text-base text-red-A400"
                      size="txtRobotoMedium16"
                    >
                      2k
                    </Text>
                    <Text
                      className="mt-9 text-base text-red-A400"
                      size="txtRobotoMedium16"
                    >
                      1k
                    </Text>
                    <Text
                      className="mt-[29px] text-base text-red-A400"
                      size="txtRobotoMedium16"
                    >
                      0
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start w-[98%] md:w-full">
                    <div className="md:h-[269px] h-[280px] relative w-full">
                      <div className="absolute bottom-[0] md:h-[163px] h-[246px] inset-x-[0] mx-auto w-full">
                        <div className="absolute flex flex-col items-center justify-start right-[0] top-[0]">
                          <Text
                            className="text-base text-red-A400"
                            size="txtRobotoMedium16"
                          >
                            Confirmed
                          </Text>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat h-[238px] inset-[0] justify-center m-auto p-[11px] w-[98%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group632.svg')",
                          }}
                        >
                          <div className="bg-gray-300 md:h-[0] h-[76px] mb-[-24px] ml-[201px] p-2.5 rounded w-[76px] z-[1]">
                            <Text
                              className="absolute inset-x-[0] mx-auto text-red-A400 text-xs top-1/4 w-max"
                              size="txtRobotoMedium12"
                            >
                              16 April
                            </Text>
                            <Text
                              className="absolute bottom-1/4 right-[13%] text-red-A400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              -34
                            </Text>
                            <Text
                              className="absolute bottom-[24%] left-[13%] text-red-A400 text-xl"
                              size="txtRobotoMedium20"
                            >
                              201
                            </Text>
                          </div>
                          <Img
                            className="h-[163px] mt-auto mx-auto"
                            src="images/img_group7421.svg"
                            alt="group7421"
                          />
                        </div>
                      </div>
                      <Line className="absolute bg-red-A400 h-[269px] inset-y-[0] left-[20%] my-auto w-px" />
                    </div>
                    <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
                      <Text
                        className="text-base text-center text-red-A400"
                        size="txtRobotoMedium16"
                      >
                        2021-10-23
                      </Text>
                      <Text
                        className="text-base text-center text-red-A400"
                        size="txtRobotoMedium16"
                      >
                        2021-11-22
                      </Text>
                      <Text
                        className="text-base text-center text-red-A400"
                        size="txtRobotoMedium16"
                      >
                        2021-11-22
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col font-roboto gap-8 items-center mt-8 w-full"
                orientation="vertical"
              >
                <div className="bg-blue_gray-900 flex flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-[12px] w-full">
                  <div className="flex md:flex-col flex-row gap-2 items-center justify-start mt-2.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-light_blue-A700"
                        size="txtRobotoMedium16LightblueA700"
                      >
                        20k
                      </Text>
                      <Text
                        className="mt-[26px] text-base text-light_blue-A700"
                        size="txtRobotoMedium16LightblueA700"
                      >
                        15k
                      </Text>
                      <Text
                        className="mt-9 text-base text-light_blue-A700"
                        size="txtRobotoMedium16LightblueA700"
                      >
                        10k
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[9px] mt-9 text-base text-light_blue-A700"
                        size="txtRobotoMedium16LightblueA700"
                      >
                        5k
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[17px] mt-[29px] text-base text-light_blue-A700"
                        size="txtRobotoMedium16LightblueA700"
                      >
                        0
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-center justify-start w-[97%] md:w-full">
                      <div className="flex md:h-[238px] h-[246px] justify-end relative w-full">
                        <div className="absolute flex flex-col items-center justify-start right-[0] top-[0]">
                          <Text
                            className="text-base text-light_blue-A700"
                            size="txtRobotoMedium16LightblueA700"
                          >
                            Total Active
                          </Text>
                        </div>
                        <Img
                          className="h-[163px] mb-2.5 mt-auto mx-auto"
                          src="images/img_group7423.svg"
                          alt="group7423"
                        />
                        <Img
                          className="absolute h-[238px] inset-[0] justify-center m-auto"
                          src="images/img_vector5.svg"
                          alt="vectorFive"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
                        <Text
                          className="text-base text-center text-light_blue-A700"
                          size="txtRobotoMedium16LightblueA700"
                        >
                          2021-10-23
                        </Text>
                        <Text
                          className="text-base text-center text-light_blue-A700"
                          size="txtRobotoMedium16LightblueA700"
                        >
                          2021-11-22
                        </Text>
                        <Text
                          className="text-base text-center text-light_blue-A700"
                          size="txtRobotoMedium16LightblueA700"
                        >
                          2021-11-22
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_04 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[12px] w-full">
                  <div className="flex md:flex-col flex-row gap-2 items-center justify-start mt-[9px] w-[97%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-green-700"
                        size="txtRobotoMedium16Green700"
                      >
                        4k
                      </Text>
                      <Text
                        className="mt-[81px] text-base text-green-700"
                        size="txtRobotoMedium16Green700"
                      >
                        2k
                      </Text>
                      <Text
                        className="ml-2 md:ml-[0] mt-[84px] text-base text-green-700"
                        size="txtRobotoMedium16Green700"
                      >
                        0
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-center justify-start w-[98%] md:w-full">
                      <div className="md:h-[238px] h-[245px] relative w-full">
                        <div className="md:h-[238px] h-[245px] m-auto w-full">
                          <div className="absolute flex flex-col items-center justify-start right-[0] top-[0]">
                            <Text
                              className="text-base text-green-700"
                              size="txtRobotoMedium16Green700"
                            >
                              Recovered
                            </Text>
                          </div>
                          <Img
                            className="absolute h-[238px] inset-[0] justify-center m-auto"
                            src="images/img_vector6.svg"
                            alt="vectorSix"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[4%] h-[98px] inset-x-[0] mx-auto"
                          src="images/img_group7425.svg"
                          alt="group7425"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
                        <Text
                          className="text-base text-center text-green-700"
                          size="txtRobotoMedium16Green700"
                        >
                          2021-10-23
                        </Text>
                        <Text
                          className="text-base text-center text-green-700"
                          size="txtRobotoMedium16Green700"
                        >
                          2021-11-22
                        </Text>
                        <Text
                          className="text-base text-center text-green-700"
                          size="txtRobotoMedium16Green700"
                        >
                          2021-11-22
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_05 flex flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-[12px] w-full">
                  <div className="flex md:flex-col flex-row gap-2 items-start justify-start mt-2.5 w-[97%] md:w-full">
                    <div className="flex flex-col md:gap-10 gap-[71px] items-end justify-start md:mt-0 mt-[58px] w-[2%] md:w-full">
                      <Text
                        className="h-[19px] text-base text-gray-600"
                        size="txtRobotoMedium16Gray600"
                      >
                        10
                      </Text>
                      <div className="flex flex-col gap-14 items-center justify-start">
                        <Text
                          className="text-base text-gray-600 text-right"
                          size="txtRobotoMedium16Gray600"
                        >
                          5
                        </Text>
                        <Text
                          className="text-base text-gray-600"
                          size="txtRobotoMedium16Gray600"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-center justify-start w-[98%] md:w-full">
                      <div className="flex md:h-[238px] h-[246px] justify-end relative w-full">
                        <div className="absolute flex flex-col items-center justify-start right-[0] top-[0]">
                          <Text
                            className="text-base text-gray-600"
                            size="txtRobotoMedium16Gray600"
                          >
                            Deceased
                          </Text>
                        </div>
                        <Img
                          className="h-[163px] mb-2.5 mt-auto mx-auto"
                          src="images/img_group7427.svg"
                          alt="group7427"
                        />
                        <Img
                          className="absolute h-[238px] inset-[0] justify-center m-auto"
                          src="images/img_vector7.svg"
                          alt="vectorSeven"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
                        <Text
                          className="text-base text-center text-gray-600"
                          size="txtRobotoMedium16Gray600"
                        >
                          2021-10-23
                        </Text>
                        <Text
                          className="text-base text-center text-gray-600"
                          size="txtRobotoMedium16Gray600"
                        >
                          2021-11-22
                        </Text>
                        <Text
                          className="text-base text-center text-gray-600"
                          size="txtRobotoMedium16Gray600"
                        >
                          2021-11-22
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-900_01 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[12px] w-full">
                  <div className="flex md:flex-col flex-row gap-2 items-center justify-start mt-[9px] w-[98%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-deep_purple-300"
                        size="txtRobotoMedium16Deeppurple300"
                      >
                        1
                      </Text>
                      <Text
                        className="mt-[81px] text-base text-deep_purple-300"
                        size="txtRobotoMedium16Deeppurple300"
                      >
                        0
                      </Text>
                      <Text
                        className="mt-[84px] text-base text-deep_purple-300"
                        size="txtRobotoMedium16Deeppurple300"
                      >
                        0
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 justify-start w-[99%] md:w-full">
                      <div className="md:h-[238px] h-[245px] relative w-full">
                        <div className="md:h-[238px] h-[245px] m-auto w-full">
                          <div className="absolute flex flex-col items-center justify-start right-[0] top-[0]">
                            <Text
                              className="text-base text-deep_purple-300"
                              size="txtRobotoMedium16Deeppurple300"
                            >
                              Tested
                            </Text>
                          </div>
                          <Img
                            className="absolute h-[238px] inset-[0] justify-center m-auto"
                            src="images/img_vector6_deep_purple_300.svg"
                            alt="vectorSix"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[4%] h-[27px] inset-x-[0] mx-auto"
                          src="images/img_group7425_deep_purple_300.svg"
                          alt="group7425"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[115px] w-[74%] md:w-full">
                        <Text
                          className="text-base text-center text-deep_purple-300"
                          size="txtRobotoMedium16Deeppurple300"
                        >
                          2021-10-23
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[260px] text-base text-center text-deep_purple-300"
                          size="txtRobotoMedium16Deeppurple300"
                        >
                          2021-11-22
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[261px] text-base text-center text-deep_purple-300"
                          size="txtRobotoMedium16Deeppurple300"
                        >
                          2021-11-22
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <Text
                className="md:ml-[0] ml-[492px] mt-[123px] text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
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
                className="md:ml-[0] ml-[396px] mt-[26px] text-base text-blue_gray-300 text-center"
                size="txtRobotoRegular16"
              >
                we stand with everyone fighting on the front lines
              </Text>
              <div className="flex flex-row gap-16 items-start justify-center md:ml-[0] ml-[437px] mt-[25px] w-[24%] md:w-full">
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
      </div>
    </>
  );
};

export default Covid2StatePage;
