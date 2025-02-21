// @ts-ignore
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  flexRender,
} from "@tanstack/react-table";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { css } from "@emotion/css";
import Icon from "../Icon";
import IconButton from "../IconButton";
import theme from "../../contstants/theme";

interface TableProps<T> {
  data: T[];
  columns: Array<ColumnDef<T, any>>;
  onRowSelect?: (selectedRows: T[]) => void;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  striped?: boolean;
}

const getStyles = (striped?: boolean) => ({
  table: css`
    width: 100%;
    border-collapse: collapse;
    background: ${theme.colors.background.primary};
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.size.md};
  `,
  thead: css`
    position: sticky;
    top: 0;
    z-index: 1;
    background: ${theme.colors.background.primary};
  `,
  th: css`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    text-align: left;
    font-weight: 500;
    color: ${theme.colors.text.light};
    background: ${theme.colors.background.secondary};
    border-bottom: 1px solid ${theme.colors.background.secondary};
    user-select: none;
  `,
  td: css`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    border-bottom: 1px solid ${theme.colors.background.secondary};
    color: ${theme.colors.text.default};
  `,
  sortHeader: css`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};

    &:hover {
      color: ${theme.colors.text.default};
    }
  `,
  checkboxRoot: css`
    width: 16px;
    height: 16px;
    border-radius: ${theme.radius.button};
    border: 1px solid ${theme.colors.text.light};
    background: ${theme.colors.background.primary};

    &:hover {
      background: ${theme.colors.background.secondary};
    }

    &[data-state="checked"] {
      background: ${theme.colors.statuses.info};
      border-color: ${theme.colors.statuses.info};
    }
  `,
  checkboxIndicator: css`
    color: ${theme.colors.background.primary};
  `,
  row: css`
    &:hover {
      background: ${theme.colors.background.secondary};
    }

    ${striped &&
    `&:nth-of-type(even) {
      background: ${theme.colors.background.secondary};
      
      &:hover {
        background: ${theme.colors.background.overlay};
      }
    }`}
  `,
  pagination: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    gap: ${theme.spacing.md};
    color: ${theme.colors.text.default};
  `,
  dropdownTrigger: css`
    color: ${theme.colors.text.light};
    border-radius: ${theme.radius.button};
  `,
  dropdownContent: css`
    min-width: 160px;
    background: ${theme.colors.background.primary};
    border-radius: ${theme.border.radius.sm};
    padding: ${theme.spacing.sm};
    box-shadow: ${theme.shadows.md};
  `,
  dropdownItem: css`
    padding: ${theme.spacing.md};
    cursor: pointer;
    border-radius: ${theme.border.radius.sm};
    color: ${theme.colors.text.default};

    &:hover {
      background: ${theme.colors.background.secondary};
    }
  `,
});

export function Table<T extends object>({
  data,
  columns,
  enableSorting = true,
  enablePagination = true,
  striped = false,
}: TableProps<T>) {
  const styles = getStyles(striped);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className={styles.th}>
                <Checkbox.Root
                  className={styles.checkboxRoot}
                  checked={table.getIsAllRowsSelected()}
                  onCheckedChange={(checked) =>
                    table.toggleAllRowsSelected(!!checked)
                  }
                >
                  <Checkbox.Indicator className={styles.checkboxIndicator}>
                    <Icon name="Check" size="sm" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </th>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.th}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={
                        enableSorting && header.column.getCanSort()
                          ? styles.sortHeader
                          : ""
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <Icon name="ArrowDropUp" size="sm" />,
                        desc: <Icon name="ArrowDropDown" size="sm" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
              <th className={styles.th}>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.row}>
              <td className={styles.td}>
                <Checkbox.Root
                  className={styles.checkboxRoot}
                  checked={row.getIsSelected()}
                  onCheckedChange={(checked) => row.toggleSelected(!!checked)}
                >
                  <Checkbox.Indicator className={styles.checkboxIndicator}>
                    <Icon name="Check" size="sm" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className={styles.td}>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <IconButton
                      name="MoreVert"
                      size="sm"
                      className={styles.dropdownTrigger}
                    />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content className={styles.dropdownContent}>
                      <DropdownMenu.Item className={styles.dropdownItem}>
                        Edit
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className={styles.dropdownItem}>
                        Delete
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {enablePagination && (
        <div className={styles.pagination}>
          <IconButton
            name="FirstPage"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          />
          <IconButton
            name="ChevronLeft"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <span>
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <IconButton
            name="ChevronRight"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
          <IconButton
            name="LastPage"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          />
        </div>
      )}
    </div>
  );
}
