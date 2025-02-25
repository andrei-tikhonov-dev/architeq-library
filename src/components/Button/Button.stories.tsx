// @ts-ignore
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { icons } from "../Icon";
import { Button, ButtonProps } from "./Button";

const iconNames = Object.keys(icons).sort();

const ICON_OPTIONS = ["", ...iconNames];

export default {
  title: "Components/Button",
  component: Button,
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
    children: {
      control: "text",
      description: "Button content",
      defaultValue: "Button Text",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive"],
      description: "Button variant",
    },
    buttonStyle: {
      control: "select",
      options: ["solid", "outline", "ghost"],
      description: "Button style",
    },
    leftIcon: {
      control: "select",
      options: ICON_OPTIONS,
      description: "Left icon name",
    },
    rightIcon: {
      control: "select",
      options: ICON_OPTIONS,
      description: "Right icon name",
    },
    fullWidth: {
      control: "boolean",
      description: "Make button take full width",
    },
    isLoading: {
      control: "boolean",
      description: "Show loading state",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    onClick: { action: "clicked" },
  },
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "primary",
    buttonStyle: "solid",
  },
};

export const PrimarySolid: Story = {
  args: {
    children: "Primary Solid",
    variant: "primary",
    buttonStyle: "solid",
  },
};

export const SecondarySolid: Story = {
  args: {
    children: "Secondary Solid",
    variant: "secondary",
    buttonStyle: "solid",
  },
};

export const DestructiveSolid: Story = {
  args: {
    children: "Destructive Solid",
    variant: "destructive",
    buttonStyle: "solid",
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Primary Outline",
    variant: "primary",
    buttonStyle: "outline",
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: "Secondary Outline",
    variant: "secondary",
    buttonStyle: "outline",
  },
};

export const DestructiveOutline: Story = {
  args: {
    children: "Destructive Outline",
    variant: "destructive",
    buttonStyle: "outline",
  },
};

export const PrimaryGhost: Story = {
  args: {
    children: "Primary Ghost",
    variant: "primary",
    buttonStyle: "ghost",
  },
};

export const SecondaryGhost: Story = {
  args: {
    children: "Secondary Ghost",
    variant: "secondary",
    buttonStyle: "ghost",
  },
};

export const DestructiveGhost: Story = {
  args: {
    children: "Destructive Ghost",
    variant: "destructive",
    buttonStyle: "ghost",
  },
};

export const SmallButton: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const MediumButton: Story = {
  args: {
    children: "Medium Button",
    size: "md",
  },
};

export const LargeButton: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "With Left Icon",
    leftIcon: "Check",
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "With Right Icon",
    rightIcon: "ArrowRight",
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Both Icons",
    leftIcon: "Settings",
    rightIcon: "ArrowRight",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    isLoading: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const AllSolid = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Button buttonStyle="solid" variant="primary">
      Primary
    </Button>
    <Button buttonStyle="solid" variant="secondary">
      Secondary
    </Button>
    <Button buttonStyle="solid" variant="destructive">
      Destructive
    </Button>
  </div>
);

export const AllOutline = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Button buttonStyle="outline" variant="primary">
      Primary
    </Button>
    <Button buttonStyle="outline" variant="secondary">
      Secondary
    </Button>
    <Button buttonStyle="outline" variant="destructive">
      Destructive
    </Button>
  </div>
);

export const AllGhost = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Button buttonStyle="ghost" variant="primary">
      Primary
    </Button>
    <Button buttonStyle="ghost" variant="secondary">
      Secondary
    </Button>
    <Button buttonStyle="ghost" variant="destructive">
      Destructive
    </Button>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const Showcase = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div>
      <h3>Solid Buttons</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <Button buttonStyle="solid" variant="primary">
          Primary
        </Button>
        <Button buttonStyle="solid" variant="secondary">
          Secondary
        </Button>
        <Button buttonStyle="solid" variant="destructive">
          Destructive
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button buttonStyle="solid" variant="primary" disabled>
          Primary
        </Button>
        <Button buttonStyle="solid" variant="secondary" disabled>
          Secondary
        </Button>
        <Button buttonStyle="solid" variant="destructive" disabled>
          Destructive
        </Button>
      </div>
    </div>

    <div>
      <h3>Outline Buttons</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <Button buttonStyle="outline" variant="primary">
          Primary
        </Button>
        <Button buttonStyle="outline" variant="secondary">
          Secondary
        </Button>
        <Button buttonStyle="outline" variant="destructive">
          Destructive
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button buttonStyle="outline" variant="primary" disabled>
          Primary
        </Button>
        <Button buttonStyle="outline" variant="secondary" disabled>
          Secondary
        </Button>
        <Button buttonStyle="outline" variant="destructive" disabled>
          Destructive
        </Button>
      </div>
    </div>

    <div>
      <h3>Ghost Buttons</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <Button buttonStyle="ghost" variant="primary">
          Primary
        </Button>
        <Button buttonStyle="ghost" variant="secondary">
          Secondary
        </Button>
        <Button buttonStyle="ghost" variant="destructive">
          Destructive
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button buttonStyle="ghost" variant="primary" disabled>
          Primary
        </Button>
        <Button buttonStyle="ghost" variant="secondary" disabled>
          Secondary
        </Button>
        <Button buttonStyle="ghost" variant="destructive" disabled>
          Destructive
        </Button>
      </div>
    </div>

    <div>
      <h3>With Icons</h3>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button leftIcon="ArrowLeft">Left Icon</Button>
        <Button rightIcon="ArrowRight">Right Icon</Button>
        <Button leftIcon="ArrowLeft" rightIcon="ArrowRight">
          Both Icons
        </Button>
      </div>
    </div>

    <div>
      <h3>Loading State</h3>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button isLoading buttonStyle="solid">
          Loading
        </Button>
        <Button isLoading buttonStyle="outline">
          Loading
        </Button>
        <Button isLoading buttonStyle="ghost">
          Loading
        </Button>
      </div>
    </div>

    <div>
      <h3>Sizes</h3>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  </div>
);
