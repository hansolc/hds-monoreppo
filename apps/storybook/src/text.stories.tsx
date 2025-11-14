import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@repo/ui/ui/text";

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
  args: {
    as: "p",
  },
  render: (args) => {
    return (
      <Text {...args} as={"div"}>
        Text
      </Text>
    );
  },
};
