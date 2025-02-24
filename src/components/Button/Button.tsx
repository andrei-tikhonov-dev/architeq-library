import React, { forwardRef, useMemo } from "react";
import { css, cx } from "@emotion/css";
import Icon from "../Icon";
import theme from "../../contstants/theme";
import { IconNameType } from "../../types";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "secondary" | "destructive";
export type ButtonStyle = "solid" | "outline" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  buttonStyle?: ButtonStyle;
  leftIcon?: IconNameType;
  rightIcon?: IconNameType;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const getStyles = (
  size: ButtonSize,
  variant: ButtonVariant,
  buttonStyle: ButtonStyle,
  fullWidth: boolean
) => {
  const baseStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.size.md};
    padding: ${theme.buttons.sizes[size].paddingY}
      ${theme.buttons.sizes[size].paddingX};
    border-radius: ${theme.radius.button};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 500;
    width: ${fullWidth ? "100%" : "auto"};

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
    }
  `;

  let specificStyles;

  if (buttonStyle === "solid") {
    const { background, text } = theme.buttons.solid[variant];
    specificStyles = css`
      color: ${text.default};
      background-color: ${background.default};
      border: none;

      &:hover:not(:disabled) {
        background-color: ${background.hover};
      }

      &:focus:not(:hover) {
        background-color: ${background.focus};
      }

      &:active {
        background-color: ${background.active};
      }

      &:disabled {
        background-color: ${background.disabled};
        color: ${text.disabled};
      }
    `;
  } else if (buttonStyle === "outline") {
    const { background, border, text } = theme.buttons.outline[variant];
    specificStyles = css`
      color: ${text.default};
      background-color: ${background.default};
      border: 1px solid ${border.default};

      &:hover:not(:disabled) {
        background-color: ${background.hover};
        border-color: ${border.hover};
      }

      &:focus:not(:hover) {
        background-color: ${background.focus};
        border-color: ${border.focus};
      }

      &:active {
        background-color: ${background.active};
        border-color: ${border.active};
      }

      &:disabled {
        background-color: ${background.disabled};
        color: ${text.disabled};
        border-color: ${border.disabled};
      }
    `;
  } else {
    // ghost
    const { background, text } = theme.buttons.ghost[variant];
    specificStyles = css`
      color: ${text.default};
      background-color: ${background.default};
      border: none;

      &:hover:not(:disabled) {
        background-color: ${background.hover};
      }

      &:focus:not(:hover) {
        background-color: ${background.focus};
      }

      &:active {
        background-color: ${background.active};
      }

      &:disabled {
        color: ${text.disabled};
      }
    `;
  }

  return { baseStyles, specificStyles };
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    size = "md",
    variant = "primary",
    buttonStyle = "solid",
    leftIcon,
    rightIcon,
    fullWidth = false,
    isLoading = false,
    disabled = false,
    className,
    ...rest
  },
  ref
) {
  const { baseStyles, specificStyles } = useMemo(
    () => getStyles(size, variant, buttonStyle, fullWidth),
    [size, variant, buttonStyle, fullWidth]
  );

  const iconStyles = useMemo(
    () => ({
      loading: css`
        animation: spin 1s linear infinite;
        margin-right: ${theme.buttons.sizes[size].iconGap};
      `,
      leftIcon: css`
        margin-right: ${theme.buttons.sizes[size].iconGap};
      `,
      rightIcon: css`
        margin-left: ${theme.buttons.sizes[size].iconGap};
      `,
    }),
    [size]
  );

  const buttonHtmlType = rest.type || "button";

  return (
    <button
      ref={ref}
      type={buttonHtmlType}
      disabled={disabled || isLoading}
      className={cx(baseStyles, specificStyles, className)}
      {...rest}
    >
      {isLoading && (
        <Icon
          name="ProgressActivity"
          size={size}
          className={iconStyles.loading}
        />
      )}

      {!isLoading && leftIcon && (
        <Icon name={leftIcon} size={size} className={iconStyles.leftIcon} />
      )}

      {children}

      {!isLoading && rightIcon && (
        <Icon name={rightIcon} size={size} className={iconStyles.rightIcon} />
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
