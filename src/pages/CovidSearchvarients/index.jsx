import React from "react";

import { Img, Line, List, Text } from "components";
import CovidSearchvarientsBadgesghost4 from "components/CovidSearchvarientsBadgesghost4";
import Header from "components/Header";

const CovidSearchvarientsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-gray-900 flex flex-col md:gap-10 gap-16 items-center justify-start pb-[438px] w-full">
          <Header className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start md:px-5 w-[58%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[72px] items-start justify-end p-5 shadow-bs w-full"
              style={{
                backgroundImage: "url('images/img_search_blue_gray_900.svg')",
              }}
            >
              <div className="flex flex-row gap-3 items-start justify-start md:ml-[0] ml-[11px] mt-[3px] w-[7%] md:w-full">
                <Img
                  className="h-6 mb-[3px] w-6"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="mt-[3px] text-base text-blue_gray-500"
                  size="txtRobotoRegular16Bluegray500"
                >
                  a
                </Text>
                <Text
                  className="mt-2.5 text-2xl md:text-[22px] text-gray-300 sm:text-xl"
                  size="txtRobotoRegular24"
                >
                  |
                </Text>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-center justify-start mt-1 py-4 w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-[92%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-500"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    Andhra pradesh
                  </Text>
                  <CovidSearchvarientsBadgesghost4 className="bg-cyan-400_28 flex flex-row font-hkgrotesk items-start justify-start px-1.5 py-1 rounded w-auto" />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="h-16 relative w-full">
                    <Line className="bg-blue_gray-500 h-px mx-auto w-full" />
                    <div className="absolute bg-gray-900_02 flex flex-row sm:gap-10 h-full inset-[0] items-center justify-between m-auto outline outline-[1px] outline-blue_gray-300 p-4 w-full">
                      <Text
                        className="ml-8 text-base text-blue_gray-500"
                        size="txtRobotoRegular16Bluegray500"
                      >
                        Arunachal Pradesh
                      </Text>
                      <CovidSearchvarientsBadgesghost4
                        className="bg-cyan-400_28 flex flex-row font-hkgrotesk items-start justify-start mr-2 px-1.5 py-1 rounded w-auto"
                        optiontext="AN"
                      />
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-4 items-center w-[92%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-500"
                        size="txtRobotoRegular16Bluegray500"
                      >
                        Assam
                      </Text>
                      <CovidSearchvarientsBadgesghost4
                        className="bg-cyan-400_28 flex flex-row font-hkgrotesk items-start justify-start px-1.5 py-1 rounded w-auto"
                        optiontext="AS"
                      />
                    </div>
                    <Line className="self-center h-px bg-blue_gray-500 w-full" />
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-500"
                        size="txtRobotoRegular16Bluegray500"
                      >
                        Andaman and Nicobar Islands
                      </Text>
                      <CovidSearchvarientsBadgesghost4
                        className="bg-cyan-400_28 flex flex-row font-hkgrotesk items-start justify-start px-1.5 py-1 rounded w-auto"
                        optiontext="ANI"
                      />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidSearchvarientsPage;
