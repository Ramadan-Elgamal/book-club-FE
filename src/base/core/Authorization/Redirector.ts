import { Permission } from "~/app/auth/authRoles";

export const redirector = (permissions: string[]) => {
  switch (true) {
    case permissions.includes(Permission.Admin):
      return "/admin";
    case permissions.includes(Permission.Merchant):
      return "/merchant";
    default:
      return "/";
  }
};
