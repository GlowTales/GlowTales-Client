import ProgressBar, {
  ProgressBarProps,
} from "@components/common/progressBar/ProgressBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ProgressBarProps> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
          진행도를 나타내는 Progress Bar 입니다.
        `,
      },
      inlineStories: true,
    },
  },
  tags: ["autodocs"],
  args: {
    percentage: 50,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectNation: Story = {
  args: {
    percentage: 50,
  },
};
