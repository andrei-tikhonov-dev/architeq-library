import * as Popover from "@radix-ui/react-popover";
import { css } from "@emotion/css";
import React from "react";
import { useStyles2 } from "@grafana/ui";
import theme from "../../contstants/theme";
import { ToggleTipProps } from "./types";
import IconButton from "../IconButton";

const getStyles = () => ({
  container: css`
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.text.default};
    font-family: ${theme.fontFamily};
    line-height: 20px;
    padding: 36px ${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.lg};
    border-radius: ${theme.border.radius.sm};
    font-size: ${theme.typography.size.sm};
    box-shadow: ${theme.shadows.md};
    position: relative;
  `,
  arrow: css`
    fill: ${theme.colors.background.primary};
  `,
  closeButton: css`
    position: absolute;
    top: ${theme.spacing.sm};
    right: ${theme.spacing.sm};
  `,
});

export const ToggleTip: React.FC<ToggleTipProps> = ({ content, children }) => {
  const styles = useStyles2(getStyles);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.container} sideOffset={5}>
          <Popover.Close asChild>
            <IconButton
              className={styles.closeButton}
              size="sm"
              name="CloseSmall"
            />
          </Popover.Close>
          {content}
          <Popover.Arrow className={styles.arrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
