import React from "react";

import { Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="mb-[26px] sm:ml-[0] ml-[150px] sm:mt-0 mt-[29px] text-center text-gray-50 text-xl"
          size="txtRobotoMedium20Gray50"
        >
          <span className="text-gray-50 font-breeserif font-normal">
            COVID19
          </span>
          <span className="text-blue-A200 font-breeserif font-normal">
            INDIA
          </span>
        </Text>
        <Text
          className="sm:ml-[0] ml-[742px] sm:mt-0 my-[30px] text-base text-blue_gray-300"
          size="txtRobotoRegular16"
        >
          Home
        </Text>
        <Text
          className="ml-12 sm:ml-[0] sm:mt-0 my-[30px] text-base text-gray-50"
          size="txtRobotoMedium16Gray50"
        >
          Vaccination
        </Text>
        <Text
          className="ml-12 sm:ml-[0] mr-[150px] sm:mt-0 my-[30px] text-base text-blue_gray-300"
          size="txtRobotoRegular16"
        >
          About
        </Text>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
