import { css } from "@emotion/css";
import React from "react";

import { TooltipLineProps } from "./types";
import { Icon } from "../Icon";
import { fontFamily } from "../../contstants/theme";

const tooltipLineTheme = {
  colors: {
    text: {
      default: "#212226",
      light: "#7A7A7D",
    },
  },
  fontFamily,
  margins: {
    default: "8px",
  },
};

const styles = {
  container: css`
    color: ${tooltipLineTheme.colors.text.default};
    font-family: ${tooltipLineTheme.fontFamily};
    font-size: 14px;
    line-height: 20px;
  `,
  text: css`
    margin-right: ${tooltipLineTheme.margins.default};

    &::before {
      content: "•";
      color: ${tooltipLineTheme.colors.text.light};
      margin-right: ${tooltipLineTheme.margins.default};
    }
  `,
  link: css`
    color: ${tooltipLineTheme.colors.text.light};
    &:hover {
      color: ${tooltipLineTheme.colors.text.default};
    }
  `,
  linkIcon: css`
    margin-bottom: -4px;
  `,
};

export const TooltipLine: React.FC<TooltipLineProps> = ({ text, link }) => {
  const linkComponent = link ? (
    <a href={link} target="_blank" className={styles.link} rel="noreferrer">
      <Icon name="OpenInNew" size="md" className={styles.linkIcon} />
    </a>
  ) : null;

  return (
    <div className={styles.container}>
      {<span className={styles.text}>{text}</span>}
      {linkComponent}
    </div>
  );
};
