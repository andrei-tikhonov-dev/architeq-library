import { Meta, StoryFn } from "@storybook/react";
import { Range } from "./";
import { RangeProps } from "./types";

export default {
  title: "Components/Range",
  component: Range,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "Array of items for range selection",
      control: {
        type: "object",
      },
    },
    onChange: {
      description: "Callback when range changes",
      action: "changed",
    },
  },
} as Meta<RangeProps>;

const items: RangeProps["items"] = [
  { id: 1, name: "Jan" },
  { id: 2, name: "Feb" },
  { id: 3, name: "Mar" },
  { id: 4, name: "Apr" },
  { id: 5, name: "May" },
];

const Template: StoryFn<RangeProps> = (args) => (
  <div style={{ minHeight: 400, width: 300 }}>
    <Range {...args} items={args.items ?? items} />
  </div>
);

export const DefaultRange = Template.bind({});
DefaultRange.args = {
  items,
  onChange: ({
    start,
    end,
  }: {
    start: RangeProps["items"][number];
    end: RangeProps["items"][number];
  }) => console.log("Selected range:", start, end),
};
