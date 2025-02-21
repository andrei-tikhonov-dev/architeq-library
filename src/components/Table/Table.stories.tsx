// @ts-ignore
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "./index";
import theme from "../../contstants/theme";

interface DataRow {
  id: string;
  name: string;
  age: number;
  city: string | undefined;
  email: string;
  status: "active" | "inactive" | "pending";
}

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible data table component with sorting, filtering, and pagination capabilities.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    striped: {
      control: "boolean",
      description: "Enable striped rows",
      defaultValue: false,
    },
    enableSorting: {
      control: "boolean",
      description: "Enable column sorting",
      defaultValue: true,
    },
    enableFiltering: {
      control: "boolean",
      description: "Enable data filtering",
      defaultValue: true,
    },
    enablePagination: {
      control: "boolean",
      description: "Enable pagination",
      defaultValue: true,
    },
    pageSize: {
      control: { type: "number", min: 5, max: 50, step: 5 },
      description: "Number of rows per page",
      defaultValue: 10,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table<DataRow>>;

const data: DataRow[] = [
  {
    id: "1",
    name: "Alice Johnson",
    age: 25,
    city: "New York",
    email: "alice@example.com",
    status: "active",
  },
  {
    id: "2",
    name: "Bob Smith",
    age: 30,
    city: "Los Angeles",
    email: "bob@example.com",
    status: "inactive",
  },
  {
    id: "3",
    name: "Charlie Brown",
    age: 28,
    city: "Chicago",
    email: "charlie@example.com",
    status: "pending",
  },
  {
    id: "4",
    name: "David Wilson",
    age: 35,
    city: "Houston",
    email: "david@example.com",
    status: "active",
  },
  {
    id: "5",
    name: "Eva Martinez",
    age: 27,
    city: "Miami",
    email: "eva@example.com",
    status: "active",
  },
  {
    id: "6",
    name: "Frank Thomas",
    age: 32,
    city: "Seattle",
    email: "frank@example.com",
    status: "inactive",
  },
  {
    id: "7",
    name: "Grace Lee",
    age: 29,
    city: "Boston",
    email: "grace@example.com",
    status: "pending",
  },
  {
    id: "8",
    name: "Henry Davis",
    age: 31,
    city: "Denver",
    email: "henry@example.com",
    status: "active",
  },
  {
    id: "9",
    name: "Ivy Chen",
    age: 26,
    city: "San Francisco",
    email: "ivy@example.com",
    status: "active",
  },
  {
    id: "10",
    name: "Jack Taylor",
    age: 33,
    city: "Phoenix",
    email: "jack@example.com",
    status: "inactive",
  },
  {
    id: "11",
    name: "Kate Miller",
    age: 28,
    city: "Portland",
    email: "kate@example.com",
    status: "active",
  },
  {
    id: "12",
    name: "Lucas Wang",
    age: 34,
    city: "Austin",
    email: "lucas@example.com",
    status: "pending",
  },
  {
    id: "13",
    name: "Maria Garcia",
    age: 29,
    city: "Dallas",
    email: "maria@example.com",
    status: "inactive",
  },
  {
    id: "14",
    name: "Noah Kim",
    age: 31,
    city: "Atlanta",
    email: "noah@example.com",
    status: "active",
  },
  {
    id: "15",
    name: "Olivia Thompson",
    age: 27,
    city: "San Diego",
    email: "olivia@example.com",
    status: "pending",
  },
];

const columns: Array<ColumnDef<DataRow>> = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "city",
    header: "City",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const status = info.getValue() as DataRow["status"];
      const statusStyles = {
        active: { color: theme.colors.statuses.success },
        inactive: { color: theme.colors.statuses.blocker },
        pending: { color: theme.colors.statuses.warning },
      };
      return <span style={statusStyles[status]}>{status}</span>;
    },
  },
];

// Default story with all features enabled
export const Default: Story = {
  args: {
    data,
    columns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 5,
    onRowSelect: (selectedRows) => console.log("Selected rows:", selectedRows),
  },
};

// Story without pagination
export const WithoutPagination: Story = {
  args: {
    ...Default.args,
    enablePagination: false,
  },
};

// Story with striped rows
export const Striped: Story = {
  args: {
    ...Default.args,
    striped: true,
  },
};

// Story without sorting
export const WithoutSorting: Story = {
  args: {
    ...Default.args,
    enableSorting: false,
  },
};

// Story with custom page size
export const CustomPageSize: Story = {
  args: {
    ...Default.args,
    pageSize: 3,
  },
};

// Story with row selection handling
export const WithRowSelection: Story = {
  args: {
    ...Default.args,
    onRowSelect: (selectedRows) => {
      alert(`Selected ${selectedRows.length} rows`);
      console.log("Selected rows:", selectedRows);
    },
  },
};

// Story with minimal data
export const MinimalData: Story = {
  args: {
    ...Default.args,
    data: data.slice(0, 3),
  },
};

// Story with many rows
export const ManyRows: Story = {
  args: {
    ...Default.args,
    data: Array.from({ length: 100 }, (_, index) => ({
      id: `${index + 11}`,
      name: `User ${index + 11}`,
      age: 20 + Math.floor(Math.random() * 40),
      city: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"][
        Math.floor(Math.random() * 5)
      ],
      email: `user${index + 11}@example.com`,
      status: ["active", "inactive", "pending"][
        Math.floor(Math.random() * 3)
      ] as DataRow["status"],
    })),
  },
};
