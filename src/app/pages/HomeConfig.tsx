import { lazy } from "react";
import { PageConfig } from "base/types";

// const LandingPage = lazy(() => import("./LandingPage"));
const HomePage = lazy(() => import("./client/home/HomePage"));

const HomeConfig: PageConfig = {
  settings: {
    layout: {
      style: "Client",
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: true,
        },
        footer: {
          display: true,
        },
      },
    },
  },
  routes: [
    {
      path: "/",
      // element: <LandingPage />,
      element: <HomePage />,
    },
  ],
};

export default HomeConfig;
