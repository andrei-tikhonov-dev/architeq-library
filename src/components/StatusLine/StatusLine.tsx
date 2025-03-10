import { css } from "@emotion/css";
import React from "react";

import { StatusLineProps } from "./types";
import { StatusIcon } from "../StatusIcon";
import { TooltipLine } from "../TooltipLine";
import { ToggleTip } from "../ToggleTip";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import { fontFamily } from "../../contstants/theme";

const statusLineTheme = {
  colors: {
    text: {
      default: "#212226",
      light: "#7A7A7D",
    },
  },
  fontFamily,
  margins: {
    default: "8px",
    small: "4px",
  },
};

const styles = {
  container: css`
    color: ${statusLineTheme.colors.text.default};
    font-family: ${statusLineTheme.fontFamily};
    font-size: 14px;
    line-height: 20px;
  `,
  icon: css`
    margin-right: ${statusLineTheme.margins.default}; /* Отступ после иконки */
    margin-bottom: -2px;
  `,
  title: css`
    font-weight: 600;
    margin-right: ${statusLineTheme.margins
      .default}; /* Отступ после заголовка */
  `,
  description: css`
    color: ${statusLineTheme.colors.text.light};
    margin-right: ${statusLineTheme.margins
      .default}; /* Отступ после описания */

    &::before {
      content: "•";
      color: ${statusLineTheme.colors.text.light};
      margin-right: ${statusLineTheme.margins.default};
    }
  `,
  link: css`
    color: ${statusLineTheme.colors.text.light};
    &:hover {
      color: ${statusLineTheme.colors.text.default};
    }
  `,
  linkIcon: css`
    margin-left: ${statusLineTheme.margins.small};
    margin-bottom: -4px;
  `,
};

export const StatusLine: React.FC<StatusLineProps> = ({
  title,
  status,
  description,
  link,
  toggleTip = [],
}) => {
  const linkComponent = link ? (
    <a href={link} target="_blank" className={styles.link} rel="noreferrer">
      <span>Learn more</span>
      <Icon name="OpenInNew" size="md" className={styles.linkIcon} />
    </a>
  ) : null;

  const toggleTipContent = [
    ...toggleTip.map(({ text, link }) => (
      <TooltipLine key={text} text={text} link={link} />
    )),
    linkComponent,
  ].filter(Boolean);

  return (
    <div className={styles.container}>
      <StatusIcon className={styles.icon} name={status} size="md" />
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
      {toggleTip.length > 0 ? (
        <ToggleTip content={toggleTipContent}>
          <IconButton name="MoreHoriz" size="sm" variant="primary" />
        </ToggleTip>
      ) : (
        linkComponent
      )}
    </div>
  );
};

export default StatusLine;
