import { notifications } from "@mantine/notifications";
import { isFulfilled, isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { ApiAction } from "../types";
import { t } from "i18next";

export const ApiMiddleware: Middleware = () => (next) => (action) => {
  const { type, payload, meta } = action as ApiAction;
  if (type.includes("/pending")) {
    // console.log("API request is pending...");
  } else if (isFulfilled(action) && meta.arg.type === "mutation") {
    notifications.show({
      title: t("Success"),
      color: "green",
      message: `${meta.arg.endpointName} success`,
      variant: "success",
    });
  } else if (isRejectedWithValue(action) && meta.arg.type === "mutation") {
    notifications.show({
      title: t("Error"),
      color: "red",
      message: payload?.data?.message ?? "Something went wrong",
      variant: "error",
    });
  }
  next(action);
};
