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
    table-layout: fixed; /* Critical for fixed width columns */
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
    padding: 0;
    background: ${theme.colors.background.secondary};
    overflow: hidden;
  `,
  thContent: css`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    text-align: left;
    font-weight: 500;
    color: ${theme.colors.text.light};
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
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
    ${striped &&
    `&:nth-of-type(even) {
       background: ${theme.colors.background.secondary};
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
  pageSize = 10,
}: TableProps<T>) {
  const styles = getStyles(striped);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    columns.map((column: any) => column.accessorKey as string)
  );
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
      columnOrder,
      ...(onRowSelect ? { rowSelection } : {}),
      ...(enablePagination ? { pagination } : {}),
    },
    enableRowSelection: !!onRowSelect,
    ...(onRowSelect ? { onRowSelectionChange: setRowSelection } : {}),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnOrderChange: setColumnOrder,
    ...(enablePagination ? { onPaginationChange: setPagination } : {}),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...(enablePagination
      ? { getPaginationRowModel: getPaginationRowModel() }
      : {}),
    enableSorting: enableSorting,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
  });

  useEffect(() => {
    if (onRowSelect) {
      const selectedRows = table
        .getSelectedRowModel()
        .rows.map((row) => row.original);
      onRowSelect(selectedRows);
    }
  }, [rowSelection, onRowSelect, table]);

  const reorderColumn = (draggedColumnId: string, targetColumnId: string) => {
    console.log({ draggedColumnId, targetColumnId, columnOrder, columns });
    const newColumnOrder = [...columnOrder];
    const draggedIndex = newColumnOrder.indexOf(draggedColumnId);
    const targetIndex = newColumnOrder.indexOf(targetColumnId);
    newColumnOrder.splice(draggedIndex, 1);
    newColumnOrder.splice(targetIndex, 0, draggedColumnId);
    setColumnOrder(newColumnOrder);
  };

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {onRowSelect && (
                <th className={styles.th} style={{ width: "40px" }}>
                  <Checkbox
                    size="sm"
                    variant="primary"
                    checked={table.getIsAllRowsSelected()}
                    onCheckedChange={(checked) =>
                      table.toggleAllRowsSelected(!!checked)
                    }
                  />
                </th>
              )}
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className={styles.th}
                    style={{ width: `${header.getSize()}px` }}
                  >
                    {!header.isPlaceholder && (
                      <div className={styles.thContent}>
                        {/* Draggable content */}
                        <div
                          className={css`
                            display: flex;
                            align-items: center;
                            gap: ${theme.spacing.sm};
                            flex: 1;
                            cursor: ${header.column.getCanSort()
                              ? "pointer"
                              : "default"};
                            user-select: none;
                          `}
                          draggable={true}
                          onDragStart={(e) => {
                            e.dataTransfer.setData("text/plain", header.id);
                          }}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            const draggedColumnId =
                              e.dataTransfer.getData("text/plain");
                            reorderColumn(draggedColumnId, header.id);
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                          {enableSorting && header.column.getCanSort() && (
                            <IconButton
                              name={
                                header.column.getIsSorted() === "asc"
                                  ? "ArrowDropUp"
                                  : header.column.getIsSorted() === "desc"
                                  ? "ArrowDropDown"
                                  : "Sort"
                              }
                              size="sm"
                              onClick={header.column.getToggleSortingHandler()}
                            />
                          )}
                        </div>

                        {/* Resizer (completely separate from draggable content) */}
                        <div
                          className={css`
                            position: absolute;
                            right: 0;
                            top: 0;
                            height: 100%;
                            width: ${theme.spacing.md};
                            cursor: col-resize;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 1;

                            &:hover {
                              background-color: ${theme.colors.background
                                .primary};
                            }

                            &:active {
                              background-color: ${theme.colors.background
                                .secondary};
                            }
                          `}
                          onMouseDown={(e) => {
                            e.stopPropagation();
                            header.getResizeHandler()(e);
                          }}
                          onTouchStart={(e) => {
                            e.stopPropagation();
                            header.getResizeHandler()(e);
                          }}
                          onClick={(e) => {
                            // Prevent click event from bubbling up
                            e.stopPropagation();
                          }}
                          draggable={false}
                        >
                          <div
                            className={css`
                              height: 70%;
                              width: 2px;
                              background-color: ${theme.colors.background
                                .primary};
                            `}
                            draggable={false}
                          />
                        </div>
                      </div>
                    )}
                  </th>
                );
              })}{" "}
              <th className={styles.th} style={{ width: "90px" }}>
                <div className={styles.thContent}>Actions</div>
              </th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.row}>
              {onRowSelect && (
                <td className={styles.td} style={{ width: "40px" }}>
                  <Checkbox
                    size="sm"
                    variant="primary"
                    checked={row.getIsSelected()}
                    onCheckedChange={(checked) => row.toggleSelected(!!checked)}
                    aria-label={`Select row ${row.id}`}
                  />
                </td>
              )}
              {row.getVisibleCells().map((cell) => {
                const columnSize = cell.column.columnDef.size as number;
                return (
                  <td
                    key={cell.id}
                    className={styles.td}
                    style={{ width: `${columnSize}px` }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
              <td className={styles.td} style={{ width: "60px" }}>
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
