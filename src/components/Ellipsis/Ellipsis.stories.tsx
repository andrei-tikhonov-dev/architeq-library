import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";
import { Ellipsis, EllipsisProps } from "./Ellipsis";

export default {
  title: "Components/Ellipsis",
  component: Ellipsis,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that truncates text with an ellipsis when it overflows its container and shows a tooltip with the full text on hover.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The text content to display",
    },
    lines: {
      control: { type: "number", min: 1, max: 10 },
      description: "Maximum number of lines to display before truncating",
      defaultValue: 1,
    },
    showTooltip: {
      control: "boolean",
      description: "Whether to show tooltip on hover with full text",
      defaultValue: true,
    },
    tooltipContent: {
      control: "text",
      description: "Custom tooltip content (defaults to the full text)",
    },
    tooltipSide: {
      control: { type: "select", options: ["top", "right", "bottom", "left"] },
      description: "Tooltip position",
      defaultValue: "bottom",
    },
    tooltipAlign: {
      control: { type: "select", options: ["start", "center", "end"] },
      description: "Tooltip alignment",
      defaultValue: "center",
    },
    tooltipOffset: {
      control: { type: "number", min: 0, max: 20 },
      description: "Space between text and tooltip",
      defaultValue: 5,
    },
    tooltipDelay: {
      control: { type: "number", min: 0, max: 1000, step: 50 },
      description: "Delay in ms before showing the tooltip",
      defaultValue: 300,
    },
    allowSelection: {
      control: "boolean",
      description: "Whether to allow text selection",
      defaultValue: true,
    },
    as: {
      control: {
        type: "select",
        options: ["div", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6"],
      },
      description: "The HTML element to render",
      defaultValue: "div",
    },
  },
} as Meta<EllipsisProps>;

type Story = StoryObj<EllipsisProps>;

// Sample long text
const longText =
  "This is a very long text that will be truncated with an ellipsis when it overflows its container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.";

export const SingleLine: Story = {
  args: {
    children: longText,
    lines: 1,
    showTooltip: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const MultiLine: Story = {
  args: {
    children: longText,
    lines: 3,
    showTooltip: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutTooltip: Story = {
  args: {
    children: longText,
    lines: 1,
    showTooltip: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomTooltip: Story = {
  args: {
    children: longText,
    lines: 1,
    showTooltip: true,
    tooltipContent: "This is a custom tooltip content",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const RichTooltipContent: Story = {
  render: (args) => (
    <div style={{ width: "300px" }}>
      <Ellipsis
        {...args}
        lines={1}
        tooltipContent={
          <div>
            <strong>Full Text:</strong>
            <div
              className={css`
                margin-top: 8px;
                max-width: 250px;
              `}
            >
              {longText}
            </div>
          </div>
        }
      >
        {longText}
      </Ellipsis>
    </div>
  ),
};

export const DifferentTooltipPositions: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "40px",
      }}
    >
      <div>
        <h3>Top Position</h3>
        <div style={{ width: "300px", marginTop: "30px" }}>
          <Ellipsis {...args} tooltipSide="top">
            {longText}
          </Ellipsis>
        </div>
      </div>
      <div>
        <h3>Bottom Position</h3>
        <div style={{ width: "300px" }}>
          <Ellipsis {...args} tooltipSide="bottom">
            {longText}
          </Ellipsis>
        </div>
      </div>
      <div>
        <h3>Left Position</h3>
        <div style={{ width: "300px", marginLeft: "30px" }}>
          <Ellipsis {...args} tooltipSide="left">
            {longText}
          </Ellipsis>
        </div>
      </div>
      <div>
        <h3>Right Position</h3>
        <div style={{ width: "300px" }}>
          <Ellipsis {...args} tooltipSide="right">
            {longText}
          </Ellipsis>
        </div>
      </div>
    </div>
  ),
  args: {
    lines: 1,
    showTooltip: true,
  },
};

export const TooltipAlignment: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div>
        <h3>Start Alignment</h3>
        <div style={{ width: "300px" }}>
          <Ellipsis {...args} tooltipAlign="start">
            {longText}
          </Ellipsis>
        </div>
      </div>
      <div>
        <h3>Center Alignment</h3>
        <div style={{ width: "300px" }}>
          <Ellipsis {...args} tooltipAlign="center">
            {longText}
          </Ellipsis>
        </div>
      </div>
      <div>
        <h3>End Alignment</h3>
        <div style={{ width: "300px" }}>
          <Ellipsis {...args} tooltipAlign="end">
            {longText}
          </Ellipsis>
        </div>
      </div>
    </div>
  ),
  args: {
    lines: 1,
    showTooltip: true,
    tooltipSide: "bottom",
  },
};

export const TooltipDelays: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3>No Delay</h3>
        <div style={{ width: "300px" }}>
          <Ellipsis {...args} tooltipDelay={0}>
            {longText}
          </Ellipsis>
        </div>
      </div>
      <div>
        <h3>Default Delay (300ms)</h3>
        <div style={{ width: "300px" }}>
          <Ellipsis {...args} tooltipDelay={300}>
            {longText}
          </Ellipsis>
        </div>
      </div>
      <div>
        <h3>Long Delay (700ms)</h3>
        <div style={{ width: "300px" }}>
          <Ellipsis {...args} tooltipDelay={700}>
            {longText}
          </Ellipsis>
        </div>
      </div>
    </div>
  ),
  args: {
    lines: 1,
    showTooltip: true,
  },
};

export const AsHeading: Story = {
  args: {
    children:
      "This is a very long heading that will be truncated with an ellipsis when it overflows its container",
    lines: 1,
    showTooltip: true,
    as: "h2",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3>Single Line</h3>
        <div
          style={{ width: "300px", border: "1px solid #eee", padding: "10px" }}
        >
          <Ellipsis lines={1}>{longText}</Ellipsis>
        </div>
      </div>

      <div>
        <h3>Two Lines</h3>
        <div
          style={{ width: "300px", border: "1px solid #eee", padding: "10px" }}
        >
          <Ellipsis lines={2}>{longText}</Ellipsis>
        </div>
      </div>

      <div>
        <h3>Three Lines</h3>
        <div
          style={{ width: "300px", border: "1px solid #eee", padding: "10px" }}
        >
          <Ellipsis lines={3}>{longText}</Ellipsis>
        </div>
      </div>

      <div>
        <h3>As Paragraph</h3>
        <div
          style={{ width: "300px", border: "1px solid #eee", padding: "10px" }}
        >
          <Ellipsis lines={2} as="p">
            {longText}
          </Ellipsis>
        </div>
      </div>

      <div>
        <h3>Disallow Selection</h3>
        <div
          style={{ width: "300px", border: "1px solid #eee", padding: "10px" }}
        >
          <Ellipsis lines={1} allowSelection={false}>
            {longText}
          </Ellipsis>
        </div>
      </div>

      <div>
        <h3>Custom Styling</h3>
        <div
          style={{ width: "300px", border: "1px solid #eee", padding: "10px" }}
        >
          <Ellipsis
            lines={1}
            style={{
              color: "#6634FA",
              fontWeight: "bold",
              padding: "5px",
              backgroundColor: "#E4D6FE",
              borderRadius: "4px",
            }}
          >
            {longText}
          </Ellipsis>
        </div>
      </div>
    </div>
  ),
};
