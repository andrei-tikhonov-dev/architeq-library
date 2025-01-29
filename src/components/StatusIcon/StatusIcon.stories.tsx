import { StatusIcon } from "./index";

export default {
  title: "Components/StatusIcon",
  component: StatusIcon,
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

export const IconFaRegFlagCritical = {
  args: {
    iconName: "fa6/FaRegFlag",
  },
};
