import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Title } from "./Title";

const meta = {
  title: "Example/Title",
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
