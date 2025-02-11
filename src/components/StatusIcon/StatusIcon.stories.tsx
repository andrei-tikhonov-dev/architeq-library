import { StatusIcon, statusIcons } from "./index";

export default {
  title: "Components/StatusIcon",
  component: StatusIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "The name of the Icon",
      control: {
        type: "select",
        options: Object.keys(statusIcons),
      },
    },
    size: {
      description: "Size of the Icon",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
};

export const StatusIconExample = {
  args: {
    name: "PlentyResources",
    size: "lg",
  },
};
