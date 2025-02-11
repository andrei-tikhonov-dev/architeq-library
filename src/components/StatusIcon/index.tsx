import React from "react";

import { Icon } from "../Icon";
import theme from "../../contstants/theme";
import { StatusIconProps } from "./types";

import { IconNameType, StatusType } from "../../types";

export const statusIcons: Record<StatusType, IconNameType> = {
  Complete: "CheckCircle",
  Good: "ThumbUp",
  OnTrack: "RocketLaunch",
  Warning: "Warning",
  Blocked: "Block",
  Critical: "Error",
  ReadyForReview: "Visibility",
  UnderControl: "Leaderboard",
  MonitorClosely: "Schedule",
  ExceededResources: "Cancel",
  PlentyResources: "Psychiatry",
};

export const statusColors: Record<StatusType, string> = {
  Complete: theme.colors.statuses.success,
  Good: theme.colors.statuses.info,
  OnTrack: theme.colors.statuses.info,
  Warning: theme.colors.statuses.warning,
  Blocked: theme.colors.statuses.blocker,
  Critical: theme.colors.statuses.danger,
  ReadyForReview: theme.colors.statuses.info,
  UnderControl: theme.colors.statuses.attention,
  MonitorClosely: theme.colors.statuses.attention,
  ExceededResources: theme.colors.statuses.danger,
  PlentyResources: theme.colors.statuses.success,
};

export const StatusIcon: React.FC<StatusIconProps> = ({
  name,
  size,
  ...props
}) => {
  return (
    <Icon
      name={statusIcons[name]}
      style={{ color: statusColors[name] }}
      size={size}
      {...props}
    />
  );
};
