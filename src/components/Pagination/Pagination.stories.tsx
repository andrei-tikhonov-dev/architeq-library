import { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A pagination component for navigating through pages of data.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "Current page number",
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "Total number of pages",
    },
    pageSize: {
      control: { type: "number", min: 1 },
      description: "Number of items per page",
    },
    totalItems: {
      control: "number",
      description: "Total number of items (optional)",
    },
    showPageSize: {
      control: "boolean",
      description: "Show page size selector",
    },
    pageSizeOptions: {
      control: "object",
      description: "Available page size options",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 100,
    onPageChange: (page) => console.log("Page changed:", page),
    onPageSizeChange: (size) => console.log("Page size changed:", size),
  },
};

export const WithoutPageSize: Story = {
  args: {
    ...Default.args,
    showPageSize: false,
  },
};

export const CustomPageSizes: Story = {
  args: {
    ...Default.args,
    pageSizeOptions: [5, 15, 25, 100],
    pageSize: 15,
  },
};

export const SinglePage: Story = {
  args: {
    ...Default.args,
    currentPage: 1,
    totalPages: 1,
    totalItems: 5,
  },
};

export const WithoutTotalItems: Story = {
  args: {
    ...Default.args,
    totalItems: undefined,
  },
};

export const ManyPages: Story = {
  args: {
    ...Default.args,
    currentPage: 50,
    totalPages: 100,
    totalItems: 1000,
  },
};

export const LastPage: Story = {
  args: {
    ...Default.args,
    currentPage: 10,
    totalPages: 10,
    totalItems: 100,
  },
};
