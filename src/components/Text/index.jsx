import React from "react";

const sizeClasses = {
  txtRobotoMedium14Green600: "font-medium font-roboto",
  txtRobotoMedium16Green600: "font-medium font-roboto",
  txtHKGroteskSemiBold16: "font-hkgrotesk font-semibold",
  txtRobotoMedium16Blue900: "font-medium font-roboto",
  txtRobotoMedium16Green800: "font-medium font-roboto",
  txtRobotoRegular24: "font-normal font-roboto",
  txtRobotoMedium16Gray50: "font-medium font-roboto",
  txtRobotoMedium16Bluegray300: "font-medium font-roboto",
  txtRobotoMedium16Gray100: "font-medium font-roboto",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoMedium14RedA400: "font-medium font-roboto",
  txtRobotoMedium24: "font-medium font-roboto",
  txtRobotoMedium24LightblueA700: "font-medium font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoMedium18: "font-medium font-roboto",
  txtRobotoMedium20Bluegray300: "font-medium font-roboto",
  txtRobotoMedium16Indigo50: "font-medium font-roboto",
  txtRobotoMedium24Gray600: "font-medium font-roboto",
  txtRobotoRegular16Bluegray500: "font-normal font-roboto",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtRobotoRegular16Bluegray100: "font-normal font-roboto",
  txtRobotoMedium16LightblueA700: "font-medium font-roboto",
  txtRobotoMedium14LightblueA700: "font-medium font-roboto",
  txtRobotoMedium12: "font-medium font-roboto",
  txtRobotoMedium20Gray50: "font-medium font-roboto",
  txtRobotoMedium14: "font-medium font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
  txtRobotoRegular18Bluegray300: "font-normal font-roboto",
  txtRobotoMedium16Pink900: "font-medium font-roboto",
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoMedium16Green700: "font-medium font-roboto",
  txtRobotoMedium24Indigo50: "font-medium font-roboto",
  txtRobotoMedium16Blue800: "font-medium font-roboto",
  txtRobotoMedium24Green600: "font-medium font-roboto",
  txtRobotoMedium24Gray50: "font-medium font-roboto",
  txtRobotoMedium32Bluegray100: "font-medium font-roboto",
  txtRobotoMedium16Bluegray800: "font-medium font-roboto",
  txtRobotoMedium48: "font-medium font-roboto",
  txtRobotoMedium14Gray600: "font-medium font-roboto",
  txtRobotoMedium16Deeppurple300: "font-medium font-roboto",
  txtRobotoMedium14Bluegray300: "font-medium font-roboto",
  txtRobotoMedium16Gray600: "font-medium font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoMedium24Bluegray300: "font-medium font-roboto",
  txtRobotoBold16: "font-bold font-roboto",
  txtRobotoMedium32: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
