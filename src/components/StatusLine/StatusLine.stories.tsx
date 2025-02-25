// @ts-ignore
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { StatusLineProps } from "./types";
import statuses from "../../contstants/statuses";
import StatusLine from "./StatusLine";

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
        type: "object",
      },
    },
  },
} as Meta<StatusLineProps>;

const Template: StoryFn<StatusLineProps> = (args) => (
  <div style={{ minHeight: 100 }}>
    <StatusLine {...args} />
  </div>
);

const exampleToggleTip = [
  { text: "Additional context available", link: "#" },
  { text: "More details about the status", link: "#" },
];

/**
 * 🏁 Sprint Planning
 */
export const SprintPlanning_Progressing = Template.bind({});
SprintPlanning_Progressing.storyName = "Sprint progressing as planned";
SprintPlanning_Progressing.args = {
  status: "OnTrack",
  title: "Sprint progressing as planned",
  description:
    "Tasks are being executed according to schedule with no major issues.",
  toggleTip: exampleToggleTip,
};

export const SprintPlanning_ExternalDependencies = Template.bind({});
SprintPlanning_ExternalDependencies.storyName =
  "External dependencies impacting sprint";
SprintPlanning_ExternalDependencies.args = {
  status: "Warning",
  title: "External dependencies impacting sprint",
  description: "Dependencies from other teams may affect sprint progress.",
  toggleTip: exampleToggleTip,
};

export const SprintPlanning_StoryPointsNotAssigned = Template.bind({});
SprintPlanning_StoryPointsNotAssigned.storyName = "Story points not assigned";
SprintPlanning_StoryPointsNotAssigned.args = {
  status: "Blocked",
  title: "Story points not assigned",
  description:
    "No story points have been assigned to sprint tasks, impacting planning accuracy.",
  toggleTip: exampleToggleTip,
};

/**
 * 🚀 Current Sprint
 */
export const CurrentSprint_OnTrack = Template.bind({});
CurrentSprint_OnTrack.storyName = "On track";
CurrentSprint_OnTrack.args = {
  status: "OnTrack",
  title: "On track",
  description:
    "Sprint tasks are progressing as scheduled, with no issues expected for completion.",
  toggleTip: exampleToggleTip,
};

export const CurrentSprint_AtRisk = Template.bind({});
CurrentSprint_AtRisk.storyName = "At risk";
CurrentSprint_AtRisk.args = {
  status: "Warning",
  title: "At risk",
  description: "Certain tasks or dependencies may cause delays in the sprint.",
  toggleTip: exampleToggleTip,
};

export const CurrentSprint_Completed = Template.bind({});
CurrentSprint_Completed.storyName = "Completed";
CurrentSprint_Completed.args = {
  status: "Complete",
  title: "Completed",
  description:
    "All tasks are finished, reviewed, and meet the sprint’s definition of done.",
  toggleTip: exampleToggleTip,
};

/**
 * 💰 Budget
 */
export const Budget_OnTrack = Template.bind({});
Budget_OnTrack.storyName = "On track";
Budget_OnTrack.args = {
  status: "OnTrack",
  title: "On track",
  description: "7.6k of 80.0k has been spent (9.5%).",
  toggleTip: exampleToggleTip,
};

export const Budget_AtRisk = Template.bind({});
Budget_AtRisk.storyName = "At risk";
Budget_AtRisk.args = {
  status: "Warning",
  title: "At risk",
  description: "65.0k of 80.0k has been spent (81.25%).",
  toggleTip: exampleToggleTip,
};

export const Budget_OverBudget = Template.bind({});
Budget_OverBudget.storyName = "Over budget";
Budget_OverBudget.args = {
  status: "ExceededResources",
  title: "Over budget",
  description: "85.0k of 80.0k has been spent (106.25%).",
  toggleTip: exampleToggleTip,
};

/**
 * 🔧 Resources
 */
export const Resources_Available = Template.bind({});
Resources_Available.storyName = "Plenty of resources available";
Resources_Available.args = {
  status: "PlentyResources",
  title: "Plenty of resources available",
  description: "100 HRS of 1.0k HRS has been spent (10%).",
  toggleTip: exampleToggleTip,
};

export const Resources_Exceeded = Template.bind({});
Resources_Exceeded.storyName = "Exceeded resources";
Resources_Exceeded.args = {
  status: "ExceededResources",
  title: "Exceeded resources",
  description: "1.1k HRS of 1.0k HRS has been spent (110%).",
  toggleTip: exampleToggleTip,
};

/**
 * 📊 PI Monitoring
 */
export const PI_OnTrack = Template.bind({});
PI_OnTrack.storyName = "PI On track";
PI_OnTrack.args = {
  status: "OnTrack",
  title: "On track",
  description:
    "PI progress is moving according to the timeline and estimated effort.",
  toggleTip: exampleToggleTip,
};

export const PI_Blocked = Template.bind({});
PI_Blocked.storyName = "PI Blocked";
PI_Blocked.args = {
  status: "Blocked",
  title: "Blocked",
  description: "Major blockers are preventing further progress on PI tasks.",
  toggleTip: exampleToggleTip,
};
