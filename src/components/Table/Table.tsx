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
  VisibilityState,
} from "@tanstack/react-table";
import { css } from "@emotion/css";
import { IconButton } from "../IconButton";
import { Pagination } from "../Pagination";
import { Checkbox } from "../Checkbox";
import { fontFamily } from "../../contstants/theme";
import { DropdownMenu, DropdownMenuItem } from "../DropdownMenu/DropdownMenu";
import { Icon } from "../Icon";

const tableTheme = {
  colors: {
    background: {
      primary: "#FFFFFF",
      secondary: "#F4F5F7",
    },
    text: {
      default: "#212226",
      light: "#7A7A7D",
    },
  },
  fontFamily,
  spacing: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  typography: {
    size: {
      md: "14px",
    },
  },
  border: {
    radius: {
      sm: "4px",
    },
  },
  radius: {
    button: "2px",
  },
  shadows: {
    md: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

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
    table-layout: fixed;
    border-collapse: collapse;
    background: ${tableTheme.colors.background.primary};
    font-family: ${tableTheme.fontFamily};
    font-size: ${tableTheme.typography.size.md};
  `,
  thead: css`
    position: sticky;
    top: 0;
    z-index: 1;
    background: ${tableTheme.colors.background.primary};
  `,
  th: css`
    padding: 0;
    background: ${tableTheme.colors.background.secondary};
    overflow: hidden;
  `,
  thContent: css`
    padding: ${tableTheme.spacing.md} ${tableTheme.spacing.lg};
    text-align: left;
    font-weight: 500;
    color: ${tableTheme.colors.text.light};
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
  `,
  td: css`
    padding: ${tableTheme.spacing.md} ${tableTheme.spacing.lg};
    border-bottom: 1px solid ${tableTheme.colors.background.secondary};
    color: ${tableTheme.colors.text.default};
  `,
  sortHeader: css`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${tableTheme.spacing.sm};

    &:hover {
      color: ${tableTheme.colors.text.default};
    }
  `,
  row: css`
    ${striped &&
    `&:nth-of-type(even) {
       background: ${tableTheme.colors.background.secondary};
     }`}
  `,
  pagination: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${tableTheme.spacing.md} ${tableTheme.spacing.lg};
    gap: ${tableTheme.spacing.md};
    color: ${tableTheme.colors.text.default};
  `,
  headerContent: css`
    cursor: grab;
    display: flex;
    align-items: center;
    gap: ${tableTheme.spacing.sm};
    flex: 1;
    user-select: none;
  `,
  resizeHandle: css`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: ${tableTheme.spacing.md};
    cursor: col-resize;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &:hover {
      background-color: ${tableTheme.colors.background.primary};
    }

    &:active {
      background-color: ${tableTheme.colors.background.secondary};
    }
  `,
  resizeLine: css`
    height: 70%;
    width: 2px;
    background-color: ${tableTheme.colors.background.primary};
  `,
  sortIcon: css`
    display: flex;
    align-items: center;
    margin-left: ${tableTheme.spacing.sm};
  `,
});

// @ts-ignore
interface TableHeaderCellProps<T extends object> {
  header: any;
  enableSorting: boolean;
  onReorderColumn: (draggedColumnId: string, targetColumnId: string) => void;
  styles: any;
  onHideColumn: (columnId: string) => void;
  hasHiddenColumns: boolean;
  onShowAllColumns: () => void;
}

function TableHeaderCell<T extends object>({
  header,
  enableSorting,
  onReorderColumn,
  styles,
  onHideColumn,
  hasHiddenColumns,
  onShowAllColumns,
}: TableHeaderCellProps<T>) {
  if (header.isPlaceholder) {
    return <div></div>;
  }

  const sortDirection = header.column.getIsSorted();

  const setSorting = (direction: "asc" | "desc") => {
    header.column.toggleSorting(direction !== "asc", false);
  };

  const clearSorting = () => {
    header.column.clearSorting();
  };

  return (
    <div className={styles.thContent}>
      <div
        className={styles.headerContent}
        draggable={true}
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", header.id);
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const draggedColumnId = e.dataTransfer.getData("text/plain");
          onReorderColumn(draggedColumnId, header.id);
        }}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}

        {enableSorting && sortDirection && (
          <div className={styles.sortIcon}>
            <Icon
              name={sortDirection === "asc" ? "ArrowDropUp" : "ArrowDropDown"}
              size="sm"
            />
          </div>
        )}
      </div>

      {(enableSorting && header.column.getCanSort()) || true ? (
        <DropdownMenu
          menuContent={
            <>
              {enableSorting && header.column.getCanSort() && (
                <>
                  <DropdownMenuItem onSelect={() => setSorting("asc")}>
                    Sort ascending
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setSorting("desc")}>
                    Sort descending
                  </DropdownMenuItem>
                  {sortDirection && (
                    <DropdownMenuItem onSelect={() => clearSorting()}>
                      Clear sort
                    </DropdownMenuItem>
                  )}
                </>
              )}
              <DropdownMenuItem onSelect={() => onHideColumn(header.id)}>
                Hide column
              </DropdownMenuItem>
              {hasHiddenColumns && (
                <DropdownMenuItem onSelect={onShowAllColumns}>
                  Show all columns
                </DropdownMenuItem>
              )}
            </>
          }
        >
          <IconButton name="MoreHoriz" size="sm" />
        </DropdownMenu>
      ) : null}

      <div
        className={styles.resizeHandle}
        onMouseDown={(e) => {
          e.stopPropagation();
          header.getResizeHandler()(e);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          header.getResizeHandler()(e);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        draggable={false}
      >
        <div className={styles.resizeLine} draggable={false} />
      </div>
    </div>
  );
}

interface TableActionCellProps {
  styles: any;
}

function TableActionCell({ styles }: TableActionCellProps) {
  return (
    <DropdownMenu
      menuContent={
        <>
          <DropdownMenuItem onSelect={() => console.log("Edit")}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log("Delete")}>
            Delete
          </DropdownMenuItem>
        </>
      }
    >
      <IconButton
        name="MoreVert"
        size="sm"
        className={styles.dropdownTrigger}
      />
    </DropdownMenu>
  );
}

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
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnOrder,
      columnVisibility,
      ...(onRowSelect ? { rowSelection } : {}),
      ...(enablePagination ? { pagination } : {}),
    },
    enableRowSelection: !!onRowSelect,
    ...(onRowSelect ? { onRowSelectionChange: setRowSelection } : {}),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnOrderChange: setColumnOrder,
    onColumnVisibilityChange: setColumnVisibility,
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
    const newColumnOrder = [...columnOrder];
    const draggedIndex = newColumnOrder.indexOf(draggedColumnId);
    const targetIndex = newColumnOrder.indexOf(targetColumnId);
    newColumnOrder.splice(draggedIndex, 1);
    newColumnOrder.splice(targetIndex, 0, draggedColumnId);
    setColumnOrder(newColumnOrder);
  };

  const hideColumn = (columnId: string) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [columnId]: false,
    }));
  };

  const showAllColumns = () => {
    setColumnVisibility({});
  };

  const hasHiddenColumns = Object.values(columnVisibility).some(
    (value) => value === false
  );

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
                    <TableHeaderCell
                      header={header}
                      enableSorting={enableSorting}
                      onReorderColumn={reorderColumn}
                      styles={styles}
                      onHideColumn={hideColumn}
                      hasHiddenColumns={hasHiddenColumns}
                      onShowAllColumns={showAllColumns}
                    />
                  </th>
                );
              })}
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
                <TableActionCell styles={styles} />
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
