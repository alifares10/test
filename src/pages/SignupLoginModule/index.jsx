import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const SignupLoginModulePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[83px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_20.svg"
                className="h-[35px]"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="font-medium mt-[3px] text-gray_900_04 text-left w-auto"
                  variant="body1"
                >
                  Products
                </Text>
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  className="h-6 w-6"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="font-medium mt-[3px] text-gray_900_04 text-left w-auto"
                  variant="body1"
                >
                  Resouces
                </Text>
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  className="h-6 w-6"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="font-medium sm:mt-0 mt-1 text-gray_900_04 text-left w-auto"
                variant="body1"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
              <a
                href="javascript:"
                className="font-medium text-base text-gray_900_04 text-left w-auto"
              >
                <Text className="">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center text-white_A700 w-auto"
                shape="RoundedBorder6"
                size="lg"
                variant="FillBlueA700"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[29px] items-center justify-start mb-[267px] md:px-5 w-[39%] md:w-full">
          <Text
            className="text-blue_gray_900 text-left w-auto"
            as="h2"
            variant="h2"
          >
            Sign in to DhiWise
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="font-medium text-blue_gray_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-medium p-0 placeholder:text-blue_gray_300 text-base text-blue_gray_300 text-left w-full"
                type="email"
                name="Group10198"
                placeholder="Enter Email"
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
              <Text
                className="font-medium text-blue_gray_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Password
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                type="password"
                name="Group10198 One"
                placeholder="Enter Password"
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <a
              href="javascript:"
              className="font-medium md:ml-[0] ml-[381px] mt-[15px] text-blue_A700 text-left text-lg w-auto"
            >
              <Text className="">Forgot Password?</Text>
            </a>
            <Button
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center text-white_A700 w-auto"
              shape="RoundedBorder6"
              size="lg"
              variant="FillBlueA700"
            >
              Log in
            </Button>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-between ml-2 md:ml-[0] mt-7 w-[97%] md:w-full">
              <Line className="bg-blue_gray_200 h-px sm:mt-0 my-[7px] w-[36%]" />
              <a
                href="javascript:"
                className="font-normal not-italic text-base text-blue_gray_200 text-left w-auto"
              >
                <Text className="">Or continue with</Text>
              </a>
              <Line className="bg-blue_gray_200 h-px sm:mt-0 my-[7px] w-[35%]" />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start mt-[29px] w-full">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[528px] sm:min-w-full text-base text-blue_A700 text-center w-auto"
                onClick={() => googleSignIn()}
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBlueA700"
              >
                Sign in with Google
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[528px] sm:min-w-full text-base text-blue_A700 text-center w-auto"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBlueA700"
              >
                Sign in with Facebook
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[528px] sm:min-w-full text-base text-blue_A700 text-center w-auto"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBlueA700"
              >
                Sign in with Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupLoginModulePage;
