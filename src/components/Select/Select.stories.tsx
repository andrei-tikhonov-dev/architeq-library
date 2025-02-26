import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select, SelectProps } from "./Select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  { value: "disabled", label: "Disabled Option", disabled: true },
];

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable select dropdown component with multiple variants, sizes, and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "Controlled value",
    },
    defaultValue: {
      control: "text",
      description: "Default value (uncontrolled)",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Select size",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive"],
      description: "Select variant",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    label: {
      control: "text",
      description: "Label text",
    },
    onChange: { action: "value changed" },
  },
} as Meta<SelectProps>;

type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    options,
    placeholder: "Select an option...",
    label: "Default Select",
  },
};

export const WithValue: Story = {
  args: {
    options,
    defaultValue: "option2",
    label: "Select with default value",
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    label: "Disabled Select",
  },
};

export const WithError: Story = {
  args: {
    options,
    label: "Select with error",
    error: "This field is required",
  },
};

export const PrimaryVariant: Story = {
  args: {
    options,
    label: "Primary Select",
    variant: "primary",
  },
};

export const SecondaryVariant: Story = {
  args: {
    options,
    label: "Secondary Select",
    variant: "secondary",
  },
};

export const DestructiveVariant: Story = {
  args: {
    options,
    label: "Destructive Select",
    variant: "destructive",
  },
};

export const SmallSize: Story = {
  args: {
    options,
    label: "Small Select",
    size: "sm",
  },
};

export const MediumSize: Story = {
  args: {
    options,
    label: "Medium Select",
    size: "md",
  },
};

export const LargeSize: Story = {
  args: {
    options,
    label: "Large Select",
    size: "lg",
  },
};

export const Controlled = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <Select
        options={options}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        label={`Controlled Select (${
          value
            ? options.find((opt) => opt.value === value)?.label
            : "None selected"
        })`}
      />
      <div style={{ marginTop: "16px" }}>
        <button onClick={() => setValue(options[0]!.value)}>
          Select first option
        </button>
        <button onClick={() => setValue("")} style={{ marginLeft: "8px" }}>
          Clear selection
        </button>
      </div>
    </div>
  );
};

export const AllVariants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Select options={options} label="Primary Select" variant="primary" />
    <Select options={options} label="Secondary Select" variant="secondary" />
    <Select
      options={options}
      label="Destructive Select"
      variant="destructive"
    />
  </div>
);

export const AllSizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Select options={options} label="Small Select" size="sm" />
    <Select options={options} label="Medium Select" size="md" />
    <Select options={options} label="Large Select" size="lg" />
  </div>
);

export const AllStates = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Select options={options} label="Default" />
    <Select options={options} label="With Value" defaultValue="option1" />
    <Select options={options} label="Disabled" disabled />
    <Select
      options={options}
      label="With Error"
      error="This field is required"
    />
    <Select
      options={options}
      label="Disabled with Value"
      disabled
      defaultValue="option1"
    />
  </div>
);

export const LongOptions = () => (
  <Select
    options={[
      {
        value: "option1",
        label:
          "This is a very long option that should trigger scrolling in the dropdown",
      },
      {
        value: "option2",
        label: "Another fairly lengthy option description here",
      },
      { value: "option3", label: "Short option" },
      { value: "option4", label: "Medium length option text" },
      {
        value: "option5",
        label:
          "This is another very long option with plenty of text to demonstrate scrolling",
      },
      { value: "option6", label: "Final option with a reasonable length" },
    ]}
    label="Select with long options"
  />
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
        <Select
          options={options}
          label="Primary Select"
          variant="primary"
          id="primary"
          defaultValue="option1"
        />
        <Select
          options={options}
          label="Secondary Select"
          variant="secondary"
          id="secondary"
          defaultValue="option2"
        />
        <Select
          options={options}
          label="Destructive Select"
          variant="destructive"
          id="destructive"
          defaultValue="option3"
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
        <Select
          options={options}
          label="Small Select"
          size="sm"
          id="small"
          defaultValue="option1"
        />
        <Select
          options={options}
          label="Medium Select"
          size="md"
          id="medium"
          defaultValue="option2"
        />
        <Select
          options={options}
          label="Large Select"
          size="lg"
          id="large"
          defaultValue="option3"
        />
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
        <Select options={options} label="Default" id="default" />
        <Select
          options={options}
          label="With Value"
          id="with-value"
          defaultValue="option1"
        />
        <Select options={options} label="Disabled" id="disabled" disabled />
        <Select
          options={options}
          label="With Error"
          id="with-error"
          error="This field is required"
        />
        <Select
          options={options}
          label="Disabled with Value"
          id="disabled-with-value"
          disabled
          defaultValue="option1"
        />
      </div>
    </div>
  </div>
);
