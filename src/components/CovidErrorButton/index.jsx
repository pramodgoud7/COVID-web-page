import React from "react";

import { Text } from "components";

const CovidErrorButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue-A700 flex flex-col items-center justify-start sm:px-5 px-6 py-3 rounded w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtInterMedium14"
            >
              {props?.buttontext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CovidErrorButton.defaultProps = { buttontext: "Home" };

export default CovidErrorButton;
