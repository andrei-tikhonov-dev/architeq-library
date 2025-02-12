// @ts-ignore
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { StatusLine } from ".";
import { StatusLineProps } from "./types";
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
} as Meta<StatusLineProps>;

const Template: StoryFn<StatusLineProps> = (args) => <StatusLine {...args} />;

export const SprintSuccessfullyCompleted = Template.bind({});
SprintSuccessfullyCompleted.args = {
  status: "Complete",
  title: "Sprint successfully completed",
  description: "More than 80% of all committed tasks are completed.",
};

export const GoodSprint = Template.bind({});
GoodSprint.args = {
  status: "Good",
  title: "Good sprint",
  description: "Between 60% and 80% of all committed tasks are completed.",
};

export const ChallengingSprint = Template.bind({});
ChallengingSprint.args = {
  status: "Warning",
  title: "Challenging sprint",
  description: "Less than 60% of all committed tasks are completed.",
};

export const OnTrack = Template.bind({});
OnTrack.args = {
  status: "OnTrack",
  title: "On track",
  description:
    "Sprint tasks are progressing as scheduled, with no issues expected for completion.",
};

export const AtRisk = Template.bind({});
AtRisk.args = {
  status: "Warning",
  title: "At risk",
  description: "Certain tasks or dependencies may cause delays in the sprint.",
};

export const Blocked = Template.bind({});
Blocked.args = {
  status: "Blocked",
  title: "Blocked",
  description:
    "Critical issues are preventing one or more tasks from progressing.",
};

export const ReadyForReview = Template.bind({});
ReadyForReview.args = {
  status: "ReadyForReview",
  title: "Ready for review",
  description: "Tasks are complete and ready for peer review or testing.",
};

export const Completed = Template.bind({});
Completed.args = {
  status: "Complete",
  title: "Completed",
  description:
    "All tasks are finished, reviewed, and meet the sprint’s definition of done.",
};

export const OverBudget = Template.bind({});
OverBudget.args = {
  status: "ExceededResources",
  title: "Over budget",
  description: "85.0k of 80.0k has been spent (106.25%)",
};

export const ExceededResources = Template.bind({});
ExceededResources.args = {
  status: "ExceededResources",
  title: "Exceeded resources",
  description: "1.1k HRS of 1.0k HRS has been spent (110%)",
};

export const PIOnTrack = Template.bind({});
PIOnTrack.args = {
  status: "OnTrack",
  title: "On track",
  description:
    "PI progress is moving according to the timeline and estimated effort",
};

export const PIAtRisk = Template.bind({});
PIAtRisk.args = {
  status: "Warning",
  title: "At risk",
  description:
    "PI objectives are at risk due to delays, resource issues, or dependencies",
};

export const PIBlocked = Template.bind({});
PIBlocked.args = {
  status: "Blocked",
  title: "Blocked",
  description: "Major blockers are preventing further progress on PI tasks",
};
