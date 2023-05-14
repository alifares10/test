import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Img, Input, Line, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const BaslineReportingPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[300px]">
          <div className="bg-gray_50_01 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
            <Img
              src="images/img_group.svg"
              className="h-[35px] mt-[3px] w-[65%]"
              alt="Group"
            />
            <div className="flex flex-col md:gap-10 gap-[441px] items-center justify-start mb-2 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
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
                <div className="flex flex-col items-start justify-start p-2 w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                    <Img
                      src="images/img_dollaraltsoli.svg"
                      className="h-6 w-6"
                      alt="dollaraltSoli"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                      variant="body1"
                    >
                      Payments
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[61%] md:w-full">
                    <Img
                      src="images/img_walletoutline.svg"
                      className="h-6 w-6"
                      alt="walletOutline"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                      variant="body1"
                    >
                      Wallet & Cards
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                    <Img
                      src="images/img_car.svg"
                      className="h-6 w-6"
                      alt="car"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                      variant="body1"
                    >
                      Transactions
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                  <Line className="bg-blue_A700 h-6 w-0.5" />
                  <div className="flex flex-row gap-2 items-start justify-start w-[36%]">
                    <Img
                      src="images/img_analyticssolid.svg"
                      className="h-6 w-6"
                      alt="analyticsSolid"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      Report
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-2 w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                    <Img
                      src="images/img_menu.svg"
                      className="h-6 w-6"
                      alt="menu"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                      variant="body1"
                    >
                      Messages
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
              <div className="flex flex-col font-opensans items-start justify-start p-2 w-full">
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
          </div>
        </aside>
        <div className="flex-1 sm:h-[1056px] h-[1109px] md:h-[2272px] md:mt-0 mt-6 md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-start mx-auto top-[1%] w-full">
            <div className="flex flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="font-semibold mb-[5px] mt-4 text-blue_gray_900 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Baseline Report
              </Text>
              <div className="flex flex-row font-opensans gap-6 items-center justify-between w-[10%]">
                <div className="h-14 overflow-x-auto w-14">
                  <div className="flex flex-row gap-6 h-14 items-center justify-between overflow-auto w-14">
                    <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                      <div className="md:h-9 h-[35px] mb-1 relative w-9">
                        <Img
                          src="images/img_notification.svg"
                          className="absolute bottom-[0] h-8 left-[0] w-8"
                          alt="notification"
                        />
                        <div className="absolute bg-red_700 border border-blue_gray_50 border-solid flex flex-col h-[18px] items-start justify-start p-0.5 right-[0] rounded-[50%] top-[0] w-[18px]">
                          <Text
                            className="font-semibold mb-0.5 ml-0.5 md:ml-[0] text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            2
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_ellipse13.png"
                      className="h-14 md:h-auto object-cover w-14"
                      alt="EllipseThirteen"
                    />
                  </div>
                </div>
                <div className="md:h-12 h-14 pl-1 py-1 relative w-[26%]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="absolute h-12 inset-y-[0] my-auto object-cover right-[0] rounded-[24px] w-[86%]"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[79px] items-start justify-start ml-0.5 md:ml-[0] w-[81%] md:w-full">
                <div className="h-[50px] relative w-[46%] md:w-full">
                  <div className="absolute bg-gray_50_01 border border-blue_gray_100 border-solid flex flex-row gap-9 h-full inset-[0] items-start justify-center m-auto pb-1 pr-1 w-full">
                    <div className="flex flex-col items-start justify-center self-stretch w-auto">
                      <Text
                        className="font-medium text-blue_gray_400 text-left w-auto"
                        variant="body1"
                      >
                        Daily
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center self-stretch w-auto">
                      <Text
                        className="font-medium text-blue_gray_400 text-left w-auto"
                        variant="body1"
                      >
                        Weekly
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center self-stretch w-auto">
                      <Text
                        className="font-medium text-blue_gray_400 text-left w-auto"
                        variant="body1"
                      >
                        Monthly
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-1 h-max inset-y-[0] items-center justify-start my-auto right-[0] self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start p-2.5 w-full">
                      <Text
                        className="font-medium text-blue_A700 text-left w-auto"
                        variant="body1"
                      >
                        Custom
                      </Text>
                    </div>
                    <Line className="bg-blue_A700 h-0.5 w-full" />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-between pt-1 w-[46%] md:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-[48%] sm:w-full">
                    <Text
                      className="font-medium text-blue_gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Start Date
                    </Text>
                    <Input
                      wrapClassName="flex w-full"
                      className="font-medium p-0 placeholder:text-blue_gray_900 text-base text-blue_gray_900 text-left w-full"
                      name="Frame9951"
                      placeholder="08/21/2022"
                      suffix={
                        <Img
                          src="images/img_calendar.svg"
                          className="ml-[35px] mr-3 my-3"
                          alt="calendar"
                        />
                      }
                      shape="RoundedBorder6"
                      size="sm"
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[48%] sm:w-full">
                    <Text
                      className="font-medium text-blue_gray_900 text-left w-auto"
                      variant="body1"
                    >
                      End Date
                    </Text>
                    <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-row items-center justify-between p-3 rounded-md w-full">
                      <Text
                        className="font-medium text-blue_gray_900 text-left w-auto"
                        variant="body1"
                      >
                        08/27/2022
                      </Text>
                      <Img
                        src="images/img_calendar.svg"
                        className="h-5 w-5"
                        alt="calendar One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-[73%] md:w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-[51%] md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[255px] items-center justify-start p-4 w-full"
                        style={{
                          backgroundImage: "url('images/img_group9824.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start w-[37%] md:w-full">
                          <div className="h-[134px] relative rounded-[20px] w-[134px]">
                            <div className="!w-[134px] h-[134px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[134px] h-[134px] m-auto overflow-visible"
                                value={79}
                                counterClockwise
                                strokeWidth={10}
                                styles={{
                                  trail: {
                                    strokeWidth: 10,
                                    stroke: "#99e4e4e4",
                                  },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(0deg)",
                                    stroke: "#0061ff",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <Text
                              className="absolute font-semibold h-max inset-[0] justify-center m-auto text-blue_gray_900 text-left w-max"
                              as="h1"
                              variant="h1"
                            >
                              80%
                            </Text>
                          </div>
                          <Text
                            className="mt-[23px] text-blue_A700 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Overall
                          </Text>
                          <Text
                            className="font-normal mt-[21px] not-italic text-blue_gray_400 text-left w-auto"
                            variant="body1"
                          >
                            Actively liberal
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-4 grid grid-cols-3 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[135px] items-center justify-end p-[9px] w-full"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-5 items-center justify-start mt-[3px] w-[91%] md:w-full">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <div className="!w-[78px] h-[78px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[78px] h-[78px] m-auto overflow-visible"
                                  value={89}
                                  counterClockwise
                                  strokeWidth={9}
                                  styles={{
                                    trail: {
                                      strokeWidth: 9,
                                      stroke: "#99e4e4e4",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(0deg)",
                                      stroke: "#0061ff",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <Text
                                className="absolute font-semibold h-max inset-[0] justify-center m-auto text-gray_900 text-left w-max"
                                variant="body1"
                              >
                                90%
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              Passively Income
                            </Text>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[135px] items-start justify-start p-2.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-5 items-end justify-start my-0.5 w-[95%] md:w-full">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <div className="!w-[78px] h-[78px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[78px] h-[78px] m-auto overflow-visible"
                                  value={74}
                                  counterClockwise
                                  strokeWidth={9}
                                  styles={{
                                    trail: {
                                      strokeWidth: 9,
                                      stroke: "#99e4e4e4",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(0deg)",
                                      stroke: "#0061ff",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <Text
                                className="absolute font-semibold h-max inset-[0] justify-center m-auto text-gray_900 text-left w-max"
                                variant="body1"
                              >
                                75%
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              Passively Savings
                            </Text>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[135px] items-center justify-end p-[9px] w-full"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-5 items-center justify-start mt-[3px] w-[97%] md:w-full">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <div className="!w-[78px] h-[78px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[78px] h-[78px] m-auto overflow-visible"
                                  value={49}
                                  counterClockwise
                                  strokeWidth={9}
                                  styles={{
                                    trail: {
                                      strokeWidth: 9,
                                      stroke: "#99e4e4e4",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(0deg)",
                                      stroke: "#0061ff",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <Text
                                className="absolute font-semibold h-max inset-[0] justify-center m-auto text-gray_900 text-left w-max"
                                variant="body1"
                              >
                                50%
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body4"
                            >
                              Passively Expense
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-start justify-start mb-1.5 md:mt-0 mt-11 p-4 rounded-md w-[46%] md:w-full">
                      <div className="flex flex-col md:gap-10 gap-[63px] justify-start mb-[49px] mt-[11px] w-[86%] md:w-full">
                        <div className="flex flex-col items-start justify-end pt-[7px] w-[69%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-[86%] md:w-full">
                            <Text
                              className="font-semibold text-blue_gray_900_01 text-left w-auto"
                              as="h6"
                              variant="h6"
                            >
                              Total Working Days
                            </Text>
                            <div className="flex flex-row gap-4 items-center justify-start pr-2 py-2 w-[67%] md:w-full">
                              <Text
                                className="font-bold text-blue_gray_900 text-left w-auto"
                                as="h3"
                                variant="h3"
                              >
                                225
                              </Text>
                              <Text
                                className="font-medium text-blue_gray_900 text-left w-auto"
                                variant="body1"
                              >
                                Days
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[7px] items-start justify-start mt-1 w-full">
                            <Text
                              className="font-medium font-montserrat text-left text-red_A200 w-auto"
                              variant="body3"
                            >
                              48%
                            </Text>
                            <Text
                              className="font-gilroy font-medium text-gray_400 text-left w-auto"
                              variant="body3"
                            >
                              {" "}
                              Higher than colleagues
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-end ml-auto w-[83%] md:w-full">
                          <div className="bg-blue_A700_7e h-[98px] mt-3.5 rounded w-[14%]"></div>
                          <div className="bg-blue_A700_7e h-[84px] ml-2 mt-7 rounded w-[14%]"></div>
                          <div className="bg-blue_A700_7e h-[103px] ml-2 mt-2 rounded w-[14%]"></div>
                          <div className="bg-blue_A700_7e h-[70px] ml-2 mt-[42px] rounded w-[14%]"></div>
                          <div className="bg-blue_A700_7e h-[98px] ml-2 mt-3.5 rounded w-[14%]"></div>
                          <div className="bg-blue_A700 h-28 ml-2 rounded w-[14%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="bg-white_A700 border border-blue_gray_100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-md w-[64%] md:w-full">
                      <div className="flex flex-col gap-[21px] items-center justify-start mt-[3px] w-full">
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex flex-col gap-[7px] items-start justify-start mt-[7px] w-[32%]">
                            <Text
                              className="font-semibold text-blue_gray_900 text-left w-auto"
                              as="h6"
                              variant="h6"
                            >
                              Spend Analysis
                            </Text>
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <Img
                                src="images/img_arrowgrowthou.svg"
                                className="h-4 mb-[3px] w-4"
                                alt="arrowgrowthOu"
                              />
                              <Text
                                className="font-normal mt-0.5 not-italic text-black_900 text-left w-auto"
                                variant="body3"
                              ></Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[13px] items-center justify-between w-[17%]">
                            <Text
                              className="font-semibold ml-[3px] text-blue_gray_600 text-left w-auto"
                              variant="body3"
                            >
                              This Week
                            </Text>
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-5 w-5"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-end py-[3px] w-full">
                          <div className="flex flex-col gap-[18px] items-end justify-start w-full">
                            <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                                <Text
                                  className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  25k
                                </Text>
                                <Text
                                  className="font-normal mt-[26px] not-italic text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  20k
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] ml-[3px] mt-[26px] not-italic text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  15k
                                </Text>
                                <Text
                                  className="font-normal ml-0.5 md:ml-[0] mt-[25px] not-italic text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  10k
                                </Text>
                                <Text
                                  className="font-normal ml-2 md:ml-[0] mt-[26px] not-italic text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  5k
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] ml-[7px] mt-[25px] not-italic text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  0k
                                </Text>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[200px] items-end justify-start p-[26px] sm:px-5 w-[96%] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group1903.png')",
                                }}
                              >
                                <div className="flex flex-col items-center justify-start mb-[78px] mr-[136px] self-stretch w-auto">
                                  <div className="bg-black_900_01 flex flex-col items-center justify-center px-[11px] py-2.5 rounded-[5px] self-stretch w-auto">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-auto"
                                      variant="body4"
                                    >
                                      $2311.655 May
                                    </Text>
                                  </div>
                                  <Img
                                    src="images/img_arrow.svg"
                                    className="h-2 w-3.5"
                                    alt="Arrow"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end ml-auto w-[96%] md:w-full">
                              <Text
                                className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                                variant="body3"
                              >
                                Mon
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[74px] not-italic text-blue_gray_900 text-left w-auto"
                                variant="body3"
                              >
                                Tue
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[74px] not-italic text-blue_gray_900 text-left w-auto"
                                variant="body3"
                              >
                                Wed
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[71px] not-italic text-blue_gray_900 text-left w-auto"
                                variant="body3"
                              >
                                Thu
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[73px] not-italic text-blue_gray_900 text-left w-auto"
                                variant="body3"
                              >
                                Fri
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[74px] not-italic text-blue_gray_900 text-left w-auto"
                                variant="body3"
                              >
                                Sat
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[70px] not-italic text-blue_gray_900 text-left w-auto"
                                variant="body3"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 border border-blue_gray_100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-[35%] md:w-full">
                      <div className="flex flex-col items-center justify-start mt-[3px] w-[99%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="font-semibold mt-[5px] text-blue_gray_900 text-left w-auto"
                            variant="body1"
                          >
                            Expense Tracking
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-between mb-[5px] w-[31%]">
                            <Text
                              className="font-semibold text-blue_gray_600 text-left w-auto"
                              variant="body3"
                            >
                              This Month
                            </Text>
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-5 w-5"
                              alt="arrowdown One"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[200px] items-start justify-start mt-[35px] p-[35px] sm:px-5 w-[200px]"
                          style={{
                            backgroundImage: "url('images/img_group30.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[47px] items-start justify-start mb-0.5 mt-[13px] w-[90%] md:w-full">
                            <div className="flex flex-col md:gap-10 gap-[63px] justify-start mt-[18px] w-auto">
                              <Text
                                className="font-semibold mr-2 text-left text-white_A700 w-auto"
                                variant="body1"
                              >
                                28%
                              </Text>
                              <Text
                                className="font-semibold ml-2.5 md:ml-[0] text-left text-white_A700 w-auto"
                                variant="body1"
                              >
                                12%
                              </Text>
                            </div>
                            <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start mb-[18px] w-auto">
                              <Text
                                className="font-semibold text-left text-white_A700 w-auto"
                                variant="body1"
                              >
                                24%
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] text-left text-white_A700 w-auto"
                                variant="body1"
                              >
                                36%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[13px] pt-[3px] w-[91%] md:w-full">
                          <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-1/4">
                                <div className="bg-blue_900 h-2 my-0.5 rounded-sm w-[31%]"></div>
                                <Text
                                  className="font-semibold text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  Travel
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-start justify-start w-[26%]">
                                <div className="bg-blue_800 h-2 mb-[7px] rounded-sm w-[30%]"></div>
                                <Text
                                  className="font-semibold text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  Sports
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="flex flex-row gap-2 items-start justify-start w-[32%]">
                                <div className="bg-blue_A700 h-2 mb-[7px] rounded-sm w-[23%]"></div>
                                <Text
                                  className="font-semibold text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  Shopping
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-start w-[31%]">
                                <div className="bg-blue_A200 h-2 my-0.5 rounded-sm w-[24%]"></div>
                                <Text
                                  className="font-semibold text-blue_gray_900 text-left w-auto"
                                  variant="body3"
                                >
                                  Medicine
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_50_01 md:h-[1056px] h-[1109px] inset-y-[0] my-auto pb-[53px] right-[2%] shadow-bs w-[23%]">
            <div className="bg-gray_50_01 h-[1056px] mx-auto shadow-bs w-full"></div>
            <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
              <Img
                src="images/img_arrowleft_bluegray_900.svg"
                className="h-6 mb-0.5 w-6"
                alt="arrowleft"
              />
              <Text
                className="font-semibold mt-1 text-blue_gray_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                My Profile
              </Text>
              <Img
                src="images/img_share.svg"
                className="h-6 mb-0.5 w-6"
                alt="share"
              />
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[5px] top-[6%] w-[45%]">
              <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                <div className="border-[1.79px] border-blue_A700_01 border-solid flex flex-col h-[100px] items-center justify-start p-[7px] rounded-[50%] w-[100px]">
                  <Img
                    src="images/img_profileimglarg_85X85.png"
                    className="h-[85px] md:h-auto rounded-[50%] w-[85px]"
                    alt="ProfileImgLarg One"
                  />
                </div>
                <Text
                  className="font-semibold text-blue_gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Michelle Rock
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[21%] w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start pt-1 w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start pb-[5px] pr-[5px] w-full">
                  <Text
                    className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                    variant="body1"
                  >
                    Mobile Number
                  </Text>
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <Text
                      className="font-medium text-blue_gray_900 text-left w-auto"
                      variant="body1"
                    >
                      (808) 555-0111
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                  <Text
                    className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                    variant="body1"
                  >
                    Email
                  </Text>
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <Text
                      className="font-medium text-blue_gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Michellerock@gmail.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaslineReportingPage;
