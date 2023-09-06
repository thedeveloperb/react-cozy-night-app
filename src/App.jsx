import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

function Layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* routes/components that will render with navbar & footer */}
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
