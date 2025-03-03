import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/css";
import theme from "../../contstants/theme";

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check for content overflow
  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const hasTextOverflow =
          contentRef.current.scrollWidth > contentRef.current.clientWidth;
        setHasOverflow(hasTextOverflow);
      }
    };

    // Wait for layout to complete
    const timer = setTimeout(() => {
      checkOverflow();
    }, 0);

    window.addEventListener("resize", checkOverflow);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [children]);

  const styles = {
    cellContainer: css`
      position: relative;
      width: 100%;
      height: 100%;
      margin: -${theme.spacing.md} -${theme.spacing.lg};
    `,
    content: css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      padding: ${theme.spacing.md} ${theme.spacing.lg};
    `,
    expandedContent: css`
      position: absolute;
      left: 0;
      top: -12px;
      background-color: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.background.secondary};
      padding: 11px 16px;
      overflow-y: auto;
      overflow-x: hidden;
      color: ${theme.colors.text.default};
      z-index: 1000;
      margin: 0 -80px 0 0;
    `,
  };

  return (
    <div
      className={`${styles.cellContainer} ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={contentRef}
        className={
          isHovered && hasOverflow ? styles.expandedContent : styles.content
        }
      >
        {children}
      </div>
    </div>
  );
};
