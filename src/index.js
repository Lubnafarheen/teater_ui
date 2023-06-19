import React from "react";
import ReactDOM from "react-dom";
import "./AppStyle.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import Calendar from "./components/Calendar";
import StaffCalendar from "./components/StaffCalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "calendar",
    element: <Calendar />,
  },
  {
    path: "staffcalendar",
    element: <StaffCalendarCalendar />,
  },
]);

// Define your theme
const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>,
  document.getElementById("root")
);
