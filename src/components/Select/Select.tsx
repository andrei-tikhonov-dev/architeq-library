// @ts-ignore
import React, { forwardRef } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { css, cx } from "@emotion/css";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import theme, { COLORS } from "../../contstants/theme";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  id?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "destructive";
  error?: string;
  label?: string;
}

const getStyles = (
  size: "sm" | "md" | "lg",
  variant: "primary" | "secondary" | "destructive",
  disabled: boolean,
  hasError: boolean
) => {
  const sizeMap = {
    sm: {
      height: "28px",
      padding: `0 ${theme.spacing.sm}`,
      fontSize: theme.typography.size.sm,
      iconSize: "14px",
    },
    md: {
      height: "36px",
      padding: `0 ${theme.spacing.md}`,
      fontSize: theme.typography.size.md,
      iconSize: "16px",
    },
    lg: {
      height: "44px",
      padding: `0 ${theme.spacing.lg}`,
      fontSize: theme.typography.size.lg,
      iconSize: "18px",
    },
  };

  const variantColor = COLORS[variant];
  const borderColor = hasError
    ? COLORS.destructive.default
    : disabled
    ? COLORS.disabled
    : variantColor.default;

  return {
    // Select trigger (main button)
    trigger: css`
      all: unset;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: ${sizeMap[size].height};
      padding: ${sizeMap[size].padding};
      border-radius: ${theme.radius.button};
      border: 1px solid ${borderColor};
      background-color: ${theme.colors.background.primary};
      color: ${disabled ? COLORS.text.disabled : COLORS.text.default};
      font-family: ${theme.fontFamily};
      font-size: ${sizeMap[size].fontSize};
      cursor: ${disabled ? "not-allowed" : "pointer"};
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;

      &:hover:not(:disabled) {
        border-color: ${hasError
          ? COLORS.destructive.hover
          : variantColor.hover};
      }

      &:focus-visible {
        outline: 2px solid ${variantColor.focus};
        outline-offset: 2px;
      }
    `,

    // Icon
    icon: css`
      color: ${disabled ? COLORS.text.disabled : COLORS.text.light};
      margin-left: ${theme.spacing.sm};
      width: ${sizeMap[size].iconSize};
      height: ${sizeMap[size].iconSize};
    `,

    // Content (dropdown)
    content: css`
      overflow: hidden;
      background-color: ${theme.colors.background.primary};
      border-radius: ${theme.radius.button};
      border: 1px solid ${COLORS.text.light};
      box-shadow: ${theme.shadows.md};
      margin-top: ${theme.spacing.sm};
      max-height: 300px;
      z-index: 20;
    `,

    // Viewport (scrollable area)
    viewport: css`
      padding: ${theme.spacing.sm};
    `,

    // Item
    item: css`
      font-family: ${theme.fontFamily};
      font-size: ${sizeMap[size].fontSize};
      color: ${COLORS.text.default};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      border-radius: ${theme.radius.button};
      display: flex;
      align-items: center;
      position: relative;
      user-select: none;
      cursor: pointer;

      &[data-disabled] {
        color: ${COLORS.text.disabled};
        cursor: not-allowed;
      }

      &[data-highlighted] {
        background-color: ${theme.colors.background.secondary};
        outline: none;
      }

      &[data-state="checked"] {
        font-weight: 500;
      }
    `,

    // Item indicator (checkmark)
    itemIndicator: css`
      position: absolute;
      right: ${theme.spacing.md};
      width: ${sizeMap[size].iconSize};
      height: ${sizeMap[size].iconSize};
      color: ${variantColor.default};
    `,

    // Label (optional)
    label: css`
      font-family: ${theme.fontFamily};
      font-size: ${sizeMap[size].fontSize};
      color: ${disabled ? COLORS.text.disabled : COLORS.text.default};
      margin-bottom: ${theme.spacing.sm};
      display: block;
      font-weight: 500;
    `,

    // Error message
    error: css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.typography.size.sm};
      color: ${COLORS.destructive.default};
      margin-top: ${theme.spacing.sm};
      display: block;
    `,

    // Wrapper
    wrapper: css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
  };
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  function Select(
    {
      id,
      options,
      value,
      defaultValue,
      placeholder = "Select an option...",
      onChange,
      disabled = false,
      required,
      name,
      className,
      size = "md",
      variant = "primary",
      error,
      label,
    },
    ref
  ) {
    const hasError = !!error;
    const styles = getStyles(size, variant, disabled, hasError);

    return (
      <div className={cx(styles.wrapper, className)}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <RadixSelect.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onChange}
          disabled={disabled}
          required={required}
          name={name}
        >
          <RadixSelect.Trigger id={id} className={styles.trigger} ref={ref}>
            <RadixSelect.Value placeholder={placeholder} />
            <RadixSelect.Icon className={styles.icon}>
              <ChevronDownIcon />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content className={styles.content} position="popper">
              <RadixSelect.ScrollUpButton className={styles.icon}>
                <ChevronUpIcon />
              </RadixSelect.ScrollUpButton>

              <RadixSelect.Viewport className={styles.viewport}>
                {options.map((option) => (
                  <RadixSelect.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={styles.item}
                  >
                    <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                    <RadixSelect.ItemIndicator className={styles.itemIndicator}>
                      <CheckIcon />
                    </RadixSelect.ItemIndicator>
                  </RadixSelect.Item>
                ))}
              </RadixSelect.Viewport>

              <RadixSelect.ScrollDownButton className={styles.icon}>
                <ChevronDownIcon />
              </RadixSelect.ScrollDownButton>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>

        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";
