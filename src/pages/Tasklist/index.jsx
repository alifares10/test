import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TasklistPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1286px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_35X162.svg"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between max-w-[1408px] mx-auto md:px-5 w-full">
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
            <div className="flex flex-1 flex-col gap-7 items-center justify-start md:mt-0 mt-8 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start rounded-md w-full">
                <Text
                  className="md:mt-0 mt-[9px] text-blue_gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  My Tasks
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-0.5 md:ml-[0] ml-[748px] w-[131px]"
                  rightIcon={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="ml-3.5 mr-4 my-2"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder6"
                  size="md"
                  variant="OutlineBluegray100"
                >
                  <div className="font-medium text-black_900_01 text-left text-sm">
                    This Week
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[75px] ml-6 md:ml-[0] md:mt-0 my-0.5 w-auto"
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
              <List
                className="flex-col gap-[36.08px] grid items-center pt-[5px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="font-semibold text-blue_A700 text-left w-auto"
                    variant="body1"
                  >
                    Monday, 12th May
                  </Text>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-3.5 rounded-md shadow-bs1 w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                        <Text
                          className="font-semibold md:mt-0 mt-2 text-gray_900_03 text-left w-auto"
                          variant="body1"
                        >
                          Buy groceries{" "}
                        </Text>
                        <Button
                          className="cursor-pointer font-medium min-w-[94px] md:ml-[0] ml-[778px] text-center text-red_700 text-sm w-auto"
                          shape="RoundedBorder3"
                          size="sm"
                          variant="FillGray100"
                        >
                          High Priority
                        </Button>
                        <Img
                          src="images/img_user.svg"
                          className="h-6 ml-10 md:ml-[0] md:mt-0 mt-[3px] w-6"
                          alt="user"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-3.5 rounded-md shadow-bs1 w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                        <Text
                          className="font-semibold md:mt-0 mt-[7px] text-gray_900_03 text-left w-auto"
                          variant="body1"
                        >
                          Cardio at 6 pm
                        </Text>
                        <Button
                          className="cursor-pointer font-medium min-w-[90px] md:ml-[0] ml-[771px] text-center text-deep_orange_400 text-sm w-auto"
                          shape="RoundedBorder3"
                          size="sm"
                          variant="FillDeeporange50"
                        >
                          Low Priority
                        </Button>
                        <Img
                          src="images/img_user.svg"
                          className="h-6 ml-10 md:ml-[0] md:mt-0 mt-[3px] w-6"
                          alt="user One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="font-semibold text-blue_A700 text-left w-auto"
                    variant="body1"
                  >
                    Wednesday, 14th May
                  </Text>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-3.5 rounded-md shadow-bs1 w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                        <Text
                          className="font-semibold md:mt-0 mt-2 text-gray_900_03 text-left w-auto"
                          variant="body1"
                        >
                          Buy groceries{" "}
                        </Text>
                        <Button
                          className="cursor-pointer font-medium min-w-[94px] md:ml-[0] ml-[778px] text-center text-red_700 text-sm w-auto"
                          shape="RoundedBorder3"
                          size="sm"
                          variant="FillGray100"
                        >
                          High Priority
                        </Button>
                        <Img
                          src="images/img_user.svg"
                          className="h-6 ml-10 md:ml-[0] md:mt-0 mt-[3px] w-6"
                          alt="user One"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-3.5 rounded-md shadow-bs1 w-full">
                      <div className="flex flex-row md:gap-10 items-end justify-between w-[99%] md:w-full">
                        <Text
                          className="font-semibold mb-0.5 mt-[7px] text-gray_900_03 text-left w-auto"
                          variant="body1"
                        >
                          Cardio at 6 pm
                        </Text>
                        <div className="flex flex-row items-center justify-between w-[15%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[90px] text-center text-deep_orange_400 text-sm w-auto"
                            shape="RoundedBorder3"
                            size="sm"
                            variant="FillDeeporange50"
                          >
                            Low Priority
                          </Button>
                          <Img
                            src="images/img_user.svg"
                            className="h-6 w-6"
                            alt="user One One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasklistPage;
