import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { css } from "@emotion/css";
import { fontFamily } from "../../contstants/theme";

const dropdownMenuTheme = {
  colors: {
    background: {
      primary: "#FFFFFF",
      secondary: "#F4F5F7",
    },
    text: {
      default: "#212226",
    },
  },
  fontFamily,
  spacing: {
    sm: "4px",
    md: "8px",
  },
  border: {
    radius: {
      sm: "4px",
    },
  },
  shadows: {
    md: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  typography: {
    size: {
      sm: "12px",
    },
  },
};

export interface DropdownMenuProps {
  children: React.ReactElement;
  menuContent: React.ReactNode;
  contentClassName?: string;
}

const styles = {
  content: css`
    background-color: ${dropdownMenuTheme.colors.background.primary};
    color: ${dropdownMenuTheme.colors.text.default};
    font-family: ${dropdownMenuTheme.fontFamily};
    line-height: 20px;
    padding: ${dropdownMenuTheme.spacing.md};
    border-radius: ${dropdownMenuTheme.border.radius.sm};
    font-size: ${dropdownMenuTheme.typography.size.sm};
    box-shadow: ${dropdownMenuTheme.shadows.md};
    max-width: 260px;
    width: max-content;
    z-index: 1000;
  `,
  item: css`
    padding: ${dropdownMenuTheme.spacing.sm};
    cursor: pointer;
    &:hover {
      background-color: ${dropdownMenuTheme.colors.background.secondary};
    }
  `,
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  menuContent,
  contentClassName,
}) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {children}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className={`${styles.content} ${contentClassName || ""}`}
        >
          {menuContent}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

export const DropdownMenuItem: React.FC<{
  children: React.ReactNode;
  onSelect?: () => void;
}> = ({ children, onSelect }) => {
  return (
    <DropdownMenuPrimitive.Item className={styles.item} onSelect={onSelect}>
      {children}
    </DropdownMenuPrimitive.Item>
  );
};
