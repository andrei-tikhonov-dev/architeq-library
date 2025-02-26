import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";
import { Tooltip, TooltipProps } from "./Tooltip";
import { Button } from "../Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A lightweight tooltip component that appears on hover to provide additional information.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
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
    delayDuration: {
      control: { type: "number", min: 0, max: 1000, step: 50 },
      description: "Delay in ms before showing the tooltip",
    },
    disabled: {
      control: "boolean",
      description: "Whether the tooltip should be disabled",
    },
  },
} as Meta<TooltipProps>;

type Story = StoryObj<typeof Tooltip>;

// Basic usage with args
export const Basic: Story = {
  args: {
    content: "This is a simple tooltip providing additional context",
    children: <Button>Hover me</Button>,
  },
};

// Different positions
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
        <Tooltip {...args} content="This appears on top" side="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip {...args} content="This appears on the right" side="right">
          <Button>Right</Button>
        </Tooltip>
        <Tooltip {...args} content="This appears on the bottom" side="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip {...args} content="This appears on the left" side="left">
          <Button>Left</Button>
        </Tooltip>
      </div>
    );
  },
  args: {
    sideOffset: 5,
  },
};

// With different delay durations
export const DelayDurations: Story = {
  render: function DelayDurations() {
    return (
      <div
        className={css`
          display: flex;
          gap: 16px;
        `}
      >
        <Tooltip content="No delay" delayDuration={0}>
          <Button>No delay</Button>
        </Tooltip>
        <Tooltip content="Medium delay (300ms)" delayDuration={300}>
          <Button>Default (300ms)</Button>
        </Tooltip>
        <Tooltip content="Long delay (700ms)" delayDuration={700}>
          <Button>Long delay (700ms)</Button>
        </Tooltip>
      </div>
    );
  },
};

// With rich content
export const RichContent: Story = {
  render: (args) => (
    <Tooltip
      {...args}
      content={
        <div>
          <strong>Rich content tooltip</strong>
          <div
            className={css`
              margin-top: 8px;
            `}
          >
            <p>This tooltip contains:</p>
            <ul
              className={css`
                list-style: disc;
                margin-left: 16px;
                margin-top: 4px;
              `}
            >
              <li>Formatted text</li>
              <li>Lists</li>
              <li>Custom styling</li>
            </ul>
          </div>
        </div>
      }
    >
      <Button>Rich Content</Button>
    </Tooltip>
  ),
  args: {
    sideOffset: 5,
  },
};

// Used on different elements
export const DifferentTriggers: Story = {
  render: () => (
    <div
      className={css`
        display: flex;
        gap: 16px;
        align-items: center;
      `}
    >
      <Tooltip content="Tooltip on a button">
        <Button>Button</Button>
      </Tooltip>

      <Tooltip content="Tooltip on text">
        <span
          className={css`
            text-decoration: underline dotted;
            cursor: help;
          `}
        >
          Hover this text
        </span>
      </Tooltip>

      <Tooltip content="Information about the icon">
        <span
          className={css`
            display: inline-flex;
            cursor: help;
          `}
        >
          ⓘ
        </span>
      </Tooltip>
    </div>
  ),
};

// Disabled tooltip
export const Disabled: Story = {
  args: {
    content: "This tooltip is disabled and won't appear",
    children: <Button>No tooltip</Button>,
    disabled: true,
  },
};
