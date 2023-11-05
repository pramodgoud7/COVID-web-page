import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[23px]" };
const variants = {
  fill: {
    light_blue_700_28: "bg-light_blue-700_28 text-light_blue-600",
    gray_900_05: "bg-gray-900_05 text-blue_gray-500",
    gray_900_01: "bg-gray-900_01 text-gray-300",
    gray_900: "bg-gray-900",
  },
};
const sizes = { xs: "p-[11px]", sm: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "light_blue_700_28",
    "gray_900_05",
    "gray_900_01",
    "gray_900",
  ]),
};

export { Button };
