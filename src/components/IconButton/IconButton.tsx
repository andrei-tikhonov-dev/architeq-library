import React, { forwardRef, useMemo } from "react";
import { css, cx } from "@emotion/css";
import theme from "../../contstants/theme";
import { IconNameType } from "../../types";
import { Icon } from "../Icon";

type IconButtonSize = "sm" | "md" | "lg";
type IconButtonVariant = "primary" | "destructive" | "tinted";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: IconNameType;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}

const BUTTON_PADDING: Record<IconButtonSize, string> = {
  sm: "4px",
  md: "8px",
  lg: "12px",
};

const VARIANT_BACKGROUND: Record<IconButtonVariant, string> = {
  primary: theme.colors.iconButton.primary,
  destructive: theme.colors.iconButton.destructive,
  tinted: theme.colors.iconButton.tinted,
};

const VARIANT_COLOR: Record<IconButtonVariant, string> = {
  primary: theme.colors.text.primary,
  destructive: theme.colors.text.destructive,
  tinted: theme.colors.text.tinted,
};

const getStyles = (size: IconButtonSize, variant: IconButtonVariant) => ({
  container: css`
    color: ${VARIANT_COLOR[variant]};
    font-family: ${theme.fontFamily};
    font-size: 14px;
    line-height: 14px;
    padding: ${BUTTON_PADDING[size]};
    border: none;
    background: transparent;
    border-radius: ${theme.radius.button};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover:not(:disabled) {
      background-color: ${VARIANT_BACKGROUND[variant]};
    }

    &:focus-visible {
      outline: 2px solid ${VARIANT_COLOR[variant]};
      outline-offset: 2px;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
});

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      name,
      size = "md",
      variant = "primary",
      onClick,
      disabled = false,
      type = "button",
      className,
      "aria-label": ariaLabel,
      ...rest
    },
    ref
  ) {
    const styles = useMemo(() => getStyles(size, variant), [size, variant]);

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cx(styles.container, className)}
        aria-label={ariaLabel || name}
        aria-disabled={disabled}
        {...rest}
      >
        <Icon name={name} size={size} aria-hidden="true" />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
