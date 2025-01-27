/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Location, matchRoutes } from "react-router-dom";
import AppContext from "~/app/AppContext";
import { RouteConfig } from "../../types";
import CoreUtils from "../../utils/CoreUtiles";
import { withRouter } from "../withRouter";
import { useAuth } from "base/hooks";
import { redirector } from "./Redirector";

type Props = {
  location: Location;
  navigate: any;
};

let loginRedirectUrl: string | null = null;

// eslint-disable-next-line react-refresh/only-export-components
const Authorization: React.FC<PropsWithChildren<Props>> = ({
  location,
  children,
  navigate,
}) => {
  const { user } = useAuth();
  const appContext = useContext(AppContext);
  const { routes } = appContext;
  const userRole = user?.permissions;

  const [accessGranted, setAccessGranted] = useState(
    "loading" as boolean | "loading",
  );
  const redirectRoute = useCallback(() => {
    const { pathname } = location;
    const redirectUrl = loginRedirectUrl || "/";
    if (!userRole || userRole.length === 0) {
      navigate(`/sign-in`);
      loginRedirectUrl = pathname;
    } else {
      if (redirectUrl) navigate(redirector(userRole));
      loginRedirectUrl = "/";
    }
  }, [location, userRole, navigate]);

  useEffect(() => {
    const matchedRoutes = matchRoutes<RouteConfig>(routes, location.pathname);
    const matched = matchedRoutes ? matchedRoutes[0] : false;
    const granted = matched
      ? CoreUtils.hasPermission(matched.route.auth, userRole || [])
      : true;
    setAccessGranted(granted);
    if (!granted) redirectRoute();
  }, [location, redirectRoute, routes, userRole]);
  if (accessGranted === "loading") return null;
  return accessGranted === true ? <>{children}</> : null;
};

// eslint-disable-next-line react-refresh/only-export-components
export default withRouter(Authorization);
