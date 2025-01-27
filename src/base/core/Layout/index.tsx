import { FC, memo, useCallback, useContext, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matchRoutes, useLocation } from "react-router-dom";
import _ from "../lodash/lodash";
import {
  generateSettings,
  selectCurrentSettings,
  selectDefaultSettings,
  setSettings,
} from "~/app/store/app/settingsSlice";
import AppContext from "app/AppContext";
import { RouteConfig } from "~/base/types";
import useDeepCompareEffect from "base/hooks/useDeepCompareEffect";

type Props = {
  layouts: {
    [key: string]: FC;
  };
};

const AppLayout = ({ layouts, ...props }: Props) => {
  const dispatch = useDispatch();
  const settings = useSelector(selectCurrentSettings);
  const defaultSettings = useSelector(selectDefaultSettings);
  const appContext = useContext(AppContext);
  const { routes } = appContext;
  const location = useLocation();
  const { pathname } = location;
  const matchedRoutes = matchRoutes<RouteConfig>(routes, pathname);
  const matched = matchedRoutes ? matchedRoutes[0] : false;
  const newSettings = useRef(null);

  const shouldAwaitRender = useCallback(() => {
    let _newSettings;
    if (matched && matched.route.settings) {
      const routeSettings = matched.route.settings;
      _newSettings = generateSettings(defaultSettings, routeSettings);
    } else if (!_.isEqual(newSettings.current, defaultSettings)) {
      _newSettings = _.merge({}, defaultSettings);
    } else {
      _newSettings = newSettings.current;
    }
    if (!_.isEqual(newSettings.current, _newSettings)) {
      newSettings.current = _newSettings;
    }
  }, [defaultSettings, matched]);

  shouldAwaitRender();

  useDeepCompareEffect(() => {
    if (!_.isEqual(newSettings.current, settings)) {
      dispatch(setSettings(newSettings.current));
    }
  }, [dispatch, newSettings.current, settings]);

  const Layout = useMemo(
    () => layouts[settings.layout.style],
    [layouts, settings.layout.style],
  );


  return _.isEqual(newSettings.current, settings) ? (
    <Layout {...props} />
  ) : null;
};

export default memo(AppLayout);
