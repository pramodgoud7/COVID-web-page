import React from "react";
import { Link } from 'react-router-dom';

import { Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Link to="/covidsearchvarients">  <Text
          className="mb-[26px] sm:ml-[0] ml-[150px] sm:mt-0 mt-[29px] text-center text-gray-50 text-xl"
          size="txtRobotoMedium20Gray50"
        >
          <span className="text-gray-50 font-breeserif font-normal">
            COVID19
          </span>
          <span className="text-blue-A200 font-breeserif font-normal">
            INDIA
          </span>
        </Text></Link>
      
        <Link to="/covidstate"> 
        <Text
          className="sm:ml-[0] ml-[876px] sm:mt-0 my-[30px] text-base text-gray-50"
          size="txtRobotoMedium16Gray50"
        >
          Home
        </Text></Link>
        <Link to="/covidabout">
        <Text
          className="ml-12 sm:ml-[0] mr-[150px] sm:mt-0 my-[30px] text-base text-blue_gray-300"
          size="txtRobotoRegular16"
        >
          About
        </Text>
        </Link>
      
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
