import { PageConfig, RouteConfig } from "base/types";
import CoreUtils from "base/utils";
import settingsConfig from "./settingsConfig";
// import AuthConfig from "app/pages/auth/AuthConfig";

import HomeConfig from "../pages/HomeConfig";

// Important note: Make sure that ErrorsConfig is the last item in the routesConfig always
const routeConfigs: PageConfig[] = [HomeConfig];

const routes: RouteConfig[] = [
  ...CoreUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth,
  ),
];

export default routes;
