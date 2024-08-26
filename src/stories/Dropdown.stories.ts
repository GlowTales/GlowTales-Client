import Dropdown from "@common/dropDown/Dropdown";
import { DropdownProps } from "@type/dropdown";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { nationElements } from "@utils/defaultData";

const meta: Meta<DropdownProps> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
          사용자에게 옵션을 제공하고 선택된 옵션을 콜백 함수로 전달하는 드롭다운 컴포넌트입니다. 다양한 옵션을 제공하고, 선택된 항목을 나타내는 기능을 제공합니다.
        `,
      },
      inlineStories: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    selectList: {
      description: "드롭다운 옵션 리스트",
      control: "object",
      table: {
        type: { summary: "DropdownElement[]" },
        defaultValue: { summary: "[]" },
      },
    },
    setter: {
      description: "선택 변경을 처리할 콜백 함수",
      action: "changed",
      table: {
        type: { summary: "function" },
      },
    },
    width: {
      description: "드롭다운 컴포넌트의 너비",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "50%" },
      },
    },
  },
  args: {
    selectList: [
      { text: "옵션1", value: 1 },
      { text: "옵션2", value: 2 },
    ],
    setter: fn(),
    width: "70%",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SelecOption: Story = {
  args: {
    selectList: [
      { text: "옵션1", value: 1 },
      { text: "옵션2", value: 2 },
    ],
  },
};
export const SelecOptionWithImg: Story = {
  args: {
    selectList: nationElements,
  },
};
