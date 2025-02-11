import { css } from "@emotion/css";
import React from "react";

import { useStyles2 } from "@grafana/ui";

import { StatusLineProps } from "./types";
import { StatusIcon } from "../StatusIcon";
import Icon from "../Icon";
import theme from "../../contstants/theme";

const getStyles = () => ({
  container: css`
    color: ${theme.colors.text.default};
    font-family: ${theme.fontFamily};
    font-size: 14px;
    line-height: 20px;
  `,
  icon: css`
    align-self: center;
  `,
  title: css`
    font-weight: 600;
  `,
  description: css`
    color: ${theme.colors.text.light};
    position: relative;

    &::before {
      content: "•";
      color: ${theme.colors.text.light};
      margin-right: ${theme.margins.default};
    }
  `,
  link: css`
    color: ${theme.colors.text.light};
    display: inline-flex;
    align-items: center;
    gap: ${theme.margins.small};
  `,
  linkIcon: css`
    align-self: center;
  `,
});
export const StatusLine: React.FC<StatusLineProps> = ({
  title,
  status,
  description,
  link,
}) => {
  const styles = useStyles2(getStyles);
  const linkComponent = link ? (
    <a href={link} target="_blank" className={styles.link} rel="noreferrer">
      <span>Learn more</span>
      <Icon name="OpenInNew" size="md" className={styles.linkIcon} />
    </a>
  ) : null;

  return (
    <div className={styles.container}>
      <StatusIcon className={styles.icon} name={status} size="md" />
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
      {linkComponent}
    </div>
  );
};
