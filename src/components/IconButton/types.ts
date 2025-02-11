import React from "react";
import { IconNameType } from "../../types";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: IconNameType;
  size?: "sm" | "md" | "lg";
}
