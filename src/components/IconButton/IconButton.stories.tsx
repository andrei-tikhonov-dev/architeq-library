import { Meta, StoryFn } from "@storybook/react";
import { IconButtonProps } from "./types";
import { IconButton } from "./IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "The name of the Icon",
      control: {
        type: "text",
      },
    },
    size: {
      description: "Size of the button",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    variant: {
      description: "Button variant",
      control: {
        type: "select",
        options: ["primary", "destructive", "tinted"],
      },
    },
    disabled: {
      description: "Disabled state",
      control: {
        type: "boolean",
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta<IconButtonProps>;

const Template: StoryFn<IconButtonProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Save",
  size: "lg",
  variant: "primary",
};

export const Destructive = Template.bind({});
Destructive.args = {
  name: "Delete",
  size: "lg",
  variant: "destructive",
};

export const Tinted = Template.bind({});
Tinted.args = {
  name: "Settings",
  size: "lg",
  variant: "tinted",
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "Block",
  size: "lg",
  variant: "primary",
  disabled: true,
};
