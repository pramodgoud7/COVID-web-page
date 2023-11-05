import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const CovidAboutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start pb-24 w-full">
          <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
            <Header className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col items-start justify-start max-w-[1146px] mx-auto md:px-5 w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50"
                size="txtRobotoMedium48"
              >
                About
              </Text>
              <Text
                className="mt-[19px] text-blue_gray-300 text-lg"
                size="txtRobotoRegular18Bluegray300"
              >
                Last update on march 28th 2021.
              </Text>
              <Text
                className="mt-9 text-2xl md:text-[22px] text-gray-300 sm:text-xl"
                size="txtRobotoMedium24Indigo50"
              >
                COVID-19 vaccines be ready for distribution
              </Text>
              <Text
                className="mt-[41px] text-base text-blue_gray-300"
                size="txtRobotoMedium16Bluegray300"
              >
                What are your sources? How is the data gathered for this
                project?
              </Text>
              <Text
                className="leading-[32.00px] mt-[17px] text-base text-light_blue-A700"
                size="txtRobotoMedium16LightblueA700"
              >
                <>
                  The vaccines must be proven safe and effective in large (phase
                  III) clinical trials. Some COVID-19 vaccine candidates have
                  completed their phase III trials, and many other potential
                  vaccines are being developed.
                  <br />
                  Independent reviews of the efficacy and safety evidence is
                  required for each vaccine candidate, including regulatory
                  review and approval in the country where the vaccine is
                  manufactured, before WHO considers a vaccine candidate for
                  prequalification.
                </>
              </Text>
              <Text
                className="mt-[31px] text-base text-blue_gray-300"
                size="txtRobotoMedium16Bluegray300"
              >
                Why does covid19india.org have difference in numbers compared to
                MOHFW website?
              </Text>
              <Text
                className="leading-[32.00px] mt-[17px] text-base text-light_blue-A700"
                size="txtRobotoMedium16LightblueA700"
              >
                <>
                  The vaccines must be manufactured in large quantities, which
                  is a major and unprecedented challenge – all the while
                  continuing to produce all the other important life-saving
                  vaccines already in use.
                  <br />
                  As a final step, all approved vaccines will require
                  distribution through a complex logistical process, with
                  rigorous stock management and temperature control.
                </>
              </Text>
              <Text
                className="mt-[29px] text-base text-blue_gray-300"
                size="txtRobotoMedium16Bluegray300"
              >
                Where can I find the data for this?
              </Text>
              <Text
                className="leading-[32.00px] mt-[19px] text-base text-light_blue-A700 w-full"
                size="txtRobotoMedium16LightblueA700"
              >
                <>
                  In addition to review of the data for regulatory purposes, the
                  evidence must also be reviewed for the purpose of policy
                  recommendations on how the vaccines should be used.
                </>
              </Text>
              <Text
                className="mt-[31px] text-base text-blue_gray-300"
                size="txtRobotoMedium16Bluegray300"
              >
                Why are you guys putting in time and resources to do this while
                not gaining a single penny from it?
              </Text>
              <Text
                className="leading-[32.00px] mt-[17px] text-base text-light_blue-A700 w-full"
                size="txtRobotoMedium16LightblueA700"
              >
                <>
                  In addition to review of the data for regulatory purposes, the
                  evidence must also be reviewed for the purpose of policy
                  recommendations on how the vaccines should be used.
                  <br />
                  Officials in individual countries decide whether to approve
                  the vaccines for national use and develop policies for how to
                  use the vaccines in their country based on the WHO
                  recommendations.
                </>
              </Text>
              <Text
                className="mt-[29px] text-base text-blue_gray-300"
                size="txtRobotoMedium16Bluegray300"
              >
                Where can I find the data for this?
              </Text>
              <Text
                className="leading-[32.00px] mt-[19px] text-base text-light_blue-A700 w-full"
                size="txtRobotoMedium16LightblueA700"
              >
                <>
                  In addition to review of the data for regulatory purposes, the
                  evidence must also be reviewed for the purpose of policy
                  recommendations on how the vaccines should be used.
                </>
              </Text>
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
              <div className="flex flex-row gap-16 items-center justify-center md:ml-[0] ml-[437px] mt-[25px] w-[24%] md:w-full">
                <Img
                  className="h-[46px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Img
                  className="h-[61px]"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
                <Img
                  className="h-10"
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

export default CovidAboutPage;
