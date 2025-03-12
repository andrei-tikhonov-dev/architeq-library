import { Meta, StoryObj } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";
import theme from "../../contstants/theme";
import { Icon } from "../Icon";
import { Table } from "./Table";
import { TableCell } from "./TableCell";

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
  description?: string;
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

const getRandomName = () => {
  const firstNames = [
    "Alp",
    "Sven",
    "Markus",
    "Raoul",
    "Riccardo",
    "Eylem",
    "Eris",
    "Lucien",
    "Marta",
    "Jeanne",
    "Michael",
    "Kaan",
    "Julia",
    "Andreas",
    "Stefan",
    "Nina",
    "Thomas",
    "Sophie",
    "Peter",
    "Anna",
    "Maria",
    "Jan",
    "Lisa",
    "David",
    "Sarah",
    "Lukas",
    "Laura",
    "Felix",
    "Lena",
    "Daniel",
    "Emma",
    "Jonas",
    "Hannah",
    "Maximilian",
    "Johanna",
    "Philip",
    "Katharina",
    "Alexander",
    "Eva",
    "Tim",
  ];

  const lastNames = [
    "Bozaci",
    "Birrer",
    "Grabert",
    "Paerli",
    "Gorza",
    "Mehmeti",
    "Gurguska",
    "Oberson",
    "Kowalska",
    "Dupont",
    "Schmidt",
    "Kaplan",
    "Weber",
    "Müller",
    "Schneider",
    "Wagner",
    "Fischer",
    "Meyer",
    "Lehmann",
    "Huber",
    "Keller",
    "Schulz",
    "Maier",
    "Bauer",
    "Walter",
    "Hoffmann",
    "Richter",
    "Wolf",
    "Becker",
    "Schmitz",
    "Hartmann",
    "König",
    "Lang",
    "Schwarz",
    "Zimmermann",
    "Braun",
    "Krause",
    "Hofmann",
    "Werner",
    "Schmid",
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
};

const getRandomEmail = (name: string) => {
  const nameParts = name.toLowerCase().split(" ");
  return `${nameParts[0]}.${nameParts[1]}@sbb.ch`;
};

const getRandomTaskTitle = () => {
  const actions = [
    "Implement",
    "Fix",
    "Update",
    "Create",
    "Design",
    "Optimize",
    "Refactor",
    "Add",
    "Remove",
    "Test",
    "Document",
  ];
  const objects = [
    "login",
    "authentication",
    "database",
    "user interface",
    "API",
    "dashboard",
    "layout",
    "module",
    "functionality",
    "query",
    "component",
    "form",
    "feature",
    "documentation",
    "security",
    "reporting",
    "search",
    "filter",
    "pagination",
    "performance",
  ];
  const details = [
    "system",
    "service",
    "logic",
    "algorithm",
    "process",
    "infrastructure",
    "module",
    "framework",
    "library",
    "integration",
  ];

  const action = actions[Math.floor(Math.random() * actions.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  const detail =
    Math.random() > 0.5
      ? ` ${details[Math.floor(Math.random() * details.length)]}`
      : "";

  return `${action} ${object}${detail}`;
};

const getLongTaskDescription = (taskTitle: string) => {
  const descriptions = [
    `This task involves ${taskTitle.toLowerCase()} which requires extensive work across multiple services and components. The developer will need to ensure backward compatibility and proper error handling throughout the implementation. This should include comprehensive logging and monitoring. All changes should be thoroughly tested in QA and staging environments before deployment.`,
    `Implementation of ${taskTitle.toLowerCase()} must include proper documentation, unit tests, and integration tests. The UI changes should be reviewed by the design team before submission. Performance benchmarks should be established to ensure the implementation meets our standards. Cross-browser compatibility testing is required for all UI components.`,
    `This ${taskTitle.toLowerCase()} task is a high priority item that needs to be completed before the upcoming release. It involves refactoring existing code to improve performance and maintainability. Code review by at least two senior developers is required. The implementation should follow SOLID principles and our established coding standards.`,
    `${taskTitle} requires coordination with the backend team to ensure proper API integration. The implementation should follow our coding standards and include comprehensive test coverage. Security review is mandatory for this feature as it involves user data handling. Documentation should include examples of typical usage scenarios and edge cases.`,
    `This is a complex task that involves ${taskTitle.toLowerCase()} and requires deep understanding of the system architecture. The developer needs to consider potential impacts on other system components. A phased implementation approach is recommended, with feature flags to control rollout. Load testing should be performed to validate the solution under production-like conditions.`,
  ];

  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const getRandomTaskId = () => {
  const prefixes = [
    "Back",
    "Front",
    "Dev",
    "QA",
    "UX",
    "UI",
    "Infra",
    "Ops",
    "Doc",
  ];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const number = Math.floor(10000 + Math.random() * 90000);

  return `${prefix}-${number}`;
};

const getRandomRole = () => {
  const roles = [
    "BACKEND: 100%",
    "FRONTEND: 100%",
    "FULLSTACK: 100%",
    "QA: 100%",
    "DEVOPS: 100%",
    "UX/UI: 100%",
    "No roles",
  ];
  return roles[Math.floor(Math.random() * roles.length)] as string;
};

const getRandomStoryPoints = () => {
  return Math.floor(Math.random() * 8) + 1;
};

const getRandomWorkload = (): number => {
  return (Math.floor(Math.random() * 50) + 50) as number;
};

const getRandomStatus = (): string => {
  const statuses = ["In Progress", "Open", "Closed"];
  return statuses[Math.floor(Math.random() * statuses.length)] as string;
};

const getRandomType = () => {
  return Math.random() > 0.3 ? "Story" : "Bug";
};

const getRandomInProgress = (status: string) => {
  if (status === "Open" || status === "Closed") {
    return "0 days";
  }
  return `${Math.floor(Math.random() * 30) + 1} days`;
};

const getRandomDate = (startYear = 2023, endYear = 2025) => {
  const year =
    startYear + Math.floor(Math.random() * (endYear - startYear + 1));
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;

  return `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;
};

const generateTeamData = (count = 50) => {
  const data: TeamMember[] = [];

  for (let i = 0; i < count; i++) {
    const name = getRandomName();
    const status = getRandomStatus() as "In Progress" | "Open" | "Closed";
    const type = getRandomType();
    const taskTitle = getRandomTaskTitle();

    data.push({
      id: i.toString(),
      name,
      email: getRandomEmail(name),
      taskId: getRandomTaskId(),
      taskTitle,
      type,
      status,
      role: getRandomRole(),
      storyPoints: getRandomStoryPoints(),
      inProgress: getRandomInProgress(status),
      workload: getRandomWorkload(),
      workStartDate: getRandomDate(2023, 2024),
      workEndDate: getRandomDate(2024, 2025),
      description: getLongTaskDescription(taskTitle),
    });
  }

  return data;
};

const teamData: TeamMember[] = generateTeamData(105);

const teamColumns: Array<ColumnDef<TeamMember>> = [
  {
    accessorKey: "name",
    header: "Team member",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "taskId",
    header: "Internal org ID",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "workload",
    header: "Workload ratio",
    cell: (info) => <TableCell>{`${info.getValue()}`}</TableCell>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "workStartDate",
    header: "Work start date",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "workEndDate",
    header: "Work end date",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
];

const taskColumns: Array<ColumnDef<TeamMember>> = [
  {
    accessorKey: "name",
    header: "Team member",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "taskId",
    header: "Identifier",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "taskTitle",
    header: "Task title",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info) => {
      const type = info.getValue() as string;
      return (
        <TableCell>
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
        </TableCell>
      );
    },
  },
  {
    accessorKey: "storyPoints",
    header: "SP",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "inProgress",
    header: "In progress",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
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
      return (
        <TableCell>
          <span style={statusStyles[status]}>{status}</span>
        </TableCell>
      );
    },
  },
];

const tableCellColumns: Array<ColumnDef<TeamMember>> = [
  {
    accessorKey: "name",
    header: "Team member",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "taskId",
    header: "ID",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "taskTitle",
    header: "Task Title",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
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
      return (
        <TableCell>
          <span style={statusStyles[status]}>{status}</span>
        </TableCell>
      );
    },
  },
];

const longTextColumns: Array<ColumnDef<TeamMember>> = [
  {
    accessorKey: "name",
    header: "Team member",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "taskId",
    header: "ID",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
  },
  {
    accessorKey: "taskTitle",
    header: "Task Title",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
    size: 200,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (info) => <TableCell>{String(info.getValue())}</TableCell>,
    size: 250,
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
      return (
        <TableCell>
          <span style={statusStyles[status]}>{status}</span>
        </TableCell>
      );
    },
  },
];

export const TeamTable: Story = {
  args: {
    data: teamData,
    columns: teamColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    onRowSelect: undefined,
  },
};

export const TaskTable: Story = {
  args: {
    data: teamData,
    columns: taskColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    onRowSelect: undefined,
  },
};

export const StripedTable: Story = {
  args: {
    data: teamData,
    columns: teamColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    striped: true,
    onRowSelect: undefined,
  },
};

export const WithoutPagination: Story = {
  args: {
    data: teamData,
    columns: taskColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: false,
    pageSize: 10,
    onRowSelect: undefined,
  },
};

export const WithoutSorting: Story = {
  args: {
    data: teamData,
    columns: teamColumns,
    enableSorting: false,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    onRowSelect: undefined,
  },
};

export const WithRowSelection: Story = {
  args: {
    data: teamData,
    columns: taskColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    onRowSelect: (selectedRows: TeamMember[]) => {
      console.log("Selected rows:", selectedRows);
    },
  },
  argTypes: {
    onRowSelect: {
      description: "Callback function for selected rows",
      action: "selected",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with row selection capability. When rows are selected, the onRowSelect callback function is triggered.",
      },
    },
  },
};

export const CustomPageSize: Story = {
  args: {
    data: teamData,
    columns: teamColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 5,
    onRowSelect: undefined,
  },
};

export const WithTableCell: Story = {
  args: {
    data: teamData,
    columns: tableCellColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    onRowSelect: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table using the TableCell component to handle long content. When hovering over a cell with overflowing content, it will expand without disrupting the table structure.",
      },
    },
  },
};

export const WithLongTextContent: Story = {
  args: {
    data: teamData,
    columns: longTextColumns,
    enableSorting: true,
    enableFiltering: true,
    enablePagination: true,
    pageSize: 10,
    onRowSelect: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with long text content that demonstrates the overflow behavior of the TableCell component. The cells with Task Title and Description contain lengthy text that doesn't fit within the cell width. Hover over these cells to see the expanded content.",
      },
    },
  },
};
