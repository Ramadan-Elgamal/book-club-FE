import { RouteObject } from "react-router-dom";

type PageSettings = {
  layout: {
    style: "Admin" | "Client";
    config: {
      navbar: {
        display: boolean;
      };
      toolbar: {
        display: boolean;
      };
      footer: {
        display: boolean;
      };
    };
  };
};

export type RouteConfig = RouteObject & {
  auth?: string[] | undefined | null;
  settings?: PageSettings;
};

export interface PageConfig {
  settings?: PageSettings;
  auth?: string[] | null;
  routes: RouteConfig[];
}

export interface NavigationConfig {
  id: string;
  title: string;
  initiallyOpened?: boolean;
  subtitle?: string;
  translate?: string;
  icon: string | JSX.ElementType;
  type: "item" | "collapse" | "group";
  url: string;
  auth?: string[];
  children?: NavigationConfig[];
  responsiveOnly?: boolean;
}
