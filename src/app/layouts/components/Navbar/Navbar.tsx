import { AppShell, UnstyledButton } from "@mantine/core";
const Navbar = () => {
  return (
    <AppShell.Navbar py="md" px={4}>
      <UnstyledButton className={""}>Home</UnstyledButton>
      <UnstyledButton className={""}>Blog</UnstyledButton>
      <UnstyledButton className={""}>Contacts</UnstyledButton>
      <UnstyledButton className={""}>Support</UnstyledButton>
    </AppShell.Navbar>
  );
};

export default Navbar;
