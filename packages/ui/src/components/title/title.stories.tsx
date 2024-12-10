import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["display", "large", "medium", "small"],
        description: "The size variant of the title",
        defaultValue: "medium",
      },
    },
    as: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
        description: "The HTML element to render",
      },
    },
    children: {
      control: {
        type: "text",
        description: "The content of the title",
      },
    },
  },
  tags: ["Typography"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Display: Story = {
  args: { variant: "display", children: "Display" },
};

export const Large: Story = {
  args: {
    variant: "large",
    children: "Large Title",
  },
};

export const Medium: Story = {
  args: {
    variant: "medium",
    children: "Medium Title",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Small Title",
  },
};

// Example showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <Title variant="display">
        Display - Hero Title (The quick brown fox)
      </Title>
      <Title variant="large">Large Title (The quick brown fox jumps)</Title>
      <Title variant="medium">
        Medium Title (The quick brown fox jumps over)
      </Title>
      <Title variant="small">
        Small Title (The quick brown fox jumps over the lazy dog)
      </Title>
    </div>
  ),
};

// Example showing semantic HTML usage
export const SemanticExample: Story = {
  render: () => (
    <div className="space-y-4">
      <Title variant="large" as="h1">
        H1 Heading
      </Title>
      <Title variant="medium" as="h2">
        H2 Heading
      </Title>
      <Title variant="small" as="h3">
        H3 Heading
      </Title>
    </div>
  ),
};
