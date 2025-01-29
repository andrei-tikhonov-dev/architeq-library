import { Icon } from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      description: "The the name of the Icon",
      control: {
        type: "text",
      },
    },
  },
};

export const IconFaRegFlag = {
  args: {
    iconName: "fa6/FaRegFlag",
  },
};
