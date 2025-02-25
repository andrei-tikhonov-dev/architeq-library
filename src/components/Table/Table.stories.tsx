// @ts-ignore
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";
import theme from "../../contstants/theme";
import { Icon } from "../Icon";
import { Table } from "./Table";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  taskId: string;
  taskTitle: string;
  type: "Story" | "Bug";
  status: "In Progress" | "Open" | "Closed";
  role: string;
  storyPoints: number;
  inProgress: string;
  workload: number;
  workStartDate: string;
  workEndDate: string;
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
type Story = StoryObj<typeof Table<TeamMember>>;

const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Alp",
    email: "alp.bozaci@sbb.ch",
    taskId: "Back-13678",
    taskTitle: "Implement login security",
    type: "Story",
    status: "In Progress",
    role: "BACKEND: 100%",
    storyPoints: 3,
    inProgress: "12 days",
    workload: 100,
    workStartDate: "21.02.2024",
    workEndDate: "14.05.2025",
  },
  {
    id: "2",
    name: "Sven",
    email: "sven.birrer@sbb.ch",
    taskId: "Back-13692",
    taskTitle: "Fix authentication bug",
    type: "Bug",
    status: "Closed",
    role: "BACKEND: 100%",
    storyPoints: 2,
    inProgress: "0 days",
    workload: 100,
    workStartDate: "21.02.2024",
    workEndDate: "14.05.2025",
  },
  {
    id: "3",
    name: "Markus",
    email: "markus.grabert@sbb.ch",
    taskId: "Back-13706",
    taskTitle: "Optimize database queries",
    type: "Story",
    status: "Open",
    role: "BACKEND: 100%",
    storyPoints: 5,
    inProgress: "0 days",
    workload: 100,
    workStartDate: "21.02.2024",
    workEndDate: "14.05.2025",
  },
  {
    id: "4",
    name: "Raoul",
    email: "raoul.paerli@sbb.ch",
    taskId: "Back-13707",
    taskTitle: "Update user API documentation",
    type: "Story",
    status: "In Progress",
    role: "BACKEND: 100%",
    storyPoints: 1,
    inProgress: "8 days",
    workload: 90,
    workStartDate: "21.02.2024",
    workEndDate: "14.05.2025",
  },
  {
    id: "5",
    name: "Riccardo",
    email: "riccardo.gorza@sbb.ch",
    taskId: "Back-13700",
    taskTitle: "Design new dashboard UI",
    type: "Story",
    status: "In Progress",
    role: "FRONTEND: 100%",
    storyPoints: 3,
    inProgress: "4 days",
    workload: 100,
    workStartDate: "21.02.2024",
    workEndDate: "14.05.2025",
  },
  {
    id: "6",
    name: "Eylem",
    email: "eylem.mehmeti@sbb.ch",
    taskId: "Back-13637",
    taskTitle: "Implement responsive layout",
    type: "Story",
    status: "Open",
    role: "FRONTEND: 100%",
    storyPoints: 2,
    inProgress: "0 days",
    workload: 80,
    workStartDate: "21.02.2024",
    workEndDate: "14.05.2025",
  },
  {
    id: "7",
    name: "Eris",
    email: "eris.gurguska@sbb.ch",
    taskId: "Back-13680",
    taskTitle: "Fix 'update user capacity bug'",
    type: "Bug",
    status: "Closed",
    role: "No roles",
    storyPoints: 2,
    inProgress: "0 days",
    workload: 100,
    workStartDate: "21.02.2024",
    workEndDate: "14.05.2025",
  },
  {
    id: "8",
    name: "Lucien",
    email: "lucien.oberson@sbb.ch",
    taskId: "Back-13597",
    taskTitle: "Add new user Kafka topic",
    type: "Story",
    status: "Closed",
    role: "No roles",
    storyPoints: 3,
    inProgress: "17 days",
    workload: 100,
    workStartDate: "21.02.2024",
    workEndDate: "14.05.2025",
  },
  {
    id: "9",
    name: "Marta",
    email: "marta.kowalska@sbb.ch",
    taskId: "Back-13721",
    taskTitle: "Add user form",
    type: "Bug",
    status: "Open",
    role: "FRONTEND: 100%",
    storyPoints: 3,
    inProgress: "0 days",
    workload: 100,
    workStartDate: "15.01.2024",
    workEndDate: "20.03.2024",
  },
  {
    id: "10",
    name: "Jeanne",
    email: "jeanne.dupont@sbb.ch",
    taskId: "Back-13722",
    taskTitle: "CI/CD improving helm charts",
    type: "Bug",
    status: "In Progress",
    role: "No roles",
    storyPoints: 3,
    inProgress: "4 days",
    workload: 100,
    workStartDate: "15.01.2024",
    workEndDate: "20.03.2024",
  },
  {
    id: "11",
    name: "Michael",
    email: "michael.schmidt@sbb.ch",
    taskId: "Back-13723",
    taskTitle: "Design documentation",
    type: "Story",
    status: "In Progress",
    role: "FRONTEND: 100%",
    storyPoints: 0,
    inProgress: "25 days",
    workload: 90,
    workStartDate: "01.12.2023",
    workEndDate: "31.03.2024",
  },
  {
    id: "12",
    name: "Kaan",
    email: "kaan.kaplan@sbb.ch",
    taskId: "Back-13724",
    taskTitle: "Improve DB performance",
    type: "Story",
    status: "Open",
    role: "No roles",
    storyPoints: 1,
    inProgress: "0 days",
    workload: 100,
    workStartDate: "21.02.2023",
    workEndDate: "14.05.2023",
  },
];

