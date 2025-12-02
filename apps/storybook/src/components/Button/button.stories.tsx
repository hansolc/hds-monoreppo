import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@repo/design-system";

const meta: Meta<typeof Button> = {
  title: "COMPONENTS/Button",
  component: Button,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Button>;

export const ButtonTestStory: Story = {
  render: () => {
    return <Button as="button">Button</Button>;
  },
};
