import { createTheme, Image, MantineTheme } from "@mantine/core";
import caretDown from "assets/icons/CaretDown.svg";
import VectorRight from "assets/icons/VectorRight.svg";
import calendar from "assets/icons/calender.svg";

export const theme = createTheme({
  defaultRadius: "md",
  cursorType: "pointer",
  colors: {
    gray: [
      "#FFFFFF",
      "#e9ecef",
      "#e5e7eB",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
      "#121416",
    ],
    blue: [
      "#172554",
      "#172554",
      "#172554",
      "#172554",
      "#172554",
      "#172554",
      "#172554",
      "#172554",
      "#172554",
      "#172554",
    ],
    orange: [
      "#fff7ed",
      "#ffedd5",
      "#fed7aa",
      "#fdba74",
      "#fb923c",
      "#f97316",
      "#ea580c",
      "#c2410c",
      "#9a3412",
      "#7c2d12",
      "#431407",
    ],
    slate: [
      "#f8fafc",
      "#f1f5f9",
      "#e2e8f0",
      "#cbd5e1",
      "#94a3b8",
      "#64748b",
      "#475569",
      "#334155",
      "#1e293b",
      "#0f172a",
      "#020617",
    ],
  },
  components: {
    Button: {
      defaultProps: {
        variant: "filled",
        classNames: {
          root: "!px-3",
        },
      },
      styles: (
        theme: MantineTheme,
        params: { variant: string; disabled: boolean },
      ) => ({
        root: {
          ...(params.variant === "filled" && {
            color: theme.colors.slate[0],
          }),
          ...(params.variant === "outline" && {
            color: theme.colors.blue[0],
            border: `1px solid ${theme.colors.gray[2]}`,
            backgroundColor: theme.colors.gray[0],
            "&:hover": {
              backgroundColor: theme.colors.gray[4],
            },
          }),
          ...(params.variant === "secondary" && {
            backgroundColor: theme.colors.orange[6],
          }),
          ...(params.disabled && {
            color: theme.colors.gray[0],
            backgroundColor: theme.colors.gray[2],
          }),
        },
      }),
    },
    Select: {
      defaultProps: {
        classNames: {
          root: "!shadow-sm !w-full",
          input: "!border-gray-200 !text-gray-600",
          label: "!text-blue-950 pb-1",
          options: "!text-gray-600",
          required: "!text-blue-950",
        },
        rightSection: <Image src={caretDown} />,
      },
    },
    MultiSelect: {
      defaultProps: {
        classNames: {
          root: "!shadow-sm !w-full",
          input: "!border-gray-200 !text-gray-600",
          label: "!text-blue-950 pb-1",
          options: "!text-gray-600",
          required: "!text-blue-950",
        },
        rightSection: <Image src={caretDown} />,
      },
    },
    TextInput: {
      defaultProps: {
        classNames: {
          root: "!shadow-sm  w-full",
          input: "!border-gray-200 !px-2 !text-gray-600",
          label: "!text-blue-950 pb-1",
          required: "!text-blue-950",
        },
      },
    },
    PasswordInput: {
      defaultProps: {
        classNames: {
          root: "!shadow-sm  w-full",
          label: "!text-blue-950",
          input: "!border-gray-200 !rounded-lg !text-gray-600 shadow-sm",
          required: "!text-blue-950",
          visibilityToggle: "hover:!bg-transparent",
          error: "!hidden",
        },
      },
    },
    DateInput: {
      defaultProps: {
        classNames: {
          root: "w-full",
          input: "!border-gray-200 !rounded-lg !text-gray-600 !shadow-sm",
          label: "!text-blue-950",
          required: "!text-blue-950",
        },
        popoverProps: {
          position: "top-start",
        },
        rightSection: <Image src={calendar} height={16} width={16} />,
      },
    },
    Textarea: {
      defaultProps: {
        classNames: {
          root: "!shadow-sm w-full ",
          input: "!border-gray-200 !px-2 !h-[6rem] !text-gray-600",
          label: "!text-blue-950 pb-1",
          required: "!text-blue-950",
        },
      },
    },
    Checkbox: {
      defaultProps: {
        size: "xs",
        radius: "sm",
        classNames: {
          label: "!text-blue-950 !font-semibold !pl-1",
          input: "!border-blue-950",
        },
      },
    },
    Carousel: {
      defaultProps: {
        loop: true,
        classNames: {
          root: "group",
          controls:
            "!p-0 !h-full translate-y-[-50%] !top-[50%] duration-300 ease-in-out opacity-0 group-hover:opacity-100",
          control:
            "!p-0 !h-full !rounded-none !min-w-4 !bg-gray-200 data-[inactive]:opacity-0 data-[inactive]:cursor-default data-[active]:opacity-100 data-[active]:cursor-pointer ",
        },
        nextControlIcon: <Image src={VectorRight} width={16} height={16} />,
        previousControlIcon: (
          <Image
            src={VectorRight}
            width={16}
            height={16}
            className="rotate-180"
          />
        ),
      },
    },
    Loader: {
      defaultProps: {
        type: "dots",
      },
    },
  },
});
