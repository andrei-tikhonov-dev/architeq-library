// @ts-ignore
import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";
import { ToggleTip, ToggleTipProps } from "./ToggleTip";
import { Button } from "../Button";

export default {
  title: "Components/ToggleTip",
  component: ToggleTip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible button component with multiple variants, types, and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Optional title for the tooltip",
    },
    content: {
      control: "text",
      description: "Content to display inside the tooltip",
    },
    side: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "select" },
      description: "Positioning of the tooltip relative to the trigger",
    },
    align: {
      options: ["start", "center", "end"],
      control: { type: "select" },
      description: "Alignment of the tooltip relative to the trigger",
    },
    sideOffset: {
      control: { type: "number", min: 0, max: 20 },
      description: "Space between trigger and tooltip",
    },
    showCloseButton: {
      control: "boolean",
      description: "Whether to show the close button",
    },
    defaultOpen: {
      control: "boolean",
      description: "Controls if tooltip is open by default",
    },
  },
} as Meta<ToggleTipProps>;

type Story = StoryObj<typeof ToggleTip>;

// Basic usage with args
export const Basic: Story = {
  args: {
    content: "This is a basic toggle tip that provides helpful information.",
    children: <Button>Click me</Button>,
  },
};

// With title
export const WithTitle: Story = {
  args: {
    title: "Important Information",
    content: "This toggle tip includes a title to better explain its purpose.",
    children: <Button>With Title</Button>,
  },
};

// Different positions - Since this requires multiple instances, we'll keep the render function
export const Positions: Story = {
  render: function Positions(args) {
    return (
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 500px;
        `}
      >
        <ToggleTip {...args} content="This appears on top" side="top">
          <Button>Top</Button>
        </ToggleTip>
        <ToggleTip {...args} content="This appears on the right" side="right">
          <Button>Right</Button>
        </ToggleTip>
        <ToggleTip {...args} content="This appears on the bottom" side="bottom">
          <Button>Bottom</Button>
        </ToggleTip>
        <ToggleTip {...args} content="This appears on the left" side="left">
          <Button>Left</Button>
        </ToggleTip>
      </div>
    );
  },
  args: {
    showCloseButton: true,
    sideOffset: 5,
  },
};

// With rich content
export const RichContent: Story = {
  render: (args) => (
    <ToggleTip
      {...args}
      title="Feature Explanation"
      content={
        <div>
          <p>This tooltip contains more complex content including:</p>
          <ul
            className={css`
              list-style: disc;
              margin-left: 16px;
              margin-top: 8px;
            `}
          >
            <li>Formatted text</li>
            <li>Lists</li>
            <li>And potentially other components</li>
          </ul>
        </div>
      }
    >
      <Button>Rich Content</Button>
    </ToggleTip>
  ),
  args: {
    showCloseButton: true,
    sideOffset: 5,
  },
};

// Controlled component example
export const Controlled: Story = {
  render: function ControlledExample(args) {
    const [isOpen, setIsOpen] = useState(args.defaultOpen || false);

    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        `}
      >
        <div>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            variant={isOpen ? "secondary" : "primary"}
          >
            Open Tooltip
          </Button>
        </div>

        <ToggleTip
          {...args}
          title="Controlled Component"
          content="This tooltip's state is controlled externally."
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <Button>Hover doesn&apos;t matter</Button>
        </ToggleTip>
      </div>
    );
  },
  args: {
    defaultOpen: false,
    showCloseButton: true,
  },
};

// Without close button
export const WithoutCloseButton: Story = {
  args: {
    title: "No Close Button",
    content:
      "This tooltip doesn't have a close button. Click outside or press Escape to close.",
    showCloseButton: false,
    children: <Button>No Close Button</Button>,
  },
};
