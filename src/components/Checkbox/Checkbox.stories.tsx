// @ts-ignore
import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable checkbox component with multiple variants, sizes, and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Controlled checked state",
    },
    defaultChecked: {
      control: "boolean",
      description: "Default checked state (uncontrolled)",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    indeterminate: {
      control: "boolean",
      description: "Indeterminate state",
    },
    label: {
      control: "text",
      description: "Label text",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Checkbox size",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive"],
      description: "Checkbox variant",
    },
    onCheckedChange: { action: "checked changed" },
  },
} as Meta<CheckboxProps>;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked Checkbox",
    disabled: true,
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate Checkbox",
    indeterminate: true,
  },
};

export const PrimaryVariant: Story = {
  args: {
    label: "Primary Checkbox",
    variant: "primary",
  },
};

export const SecondaryVariant: Story = {
  args: {
    label: "Secondary Checkbox",
    variant: "secondary",
  },
};

export const DestructiveVariant: Story = {
  args: {
    label: "Destructive Checkbox",
    variant: "destructive",
  },
};

export const SmallSize: Story = {
  args: {
    label: "Small Checkbox",
    size: "sm",
  },
};

export const MediumSize: Story = {
  args: {
    label: "Medium Checkbox",
    size: "md",
  },
};

export const LargeSize: Story = {
  args: {
    label: "Large Checkbox",
    size: "lg",
  },
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Checkbox
        checked={checked}
        onCheckedChange={(newChecked) => setChecked(newChecked as boolean)}
        label={`Controlled Checkbox (${checked ? "Checked" : "Unchecked"})`}
      />
      <div style={{ marginTop: "16px" }}>
        <button onClick={() => setChecked(!checked)}>
          Toggle from outside
        </button>
      </div>
    </div>
  );
};

export const AllVariants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Checkbox label="Primary Checkbox" variant="primary" />
    <Checkbox label="Secondary Checkbox" variant="secondary" />
    <Checkbox label="Destructive Checkbox" variant="destructive" />
  </div>
);

export const AllSizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Checkbox label="Small Checkbox" size="sm" />
    <Checkbox label="Medium Checkbox" size="md" />
    <Checkbox label="Large Checkbox" size="lg" />
  </div>
);

export const AllStates = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Checkbox label="Unchecked" />
    <Checkbox label="Checked" defaultChecked />
    <Checkbox label="Indeterminate" indeterminate />
    <Checkbox label="Disabled" disabled />
    <Checkbox label="Disabled Checked" disabled defaultChecked />
    <Checkbox label="Disabled Indeterminate" disabled indeterminate />
  </div>
);

export const Showcase = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div>
      <h3>Variants</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          margin: "12px 0",
        }}
      >
        <Checkbox label="Primary Checkbox" variant="primary" defaultChecked />
        <Checkbox
          label="Secondary Checkbox"
          variant="secondary"
          defaultChecked
        />
        <Checkbox
          label="Destructive Checkbox"
          variant="destructive"
          defaultChecked
        />
      </div>
    </div>

    <div>
      <h3>Sizes</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          margin: "12px 0",
        }}
      >
        <Checkbox label="Small Checkbox" size="sm" defaultChecked />
        <Checkbox label="Medium Checkbox" size="md" defaultChecked />
        <Checkbox label="Large Checkbox" size="lg" defaultChecked />
      </div>
    </div>

    <div>
      <h3>States</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          margin: "12px 0",
        }}
      >
        <Checkbox label="Unchecked" />
        <Checkbox label="Checked" defaultChecked />
        <Checkbox label="Indeterminate" indeterminate />
        <Checkbox label="Disabled Unchecked" disabled />
        <Checkbox label="Disabled Checked" disabled defaultChecked />
        <Checkbox label="Disabled Indeterminate" disabled indeterminate />
      </div>
    </div>
  </div>
);
