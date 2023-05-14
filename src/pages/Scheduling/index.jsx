import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SchedulingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1286px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  wrapClassName="flex md:flex-1 gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                  name="InputField"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer m-3"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="srcRoundedBorder6"
                  size="smSrc"
                  variant="srcOutlineBluegray300"
                ></Input>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red_700 border border-blue_gray_50 border-solid font-semibold h-[18px] pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-left text-white_A700 top-[0] w-[18px]"
                      variant="body4"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue_A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-between max-w-[1408px] mx-auto md:px-5 w-full">
            <aside className="flex flex-col md:hidden justify-start w-[300px]">
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        src="images/img_save.svg"
                        className="h-6 w-6"
                        alt="save"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body1"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[31%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-6 w-6"
                        alt="clock"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700 text-left w-auto"
                        variant="body1"
                      >
                        Tasks
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[38%] md:w-full">
                      <Img
                        src="images/img_chartlineoutl.svg"
                        className="h-6 w-6"
                        alt="chartlineOutl"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_700 text-left w-auto"
                        variant="body1"
                      >
                        Activity
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[81%] md:w-full">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-6 w-6"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body1"
                      >
                        Project management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[39%] md:w-full">
                      <Img
                        src="images/img_file.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body1"
                      >
                        Reports
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        src="images/img_notification.svg"
                        className="h-6 w-6"
                        alt="notification One"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body1"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        src="images/img_settings.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body1"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      src="images/img_question.svg"
                      className="h-6 w-6"
                      alt="question"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                      variant="body1"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start rounded-md w-full">
                <Text
                  className="md:mt-0 my-[5px] text-blue_gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Tasks
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center md:ml-[0] ml-[786px] w-[131px]"
                  rightIcon={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="ml-2 mr-4 my-2"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder6"
                  size="md"
                  variant="OutlineBluegray100"
                >
                  <div className="font-medium text-black_900_01 text-left text-sm">
                    Week View
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[75px] ml-6 md:ml-[0] w-auto"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="ml-3 mr-2 my-[9px]"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillBlueA700"
                >
                  <div className="font-medium text-left text-sm text-white_A700">
                    Add
                  </div>
                </Button>
              </div>
              <div className="flex flex-col items-end justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end ml-auto w-[96%] md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-[0] grid grid-cols-2 w-[29%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gray_50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray_50 p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        SUN
                      </Text>
                      <Text
                        className="mb-[15px] text-black_900_01 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        21
                      </Text>
                    </div>
                    <div className="bg-gray_50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray_50 p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        MON
                      </Text>
                      <Text
                        className="mb-[15px] text-black_900_01 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        22
                      </Text>
                    </div>
                  </List>
                  <div className="bg-gray_50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray_50 p-[7px] w-auto md:w-full">
                    <Text
                      className="font-medium text-blue_gray_400 text-left w-auto"
                      variant="body4"
                    >
                      TUH
                    </Text>
                    <Text
                      className="mb-[15px] text-black_900_01 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      23
                    </Text>
                  </div>
                  <div className="bg-gray_50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray_50 p-[7px] w-auto md:w-full">
                    <Text
                      className="font-medium text-blue_gray_400 text-left w-auto"
                      variant="body4"
                    >
                      WED
                    </Text>
                    <Text
                      className="mb-[15px] text-black_900_01 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      24
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[0] grid grid-cols-2 w-[29%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-blue_50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray_50 p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        THU
                      </Text>
                      <Text
                        className="mb-[15px] text-black_900_01 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        25
                      </Text>
                    </div>
                    <div className="bg-gray_50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray_50 p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        FRI
                      </Text>
                      <Text
                        className="mb-[15px] text-black_900_01 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        26
                      </Text>
                    </div>
                  </List>
                  <div className="bg-gray_50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray_50 p-[7px] w-auto md:w-full">
                    <Text
                      className="font-medium text-blue_gray_400 text-left w-auto"
                      variant="body4"
                    >
                      SAT
                    </Text>
                    <Text
                      className="mb-[15px] text-black_900_01 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      27
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex-col md:gap-5 gap-[0] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="font-medium md:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                        variant="body3"
                      >
                        8 AM
                      </Text>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                        <div className="bg-gray_50 flex flex-row items-start justify-start outline outline-[1px] outline-blue_gray_50 w-[15%] md:w-full">
                          <Line className="bg-blue_A200_01 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 pr-[3px] pt-[3px] w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="font-medium text-black_900_01 text-left w-auto"
                              variant="body3"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="font-medium md:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                        variant="body3"
                      >
                        9 AM
                      </Text>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray_50 w-[15%] md:w-full">
                          <Line className="bg-amber_500 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px] w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="font-medium text-black_900_01 text-left w-auto"
                              variant="body3"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      </div>
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row gap-[9px] items-start justify-between w-full">
                    <Text
                      className="font-medium md:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                      variant="body3"
                    >
                      10 AM
                    </Text>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                      <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      <div className="h-[74px] overflow-hidden relative w-[15%]">
                        <div className="w-full h-full absolute bg-blue_50"></div>
                        <div
                          className="h-full absolute bg-blue_50_01"
                          style={{ width: "3%" }}
                        ></div>
                      </div>
                      <div className="bg-gray_50 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray_50 w-[15%] md:w-full">
                        <Line className="bg-green_600 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px] w-auto">
                          <Text
                            className="font-medium text-blue_gray_400 text-left w-auto"
                            variant="body4"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="font-medium text-black_900_01 text-left w-auto"
                            variant="body3"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Text
                      className="font-medium sm:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                      variant="body3"
                    >
                      11 AM
                    </Text>
                    <Img
                      src="images/img_frame34702.svg"
                      className="h-[74px] w-auto"
                      alt="Frame34702"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Text
                      className="font-medium sm:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                      variant="body3"
                    >
                      12 AM
                    </Text>
                    <Img
                      src="images/img_frame34702.svg"
                      className="h-[74px] w-auto"
                      alt="Frame34702 One"
                    />
                  </div>
                  <List
                    className="flex-col md:gap-5 gap-[0] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between ml-0.5 my-0 w-full">
                      <Text
                        className="font-medium md:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                        variant="body3"
                      >
                        1 PM
                      </Text>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray_50 w-[15%] md:w-full">
                          <Line className="bg-amber_500 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px] w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="font-medium text-black_900_01 text-left w-auto"
                              variant="body3"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="font-medium md:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                        variant="body3"
                      >
                        2 PM
                      </Text>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray_50 w-[15%] md:w-full">
                          <Line className="bg-blue_A200_01 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px] w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="font-medium text-black_900_01 text-left w-auto"
                              variant="body3"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="font-medium md:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                        variant="body3"
                      >
                        3 PM
                      </Text>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-blue_50 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray_50 w-[15%] md:w-full">
                          <Line className="bg-green_600 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px] w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="font-medium text-black_900_01 text-left w-auto"
                              variant="body3"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="font-medium md:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                        variant="body3"
                      >
                        4 PM
                      </Text>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                        <div className="bg-gray_50 flex flex-row items-start justify-start outline outline-[1px] outline-blue_gray_50 w-[15%] md:w-full">
                          <Line className="bg-blue_A200_01 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 pr-[3px] pt-[3px] w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="font-medium text-black_900_01 text-left w-auto"
                              variant="body3"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="font-medium md:mt-0 mt-1 text-blue_gray_400 text-left w-auto"
                        variant="body3"
                      >
                        5 PM
                      </Text>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-auto md:w-full">
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray_50 h-[74px] outline outline-[1px] outline-blue_gray_50 w-[15%]"></div>
                        <div className="bg-gray_50 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray_50 w-[15%] md:w-full">
                          <Line className="bg-amber_500 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px] w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="font-medium text-black_900_01 text-left w-auto"
                              variant="body3"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulingPage;
