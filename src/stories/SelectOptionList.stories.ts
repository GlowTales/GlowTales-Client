import SelectOptionList from "@components/common/selectOption/SelectOptionList";
import { Meta, StoryObj } from "@storybook/react";
import { SelectListProps } from "@type/selectList";
import { fn } from "@storybook/test";

const meta: Meta<SelectListProps> = {
  title: "Components/SelectOptionList",
  component: SelectOptionList,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
           리스트 중 하나의 옵션을 선택할 때 사용되는 컴포넌트 입니다. state에 따라 디자인이 변경됩니다.
          `,
      },
      inlineStories: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    selectList: {
      description: "리스트 데이터",
      control: "object",
      table: {
        type: { summary: "SelectListElement[]" },
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
      description: "컴포넌트의 너비",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "50%" },
      },
    },
  },
  args: {
    selectList: [
      { text: "옵션1", value: 1, state: "default" },
      { text: "옵션2", value: 2, state: "default" },
    ],
    setter: fn(),
    width: "70%",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectOption: Story = {
  args: {
    selectList: [
      { text: "옵션1", value: 1, state: "default" },
      { text: "옵션2", value: 2, state: "selected" },
      { text: "옵션3", value: 3, state: "correct" },
      { text: "옵션4", value: 4, state: "wrong" },
    ],
  },
};
