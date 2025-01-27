// import { AppShell, Loader } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { Suspense, memo, useContext } from "react";
// import { useSelector } from "react-redux";
// import { useRoutes } from "react-router-dom";
// import AppContext from "~/app/AppContext";
// import { selectCurrentLayoutConfig } from "~/app/store/app/settingsSlice";
// import { Navbar } from "../components/Navbar/Navbar";
// import { adminData, adminLinks, adminTerms } from "../components/data";
// import { Toolbar } from "../components/Toolbar/Toolbar";
// import { Footer } from "../components/Footer/Footer";

// const Layout = () => {
//   const config = useSelector(selectCurrentLayoutConfig);
//   const appContext = useContext(AppContext);
//   const { routes } = appContext;
//   const [opened, { toggle }] = useDisclosure();
//   const navbarStyles = config.navbar.display
//     ? {
//         width: opened ? 48 : 288,
//         breakpoint: "sm",
//         collapsed: { mobile: opened },
//       }
//     : undefined;
//   const headerStyles = config.toolbar.display ? { height: 65 } : undefined;

//   return (
//     <AppShell layout="alt" header={headerStyles} navbar={navbarStyles}>
//       {config.toolbar.display && <Toolbar opened={opened} toggle={toggle} />}
//       {config.navbar.display && (
//         <Navbar opened={opened} toggle={toggle} data={adminData} />
//       )}

//       <AppShell.Main className="bg-slate-50">
//         <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>
//       </AppShell.Main>
//       {config.footer.display && (
//         <Footer terms={adminTerms} links={adminLinks} />
//       )}
//     </AppShell>
//   );
// };

// export default memo(Layout);
