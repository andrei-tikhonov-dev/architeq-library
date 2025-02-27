import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/css";
import theme from "../../contstants/theme";
import { Tooltip } from "../Tooltip";

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
  tooltipContent?: React.ReactNode;
  /**
   * Custom CSS class for the container
   */
  className?: string;
  /**
   * Custom CSS styles for the container
   */
  style?: React.CSSProperties;
  /**
   * The HTML element to render
   * @default "div"
   */
  as?: keyof React.JSX.IntrinsicElements;
  /**
   * Tooltip position
   * @default "bottom"
   */
  tooltipSide?: "top" | "right" | "bottom" | "left";
  /**
   * Tooltip alignment
   * @default "center"
   */
  tooltipAlign?: "start" | "center" | "end";
  /**
   * Space between text and tooltip
   * @default 5
   */
  tooltipOffset?: number;
  /**
   * Delay in ms before showing the tooltip
   * @default 300
   */
  tooltipDelay?: number;
  /**
   * Whether to allow text selection
   * @default true
   */
  allowSelection?: boolean;
}

const getStyles = (lines = 1, allowSelection: boolean) => {
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
  };
};

export const Ellipsis: React.FC<EllipsisProps> = ({
  children,
  lines = 1,
  showTooltip = true,
  tooltipContent,
  className,
  style,
  as = "div",
  tooltipSide = "bottom",
  tooltipAlign = "center",
  tooltipOffset = 5,
  tooltipDelay = 300,
  allowSelection = true,
}) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      const element = textRef.current;
      if (!element) {
        return;
      }

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

  const styles = getStyles(lines, allowSelection);
  const Component = as as React.ElementType;
  const content = tooltipContent || children;

  if (!showTooltip || !isTruncated) {
    return (
      <Component
        ref={textRef}
        className={css([styles.container, className])}
        style={style}
        title={!showTooltip ? children : undefined}
      >
        {children}
      </Component>
    );
  }

  return (
    <Tooltip
      content={content}
      side={tooltipSide}
      align={tooltipAlign}
      sideOffset={tooltipOffset}
      delayDuration={tooltipDelay}
      disabled={!isTruncated}
    >
      <Component
        ref={textRef}
        className={css([styles.container, className])}
        style={style}
      >
        {children}
      </Component>
    </Tooltip>
  );
};

export default Ellipsis;
