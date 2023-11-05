import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Text } from "components";
import Header from "components/Header";

const CovidLoadingDrawer = (props) => {
  return (
    <Drawer placement="top" className="!w-full" {...props}>
      <div>
        <div className="flex flex-col font-roboto items-center justify-start mx-auto pb-[944px] sm:w-full md:w-full">
          <Header className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </Drawer>
  );
};

export default CovidLoadingDrawer;
