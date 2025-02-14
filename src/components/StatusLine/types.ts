import { StatusType } from "../../types";
import { TooltipLineProps } from "../TooltipLine/types";

export interface StatusLineProps {
  status: StatusType;
  title: string;
  description?: string;
  link?: string;
  toggleTip?: TooltipLineProps[];
}
