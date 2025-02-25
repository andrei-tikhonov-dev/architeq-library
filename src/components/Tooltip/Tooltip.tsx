import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { css } from "@emotion/css";
import theme from "../../contstants/theme";

export interface TooltipProps {
  /** Content to display inside the tooltip */
  content: React.ReactNode;
  /** Element that triggers the tooltip */
  children: React.ReactElement;
  /** Alignment of the tooltip relative to the trigger */
  align?: "start" | "center" | "end";
  /** Positioning of the tooltip relative to the trigger */
  side?: "top" | "right" | "bottom" | "left";
  /** Space between trigger and tooltip */
  sideOffset?: number;
  /** Delay in ms before showing the tooltip */
  delayDuration?: number;
  /** Whether the tooltip should be disabled */
  disabled?: boolean;
  /** Additional CSS class for the tooltip content */
  contentClassName?: string;
  /** Custom ID for accessibility */
  id?: string;
}

const styles = {
  container: css`
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.text.default};
    font-family: ${theme.fontFamily};
    line-height: 20px;
    padding: ${theme.spacing.md};
    border-radius: ${theme.border.radius.sm};
    font-size: ${theme.typography.size.sm};
    box-shadow: ${theme.shadows.md};
    max-width: 260px;
    width: max-content;
  `,
  arrow: css`
    fill: ${theme.colors.background.primary};
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
