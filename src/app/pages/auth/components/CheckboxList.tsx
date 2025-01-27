import { useListState, randomId } from "@mantine/hooks";
import { Checkbox } from "@mantine/core";

const initialValues = [
  {
    label: "contains at least eight characters",
    checked: false,
    key: randomId(),
  },
  { label: " At least one number", checked: false, key: randomId() },
  { label: "At least one uppercase letter", checked: false, key: randomId() },
  { label: "At least one lowercase letter", checked: false, key: randomId() },
  {
    label: "At least one special character",
    checked: false,
    key: randomId(),
  },
  { label: "not your old password", checked: false, key: randomId() },
];

export const CheckboxList = () => {
  const [values, handlers] = useListState(initialValues);

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      color="#172554"
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) =>
        handlers.setItemProp(index, "checked", event.currentTarget.checked)
      }
    />
  ));

  return (
    <div className="rounded-md p-5 font-medium text-blue-950">{items}</div>
  );
};
