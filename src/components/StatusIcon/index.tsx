import { css } from "@emotion/css";
import cn from "classnames";
import React from "react";

import { GrafanaTheme2 } from "@grafana/data";
import { useStyles2 } from "@grafana/ui";
import { Icon } from "../Icon";
import { InfoIconProps } from "./types";

const getStyles = (theme: GrafanaTheme2) => {
  return {
    status: css`
      display: flex;
      align-self: center;
    `,
    ok: css`
      color: ${theme.colors.success.text};
    `,
    warning: css`
      color: ${theme.colors.warning.text};
    `,
    critical: css`
      color: ${theme.colors.error.text};
    `,
  };
};

export const StatusIcon: React.FC<InfoIconProps> = ({ iconName }) => {
  const styles = useStyles2(getStyles);

  const statusClass = cn(styles.status, {
    [styles.ok]: iconName === "a",
    [styles.warning]: iconName === "b",
    [styles.critical]: iconName === "c",
  });

  return (
    <span className={statusClass}>
      {iconName && <Icon iconName={iconName} />}
    </span>
  );
};
