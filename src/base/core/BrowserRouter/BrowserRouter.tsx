import History from "../history";
import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";

type Props = {
  appName?: string;
  window?: Window;
};

function BrowserRouter({ appName, children }: PropsWithChildren<Props>) {
  const [state, setState] = useState({
    action: History.action,
    location: History.location,
  });
  useLayoutEffect(() => History.listen(setState), []);

  const finalAppName = !appName || appName === "/" ? "" : appName;

  return (
    <Router
      basename={`/${finalAppName}`}
      location={state.location}
      navigationType={state.action}
      navigator={History}
    >
      {children}
    </Router>
  );
}

export default BrowserRouter;
