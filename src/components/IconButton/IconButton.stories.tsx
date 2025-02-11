// @ts-ignore
import React from "react";
import { IconButton } from ".";

export default {
  title: "Components/Icon",
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
      description: "Size of the Icon",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
};
