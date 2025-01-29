import { StatusLine } from "./index";

export default {
  title: "Components/StatusLine",
  component: StatusLine,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      description: "The name of the Icon",
      control: {
        type: "text",
      },
    },
  },
};

export const StatusLineDefault = {
  args: {
    iconName: "fa6/FaRegFlag",
    value: "Test value",
    name: "Test name",
  },
};
