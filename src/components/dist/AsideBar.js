"use strict";
exports.__esModule = true;
exports.AsideBar = void 0;
var material_1 = require("@mui/material");
var TaskAlt_1 = require("@mui/icons-material/TaskAlt");
var FilterList_1 = require("@mui/icons-material/FilterList");
var SortByAlphaOutlined_1 = require("@mui/icons-material/SortByAlphaOutlined");
var WidgetsOutlined_1 = require("@mui/icons-material/WidgetsOutlined");
var MoreHorizOutlined_1 = require("@mui/icons-material/MoreHorizOutlined");
var ControlPointOutlined_1 = require("@mui/icons-material/ControlPointOutlined");
var HourglassEmptyOutlined_1 = require("@mui/icons-material/HourglassEmptyOutlined");
var TaskAltOutlined_1 = require("@mui/icons-material/TaskAltOutlined");
var LanOutlined_1 = require("@mui/icons-material/LanOutlined");
var PlayArrowRounded_1 = require("@mui/icons-material/PlayArrowRounded");
var MoreHoriz_1 = require("@mui/icons-material/MoreHoriz");
exports.AsideBar = function () {
    return (React.createElement("div", null,
        React.createElement("div", { className: " border border-1 border-gray-300 mt-4 rounded-md p-2 font-bold text-gray-500" },
            React.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: { fontWeight: "bold" } },
                React.createElement("h2", null, "Created yesterday"),
                React.createElement("h2", { className: "ml-auto" },
                    React.createElement(TaskAlt_1["default"], { className: "inline-block mr-2 w-4 ml-auto" }),
                    "All Tasks"),
                React.createElement("h2", null,
                    React.createElement(FilterList_1["default"], { className: "inline-block mr-2 w-4 ml-auto" }),
                    "filter"),
                React.createElement("h2", null,
                    React.createElement(SortByAlphaOutlined_1["default"], { className: "inline-block mr-2 w-4 ml-auto" }),
                    "Sort"),
                React.createElement("h2", null,
                    React.createElement(WidgetsOutlined_1["default"], { className: "inline-block mr-2 w-4 ml-auto" }),
                    "customize"),
                React.createElement("h2", null,
                    React.createElement(MoreHorizOutlined_1["default"], { className: "inline-block mr-2 w-4 ml-auto" })))),
        React.createElement("div", { className: "w-full font-bold mt-2 mb-2 mr-6" },
            React.createElement(material_1.Stack, { direction: "row", spacing: 2 },
                React.createElement("h3", { className: "w-full" },
                    "Todo",
                    React.createElement("span", { className: "ml-12" },
                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block w-6 h-5" }),
                        React.createElement(MoreHoriz_1["default"], { className: "inline-block w-6 h-5" }))),
                React.createElement("h3", { className: "w-full" },
                    "Doing",
                    React.createElement("span", { className: "ml-14" },
                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block w-6 h-5" }),
                        React.createElement(MoreHoriz_1["default"], { className: "inline-block w-6 h-5" }))),
                React.createElement("h3", { className: "w-full" },
                    "done",
                    React.createElement("span", { className: "ml-14" },
                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block  w-6 h-5" }),
                        React.createElement(MoreHoriz_1["default"], { className: "inline-block w-6 h-5" }))),
                React.createElement("h3", { className: "w-full" },
                    "Untittled Section",
                    React.createElement("span", { className: "ml-12" },
                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block  w-6 h-5" }))))),
        React.createElement("div", { className: "w-full" },
            React.createElement("div", { className: "flex w-full space-x-4" },
                React.createElement("div", { className: "flex flex-col space-y-4" },
                    React.createElement("div", { className: " flex-col w-full border-2 border-gray-300 rounded-md h-32 " },
                        React.createElement(material_1.Box, null,
                            React.createElement(material_1.CardContent, null,
                                React.createElement("h2", { className: "w-full" },
                                    React.createElement(HourglassEmptyOutlined_1["default"], { className: "inline-block w-6 ml-auto h-4" }),
                                    "Contact client for Outlin..."),
                                React.createElement("div", { className: "flex justify-between" },
                                    React.createElement(material_1.Avatar, { src: "src\\assets\\sam1.png", alt: "avatar", className: "mt-14 inline-block h-2 w-3" }),
                                    React.createElement("div", { className: "order-last mt-14 text-gray-500 " },
                                        React.createElement("p", { className: "inline-block" }, "2"),
                                        React.createElement(LanOutlined_1["default"], { className: "inline-block w-3 h-3 " }),
                                        React.createElement(PlayArrowRounded_1["default"], { className: "inline-block w-3 h-3" })))))),
                    React.createElement("div", { className: " flex-col w-full border-2 border-gray-300 rounded-md h-32 " },
                        React.createElement(material_1.Box, null,
                            React.createElement(material_1.CardContent, null,
                                React.createElement("h2", { className: "w-full" },
                                    React.createElement(HourglassEmptyOutlined_1["default"], { className: "inline-block w-6 ml-auto h-4" }),
                                    "Contact client for Outlin..."),
                                React.createElement("div", { className: "flex justify-between" },
                                    React.createElement(material_1.Avatar, { src: "src\\assets\\sam1.png", alt: "avatar", className: "mt-14 inline-block h-2 w-3" }),
                                    React.createElement("div", { className: "order-last mt-14 text-gray-500 " },
                                        React.createElement("p", { className: "inline-block" }, "2"),
                                        React.createElement(LanOutlined_1["default"], { className: "inline-block w-3 h-3 " }),
                                        React.createElement(PlayArrowRounded_1["default"], { className: "inline-block w-3 h-3" })))))),
                    React.createElement("div", { className: " flex-col w-full border-2 border-gray-300 rounded-md h-32 " },
                        React.createElement(material_1.Box, null,
                            React.createElement(material_1.CardContent, null,
                                React.createElement("h2", { className: "w-full" },
                                    React.createElement(HourglassEmptyOutlined_1["default"], { className: "inline-block w-6 ml-auto h-4" }),
                                    "Contact client for Outlin..."),
                                React.createElement("div", { className: "flex justify-between" },
                                    React.createElement(material_1.Avatar, { src: "src\\assets\\sam1.png", alt: "avatar", className: "mt-14 inline-block h-2 w-3" }),
                                    React.createElement("div", { className: "order-last mt-14 text-gray-500 " },
                                        React.createElement("p", { className: "inline-block" }, "2"),
                                        React.createElement(LanOutlined_1["default"], { className: "inline-block w-3 h-3 " }),
                                        React.createElement(PlayArrowRounded_1["default"], { className: "inline-block w-3 h-3" })))))),
                    React.createElement("div", { className: "w-full text-center border-dashed border-2 border-gray-300 rounded-md " },
                        React.createElement(material_1.Box, null,
                            React.createElement(material_1.CardContent, null,
                                React.createElement("h2", null,
                                    React.createElement(ControlPointOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto" }),
                                    "Add Task"))))),
                React.createElement("div", { className: "flex-col " },
                    React.createElement("div", { className: "flex flex-col space-y-4" },
                        React.createElement("div", { className: " flex-col w-full border-2 border-gray-300 rounded-md h-32 " },
                            React.createElement(material_1.Box, null,
                                React.createElement(material_1.CardContent, null,
                                    React.createElement("h2", { className: "mb-4" },
                                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto h-4" }),
                                        "Hold Introdictory meeting"),
                                    React.createElement("h4", { className: "flex text-10" },
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#dfd43d] rounded-md mr-2 mt-1" }, "medium"),
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#fff347] rounded-md mt-1" }, "At risk")),
                                    React.createElement("div", { className: "flex justify-between" },
                                        React.createElement(material_1.Avatar, { src: "src\\assets\\sam1.png", alt: "avatar", className: "mt-2 inline-block h-2 w-3" }),
                                        React.createElement("div", { className: "order-last mt-2  text-gray-500 " },
                                            React.createElement("p", { className: "inline-block" }, "2"),
                                            React.createElement(LanOutlined_1["default"], { className: "inline-block w-3 h-3 m" }),
                                            React.createElement(PlayArrowRounded_1["default"], { className: "inline-block w-3 h-3" })))))),
                        React.createElement("div", { className: "flex-col w-full border-2 border-gray-300 rounded-md h-32 " },
                            React.createElement(material_1.Box, null,
                                React.createElement(material_1.CardContent, null,
                                    React.createElement("h2", { className: "mb-4" },
                                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto h-4" }),
                                        "Hold Introdictory meeting"),
                                    React.createElement("h4", { className: "flex text-10" },
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#8d3abd] rounded-md mr-2 mt-1" }, "medium"),
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#df3dbc] rounded-md mt-1" }, "At risk")),
                                    React.createElement("div", { className: "flex" },
                                        React.createElement(material_1.Avatar, { src: "src\\assets\\sam1.png", alt: "avatar", className: "inline-block mt-2 " }),
                                        React.createElement("h2", { className: "inline-block mt-4 text-gray-400 ml-1" }, "10-15 jul"))))),
                        React.createElement("div", { className: " flex-col w-full border-2 border-gray-300 rounded-md h-32 " },
                            React.createElement(material_1.Box, null,
                                React.createElement(material_1.CardContent, null,
                                    React.createElement("h2", { className: "mb-4" },
                                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto h-4" }),
                                        "Hold Introdictory meeting"),
                                    React.createElement("h4", { className: "flex text-10" },
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#46fff0] rounded-md mr-2 mt-1" }, "medium"),
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#46fff0] rounded-md mt-1" }, "At risk")),
                                    React.createElement("div", { className: "flex" },
                                        React.createElement(material_1.Avatar, { src: "src\\assets\\sam1.png", alt: "avatar", className: "inline-block mt-2 " }),
                                        React.createElement("h2", { className: "inline-block text-gray-400 mt-4 ml-1 " }, "10-15 jul"))))),
                        React.createElement("div", { className: "w-full text-center border-dashed border-2 border-gray-300 rounded-md " },
                            React.createElement(material_1.Box, null,
                                React.createElement(material_1.CardContent, null,
                                    React.createElement("h2", null,
                                        React.createElement(ControlPointOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto" }),
                                        "Add Task")))))),
                React.createElement("div", { className: "flex-col" },
                    React.createElement("div", { className: "flex flex-col space-y-4" },
                        React.createElement("div", { className: " flex-col w-full border-2 border-gray-300 rounded-md h-32 " },
                            React.createElement(material_1.Box, null,
                                React.createElement(material_1.CardContent, null,
                                    React.createElement("h2", { className: "mb-4" },
                                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto h-4" }),
                                        "Determine project goal"),
                                    React.createElement("h4", { className: "flex text-10" },
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#45e0fc] rounded-md mr-2 mt-1" }, "medium"),
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#44dffa] rounded-md mt-1" }, "At risk")),
                                    React.createElement("div", { className: "flex" },
                                        React.createElement(material_1.Avatar, { src: "src\\assets\\sam1.png", alt: "avatar", className: "inline-block mt-2 " }),
                                        React.createElement("h2", { className: "inline-block text-gray-400 mt-4 ml-1" }, "10-15 jul"))))),
                        React.createElement("div", { className: " flex-col w-full border-2 border-gray-300 rounded-md h-32 " },
                            React.createElement(material_1.Box, null,
                                React.createElement(material_1.CardContent, null,
                                    React.createElement("h2", { className: "mb-4" },
                                        React.createElement(TaskAltOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto h-4" }),
                                        "Determine project goal"),
                                    React.createElement("h4", { className: "flex text-10" },
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#dfd43d] rounded-md mr-2 mt-1" }, "medium"),
                                        React.createElement("button", { className: "inline-block m-0 p-1 bg-[#fff347] rounded-md mt-1" }, "At risk")),
                                    React.createElement("div", { className: "flex justify-between" },
                                        React.createElement(material_1.Avatar, { src: "src\\assets\\sam1.png", alt: "avatar", className: "inline-block mt-1 " }),
                                        React.createElement("div", { className: "order-last mt-1 text-gray-500 " },
                                            React.createElement("p", { className: "inline-block" }, "2"),
                                            React.createElement(LanOutlined_1["default"], { className: "inline-block w-3 h-3 " }),
                                            React.createElement(PlayArrowRounded_1["default"], { className: "inline-block w-3 h-3" })))))),
                        React.createElement("div", { className: "w-full text-center border-dashed border-2 border-gray-300 rounded-md " },
                            React.createElement(material_1.Box, null,
                                React.createElement(material_1.CardContent, null,
                                    React.createElement("h2", null,
                                        React.createElement(ControlPointOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto" }),
                                        "Add Task")))))),
                React.createElement("div", { className: "flex-col" },
                    React.createElement("div", { className: "flex flex-col space-y-4" },
                        React.createElement("div", { className: " flex-col border-2 border-gray-300 rounded-md h-32 w-f " },
                            React.createElement(material_1.Box, null,
                                React.createElement(material_1.CardContent, null,
                                    React.createElement("h2", { className: "p-14" },
                                        React.createElement(ControlPointOutlined_1["default"], { className: "inline-block mr-2 w-6 ml-auto " }),
                                        "Add Task"))))))))));
};
