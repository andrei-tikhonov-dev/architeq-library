// @ts-ignore
import React, { forwardRef } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { css, cx } from "@emotion/css";
import { CheckIcon } from "@radix-ui/react-icons";
import theme, { COLORS } from "../../contstants/theme";

export interface CheckboxProps {
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  label?: string;
  indeterminate?: true;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "destructive";
}

const getStyles = (
  size: "sm" | "md" | "lg",
  variant: "primary" | "secondary" | "destructive",
  disabled: boolean
) => {
  const sizeMap = {
    sm: {
      width: "16px",
      height: "16px",
      iconSize: "10px",
    },
    md: {
      width: "20px",
      height: "20px",
      iconSize: "14px",
    },
    lg: {
      width: "24px",
      height: "24px",
      iconSize: "16px",
    },
  };

  const variantColor = COLORS[variant];

  return {
    root: css`
      all: unset;
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${sizeMap[size].width};
      height: ${sizeMap[size].height};
      border-radius: ${theme.radius.button};
      border: 1px solid ${disabled ? COLORS.disabled : variantColor.default};
      background-color: ${theme.colors.background.primary};
      cursor: ${disabled ? "not-allowed" : "pointer"};
      transition: all 0.2s ease-in-out;

      &:hover:not(:disabled) {
        background-color: ${theme.colors.background.secondary};
        border-color: ${variantColor.hover};
      }

      &:focus-visible {
        outline: 2px solid ${variantColor.focus};
        outline-offset: 2px;
      }

      &[data-state="checked"] {
        background-color: ${disabled ? COLORS.disabled : variantColor.default};
        border-color: ${disabled ? COLORS.disabled : variantColor.default};
      }

      &[data-state="indeterminate"] {
        background-color: ${disabled ? COLORS.disabled : variantColor.default};
        border-color: ${disabled ? COLORS.disabled : variantColor.default};
      }

      &:active:not(:disabled) {
        background-color: ${variantColor.active};
        border-color: ${variantColor.active};
      }
    `,
    indicator: css`
      color: ${theme.colors.background.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    `,
    icon: css`
      width: ${sizeMap[size].iconSize};
      height: ${sizeMap[size].iconSize};
    `,
    wrapper: css`
      display: inline-flex;
      align-items: center;
      gap: ${theme.spacing.md};
      cursor: ${disabled ? "not-allowed" : "pointer"};
      opacity: ${disabled ? 0.6 : 1};
    `,
    label: css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.typography.size.md};
      color: ${disabled ? COLORS.text.disabled : COLORS.text.default};
      user-select: none;
    `,
  };
};

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox(
    {
      id,
      checked,
      defaultChecked,
      onCheckedChange,
      disabled = false,
      required,
      name,
      value,
      label,
      indeterminate = undefined,
      className,
      size = "md",
      variant = "primary",
    },
    ref
  ) {
    const styles = getStyles(size, variant, disabled);

    const renderIndicator = () => {
      if (indeterminate) {
        return (
          <div
            className={css`
              width: 8px;
              height: 2px;
              background-color: ${theme.colors.background.primary};
            `}
          />
        );
      }

      return <CheckIcon className={styles.icon} />;
    };

    return (
      <div className={cx(styles.wrapper, className)}>
        <RadixCheckbox.Root
          id={id}
          checked={indeterminate ? "indeterminate" : checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          required={required}
          name={name}
          value={value}
          ref={ref}
          className={styles.root}
        >
          <RadixCheckbox.Indicator
            forceMount={indeterminate}
            className={styles.indicator}
          >
            {renderIndicator()}
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
