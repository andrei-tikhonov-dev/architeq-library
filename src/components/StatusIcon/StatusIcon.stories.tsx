import { StatusIcon, statusIcons } from "./index";

import { StatusType } from "../../types";

export default {
  title: "Components/StatusIcon",
  component: StatusIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "The name of the Icon",
      control: {
        type: "select",
        options: Object.keys(statusIcons),
      },
    },
    size: {
      description: "Size of the Icon",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
};

export const StatusIconExample = {
  args: {
    name: "PlentyResources",
    size: "lg",
  },
};

export const AllStatusIcons = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      textAlign: "center",
    }}
  >
    {Object.keys(statusIcons).map((status) => (
      <div key={status}>
        <StatusIcon name={status as StatusType} size="lg" />
        <div style={{ marginTop: "8px" }}>{status}</div>
      </div>
    ))}
  </div>
);
