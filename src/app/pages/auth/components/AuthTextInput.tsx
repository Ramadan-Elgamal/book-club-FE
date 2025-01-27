import { TextInput } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { UserSignupBody } from "~/app/store/types";

type Props = {
  name: keyof UserSignupBody;
} & React.ComponentProps<typeof TextInput>;

export default function AuthTextInput({ name, ...rest }: Readonly<Props>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSignupBody>();
  return (
    <TextInput {...rest} {...register(name)} error={errors[name]?.message} />
  );
}
