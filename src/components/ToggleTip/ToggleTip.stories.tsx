// @ts-ignore
import React from "react";
import { Button } from "@grafana/ui";
import { ToggleTip } from "./index";

export default {
  title: "Components/ToggleTip",
  component: ToggleTip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "Content displayed inside the tooltip",
      control: {
        type: "text",
      },
    },
    children: {
      description: "Element that triggers the tooltip",
      control: false,
    },
  },
};

export const DefaultToggleTip = {
  args: {
    content: "This is a tooltip message",
    children: <Button variant="secondary">Click me</Button>,
  },
};

export const CustomContentToggleTip = {
  args: {
    content: (
      <div>
        <strong>Tooltip Title</strong>
        <p>Additional information inside the tooltip.</p>
      </div>
    ),
    children: <Button variant="primary">Click for details</Button>,
  },
};
