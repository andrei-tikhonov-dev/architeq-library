import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { css } from "@emotion/css";
import { useStyles2 } from "@grafana/ui";
import theme from "../../contstants/theme";
import IconButton from "../IconButton";

export interface ToggleTipProps {
  /** Content to display inside the tooltip */
  content: React.ReactNode;
  /** Optional title for the tooltip */
  title?: string;
  /** Element that triggers the tooltip */
  children: React.ReactElement;
  /** Alignment of the tooltip relative to the trigger */
  align?: "start" | "center" | "end";
  /** Positioning of the tooltip relative to the trigger */
  side?: "top" | "right" | "bottom" | "left";
  /** Controls if tooltip is open by default */
  defaultOpen?: boolean;
  /** Controls if tooltip is open (controlled component mode) */
  open?: boolean;
  /** Called when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Space between trigger and tooltip */
  sideOffset?: number;
  /** Additional CSS class for the tooltip content */
  contentClassName?: string;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Custom ID for accessibility */
  id?: string;
}

const getStyles = () => ({
  container: css`
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.text.default};
    font-family: ${theme.fontFamily};
    line-height: 20px;
    padding: ${theme.spacing.lg};
    border-radius: ${theme.border.radius.sm};
    font-size: ${theme.typography.size.sm};
    box-shadow: ${theme.shadows.md};
    position: relative;
    max-width: 320px;
    width: 100%;
  `,
  title: css`
    font-weight: 500;
    font-size: ${theme.typography.size.md};
    margin-bottom: ${theme.spacing.sm};
    padding-right: ${theme.spacing.lg};
    color: ${theme.colors.text.default};
  `,
  contentWrapper: css`
    margin-top: ${theme.spacing.sm};
  `,
  arrow: css`
    fill: ${theme.colors.background.primary};
  `,
  closeButton: css`
    position: absolute;
    top: ${theme.spacing.sm};
    right: ${theme.spacing.sm};
    color: ${theme.colors.text.light};

    &:hover {
      color: ${theme.colors.text.default};
    }
  `,
});

const ToggleTip: React.FC<ToggleTipProps> = ({
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
  const styles = useStyles2(getStyles);
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

export default ToggleTip;
