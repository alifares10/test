import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder10: "rounded-[10px]",
  RoundedBorder3: "rounded-[3px]",
  RoundedBorder6: "rounded-md",
};
const variants = {
  icbFillBlack900: "bg-black_900",
  FillBlue50: "bg-blue_50 text-gray_900_02",
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineBluegray100:
    "bg-white_A700 border border-blue_gray_100 border-solid text-black_900_01",
  FillGray100: "bg-gray_100 text-red_700",
  FillDeeporange50: "bg-deep_orange_50 text-deep_orange_400",
  FillGray10001: "bg-gray_100_01 text-green_600",
  FillGray5004: "bg-gray_50_04 text-amber_700",
  OutlineBlueA700: "border border-blue_A700 border-solid text-blue_A700",
};
const sizes = { smIcn: "p-0.5", sm: "p-2", md: "p-[11px]", lg: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf([
    "icbCircleBorder10",
    "RoundedBorder3",
    "RoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "icbFillBlack900",
    "FillBlue50",
    "FillBlueA700",
    "OutlineBluegray100",
    "FillGray100",
    "FillDeeporange50",
    "FillGray10001",
    "FillGray5004",
    "OutlineBlueA700",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm", "md", "lg"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
