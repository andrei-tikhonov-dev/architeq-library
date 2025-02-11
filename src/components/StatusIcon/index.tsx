import React from "react";

import { Icon, IconName } from "../Icon";
import { StatusType } from "../../contstants/statuses";
import colors from "../../contstants/colors";

export const statusIcons: Record<StatusType, IconName> = {
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
  Complete: colors.icons.success,
  Good: colors.icons.info,
  OnTrack: colors.icons.info,
  Warning: colors.icons.warning,
  Blocked: colors.icons.blocker,
  Critical: colors.icons.danger,
  ReadyForReview: colors.icons.info,
  UnderControl: colors.icons.attention,
  MonitorClosely: colors.icons.attention,
  ExceededResources: colors.icons.danger,
  PlentyResources: colors.icons.success,
};

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: StatusType;
  size?: "sm" | "md" | "lg";
}

export const StatusIcon: React.FC<IconProps> = ({ name, size }) => {
  return (
    <Icon
      name={statusIcons[name]}
      style={{ color: statusColors[name] }}
      size={size}
    />
  );
};
