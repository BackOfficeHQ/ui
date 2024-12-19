import { Meta } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "password"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Disables the input field",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const Default = {
  args: { type: "text", placeholder: "Input" },
};

export const Password = {
  args: { type: "password", placeholder: "Password" },
};
