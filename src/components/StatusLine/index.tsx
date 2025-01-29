import { css, cx } from "@emotion/css";
import React from "react";

import { useStyles2, TextLink } from "@grafana/ui";

import { StatusLineProps } from "./types";
import { StatusIcon } from "../StatusIcon";

const getStyles = () => ({
  infoItem: css`
    display: flex;
    gap: 5px;
    align-items: center;
  `,
});

export const StatusLine: React.FC<StatusLineProps> = ({
  value,
  valueClassName,
  name,
  iconName,
  link,
  newTab = false,
  className,
  fullLink,
}) => {
  const styles = useStyles2(getStyles);

  const linkTarget = newTab ? "_blank" : "_self";
  const linkRel = newTab ? "noopener noreferrer" : undefined;
  const CustomLink: any = TextLink;

  const handleClick = () => {
    if (!link || !fullLink) {
      return;
    }
    if (newTab) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  const renderContent = () => {
    if (link && value && !fullLink) {
      return (
        <CustomLink href={link} target={linkTarget} rel={linkRel}>
          {String(value)}
        </CustomLink>
      );
    }

    return <div className={valueClassName}>{value}</div>;
  };

  return (
    <div className={cx(styles.infoItem, className)} onClick={handleClick}>
      {iconName && <StatusIcon iconName={iconName} />}
      <strong>{name}</strong>
      {renderContent()}
    </div>
  );
};
