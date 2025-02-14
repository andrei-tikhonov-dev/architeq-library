import { css } from "@emotion/css";
import React from "react";

import { useStyles2 } from "@grafana/ui";

import { TooltipLineProps } from "./types";
import Icon from "../Icon";
import theme from "../../contstants/theme";

const getStyles = () => ({
  container: css`
    color: ${theme.colors.text.default};
    font-family: ${theme.fontFamily};
    font-size: 14px;
    line-height: 20px;
  `,
  text: css`
    margin-right: ${theme.margins.default};

    &::before {
      content: "•";
      color: ${theme.colors.text.light};
      margin-right: ${theme.margins.default};
    }
  `,
  link: css`
    color: ${theme.colors.text.light};
    &:hover {
      color: ${theme.colors.text.default};
    }
  `,
  linkIcon: css`
    margin-bottom: -4px;
  `,
});

export const TooltipLine: React.FC<TooltipLineProps> = ({ text, link }) => {
  const styles = useStyles2(getStyles);
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
