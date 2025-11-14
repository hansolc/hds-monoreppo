import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@repo/ui/ui/button";

const meta: Meta<typeof Button> = {
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
    return <Button>Button</Button>;
  },
};
