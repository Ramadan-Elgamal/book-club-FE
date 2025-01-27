import { createContext } from "react";
import { RouteConfig } from "~/base/types";

const AppContext = createContext<{ routes: RouteConfig[] }>(
  {} as { routes: RouteConfig[] }
);

export default AppContext;
