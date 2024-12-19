import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./title";

const meta = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["display", "large", "medium", "small"],
      },
    },
    as: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: "display", children: "Display" },
};

export const Large: Story = {
  args: { variant: "large", children: "Large" },
};

export const Medium: Story = {
  args: { variant: "medium", children: "Medium" },
};

export const Small: Story = {
  args: { variant: "small", children: "Small" },
};
