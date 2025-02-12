// @ts-ignore
import React, { forwardRef } from "react";
import { IconButtonProps } from "./types";
import Icon from "../Icon";
import { css, cx } from "@emotion/css";
import theme from "../../contstants/theme";
import { useStyles2 } from "@grafana/ui";

const sizePaddingMap: Record<string, string> = {
  sm: "4px",
  md: "8px",
  lg: "12px",
};

const variantBackgroundMap: Record<string, string> = {
  primary: theme.colors.button.primary,
  destructive: theme.colors.button.destructive,
  tinted: theme.colors.button.tinted,
};
const variantColorMap: Record<string, string> = {
  primary: theme.colors.text.primary,
  destructive: theme.colors.text.destructive,
  tinted: theme.colors.text.tinted,
};

const getStyles = (
  size: "sm" | "md" | "lg",
  variant: "primary" | "destructive" | "tinted"
) => ({
  container: css`
    color: ${variantColorMap[variant]};
    font-family: ${theme.fontFamily};
    font-size: 14px;
    line-height: 14px;
    padding: ${sizePaddingMap[size]};
    border: none;
    background: transparent;
    border-radius: ${theme.radius.button};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${variantBackgroundMap[variant]};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
});

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function (
    {
      name,
      size = "md",
      onClick,
      disabled = false,
      variant = "primary",
      type = "button",
      className,
      "aria-label": ariaLabel,
      ...rest
    },
    ref
  ) {
    const styles = useStyles2(() => getStyles(size, variant));

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cx(styles.container, className)}
        aria-label={ariaLabel || name}
        {...rest}
      >
        <Icon name={name} size={size} />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
