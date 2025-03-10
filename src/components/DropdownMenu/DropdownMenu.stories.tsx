import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuProps,
} from "./DropdownMenu";
import { Button } from "../Button";
import { Icon } from "../Icon";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A dropdown menu component that appears on click to provide additional options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    menuContent: {
      control: "text",
      description: "Content to display inside the dropdown menu",
    },
    contentClassName: {
      control: "text",
      description: "Additional CSS class to apply to the menu content",
    },
  },
} as Meta<DropdownMenuProps>;

type Story = StoryObj<typeof DropdownMenu>;

// Basic usage with args
export const Basic: Story = {
  render: () => (
    <DropdownMenu
      menuContent={
        <>
          <DropdownMenuItem onSelect={() => console.log("Option 1 selected")}>
            Option 1
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log("Option 2 selected")}>
            Option 2
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log("Option 3 selected")}>
            Option 3
          </DropdownMenuItem>
        </>
      }
    >
      <Button>Open Menu</Button>
    </DropdownMenu>
  ),
};

// With icons in menu items
export const WithIcons: Story = {
  render: () => (
    <DropdownMenu
      menuContent={
        <>
          <DropdownMenuItem onSelect={() => console.log("Edit selected")}>
            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <Icon name="Description" size="md" /> Edit
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log("Duplicate selected")}>
            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <Icon name="ContentCopy" size="md" /> Duplicate
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log("Delete selected")}>
            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <Icon name="Delete" size="md" /> Delete
            </div>
          </DropdownMenuItem>
        </>
      }
    >
      <Button>Menu with Icons</Button>
    </DropdownMenu>
  ),
};

// With different triggers
export const DifferentTriggers: Story = {
  render: () => (
    <div
      className={css`
        display: flex;
        gap: 24px;
        align-items: center;
      `}
    >
      <DropdownMenu
        menuContent={
          <>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
          </>
        }
      >
        <Button>Button Trigger</Button>
      </DropdownMenu>

      <DropdownMenu
        menuContent={
          <>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
          </>
        }
      >
        <span
          className={css`
            cursor: pointer;
            text-decoration: underline;
          `}
        >
          Text Trigger
        </span>
      </DropdownMenu>

      <DropdownMenu
        menuContent={
          <>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
          </>
        }
      >
        <span
          className={css`
            display: inline-flex;
            cursor: pointer;
            font-size: 24px;
          `}
        >
          ⋮
        </span>
      </DropdownMenu>
    </div>
  ),
};

// With custom styling
export const CustomStyling: Story = {
  render: () => (
    <DropdownMenu
      contentClassName={css`
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      `}
      menuContent={
        <>
          <DropdownMenuItem>
            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <Icon name="Visibility" size="md" /> View
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <Icon name="Settings" size="md" /> Configure
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <Icon name="Help" size="md" /> Help
            </div>
          </DropdownMenuItem>
        </>
      }
    >
      <Button>Custom Styled Menu</Button>
    </DropdownMenu>
  ),
};

// With nested content
export const RichContent: Story = {
  render: () => (
    <DropdownMenu
      menuContent={
        <div>
          <div
            className={css`
              padding: 8px;
              border-bottom: 1px solid #eee;
              font-weight: bold;
              display: flex;
              align-items: center;
              gap: 8px;
            `}
          >
            <Icon name="Person" size="md" /> User Profile
          </div>
          <DropdownMenuItem>
            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <Icon name="AccountCircle" size="md" /> View Profile
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              className={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <Icon name="Settings" size="md" /> Edit Settings
            </div>
          </DropdownMenuItem>
          <div
            className={css`
              padding: 8px;
              border-top: 1px solid #eee;
              margin-top: 4px;
            `}
          >
            <div
              className={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <span
                className={css`
                  display: flex;
                  align-items: center;
                  gap: 4px;
                `}
              >
                <Icon name="VerifiedUser" size="sm" /> Logged in as Admin
              </span>
              <Button>
                <span
                  className={css`
                    display: flex;
                    align-items: center;
                    gap: 4px;
                  `}
                >
                  <Icon name="Logout" size="sm" /> Logout
                </span>
              </Button>
            </div>
          </div>
        </div>
      }
    >
      <Button>Rich Content</Button>
    </DropdownMenu>
  ),
};

// Group example
export const GroupedItems: Story = {
  render: () => (
    <DropdownMenu
      menuContent={
        <div>
          <div
            className={css`
              padding: 4px 8px;
              font-size: 12px;
              color: #666;
              margin-bottom: 4px;
            `}
          >
            File Actions
          </div>
          <DropdownMenuItem>Open</DropdownMenuItem>
          <DropdownMenuItem>Save</DropdownMenuItem>

          <div
            className={css`
              height: 1px;
              background-color: #eee;
              margin: 8px 0;
            `}
          />

          <div
            className={css`
              padding: 4px 8px;
              font-size: 12px;
              color: #666;
              margin-bottom: 4px;
            `}
          >
            Advanced Actions
          </div>
          <DropdownMenuItem>Export</DropdownMenuItem>
          <DropdownMenuItem>Print</DropdownMenuItem>
        </div>
      }
    >
      <Button>Grouped Menu</Button>
    </DropdownMenu>
  ),
};
