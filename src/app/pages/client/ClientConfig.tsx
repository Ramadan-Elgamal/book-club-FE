// import { lazy } from "react";
import { PageConfig } from "base/types";

// const test = lazy(() => import("./"));

const ClientConfig: PageConfig = {
  settings: {
    layout: {
      style: "Client",
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: true,
        },
      },
    },
  },
  routes: [{}],
};

export default ClientConfig;
