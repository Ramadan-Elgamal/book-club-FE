import { NavigationConfig } from "base/types";
import i18next from "i18next";
import { ar, en } from "./navigation-i18n";
import {
  IconCapProjecting,
  IconChartDotsFilled,
  IconHome,
  IconInvoice,
  IconLock,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { Permission } from "../auth/authRoles";
// import { Permission } from "../auth/authRoles";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig: NavigationConfig[] = [
  {
    id: "home",
    title: "Home",
    type: "item",
    translate: "Home",
    url: "/",
    icon: IconHome,
    auth: [Permission.ReadHome],
  },
  {
    id: "charts",
    title: "Charts",
    type: "collapse",
    translate: "Charts",
    url: "/charts",
    icon: IconChartDotsFilled,
    // auth: authRoles?.AllExceptUser,
    children: [
      {
        id: "charts:read",
        title: "View Charts",
        type: "item",
        translate: "ViewCharts",
        url: "/charts",
        icon: IconChartDotsFilled,
        // auth: [Permission.ReadChart],
      },
      {
        id: "charts:create",
        title: "Create Chart",
        type: "item",
        translate: "CreateCharts",
        url: "/charts/create",
        icon: IconChartDotsFilled,
        // auth: [Permission.CreateChart],
      },
    ],
  },
  {
    id: "Projects",
    title: "Projects",
    type: "collapse",
    translate: "Projects",
    url: "/projects",
    icon: IconCapProjecting,
    // auth: authRoles?.AllExceptUser,
    children: [
      {
        id: "Projects:read",
        title: "View Projects",
        type: "item",
        translate: "ViewProjects",
        url: "/projects",
        icon: IconChartDotsFilled,
        // auth: [Permission.ReadProject],
      },
      {
        id: "Projects:create",
        title: "Create Project",
        type: "item",
        translate: "CreateProjects",
        url: "/projects/create",
        icon: IconChartDotsFilled,
        // auth: [Permission.CreateProject],
      },
      {
        id: "Projects:ProjectRequests",
        title: "Project Requests",
        type: "item",
        translate: "ProjectRequests",
        url: "/projects/requests",
        icon: IconChartDotsFilled,
        // auth: [Permission.EditProject],
      },
    ],
  },
  {
    id: "Users",
    title: "Users",
    type: "collapse",
    translate: "Users",
    url: "/users",
    icon: IconUser,
    // auth: authRoles?.AllExceptUser,
    children: [
      {
        id: "Users:read",
        title: "View Users",
        type: "item",
        translate: "ViewUsers",
        url: "/users",
        icon: IconUser,
        // auth: [Permission.ReadUser],
      },
      {
        id: "Users:invite",
        title: "Invite User",
        type: "item",
        translate: "InviteUser",
        url: "/users/invite",
        icon: IconInvoice,
        // auth: [Permission.CreateUser],
      },
    ],
  },
  {
    id: "Settings",
    title: "Settings",
    type: "collapse",
    translate: "Settings",
    url: "/settings",
    icon: IconSettings,
    // auth: authRoles?.AllExceptUser,
    children: [
      {
        id: "Settings:Roles",
        title: "Roles",
        type: "item",
        translate: "Roles",
        url: "/settings/roles",
        icon: IconSettings,
        // auth: [Permission.ReadRole],
      },
      {
        id: "Settings:CreateRole",
        title: "Create Role",
        type: "item",
        translate: "CreateRole",
        url: "/settings/roles/create",
        icon: IconSettings,
        // auth: [Permission.Read
      },
    ],
  },
  {
    id: "Security",
    title: "Security",
    type: "collapse",
    translate: "Security",
    url: "/security",
    icon: IconLock,
    // auth: authRoles?.AllExceptUser,
    children: [
      {
        id: "Security:2FA",
        title: "Enable 2FA",
        type: "item",
        translate: "Enable2FA",
        url: "/security/2fa",
        icon: IconSettings,
        // auth: [Permission.Read2FA],
      },
      {
        id: "Security:ChangePassword",
        title: "Change Password",
        type: "item",
        translate: "ChangePassword",
        url: "/security/change-password",
        icon: IconSettings,
        // auth: [Permission.ChangePassword],
      },
    ],
  },
];

export default navigationConfig;
