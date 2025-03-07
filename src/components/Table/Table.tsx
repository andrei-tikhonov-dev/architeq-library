import { useState, useEffect } from "react";
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
  PaginationState,
} from "@tanstack/react-table";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { css } from "@emotion/css";
import theme from "../../contstants/theme";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import { Pagination } from "../Pagination";
import { Checkbox } from "../Checkbox";

interface TableProps<T extends object> {
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
  row: css`
    &:hover {
      background: ${theme.colors.background.overlay};
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
  onRowSelect,
  enableSorting = true,
  enablePagination = true,
  striped = false,
  pageSize = 10, // Default pageSize
}: TableProps<T>) {
  const styles = getStyles(striped);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      pagination,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableSorting: enableSorting,
  });

  useEffect(() => {
    if (onRowSelect) {
      const selectedRows = table
        .getSelectedRowModel()
        .rows.map((row) => row.original);
      onRowSelect(selectedRows);
    }
  }, [rowSelection, onRowSelect, table]);

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className={styles.th}>
                <Checkbox
                  size="sm"
                  variant="primary"
                  checked={table.getIsAllRowsSelected()}
                  onCheckedChange={(checked) =>
                    table.toggleAllRowsSelected(!!checked)
                  }
                />
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
                      onClick={
                        enableSorting && header.column.getCanSort()
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
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
                <Checkbox
                  size="sm"
                  variant="primary"
                  checked={row.getIsSelected()}
                  onCheckedChange={(checked) => row.toggleSelected(!!checked)}
                  aria-label={`Select row ${row.id}`}
                />
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
        <Pagination
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPages={table.getPageCount()}
          pageSize={table.getState().pagination.pageSize}
          totalItems={table.getFilteredRowModel().rows.length}
          onPageChange={(page) => table.setPageIndex(page - 1)}
          onPageSizeChange={(size) => table.setPageSize(size)}
        />
      )}
    </div>
  );
}
