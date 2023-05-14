import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Line, Text } from "components";

const PhotoLibraryModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[46%]"
      overlayClassName="bg-gray_900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-[30px] justify-center p-6 md:px-5 rounded-[12px] shadow-bs2 w-full">
          <div className="flex flex-row items-start justify-between md:ml-[0] ml-[232px] mt-3.5 w-[62%] md:w-full">
            <Text
              className="text-black_900_01 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Photo Library
            </Text>
            <Img
              src="images/img_close_24X24.svg"
              className="common-pointer h-6 w-6"
              alt="close"
              onClick={props.onRequestClose}
            />
          </div>
          <div className="flex flex-col gap-[22px] items-center justify-start mb-[49px] w-[97%] md:w-full">
            <Img
              src="images/img_rectangle1325.png"
              className="h-[279px] md:h-auto object-cover w-full"
              alt="Rectangle1325"
            />
            <div className="flex flex-col items-center justify-start pt-0.5 w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="font-semibold mt-[3px] text-blue_gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Make Cover Photo
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-6 w-6"
                  alt="arrowright"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[19px] w-full" />
              <div className="flex flex-row sm:gap-10 items-end justify-between mt-[18px] w-full">
                <Text
                  className="font-semibold mt-[5px] text-blue_gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Edit Caption
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-6 mb-[3px] w-6"
                  alt="arrowright One"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-4 w-full" />
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[18px] w-full">
                <Text
                  className="font-semibold mt-[3px] text-blue_gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Delete Photo
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-6 w-6"
                  alt="arrowright Two"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[19px] w-full" />
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[18px] w-full">
                <Text
                  className="font-semibold mt-[3px] text-blue_gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Share
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-6 w-6"
                  alt="arrowright Three"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[19px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default PhotoLibraryModal;
