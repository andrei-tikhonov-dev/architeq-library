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
  const cellRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [expandedStyle, setExpandedStyle] = useState({});

  // Проверяем, есть ли переполнение контента
  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current && cellRef.current) {
        const hasTextOverflow =
          contentRef.current.scrollWidth > cellRef.current.clientWidth;
        setHasOverflow(hasTextOverflow);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [children]);

  // Вычисляем размеры и положение расширенного контейнера при наведении
  useEffect(() => {
    if (isHovered && cellRef.current) {
      const cellRect = cellRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Расширяем на 20% вправо, но не выходя за пределы экрана
      const expandedWidth = Math.min(
        cellRect.width * 1.2,
        viewportWidth - cellRect.left - 10
      );

      // Максимальная высота - оставляем 10px до края экрана
      const maxHeight = viewportHeight - cellRect.top - 10;

      setExpandedStyle({
        position: "absolute",
        left: 0,
        top: 0,
        width: `${expandedWidth}px`,
        maxHeight: `${maxHeight}px`,
        zIndex: 10,
      });
    }
  }, [isHovered]);

  const styles = {
    cell: css`
      position: relative;
      width: 100%;
      height: 100%;
    `,
    content: css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    `,
    expandedContent: css`
      background-color: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.background.secondary};
      border-radius: ${theme.border.radius.sm};
      box-shadow: ${theme.shadows.md};
      padding: ${theme.spacing.md};
      white-space: normal;
      overflow-y: auto;
      overflow-x: hidden;
      max-width: 100%;
    `,
  };

  return (
    <div
      ref={cellRef}
      className={`${styles.cell} ${className || ""}`}
      onMouseEnter={() => hasOverflow && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>

      {isHovered && hasOverflow && (
        <div className={styles.expandedContent} style={expandedStyle}>
          {children}
        </div>
      )}
    </div>
  );
};
