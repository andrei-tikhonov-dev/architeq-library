import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { css } from "@emotion/css";
import { IconButton } from "../IconButton";
import { fontFamily } from "../../contstants/theme";

const toggleTipTheme = {
  colors: {
    background: {
      primary: "#FFFFFF",
    },
    text: {
      default: "#212226",
      light: "#7A7A7D",
    },
  },
  fontFamily,
  spacing: {
    sm: "4px",
    md: "8px",
    lg: "16px",
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
      md: "14px",
    },
  },
};

export interface ToggleTipProps {
  content: React.ReactNode;
  title?: string;
  children: React.ReactElement;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  sideOffset?: number;
  contentClassName?: string;
  showCloseButton?: boolean;
  id?: string;
}

const styles = {
  container: css`
    background-color: ${toggleTipTheme.colors.background.primary};
    color: ${toggleTipTheme.colors.text.default};
    font-family: ${toggleTipTheme.fontFamily};
    line-height: 20px;
    padding: ${toggleTipTheme.spacing.lg};
    border-radius: ${toggleTipTheme.border.radius.sm};
    font-size: ${toggleTipTheme.typography.size.sm};
    box-shadow: ${toggleTipTheme.shadows.md};
    position: relative;
    max-width: 320px;
    width: 100%;
  `,
  title: css`
    font-weight: 500;
    font-size: ${toggleTipTheme.typography.size.md};
    margin-bottom: ${toggleTipTheme.spacing.sm};
    padding-right: ${toggleTipTheme.spacing.lg};
    color: ${toggleTipTheme.colors.text.default};
  `,
  contentWrapper: css`
    margin-top: ${toggleTipTheme.spacing.sm};
  `,
  arrow: css`
    fill: ${toggleTipTheme.colors.background.primary};
  `,
  closeButton: css`
    position: absolute;
    top: ${toggleTipTheme.spacing.sm};
    right: ${toggleTipTheme.spacing.sm};
    color: ${toggleTipTheme.colors.text.light};

    &:hover {
      color: ${toggleTipTheme.colors.text.default};
    }
  `,
};

export const ToggleTip: React.FC<ToggleTipProps> = ({
  content,
  title,
  children,
  align = "center",
  side = "bottom",
  defaultOpen,
  open,
  onOpenChange,
  sideOffset = 5,
  contentClassName,
  showCloseButton = true,
  id,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen || false);

  // Handle controlled vs uncontrolled component
  const isOpen = open !== undefined ? open : internalOpen;
  const handleOpenChange = (newOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={handleOpenChange}
      defaultOpen={defaultOpen}
    >
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={`${styles.container} ${contentClassName || ""}`}
          sideOffset={sideOffset}
          align={align}
          side={side}
          id={id}
          onEscapeKeyDown={() => handleOpenChange(false)}
          onPointerDownOutside={() => handleOpenChange(false)}
        >
          {title && <div className={styles.title}>{title}</div>}

          <div className={styles.contentWrapper}>{content}</div>

          {showCloseButton && (
            <Popover.Close asChild>
              <IconButton
                className={styles.closeButton}
                size="sm"
                name="CloseSmall"
                aria-label="Close"
              />
            </Popover.Close>
          )}

          <Popover.Arrow className={styles.arrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
