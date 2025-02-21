import { Meta, StoryObj } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "./index";

interface DataRow {
  id: string;
  name: string;
  age: number;
  city: string;
}

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Table>;

const columns: Array<ColumnDef<DataRow>> = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "city", header: "City" },
];

const data: DataRow[] = [
  { id: "1", name: "Alice", age: 25, city: "New York" },
  { id: "2", name: "Bob", age: 30, city: "Los Angeles" },
  { id: "3", name: "Charlie", age: 28, city: "Chicago" },
  { id: "4", name: "David", age: 35, city: "Houston" },
];

export const Default: Story = {
  args: {
    columns,
    data,
    onRowSelect: (selectedIds) => console.log("Selected rows:", selectedIds),
  },
};

export const WithRowSelection: Story = {
  args: {
    columns,
    data,
    onRowSelect: (selectedIds) =>
      alert(`Selected rows: ${selectedIds.join(", ")}`),
  },
};
