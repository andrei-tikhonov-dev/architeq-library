// @ts-ignore
import React from "react";
import { IconButtonProps } from "./types";
import Icon from "../Icon";

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = "md",
  onClick,
  disabled = false,
  type = "button",
  className,
  "aria-label": ariaLabel,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      aria-label={ariaLabel || name}
      {...rest}
    >
      <Icon name={name} size={size} />
    </button>
  );
};

export default IconButton;
