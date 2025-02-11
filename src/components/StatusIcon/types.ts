import React from "react";

import { StatusType } from "../../types";

export interface StatusIconProps extends React.SVGProps<SVGSVGElement> {
  name: StatusType;
  size?: "sm" | "md" | "lg";
}
