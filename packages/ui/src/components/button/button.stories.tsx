import { Meta } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg", "icon"],
      },
    },
    asChild: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = {
  args: { children: "Button" },
};

export const Secondary = {
    args: { variant: "secondary", children: "Button" },
}

export const Outline = {
    args: { variant: "outline", children: "Button" },
}

export const Ghost = {
    args: { variant: "ghost", children: "Button" },
}

export const Link = {
    args: { variant: "link", children: "Button" },
}

export const Destructive = {
  args: { variant: "destructive", children: "Button" },
};
