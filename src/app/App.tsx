import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import AppLayout from "base/core/Layout";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Authorization } from "~/base/core/Authorization";
import AppContext from "./AppContext";
import { AuthProvider } from "./auth/AuthContext";
import routes from "./configs/routesConfig";
import AppLayouts from "./layouts";
import store from "./store";
import { theme } from "./theme";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const contextValue = useMemo(() => ({ routes }), []);
  return (
    <AppContext.Provider value={contextValue}>
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <BrowserRouter>
              <AuthProvider>
                <GoogleOAuthProvider clientId="<your_client_id>">
                  <Authorization>
                    <Notifications zIndex={999999} />
                    <AppLayout layouts={AppLayouts} />
                  </Authorization>
                </GoogleOAuthProvider>
              </AuthProvider>
            </BrowserRouter>
          </ModalsProvider>
        </MantineProvider>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
