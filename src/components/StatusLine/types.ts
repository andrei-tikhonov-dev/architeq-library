import { StatusType } from "../../types";

export interface StatusLineProps {
  status: StatusType;
  title: string;
  description?: string;
  link?: string;
  toggleTip?: string | string[];
}
