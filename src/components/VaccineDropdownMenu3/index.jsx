import React from "react";

import { Line, List, Text } from "components";

const VaccineDropdownMenu3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[125px] h-[130px] relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-900_06 flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start pb-1 px-1 w-full">
                    <div className="flex flex-col items-center justify-center mb-[5px] p-4 w-auto">
                      <Text
                        className="text-base text-blue_gray-300 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.content5}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-900_06 flex flex-col items-start justify-start w-full">
                <div className="bg-blue-800_14 flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[120px] w-full">
                    <Line className="bg-blue-800 h-[65px] w-1" />
                    <div className="flex flex-col items-center justify-start p-4 w-auto">
                      <Text
                        className="text-base text-blue_gray-300 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.content5}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="absolute bg-gray-500 h-12 inset-y-[0] my-auto right-[0] rounded-[3px] w-1.5" />
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="bg-blue_gray-900_06 flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-1 px-1 w-full">
                <div className="flex flex-col items-center justify-start mb-[5px] p-4 w-auto">
                  <Text
                    className="text-base text-blue_gray-300 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.content5}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="bg-blue_gray-900_06 flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-1 px-1 w-full">
                <div className="flex flex-col items-center justify-start mb-[5px] p-4 w-auto">
                  <Text
                    className="text-base text-blue_gray-300 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.content5}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="bg-blue_gray-900_06 flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-1 px-1 w-full">
                <div className="flex flex-col items-center justify-start mb-[5px] p-4 w-auto">
                  <Text
                    className="text-base text-blue_gray-300 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.content5}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="bg-blue_gray-900_06 flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-1 px-1 w-full">
                <div className="flex flex-col items-center justify-start mb-[5px] p-4 w-auto">
                  <Text
                    className="text-base text-blue_gray-300 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.content5}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

VaccineDropdownMenu3.defaultProps = {
  content: "Prakasam",
  content1: "Prakasam",
  content2: "Prakasam",
  content3: "Prakasam",
  content4: "Prakasam",
  content5: "Prakasam",
};

export default VaccineDropdownMenu3;
