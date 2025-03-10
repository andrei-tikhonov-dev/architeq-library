import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { css } from "@emotion/css";
import { fontFamily } from "../../contstants/theme";

const tooltipTheme = {
  colors: {
    background: {
      primary: "#FFFFFF",
    },
    text: {
      default: "#212226",
    },
  },
  fontFamily,
  spacing: {
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

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  delayDuration?: number;
  disabled?: boolean;
  contentClassName?: string;
  id?: string;
}

const styles = {
  container: css`
    background-color: ${tooltipTheme.colors.background.primary};
    color: ${tooltipTheme.colors.text.default};
    font-family: ${tooltipTheme.fontFamily};
    line-height: 20px;
    padding: ${tooltipTheme.spacing.md};
    border-radius: ${tooltipTheme.border.radius.sm};
    font-size: ${tooltipTheme.typography.size.sm};
    box-shadow: ${tooltipTheme.shadows.md};
    max-width: 260px;
    width: max-content;
  `,
  arrow: css`
    fill: ${tooltipTheme.colors.background.primary};
  `,
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  align = "center",
  side = "top",
  sideOffset = 5,
  delayDuration = 300,
  disabled = false,
  contentClassName,
  id,
}) => {
  if (disabled) {
    return children;
  }

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={`${styles.container} ${contentClassName || ""}`}
            sideOffset={sideOffset}
            align={align}
            side={side}
            id={id}
          >
            {content}
            <TooltipPrimitive.Arrow className={styles.arrow} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
