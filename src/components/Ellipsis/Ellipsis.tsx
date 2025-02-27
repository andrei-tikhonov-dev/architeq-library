import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/css";
import theme from "../../contstants/theme";

export interface EllipsisProps {
  /**
   * The text content to display
   */
  children: string;
  /**
   * Maximum number of lines to display before truncating
   * @default 1
   */
  lines?: number;
  /**
   * Whether to show tooltip on hover with full text
   * @default true
   */
  showTooltip?: boolean;
  /**
   * Custom tooltip content (defaults to the full text)
   */
  tooltipContent?: string;
  /**
   * Custom CSS class for the container
   */
  className?: string;
  /**
   * Custom CSS class for the tooltip
   */
  tooltipClassName?: string;
  /**
   * Custom CSS styles for the container
   */
  style?: React.CSSProperties;
  /**
   * The HTML element to render
   * @default "div"
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Custom position for the tooltip
   * @default "bottom"
   */
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  /**
   * Whether to allow text selection
   * @default true
   */
  allowSelection?: boolean;
}

const getStyles = (
  lines: number = 1,
  isTruncated: boolean,
  allowSelection: boolean,
  tooltipPosition: EllipsisProps["tooltipPosition"] = "bottom"
) => {
  const positionStyles = {
    top: `
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 8px;
      
      &::after {
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-color: rgba(33, 34, 38, 0.9) transparent transparent transparent;
      }
    `,
    bottom: `
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 8px;
      
      &::after {
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-color: transparent transparent rgba(33, 34, 38, 0.9) transparent;
      }
    `,
    left: `
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 8px;
      
      &::after {
        top: 50%;
        left: 100%;
        margin-top: -5px;
        border-color: transparent transparent transparent rgba(33, 34, 38, 0.9);
      }
    `,
    right: `
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 8px;
      
      &::after {
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-color: transparent rgba(33, 34, 38, 0.9) transparent transparent;
      }
    `,
  };

  return {
    container: css`
      position: relative;
      display: block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ${lines === 1 ? "ellipsis" : "clip"};
      white-space: ${lines === 1 ? "nowrap" : "normal"};
      ${lines > 1
        ? `
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        `
        : ""}
      word-wrap: break-word;
      font-family: ${theme.fontFamily};
      user-select: ${allowSelection ? "text" : "none"};
    `,
    tooltip: css`
      position: absolute;
      z-index: 1000;
      max-width: 300px;
      padding: 8px 12px;
      border-radius: 4px;
      background-color: rgba(33, 34, 38, 0.9);
      color: white;
      font-size: ${theme.typography.size.sm};
      line-height: 1.4;
      word-wrap: break-word;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
      ${positionStyles[tooltipPosition]}

      &::after {
        content: "";
        position: absolute;
        border-width: 5px;
        border-style: solid;
      }
    `,
    containerWithTooltip: css`
      &:hover > .ellipsis-tooltip {
        visibility: ${isTruncated ? "visible" : "hidden"};
        opacity: ${isTruncated ? 1 : 0};
      }
    `,
  };
};

export const Ellipsis: React.FC<EllipsisProps> = ({
  children,
  lines = 1,
  showTooltip = true,
  tooltipContent,
  className,
  tooltipClassName,
  style,
  as = "div",
  tooltipPosition = "bottom",
  allowSelection = true,
}) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      const element = textRef.current;
      if (!element) return;

      if (lines === 1) {
        setIsTruncated(element.scrollWidth > element.clientWidth);
      } else {
        setIsTruncated(element.scrollHeight > element.clientHeight);
      }
    };

    checkTruncation();

    // Check again if window is resized
    window.addEventListener("resize", checkTruncation);
    return () => {
      window.removeEventListener("resize", checkTruncation);
    };
  }, [children, lines]);

  const styles = getStyles(lines, isTruncated, allowSelection, tooltipPosition);
  const Component = as as React.ElementType;
  const tooltipText = tooltipContent || children;

  return (
    <Component
      ref={textRef}
      className={css([
        styles.container,
        showTooltip && styles.containerWithTooltip,
        className,
      ])}
      style={style}
      title={showTooltip ? undefined : tooltipText}
    >
      {children}
      {showTooltip && (
        <span
          className={css([
            styles.tooltip,
            "ellipsis-tooltip",
            tooltipClassName,
          ])}
        >
          {tooltipText}
        </span>
      )}
    </Component>
  );
};

export default Ellipsis;
