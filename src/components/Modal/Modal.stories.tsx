import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import { Button } from "../Button";

const StoryWrapper = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...props} isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modal dialog component that displays content that requires user interaction.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Modal title",
      defaultValue: "Modal Title",
    },
    description: {
      control: "text",
      description: "Modal description",
      defaultValue:
        "Modal description text goes here. This text provides additional context for the modal.",
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
      control: {
        type: "select",
        options: ["primary", "secondary", "destructive"],
      },
      description: "Style variant for the action button",
      defaultValue: "primary",
    },
    size: {
      control: { type: "select", options: ["sm", "md", "lg", "xl", "full"] },
      description: "Modal size",
      defaultValue: "md",
    },
    centered: {
      control: "boolean",
      description: "Whether the modal is vertically centered",
      defaultValue: true,
    },
    showCloseButton: {
      control: "boolean",
      description: "Whether to show the close button in the top-right corner",
      defaultValue: true,
    },
    closeOnOutsideClick: {
      control: "boolean",
      description: "Whether clicking outside the modal closes it",
      defaultValue: true,
    },
    closeOnEscape: {
      control: "boolean",
      description: "Whether pressing Escape closes the modal",
      defaultValue: true,
    },
    showActions: {
      control: "boolean",
      description: "Whether to show action buttons",
      defaultValue: true,
    },
    isOpen: {
      control: "boolean",
      description: "Controls whether the modal is open",
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
} as Meta<ModalProps>;

type Story = StoryObj<ModalProps>;

// Default modal
export const Default: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Modal Title",
    description:
      "Modal description text goes here. This text provides additional context for the modal.",
    cancelText: "Cancel",
    actionText: "Continue",
    variant: "primary",
    size: "md",
    centered: true,
    showCloseButton: true,
    closeOnOutsideClick: true,
    closeOnEscape: true,
    showActions: true,
  },
};

// Destructive variant
export const Destructive: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Delete account",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    cancelText: "Cancel",
    actionText: "Delete",
    variant: "destructive",
    size: "md",
  },
};

// Secondary variant
export const Secondary: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Save draft",
    description: "Your draft will be saved and you can continue editing later.",
    cancelText: "Discard",
    actionText: "Save draft",
    variant: "secondary",
    size: "md",
  },
};

// Without description
export const WithoutDescription: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Confirm action",
    description: undefined,
    cancelText: "No, thanks",
    actionText: "Yes, continue",
    variant: "primary",
    size: "md",
  },
};

// Custom buttons
export const CustomButtons: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Save changes",
    description: "Your changes will be lost if you don't save them.",
    cancelText: "Discard",
    actionText: "Save",
    variant: "primary",
    size: "md",
  },
};

// Various sizes
export const SmallSize: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Small Modal",
    description: "This is a small modal dialog.",
    size: "sm",
  },
};

export const LargeSize: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Large Modal",
    description: "This is a large modal dialog with more space for content.",
    size: "lg",
  },
};

export const ExtraLargeSize: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Extra Large Modal",
    description:
      "This is an extra large modal dialog for displaying a lot of content.",
    size: "xl",
  },
};

export const FullSize: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Full Size Modal",
    description: "This modal uses maximum available space for complex content.",
    size: "full",
  },
};

// No close button
export const NoCloseButton: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "No Close Button",
    description: "This modal doesn't have a close button in the corner.",
    showCloseButton: false,
  },
};

// No outside click
export const NoOutsideClick: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Modal with No Outside Click",
    description:
      "This modal won't close when clicking outside. You must use the buttons.",
    closeOnOutsideClick: false,
  },
};

// No actions
export const NoActions: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Modal without Actions",
    description:
      "This modal doesn't show action buttons. It can only be closed with the X button.",
    showActions: false,
  },
};

// Not centered
export const NotCentered: Story = {
  render: (args) => <StoryWrapper {...args} />,
  args: {
    title: "Modal Not Centered",
    description:
      "This modal is positioned at the top of the viewport rather than vertically centered.",
    centered: false,
  },
};

// For custom content, we need a custom render function
export const WithCustomContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Subscribe</Button>
      <Modal
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
      </Modal>
    </>
  );
};

// Form in modal example
export const WithForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Form</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title="Contact Information"
        cancelText="Cancel"
        actionText="Submit"
        variant="primary"
        onCancel={() => setIsOpen(false)}
        onAction={handleSubmit}
        size="md"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
                color: "#212226",
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #CFCED3",
                fontSize: "14px",
              }}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
                color: "#212226",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #CFCED3",
                fontSize: "14px",
              }}
              placeholder="Enter your email"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

// Showcase different variants and sizes
export const Showcase = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div>
      <h3>Button Variants</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <StoryWrapper
          title="Primary Modal"
          description="This modal uses the primary variant for its action button."
          cancelText="Cancel"
          actionText="Continue"
          variant="primary"
        />
        <StoryWrapper
          title="Secondary Modal"
          description="This modal uses the secondary variant for its action button."
          cancelText="Cancel"
          actionText="Continue"
          variant="secondary"
        />
        <StoryWrapper
          title="Destructive Modal"
          description="This modal uses the destructive variant for its action button."
          cancelText="Cancel"
          actionText="Delete"
          variant="destructive"
        />
      </div>
    </div>

    <div>
      <h3>Modal Sizes</h3>
      <div
        style={{
          display: "flex",
          gap: "12px",
          margin: "12px 0",
          flexWrap: "wrap",
        }}
      >
        <StoryWrapper
          title="Small Modal"
          description="A small modal for simple messages."
          size="sm"
        />
        <StoryWrapper
          title="Medium Modal"
          description="The default medium-sized modal."
          size="md"
        />
        <StoryWrapper
          title="Large Modal"
          description="A large modal for more content."
          size="lg"
        />
        <StoryWrapper
          title="Extra Large Modal"
          description="An extra large modal for complex content."
          size="xl"
        />
      </div>
    </div>

    <div>
      <h3>Position & Behavior</h3>
      <div style={{ display: "flex", gap: "12px", margin: "12px 0" }}>
        <StoryWrapper
          title="Top-Aligned Modal"
          description="This modal is positioned at the top rather than center."
          centered={false}
        />
        <StoryWrapper
          title="No Close Button"
          description="This modal doesn't have an X button in the corner."
          showCloseButton={false}
        />
        <StoryWrapper
          title="Modal with No Actions"
          description="This modal has no action buttons at the bottom."
          showActions={false}
        />
      </div>
    </div>
  </div>
);
