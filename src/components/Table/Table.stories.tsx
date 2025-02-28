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
  const day = Math.floor(Math.random() * 28) + 1; // избегаем проблем с разным количеством дней в месяцах

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

    data.push({
      id: i.toString(),
      name,
      email: getRandomEmail(name),
      taskId: getRandomTaskId(),
      taskTitle: getRandomTaskTitle(),
      type,
      status,
      role: getRandomRole(),
      storyPoints: getRandomStoryPoints(),
      inProgress: getRandomInProgress(status),
      workload: getRandomWorkload(),
      workStartDate: getRandomDate(2023, 2024),
      workEndDate: getRandomDate(2024, 2025),
    });
  }

  return data;
};

const teamData: TeamMember[] = generateTeamData(105);

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
