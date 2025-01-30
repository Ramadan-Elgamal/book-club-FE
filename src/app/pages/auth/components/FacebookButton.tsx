import { Button, ButtonProps } from "@mantine/core";
import { FacebookIcon } from "./FacebookIcon";

export function FacebookButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
    return <Button leftSection={<FacebookIcon />}  {...props} />;
  }