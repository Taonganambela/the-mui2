import { Stack, CardContent, Box, Avatar } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortByAlphaOutlinedIcon from "@mui/icons-material/SortByAlphaOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const AsideBar = () => {
  return (
    <div>
      <div className=" border border-1 border-gray-300 mt-4 rounded-md p-2 font-bold text-gray-500">
        <Stack direction="row" spacing={1} sx={{ fontWeight: "bold" }}>
          <h2>Created yesterday</h2>
          <h2 className="ml-auto">
            <TaskAltIcon className="inline-block mr-2 w-4 ml-auto" />
            All Tasks
          </h2>
          <h2>
            <FilterListIcon className="inline-block mr-2 w-4 ml-auto" />
            filter
          </h2>
          <h2>
            <SortByAlphaOutlinedIcon className="inline-block mr-2 w-4 ml-auto" />
            Sort
          </h2>
          <h2>
            <WidgetsOutlinedIcon className="inline-block mr-2 w-4 ml-auto" />
            customize
          </h2>
          <h2>
            <MoreHorizOutlinedIcon className="inline-block mr-2 w-4 ml-auto" />
          </h2>
        </Stack>
      </div>

      <div className="w-full font-bold mt-2 mb-2 mr-6">
        <Stack direction="row" spacing={2}>
          <h3 className="w-full">
            Todo
            <span className="ml-12">
              <TaskAltOutlinedIcon className="inline-block w-6 h-5" />
              <MoreHorizIcon className="inline-block w-6 h-5" />
            </span>
          </h3>
          <h3 className="w-full">
            Doing
            <span className="ml-14">
              <TaskAltOutlinedIcon className="inline-block w-6 h-5" />
              <MoreHorizIcon className="inline-block w-6 h-5" />
            </span>
          </h3>
          <h3 className="w-full">
            done
            <span className="ml-14">
              <TaskAltOutlinedIcon className="inline-block  w-6 h-5" />
              <MoreHorizIcon className="inline-block w-6 h-5" />
            </span>
          </h3>
          <h3 className="w-full">
            Untittled Section
            <span className="ml-12">
              <TaskAltOutlinedIcon className="inline-block  w-6 h-5" />
             
            </span>
          </h3>
        </Stack>
      </div>

      <div className="w-full">
        <div className="flex w-full space-x-4">
          <div className="flex flex-col space-y-4">
            <div className=" flex-col w-full border-2 border-gray-300 rounded-md h-32 ">
              <Box>
                <CardContent>
                  <h2 className="w-full">
                    <HourglassEmptyOutlinedIcon className="inline-block w-6 ml-auto h-4" />
                    Contact client for Outlin...
                  </h2>
                  <div className="flex justify-between">
                    <Avatar
                      src="src\assets\sam1.png"
                      alt="avatar"
                      className="mt-14 inline-block h-2 w-3"
                    />
                    <div className="order-last mt-14 text-gray-500 ">
                      <p className="inline-block">2</p>
                      <LanOutlinedIcon className="inline-block w-3 h-3 " />
                      <PlayArrowRoundedIcon className="inline-block w-3 h-3" />
                    </div>
                  </div>
                </CardContent>
              </Box>
            </div>

            <div className=" flex-col w-full border-2 border-gray-300 rounded-md h-32 ">
              <Box>
                <CardContent>
                  <h2 className="w-full">
                    <HourglassEmptyOutlinedIcon className="inline-block w-6 ml-auto h-4" />
                    Contact client for Outlin...
                  </h2>
                  <div className="flex justify-between">
                    <Avatar
                      src="src\assets\sam1.png"
                      alt="avatar"
                      className="mt-14 inline-block h-2 w-3"
                    />
                    <div className="order-last mt-14 text-gray-500 ">
                      <p className="inline-block">2</p>
                      <LanOutlinedIcon className="inline-block w-3 h-3 " />
                      <PlayArrowRoundedIcon className="inline-block w-3 h-3" />
                    </div>
                  </div>
                </CardContent>
              </Box>
            </div>

            <div className=" flex-col w-full border-2 border-gray-300 rounded-md h-32 ">
              <Box>
                <CardContent>
                  <h2 className="w-full">
                    <HourglassEmptyOutlinedIcon className="inline-block w-6 ml-auto h-4" />
                    Contact client for Outlin...
                  </h2>
                  <div className="flex justify-between">
                    <Avatar
                      src="src\assets\sam1.png"
                      alt="avatar"
                      className="mt-14 inline-block h-2 w-3"
                    />
                    <div className="order-last mt-14 text-gray-500 ">
                      <p className="inline-block">2</p>
                      <LanOutlinedIcon className="inline-block w-3 h-3 " />
                      <PlayArrowRoundedIcon className="inline-block w-3 h-3" />
                    </div>
                  </div>
                </CardContent>
              </Box>
            </div>

            <div className="w-full text-center border-dashed border-2 border-gray-300 rounded-md ">
              <Box>
                <CardContent>
                  <h2>
                    <ControlPointOutlinedIcon className="inline-block mr-2 w-6 ml-auto" />
                    Add Task
                  </h2>
                </CardContent>
              </Box>
            </div>
          </div>

          <div className="flex-col ">
            <div className="flex flex-col space-y-4">
              <div className=" flex-col w-full border-2 border-gray-300 rounded-md h-32 ">
                <Box>
                  <CardContent>
                    <h2 className="mb-4">
                      <TaskAltOutlinedIcon className="inline-block mr-2 w-6 ml-auto h-4" />
                      Hold Introdictory meeting
                    </h2>
                    <h4 className="flex text-10">
                      <button className="inline-block m-0 p-1 bg-[#dfd43d] rounded-md mr-2 mt-1">
                        medium
                      </button>
                      <button className="inline-block m-0 p-1 bg-[#fff347] rounded-md mt-1">
                        At risk
                      </button>
                    </h4>

                    <div className="flex justify-between">
                       <Avatar
                      src="src\assets\sam1.png"
                      alt="avatar"
                      className="mt-2 inline-block h-2 w-3"
                    />

                    <div className="order-last mt-2  text-gray-500 ">
                      <p className="inline-block">2</p>
                      <LanOutlinedIcon className="inline-block w-3 h-3 m" />
                      <PlayArrowRoundedIcon className="inline-block w-3 h-3" />
                    </div>
                    </div>
                  </CardContent>
                </Box>
              </div>

              <div className="flex-col w-full border-2 border-gray-300 rounded-md h-32 ">
                <Box>
                  <CardContent>
                    <h2 className="mb-4">
                      <TaskAltOutlinedIcon className="inline-block mr-2 w-6 ml-auto h-4" />
                      Hold Introdictory meeting
                    </h2>
                    <h4 className="flex text-10">
                      <button className="inline-block m-0 p-1 bg-[#8d3abd] rounded-md mr-2 mt-1">
                        medium
                      </button>
                      <button className="inline-block m-0 p-1 bg-[#df3dbc] rounded-md mt-1">
                        At risk
                      </button>
                    </h4>
                    <div className="flex">
                      <Avatar
                        src="src\assets\sam1.png"
                        alt="avatar"
                        className="inline-block mt-2 "
                      ></Avatar>
                      <h2 className="inline-block mt-4 text-gray-400 ml-1">
                        10-15 jul
                      </h2>
                    </div>
                  </CardContent>
                </Box>
              </div>

              <div className=" flex-col w-full border-2 border-gray-300 rounded-md h-32 ">
                <Box>
                  <CardContent>
                    <h2 className="mb-4">
                      <TaskAltOutlinedIcon className="inline-block mr-2 w-6 ml-auto h-4" />
                      Hold Introdictory meeting
                    </h2>
                    <h4 className="flex text-10">
                      <button className="inline-block m-0 p-1 bg-[#46fff0] rounded-md mr-2 mt-1">
                        medium
                      </button>
                      <button className="inline-block m-0 p-1 bg-[#46fff0] rounded-md mt-1">
                        At risk
                      </button>
                    </h4>
                    <div className="flex">
                      <Avatar
                        src="src\assets\sam1.png"
                        alt="avatar"
                        className="inline-block mt-2 "
                      />
                      <h2 className="inline-block text-gray-400 mt-4 ml-1 ">
                        10-15 jul
                      </h2>
                    </div>
                  </CardContent>
                </Box>
              </div>

              <div className="w-full text-center border-dashed border-2 border-gray-300 rounded-md ">
                <Box>
                  <CardContent>
                    <h2>
                      <ControlPointOutlinedIcon className="inline-block mr-2 w-6 ml-auto" />
                      Add Task
                    </h2>
                  </CardContent>
                </Box>
              </div>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-col space-y-4">
            <div className=" flex-col w-full border-2 border-gray-300 rounded-md h-32 ">
              <Box>
                <CardContent>
                  <h2 className="mb-4">
                    <TaskAltOutlinedIcon className="inline-block mr-2 w-6 ml-auto h-4" />
                    Determine project goal
                  </h2>
                  <h4 className="flex text-10">
                    <button className="inline-block m-0 p-1 bg-[#45e0fc] rounded-md mr-2 mt-1">
                      medium
                    </button>
                    <button className="inline-block m-0 p-1 bg-[#44dffa] rounded-md mt-1">
                      At risk
                    </button>
                  </h4>
                  <div className="flex">
                      <Avatar
                        src="src\assets\sam1.png"
                        alt="avatar"
                        className="inline-block mt-2 "
                      />
                      <h2 className="inline-block text-gray-400 mt-4 ml-1">
                        10-15 jul
                      </h2>
                    </div>
                </CardContent>
              </Box>
            </div>

            <div className=" flex-col w-full border-2 border-gray-300 rounded-md h-32 ">
              <Box>
                <CardContent>
                  <h2 className="mb-4">
                    <TaskAltOutlinedIcon className="inline-block mr-2 w-6 ml-auto h-4" />
                    Determine project goal
                  </h2>
                  <h4 className="flex text-10">
                    <button className="inline-block m-0 p-1 bg-[#dfd43d] rounded-md mr-2 mt-1">
                      medium
                    </button>
                    <button className="inline-block m-0 p-1 bg-[#fff347] rounded-md mt-1">
                      At risk
                    </button>
                  </h4>
                  <div className="flex justify-between">
                    <Avatar
                      src="src\assets\sam1.png"
                      alt="avatar"
                      className="inline-block mt-1 "
                    /> 

                    <div className="order-last mt-1 text-gray-500 ">
                      <p className="inline-block">2</p>
                      <LanOutlinedIcon className="inline-block w-3 h-3 " />
                      <PlayArrowRoundedIcon className="inline-block w-3 h-3" />
                    </div>
                  </div>
                </CardContent>
              </Box>
            </div>

            <div className="w-full text-center border-dashed border-2 border-gray-300 rounded-md ">
              <Box>
                <CardContent>
                  <h2>
                    <ControlPointOutlinedIcon className="inline-block mr-2 w-6 ml-auto" />
                    Add Task
                  </h2>
                </CardContent>
              </Box>
            </div>
          </div>
          </div>

          <div className="flex-col">
            <div className="flex flex-col space-y-4">
              <div className=" flex-col border-2 border-gray-300 rounded-md h-32 w-f ">
                <Box>
                  <CardContent>
                    <h2 className="p-14">
                      <ControlPointOutlinedIcon className="inline-block mr-2 w-6 ml-auto " />
                      Add Task
                    </h2>
                  </CardContent>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
