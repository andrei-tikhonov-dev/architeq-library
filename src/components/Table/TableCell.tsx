import React from "react";
import { css } from "@emotion/css";
import theme from "../../contstants/theme";

interface TableCellProps {
  children: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  const styles = {
    container: css`
      position: relative;
      width: 100%;
      height: 100%;
    `,
    content: css`
      color: ${theme.colors.text.default};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background-color: ${theme.colors.background.primary};
        position: absolute;
        width: 120%;
        left: -16px;
        top: -20px;
        overflow-y: auto;
        overflow-x: hidden;
        border: 1px solid ${theme.colors.background.secondary};
        padding: 11px 16px;
        z-index: 1000;
        margin: 0 -80px 0 0;
        white-space: normal;
      }
    `,
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
