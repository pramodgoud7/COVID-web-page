import React from "react";

import { Img, Text } from "components";

const Covid2StateDropdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start rounded-sm w-full">
          <div className="flex flex-col items-start justify-start rounded-sm w-full">
            <div className="flex flex-col items-center justify-start rounded-sm w-full">
              <div className="bg-blue_gray-900_87 flex flex-col gap-3 items-start justify-center px-4 rounded-sm w-[486px] md:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-50"
                    size="txtInterMedium16"
                  >
                    {props?.districttext}
                  </Text>
                </div>
                <Img
                  className="h-px w-full"
                  src="images/img_icons.svg"
                  alt="icons"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Covid2StateDropdown.defaultProps = { districttext: "Select District" };

export default Covid2StateDropdown;
