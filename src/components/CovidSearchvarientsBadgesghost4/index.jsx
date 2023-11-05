import React from "react";

import { Img, Text } from "components";

const CovidSearchvarientsBadgesghost4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start px-2.5 w-auto">
          <Text
            className="text-amber-500 text-base"
            size="txtHKGroteskSemiBold16"
          >
            {props?.optiontext}
          </Text>
        </div>
        <Img
          className="h-6 w-6"
          src="images/img_arrowrightsquare.svg"
          alt="arrowrightsquar"
        />
      </div>
    </>
  );
};

CovidSearchvarientsBadgesghost4.defaultProps = { optiontext: "AP" };

export default CovidSearchvarientsBadgesghost4;
