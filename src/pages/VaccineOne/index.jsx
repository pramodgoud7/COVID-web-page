import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Covid2StateDropdown from "components/Covid2StateDropdown";
import Header1 from "components/Header1";

const VaccineOnePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-roboto items-center justify-start mx-auto pb-24 w-full">
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
          <Header1 className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1148px] mx-auto md:px-5 w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-[32%] md:w-full">
              <Img
                className="h-8 w-8"
                src="images/img_home.svg"
                alt="home_One"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100"
                size="txtRobotoMedium32Bluegray100"
              >
                India/Andhra Pradesh
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row font-inter gap-4 grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[602px] mt-[37px] w-[48%]"
              orientation="horizontal"
            >
              <Covid2StateDropdown
                className="flex flex-col items-start justify-start w-[264px]"
                districttext="Select State"
              />
              <Covid2StateDropdown className="flex flex-col items-start justify-start w-[264px]" />
            </List>
            <List
              className="sm:flex-col flex-row font-roboto gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center mt-6 w-full"
              orientation="horizontal"
            >
              <div className="bg-blue_gray-900_05 flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded-[12px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[27px] items-center justify-start my-0.5 w-[59%] md:w-full">
                  <div className="flex flex-row gap-3 items-center justify-between w-full">
                    <Button
                      className="flex h-[47px] items-center justify-center w-[47px]"
                      shape="round"
                    >
                      <Img
                        className="h-[29px]"
                        src="images/img_vaccines1.svg"
                        alt="vaccinesOne"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-blue_gray-100 text-lg"
                        size="txtRobotoMedium18"
                      >
                        Site Conducting Vaccination
                      </Text>
                      <Text
                        className="mt-1 text-lg text-white-A700"
                        size="txtRobotoBold18"
                      >
                        1339
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[59%] md:w-full">
                    <div className="flex flex-row gap-8 items-center justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-100"
                        size="txtRobotoRegular16Bluegray100"
                      >
                        Government
                      </Text>
                      <Text
                        className="text-base text-blue_gray-100"
                        size="txtRobotoRegular16Bluegray100"
                      >
                        Private
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[82px] items-center justify-start w-[82%] md:w-full">
                      <Text
                        className="text-base text-gray-300"
                        size="txtRobotoMedium16Indigo50"
                      >
                        1296
                      </Text>
                      <Text
                        className="h-[19px] text-base text-gray-300"
                        size="txtRobotoMedium16Indigo50"
                      >
                        43
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-900_05 flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded-[12px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[27px] justify-start my-0.5 w-[52%] md:w-full">
                  <div className="flex flex-row gap-3 items-start justify-between w-full">
                    <Img
                      className="h-[47px] mt-0.5 w-[47px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-blue_gray-100 text-lg"
                        size="txtRobotoMedium18"
                      >
                        Total Vaccination Doses{" "}
                      </Text>
                      <Text
                        className="text-lg text-white-A700"
                        size="txtRobotoBold18"
                      >
                        11698535
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[59px] w-[67%] md:w-full">
                    <div className="flex flex-row gap-14 items-center justify-start w-[92%] md:w-full">
                      <Text
                        className="text-base text-blue_gray-100"
                        size="txtRobotoRegular16Bluegray100"
                      >
                        Dose 1
                      </Text>
                      <Text
                        className="text-base text-blue_gray-100"
                        size="txtRobotoRegular16Bluegray100"
                      >
                        Dose 2
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[39px] items-center justify-between w-full">
                      <Text
                        className="text-base text-gray-300"
                        size="txtRobotoMedium16Indigo50"
                      >
                        9088029
                      </Text>
                      <Text
                        className="text-base text-gray-300"
                        size="txtRobotoMedium16Indigo50"
                      >
                        9088029
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="bg-gray-900_05 flex flex-col font-roboto items-center justify-start mt-12 p-8 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-col gap-5 items-start justify-start my-0.5 w-[99%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                  size="txtRobotoMedium24Bluegray300"
                >
                  Vaccination Trends
                </Text>
                <div className="flex flex-row gap-6 items-start justify-start w-[15%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[49%]">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtRobotoBold18"
                    >
                      By Doses
                    </Text>
                    <Line className="bg-white-A700 h-0.5 mt-[3px] rounded-[1px] w-full" />
                  </div>
                  <Text
                    className="text-blue_gray-300 text-lg"
                    size="txtRobotoRegular18Bluegray300"
                  >
                    By Age
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-2 items-center justify-between w-full">
                  <div className="flex flex-col gap-[29px] items-start justify-start">
                    <Text
                      className="text-base text-gray-600 text-right"
                      size="txtRobotoMedium16Gray600"
                    >
                      40K
                    </Text>
                    <Text
                      className="text-base text-gray-600 text-right"
                      size="txtRobotoMedium16Gray600"
                    >
                      35K
                    </Text>
                    <Text
                      className="text-base text-gray-600 text-right"
                      size="txtRobotoMedium16Gray600"
                    >
                      30K
                    </Text>
                    <Text
                      className="text-base text-gray-600 text-right"
                      size="txtRobotoMedium16Gray600"
                    >
                      25K
                    </Text>
                    <Text
                      className="text-base text-gray-600 text-right"
                      size="txtRobotoMedium16Gray600"
                    >
                      20K
                    </Text>
                    <Text
                      className="text-base text-gray-600 text-right"
                      size="txtRobotoMedium16Gray600"
                    >
                      15K
                    </Text>
                    <Text
                      className="text-base text-gray-600 text-right"
                      size="txtRobotoMedium16Gray600"
                    >
                      10K
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[9px] text-base text-gray-600 text-right"
                      size="txtRobotoMedium16Gray600"
                    >
                      5K
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-gray-600"
                      size="txtRobotoMedium16Gray600"
                    >
                      0
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[9px] justify-start w-[97%] md:w-full">
                    <div className="h-[446px] relative w-full">
                      <div className="h-[446px] m-auto w-full">
                        <div className="absolute h-[446px] inset-[0] justify-center m-auto w-full">
                          <div className="h-[446px] m-auto w-full">
                            <div className="h-[446px] m-auto w-full">
                              <div className="h-[446px] m-auto w-full">
                                <div className="h-[446px] m-auto w-full">
                                  <div className="h-[446px] m-auto w-full">
                                    <Img
                                      className="absolute h-[446px] inset-[0] justify-center m-auto"
                                      src="images/img_vector7_gray_600.svg"
                                      alt="vectorSeven"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto pl-1.5 py-1.5 w-[99%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group663.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[343px] mt-14"
                                        src="images/img_vector16.svg"
                                        alt="vectorSixteen"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-[5px] w-[99%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group664.svg')",
                                    }}
                                  >
                                    <div className="bg-purple-500 h-2 mb-[391px] mr-[122px] rounded-[50%] w-2"></div>
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[348px] inset-x-[0] items-end justify-start mx-auto p-[46px] md:px-10 sm:px-5 w-[99%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group665.svg')",
                                  }}
                                >
                                  <div className="bg-yellow-400 h-2 mb-[247px] mr-[329px] rounded-[50%] w-2"></div>
                                </div>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[271px] inset-x-[0] justify-end mx-auto w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group666.svg')",
                                }}
                              >
                                <div className="bg-green-600_01 h-2 md:ml-[0] ml-[633px] mr-[379px] mt-9 rounded-[50%] w-2"></div>
                                <div className="bg-purple-500 h-2 md:ml-[0] ml-[449px] mr-[563px] mt-[27px] rounded-[50%] w-2"></div>
                                <div className="flex flex-col md:gap-10 gap-16 items-start justify-start md:ml-[0] ml-[472px] mr-[539px] mt-4 w-[1%] md:w-full">
                                  <div className="bg-yellow-400_01 h-2 rounded-[50%] w-2"></div>
                                  <div className="bg-green-600_01 h-2 rounded-[50%] w-2"></div>
                                </div>
                                <div className="bg-purple-500 h-2 md:ml-[0] ml-[180px] mr-[832px] mt-[69px] rounded-[50%] w-2"></div>
                                <div className="flex md:flex-col flex-row gap-1.5 items-start justify-start md:ml-[0] ml-[145px] mr-[853px] mt-0.5 w-[3%] md:w-full">
                                  <div className="bg-green-600_01 h-2 md:mt-0 mt-1.5 rounded-[50%] w-2"></div>
                                  <div className="bg-yellow-400 h-2 mb-1.5 rounded-[50%] w-2"></div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-yellow-400 bottom-[3%] h-2 left-[1%] rounded-[50%] w-2"></div>
                          </div>
                          <div className="absolute bg-green-600_01 bottom-[3%] h-2 left-[1%] rounded-[50%] w-2"></div>
                        </div>
                        <div className="absolute bg-purple-700 bottom-[4%] h-2 left-[1%] rounded-[50%] w-2"></div>
                        <div className="absolute flex flex-col md:gap-10 gap-[68px] justify-start right-[15%] top-[17%] w-[24%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="bg-purple-500 h-2 rounded-[50%] w-2"></div>
                            <div className="bg-yellow-400 h-2 rounded-[50%] w-2"></div>
                          </div>
                          <div className="bg-green-600_01 h-2 md:ml-[0] ml-[203px] mr-[35px] rounded-[50%] w-2"></div>
                        </div>
                        <div className="absolute bg-purple-500 h-2 right-[0] rounded-[50%] top-[19%] w-2"></div>
                        <div className="absolute bg-green-600_01 h-2 right-[0] rounded-[50%] top-[45%] w-2"></div>
                      </div>
                      <div className="absolute bottom-[4%] flex flex-col gap-3.5 inset-x-[0] items-end justify-start mx-auto w-[99%]">
                        <div className="bg-yellow-400_01 h-2 rounded-[50%] w-2"></div>
                        <Img
                          className="h-[271px]"
                          src="images/img_vector13.svg"
                          alt="vectorThirteen"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[136px] w-[86%] md:w-full">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoMedium16Gray600"
                      >
                        08:00
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[303px] text-base text-gray-600"
                        size="txtRobotoMedium16Gray600"
                      >
                        09.00
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[126px] text-base text-gray-600"
                        size="txtRobotoMedium16Gray600"
                      >
                        10:00
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[139px] text-base text-gray-600"
                        size="txtRobotoMedium16Gray600"
                      >
                        11:00
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[109px] text-base text-gray-600"
                        size="txtRobotoMedium16Gray600"
                      >
                        12:00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-roboto mt-12 relative w-full">
              <div className="flex md:flex-col flex-row gap-8 items-start justify-between m-auto w-full">
                <div className="md:h-[424px] sm:h-[637px] h-[768px] relative w-[49%] md:w-full">
                  <div className="absolute bg-gray-900_05 flex flex-col md:gap-10 gap-[253px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[12px] top-[0] w-full">
                    <Text
                      className="mt-[5px] text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                      size="txtRobotoMedium24Bluegray300"
                    >
                      Vaccination Category
                    </Text>
                    <List
                      className="flex flex-col gap-[261px] items-center w-[57%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-start justify-end w-[78%] md:w-full">
                        <div className="bg-purple-700 h-3 my-[3px] rounded-[50%] w-3"></div>
                        <Text
                          className="ml-1.5 text-base text-blue_gray-300"
                          size="txtRobotoMedium16Bluegray300"
                        >
                          Male
                        </Text>
                        <div className="bg-blue-A200_01 h-3 ml-4 my-[3px] rounded-[50%] w-3"></div>
                        <Text
                          className="ml-1.5 text-base text-blue_gray-300"
                          size="txtRobotoMedium16Bluegray300"
                        >
                          Female
                        </Text>
                        <div className="bg-orange-500 h-3 ml-4 my-[3px] rounded-[50%] w-3"></div>
                        <Text
                          className="ml-1.5 text-base text-blue_gray-300"
                          size="txtRobotoMedium16Bluegray300"
                        >
                          Others
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="bg-light_blue-800 h-3 my-1 rounded-[50%] w-3"></div>
                        <Text
                          className="text-base text-blue_gray-300"
                          size="txtRobotoMedium16Bluegray300"
                        >
                          Covishield
                        </Text>
                        <div className="bg-light_green-600 h-3 my-1 rounded-[50%] w-3"></div>
                        <Text
                          className="text-base text-blue_gray-300"
                          size="txtRobotoMedium16Bluegray300"
                        >
                          Covaxin
                        </Text>
                        <div className="bg-orange-500 h-3 my-1 rounded-[50%] w-3"></div>
                        <Text
                          className="text-base text-blue_gray-300"
                          size="txtRobotoMedium16Bluegray300"
                        >
                          Sputnik V
                        </Text>
                      </div>
                    </List>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[400px] right-[5%]"
                    src="images/img_group7441.svg"
                    alt="group7441"
                  />
                </div>
                <div className="bg-gray-900_05 flex md:flex-1 flex-col justify-start mb-32 p-[31px] sm:px-5 rounded-[12px] w-[49%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl"
                    size="txtRobotoMedium24Bluegray300"
                  >
                    Vaccination by Age
                  </Text>
                  <Img
                    className="h-[420px] mt-[39px] mx-auto w-[420px]"
                    src="images/img_group7440.svg"
                    alt="group7440"
                  />
                  <div className="flex flex-row items-start justify-center mb-9 ml-32 md:ml-[0] mt-[33px] w-[48%] md:w-full">
                    <div className="bg-green-200 h-3 my-[3px] rounded-[50%] w-3"></div>
                    <Text
                      className="ml-1.5 text-base text-blue_gray-300"
                      size="txtRobotoMedium16Bluegray300"
                    >
                      18-44
                    </Text>
                    <div className="bg-teal-300 h-3 ml-4 my-[3px] rounded-[50%] w-3"></div>
                    <Text
                      className="ml-1.5 text-base text-blue_gray-300"
                      size="txtRobotoMedium16Bluegray300"
                    >
                      45-60
                    </Text>
                    <div className="bg-blue-700 h-3 ml-4 my-[3px] rounded-[50%] w-3"></div>
                    <Text
                      className="ml-1.5 text-base text-blue_gray-300"
                      size="txtRobotoMedium16Bluegray300"
                    >
                      Above 80
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="h-[404px] ml-[87px] mt-[-NaNpx] z-[1]"
                src="images/img_group7437.svg"
                alt="group7437"
              />
              <Text
                className="mt-[-4.47px] mx-auto text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl z-[1]"
                size="txtRobotoMedium24Gray50"
              >
                <span className="text-gray-50 font-breeserif font-normal">
                  COVID19
                </span>
                <span className="text-blue-A200 font-breeserif font-normal">
                  INDIA
                </span>
              </Text>
            </div>
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
    </>
  );
};

export default VaccineOnePage;
