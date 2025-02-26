// @ts-ignore
import React from "react";
import { css } from "@emotion/css";
import theme from "../../contstants/theme";
import { IconButton } from "../IconButton";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems?: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  showPageSize?: boolean;
  className?: string;
}

const getStyles = () => ({
  container: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.lg} 0;
    color: ${theme.colors.text.default};
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.size.sm};
    line-height: 20px;
  `,
  leftSection: css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
  `,
  rightSection: css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
  `,
  select: css`
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border: 1px solid ${theme.colors.background.secondary};
    border-radius: ${theme.radius.button};
    background: ${theme.colors.background.primary};
    color: ${theme.colors.text.default};
    cursor: pointer;

    &:hover {
      background: ${theme.colors.background.secondary};
    }
  `,
  info: css`
    color: ${theme.colors.text.light};
  `,
});

export const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export function Pagination({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  showPageSize = true,
  className,
}: PaginationProps) {
  const styles = getStyles();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className={css([styles.container, className])}>
      <div className={styles.leftSection}>
        {showPageSize && onPageSizeChange && (
          <select
            className={styles.select}
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} items
              </option>
            ))}
          </select>
        )}

        {totalItems && <span className={styles.info}>Total: {totalItems}</span>}
      </div>

      <div className={styles.rightSection}>
        <IconButton
          name="FirstPage"
          size="sm"
          onClick={() => onPageChange(1)}
          disabled={isFirstPage}
          aria-label="Go to first page"
        />
        <IconButton
          name="ChevronLeft"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="Go to previous page"
        />
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <IconButton
          name="ChevronRight"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label="Go to next page"
        />
        <IconButton
          name="LastPage"
          size="sm"
          onClick={() => onPageChange(totalPages)}
          disabled={isLastPage}
          aria-label="Go to last page"
        />
      </div>
    </div>
  );
}
