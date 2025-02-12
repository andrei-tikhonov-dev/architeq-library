// @ts-ignore
import React from "react";
import { StatusLine } from "./index";
import statuses from "../../contstants/statuses";

export default {
  title: "Components/StatusLine",
  component: StatusLine,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      description: "The status type",
      control: {
        type: "select",
        options: Object.keys(statuses),
      },
    },
    title: {
      description: "The title of the status",
      control: {
        type: "text",
      },
    },
    description: {
      description: "Optional description",
      control: {
        type: "text",
      },
    },
    link: {
      description: "Optional link",
      control: {
        type: "text",
      },
    },
    toggleTip: {
      description: "Optional tooltip",
      control: {
        type: "text",
      },
    },
  },
};

export const StatusLineDefault = {
  args: {
    status: "PlentyResources",
    title: "Test title",
    description: "Test description",
    link: "#",
    toggleTip: "Tooltip text",
  },
};

export const StatusLineWithContainer = () => (
  <div style={{ minHeight: "500px" }}>
    <StatusLine status="Good" title="Title" toggleTip="Help text" />
  </div>
);
