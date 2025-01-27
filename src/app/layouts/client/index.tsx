import { AppShell, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Suspense, memo, useContext } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import AppContext from "~/app/AppContext";
import { selectCurrentLayoutConfig } from "~/app/store/app/settingsSlice";
// import { clientData, clientTerms } from "../components/data";
// import { Navbar } from "../components/Navbar/Navbar";
// import { Toolbar } from "../components/Toolbar/Toolbar";
// import { Footer } from "../components/Footer/Footer";

const Layout = () => {
  const config = useSelector(selectCurrentLayoutConfig);
  const appContext = useContext(AppContext);
  const { routes } = appContext;
  const [opened] = useDisclosure();
  const navbarStyles = config.navbar.display
    ? {
        width: opened ? 48 : 288,
        breakpoint: "sm",
        collapsed: { mobile: opened },
      }
    : undefined;
  const headerStyles = config.toolbar.display ? { height: 65 } : undefined;
  return (
    <AppShell layout="alt" header={headerStyles} navbar={navbarStyles}>
      {config.toolbar.display && <></>}
      {config.navbar.display && (
        // <Navbar opened={opened} toggle={toggle} data={clientData} />
        <div></div>
      )}

      <AppShell.Main>
        <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>
      </AppShell.Main>
      {config.footer.display && <></>}
    </AppShell>
  );
};

export default memo(Layout);
