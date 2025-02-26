import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AlertDialog, AlertDialogProps } from "./AlertDialog";
import { Button } from "../Button";

// Story wrapper to handle dialog state
const StoryWrapper = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <AlertDialog {...props} isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Dialog title",
      defaultValue: "Are you sure?",
    },
    description: {
      control: "text",
      description: "Dialog description",
      defaultValue:
        "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    },
    cancelText: {
      control: "text",
      description: "Text for cancel button",
      defaultValue: "Cancel",
    },
    actionText: {
      control: "text",
      description: "Text for action button",
      defaultValue: "Continue",
    },
    variant: {
      control: { type: "select", options: ["primary", "destructive"] },
      description: "Style variant for the action button",
      defaultValue: "primary",
    },
    isOpen: {
      control: "boolean",
      description: "Controls whether the dialog is open",
    },
    onOpenChange: {
      action: "openChange",
      description: "Called when the open state changes",
    },
    onCancel: {
      action: "cancelled",
      description: "Called when the cancel button is clicked",
    },
    onAction: {
      action: "action performed",
      description: "Called when the action button is clicked",
    },
  },
} as Meta<AlertDialogProps>;

type Story = StoryObj<AlertDialogProps>;

// We need a render function to demonstrate interactive functionality
export const Default: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Are you sure?",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    cancelText: "Cancel",
    actionText: "Continue",
    variant: "primary",
  },
};

export const Destructive: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Delete account",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    cancelText: "Cancel",
    actionText: "Delete",
    variant: "destructive",
  },
};

export const WithoutDescription: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Confirm action",
    description: undefined,
    cancelText: "No, thanks",
    actionText: "Yes, continue",
    variant: "primary",
  },
};

export const CustomButtons: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Save changes",
    description: "Your changes will be lost if you don't save them.",
    cancelText: "Discard",
    actionText: "Save",
    variant: "primary",
  },
};

// For custom content, we still need a custom render function
export const WithCustomContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Subscribe</Button>
      <AlertDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title="Subscribe to newsletter"
        cancelText="Not now"
        actionText="Subscribe"
        variant="primary"
        onCancel={() => console.log("Subscription cancelled")}
        onAction={() => console.log("Subscribed")}
      >
        <div
          style={{
            padding: "16px",
            border: "1px solid #e2e8f0",
            borderRadius: "4px",
            marginBottom: "16px",
          }}
        >
          <p style={{ margin: 0 }}>
            By subscribing, you agree to receive our marketing emails and accept
            our
            <a href="#" style={{ color: "#6634FA", marginLeft: "4px" }}>
              Terms and Conditions
            </a>
          </p>
        </div>
      </AlertDialog>
    </>
  );
};

export const Showcase = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div>
      <h3>Primary Variant</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <StoryWrapper
          title="Confirm action"
          description="Are you sure you want to continue with this action?"
          cancelText="Cancel"
          actionText="Continue"
          variant="primary"
        />
      </div>
    </div>

    <div>
      <h3>Destructive Variant</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <StoryWrapper
          title="Delete item"
          description="This will permanently delete this item. This action cannot be undone."
          cancelText="Cancel"
          actionText="Delete"
          variant="destructive"
        />
      </div>
    </div>

    <div>
      <h3>Different Button Labels</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <StoryWrapper
          title="Save changes"
          description="Your changes will be lost if you don't save them."
          cancelText="Discard"
          actionText="Save"
          variant="primary"
        />
      </div>
    </div>

    <div>
      <h3>Without Description</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <StoryWrapper
          title="Log out from your account?"
          cancelText="Cancel"
          actionText="Log out"
          variant="primary"
        />
      </div>
    </div>
  </div>
);
