import React, { useState } from "react";
import { css } from "@emotion/css";
import theme from "../../contstants/theme";
import { IconButton } from "../IconButton";

interface TableCellProps {
  children: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        padding: 11px 26px 11px 16px;
        z-index: 1000;
        margin: 0 -80px 0 0;
        white-space: normal;
      }
    `,
    copyButton: css`
      position: absolute;
      top: 4px;
      right: 4px;
      z-index: 1001;
      display: ${isHovered ? "block" : "none"};
    `,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const copyToClipboard = () => {
    const text = children?.toString() || "";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <IconButton
          size="sm"
          className={styles.copyButton}
          name="ContentCopy"
          onClick={copyToClipboard}
          title="Copy to clipboard"
        />
      </div>
    </div>
  );
};
