import { AppShell, Burger, Button, Group, Image } from "@mantine/core";
import logo from "~/assets/imgs/logo.png";
const Toolbar = ({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) => {
  const tabs = ["Clubs", "Borrow & Lend", "More"];
  return (
    <AppShell.Header withBorder={true} px={20}>
      <Group h="100%">
        <Group justify="space-between" style={{ flex: 1 }}>
          <Image src={logo} alt="logo" height={40} />
          <Group ml="xl" gap={60} visibleFrom="sm">
            {tabs.map((tab) => (
              <ul
                key={tab}
                className="cursor-pointer text-lg font-semibold text-[#402905] hover:underline"
              >
                {tab}
              </ul>
            ))}
          </Group>
          <Group gap="md">
            <Button variant="outline" c="#402905">
              Sign up
            </Button>
            <Button color="#76552B">Join now</Button>
          </Group>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </AppShell.Header>
  );
};

export default Toolbar;
