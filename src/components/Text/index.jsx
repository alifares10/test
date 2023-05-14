import React from "react";

const variantClasses = {
  h1: "text-4xl sm:text-[32px] md:text-[34px]",
  h2: "font-semibold md:text-3xl sm:text-[28px] text-[32px]",
  h3: "sm:text-2xl md:text-[26px] text-[28px]",
  h4: "font-semibold text-2xl md:text-[22px] sm:text-xl",
  h5: "font-bold text-xl",
  h6: "text-lg",
  body1: "text-base",
  body2: "font-medium text-[15px]",
  body3: "text-sm",
  body4: "text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
