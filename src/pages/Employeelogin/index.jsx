import React from "react";

import { Img, Line, List, Text } from "components";

const EmployeeloginPage = () => {
  return (
    <>
      <div className="bg-gray_50_01 flex sm:flex-col md:flex-col flex-row font-opensans sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[300px]">
          <div className="bg-white_A700 flex flex-col justify-start p-6 sm:px-5 w-full">
            <Img
              src="images/img_group10392_9.svg"
              className="h-[35px] mx-auto w-[65%]"
              alt="Group10392"
            />
            <div className="flex flex-col items-start justify-start mt-12 w-[56%] md:w-full">
              <div className="flex flex-col gap-[42px] items-start justify-start ml-2 md:ml-[0] w-[74%] md:w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-[77%] md:w-full">
                  <Img
                    src="images/img_home.svg"
                    className="h-6 w-6"
                    alt="home"
                  />
                  <Text
                    className="font-semibold text-blue_gray_700 text-left w-auto"
                    variant="body1"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[55%] md:w-full">
                  <Img
                    src="images/img_user.svg"
                    className="h-6 w-6"
                    alt="user"
                  />
                  <Text
                    className="font-semibold text-blue_gray_700 text-left w-auto"
                    variant="body1"
                  >
                    Me
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[74%] md:w-full">
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-6 w-6"
                    alt="videocamera"
                  />
                  <Text
                    className="font-semibold text-blue_gray_700 text-left w-auto"
                    variant="body1"
                  >
                    Inbox
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-end justify-start w-full">
                  <Img
                    src="images/img_user_24X24.svg"
                    className="h-6 w-6"
                    alt="user One"
                  />
                  <Text
                    className="font-semibold mt-1.5 text-blue_gray_700 text-left w-auto"
                    variant="body1"
                  >
                    My Team
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between mt-[42px] w-full">
                <Line className="bg-blue_A700 h-6 w-0.5" />
                <Img
                  src="images/img_linkedin.svg"
                  className="h-6 w-6"
                  alt="linkedin"
                />
                <Text
                  className="font-semibold mt-[5px] text-blue_A700 text-left w-auto"
                  variant="body1"
                >
                  Organization
                </Text>
              </div>
              <div className="flex flex-col font-gilroy gap-10 items-start justify-start ml-2 md:ml-[0] mt-[43px] w-3/4 md:w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-full">
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
                <div className="flex flex-row font-opensans gap-2 items-end justify-start w-[90%] md:w-full">
                  <Img
                    src="images/img_settings_24X24.svg"
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
            <div className="flex flex-row gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[480px] w-[27%] md:w-full">
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
        </aside>
        <div className="bg-gray_50_01 flex flex-1 flex-col font-gilroy items-center justify-start p-[30px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-[380px] mt-0.5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <Text
                className="md:mt-0 mt-[15px] text-blue_gray_900 text-left w-auto"
                as="h2"
                variant="h2"
              >
                Organization
              </Text>
              <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[748px] p-2 rounded-[50%] w-14">
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
            <div className="sm:h-[172px] h-[41px] md:h-[69px] mt-8 pt-1 relative w-full">
              <Line className="absolute bg-gray_300 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
              <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-[34px] items-start justify-between left-[3%] w-[46%]">
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="font-medium text-blue_A700 text-left w-auto"
                    variant="body1"
                  >
                    Employee Login
                  </Text>
                  <Line className="bg-blue_A700 h-0.5 w-full" />
                </div>
                <Text
                  className="font-medium text-blue_gray_400 text-left w-auto"
                  variant="body1"
                >
                  Shift Schedule
                </Text>
                <Text
                  className="font-medium text-blue_gray_400 text-left w-auto"
                  variant="body1"
                >
                  Attandance Requests
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-6 items-center justify-start mt-[41px] p-6 sm:px-5 rounded-lg w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between pt-[3px] w-full">
                <div className="flex flex-row gap-3.5 items-start justify-between w-[13%]">
                  <Text
                    className="font-semibold mt-1 text-blue_gray_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Fri, 13 May
                  </Text>
                  <Img
                    src="images/img_calendar.svg"
                    className="h-6 mb-0.5 w-6"
                    alt="calendar"
                  />
                </div>
                <div className="flex flex-row font-opensans gap-2 h-[22px] md:h-auto items-center justify-between w-[104px]">
                  <Text
                    className="font-semibold text-blue_gray_600 text-left w-auto"
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
              <div className="flex flex-col font-opensans items-center justify-start mb-1.5 w-full">
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <div className="bg-gray_50 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-3 w-full">
                    <Text
                      className="font-semibold sm:mt-0 mt-[5px] text-blue_gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Employee
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[116px] sm:mt-0 mt-1 text-blue_gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Date
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[179px] sm:mt-0 mt-[5px] text-blue_gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Log In Time
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[133px] sm:mt-0 mt-[5px] text-blue_gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Log out Time
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[124px] sm:mt-0 mt-[3px] text-blue_gray_600 text-left w-auto"
                      variant="body3"
                    >
                      Action
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-3 md:ml-[0] w-[89%] md:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-[16%] md:w-full">
                      <div className="flex flex-row gap-2 items-end justify-start w-[96%] md:w-full">
                        <Img
                          src="images/img_ellipse7.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven"
                        />
                        <Text
                          className="font-normal mb-[5px] mt-2.5 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          Ralph Edwards
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-start w-[84%] md:w-full">
                        <Img
                          src="images/img_ellipse7_32X32.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven One"
                        />
                        <Text
                          className="font-normal mb-[5px] mt-2.5 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          Jane Cooper
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[78%] md:w-full">
                        <Img
                          src="images/img_ellipse7_1.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Two"
                        />
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          Robert Fox
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-start w-[79%] md:w-full">
                        <Img
                          src="images/img_ellipse7_2.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Three"
                        />
                        <Text
                          className="font-normal mb-[5px] mt-2.5 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          Floyd Miles
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-start w-4/5 md:w-full">
                        <Img
                          src="images/img_ellipse7_3.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Four"
                        />
                        <Text
                          className="font-normal mb-[5px] mt-2.5 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          Jerome Bell
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-start w-[91%] md:w-full">
                        <Img
                          src="images/img_ellipse7_4.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Five"
                        />
                        <Text
                          className="font-normal mb-[5px] mt-2.5 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          Arlene McCoy
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[91%] md:w-full">
                        <Img
                          src="images/img_ellipse7_5.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Six"
                        />
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          Annette Black
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[137.24px] grid sm:grid-cols-1 grid-cols-3 ml-10 md:ml-[0] w-[55%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-8 items-center justify-start w-full">
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          12/05/2022
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          11/05/2022
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          09/05/2022
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          06/05/2022
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          06/05/2022
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          06/05/2022
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          06/05/2022
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 AM
                        </Text>
                        <Text
                          className="font-normal mt-8 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          12:42:24 AM
                        </Text>
                        <Text
                          className="font-normal mt-[31px] not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          04:04:54 PM
                        </Text>
                        <Text
                          className="font-normal mt-8 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 AM
                        </Text>
                        <Text
                          className="font-normal mt-8 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 AM
                        </Text>
                        <Text
                          className="font-normal mt-8 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 AM
                        </Text>
                        <Text
                          className="font-normal mt-8 not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 AM
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-full">
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                          variant="body3"
                        >
                          10:32:24 PM
                        </Text>
                      </div>
                    </List>
                    <div className="flex flex-col font-gilroy gap-[27px] items-center justify-start md:ml-[0] ml-[132px] pt-[3px] w-[11%] md:w-full">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="font-medium mt-0.5 text-blue_A200 text-left w-auto"
                          variant="body3"
                        >
                          View history
                        </Text>
                        <Img
                          src="images/img_upload.svg"
                          className="h-4 mb-[3px] w-4"
                          alt="upload"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="font-medium mt-0.5 text-blue_A200 text-left w-auto"
                          variant="body3"
                        >
                          View history
                        </Text>
                        <Img
                          src="images/img_upload.svg"
                          className="h-4 mb-[3px] w-4"
                          alt="upload One"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="font-medium mt-0.5 text-blue_A200 text-left w-auto"
                          variant="body3"
                        >
                          View history
                        </Text>
                        <Img
                          src="images/img_upload.svg"
                          className="h-4 mb-[3px] w-4"
                          alt="upload Two"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="font-medium mt-0.5 text-blue_A200 text-left w-auto"
                          variant="body3"
                        >
                          View history
                        </Text>
                        <Img
                          src="images/img_upload.svg"
                          className="h-4 mb-[3px] w-4"
                          alt="upload Three"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="font-medium mt-0.5 text-blue_A200 text-left w-auto"
                          variant="body3"
                        >
                          View history
                        </Text>
                        <Img
                          src="images/img_upload.svg"
                          className="h-4 mb-[3px] w-4"
                          alt="upload Four"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="font-medium mt-0.5 text-blue_A200 text-left w-auto"
                          variant="body3"
                        >
                          View history
                        </Text>
                        <Img
                          src="images/img_upload.svg"
                          className="h-4 mb-[3px] w-4"
                          alt="upload Five"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="font-medium mt-0.5 text-blue_A200 text-left w-auto"
                          variant="body3"
                        >
                          View history
                        </Text>
                        <Img
                          src="images/img_upload.svg"
                          className="h-4 mb-[3px] w-4"
                          alt="upload Six"
                        />
                      </div>
                    </div>
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

export default EmployeeloginPage;