// Первый набор колонок - для представления команды (как на первом изображении)
const teamColumns: Array<ColumnDef<TeamMember>> = [
  {
    accessorKey: "name",
    header: "Team member",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "taskId",
    header: "Internal org ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "workload",
    header: "Workload ratio",
    cell: (info) => `${info.getValue()}`,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "workStartDate",
    header: "Work start date",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "workEndDate",
    header: "Work end date",
    cell: (info) => info.getValue(),
  },
];

// Второй набор колонок - для представления задач (как на втором изображении)
const taskColumns: Array<ColumnDef<TeamMember>> = [
  {
    accessorKey: "name",
    header: "Team member",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "taskId",
    header: "Identifier",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "taskTitle",
    header: "Task title",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info) => {
      const type = info.getValue() as string;
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {type === "Bug" ? (
            <span
              style={{
                color: theme.colors.statuses.blocker,
                paddingTop: "2px",
              }}
            >
              <Icon name="BugReport" />
            </span>
          ) : (
            <span
              style={{ color: theme.colors.statuses.info, paddingTop: "2px" }}
            >
              <Icon name="Check" />
            </span>
          )}
          <span>{type}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "storyPoints",
    header: "SP",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "inProgress",
    header: "In progress",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const status = info.getValue() as "In Progress" | "Open" | "Closed";
      const statusStyles = {
        "In Progress": { color: theme.colors.statuses.info },
        Open: { color: theme.colors.statuses.warning },
        Closed: { color: theme.colors.statuses.success },
      };
      return <span style={statusStyles[status]}>{status}</span>;
    },
  },
];

// Таблица с данными команды
export const TeamTable: Story = {
  args: {
    data: teamData,
    columns: teamColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    onRowSelect: (selectedRows: any) =>
      console.log("Selected rows:", selectedRows),
  },
};

// Таблица с данными о задачах
export const TaskTable: Story = {
  args: {
    data: teamData,
    columns: taskColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    onRowSelect: (selectedRows: any) =>
      console.log("Selected rows:", selectedRows),
  },
};

// Таблица с полосками (striped)
export const StripedTable: Story = {
  args: {
    ...TeamTable.args,
    striped: true,
  },
};

// Таблица без пагинации
export const WithoutPagination: Story = {
  args: {
    ...TaskTable.args,
    enablePagination: false,
  },
};

// Таблица без сортировки
export const WithoutSorting: Story = {
  args: {
    ...TeamTable.args,
    enableSorting: false,
  },
};

// Таблица с отбором одной строки
export const WithRowSelection: Story = {
  args: {
    ...TaskTable.args,
    onRowSelect: (selectedRows: any) => {
      console.log("Selected row:", selectedRows);
    },
  },
};

// Таблица с меньшим размером страницы
export const CustomPageSize: Story = {
  args: {
    ...TeamTable.args,
    pageSize: 5,
  },
};
