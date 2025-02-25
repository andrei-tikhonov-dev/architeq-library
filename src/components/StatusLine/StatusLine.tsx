import { css } from "@emotion/css";
import React from "react";

import { StatusLineProps } from "./types";
import { StatusIcon } from "../StatusIcon";
import theme from "../../contstants/theme";
import { TooltipLine } from "../TooltipLine";
import { ToggleTip } from "../ToggleTip";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";

const styles = {
  container: css`
    color: ${theme.colors.text.default};
    font-family: ${theme.fontFamily};
    font-size: 14px;
    line-height: 20px;
  `,
  icon: css`
    margin-right: ${theme.margins.default}; /* Отступ после иконки */
    margin-bottom: -2px;
  `,
  title: css`
    font-weight: 600;
    margin-right: ${theme.margins.default}; /* Отступ после заголовка */
  `,
  description: css`
    color: ${theme.colors.text.light};
    margin-right: ${theme.margins.default}; /* Отступ после описания */

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
    margin-left: ${theme.margins.small};
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
