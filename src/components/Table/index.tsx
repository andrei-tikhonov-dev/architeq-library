import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { css } from "@emotion/css";
import { useStyles2 } from "@grafana/ui";
import theme from "../../contstants/theme";

interface DataRow {
  id: string;
  name: string;
  age: number;
  city: string;
}

interface TableProps {
  data: DataRow[];
  columns: Array<ColumnDef<DataRow>>;
  onRowSelect?: (selectedIds: string[]) => void;
}

const getStyles = () => ({
  table: css`
    width: 100%;
    border-collapse: collapse;
    color: ${theme.colors.text.default};
    font-family: ${theme.fontFamily};
    font-size: 14px;
    line-height: 20px;
  `,
  th: css`
    background-color: ${theme.colors.background.overlay};
    padding: ${theme.spacing.md};
    text-align: left;
  `,
  td: css`
    padding: ${theme.spacing.md};
    border-bottom: 1px solid ${theme.colors.background.secondary};
  `,
  rowStriped: css`
    background-color: ${theme.colors.background.secondary};
  `,
  checkbox: css`
    width: 16px;
    height: 16px;
    background: white;
    border: 1px solid ${theme.colors.text.light};
    border-radius: 4px;
  `,
  dropdownTrigger: css`
    cursor: pointer;
    padding: ${theme.spacing.sm};
    border: none;
    background: none;
    color: ${theme.colors.text.default};
  `,
  dropdownMenu: css`
    background: ${theme.colors.background.primary};
    border-radius: ${theme.border.radius.sm};
    box-shadow: ${theme.shadows.md};
    padding: ${theme.spacing.sm};
  `,
  dropdownItem: css`
    padding: ${theme.spacing.sm};
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.background.secondary};
    }
  `,
});

export const Table: React.FC<TableProps> = ({ data, columns, onRowSelect }) => {
  const styles = useStyles2(getStyles);
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => {
      const isSelected = prev.includes(id);
      const updated = isSelected
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id];
      onRowSelect?.(updated);
      return updated;
    });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>
            <Checkbox.Root
              className={styles.checkbox}
              checked={selectedRows.length === data.length}
              onCheckedChange={() => {
                setSelectedRows(
                  selectedRows.length === data.length
                    ? []
                    : data.map((row) => row.id)
                );
              }}
            />
          </th>
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <th key={header.id} className={styles.th}>
                {header.column.columnDef.header as string}
              </th>
            ))
          )}
          <th className={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, index) => (
          <tr key={row.id} className={index % 2 === 0 ? "" : styles.rowStriped}>
            <td className={styles.td}>
              <Checkbox.Root
                className={styles.checkbox}
                checked={selectedRows.includes(row.original.id)}
                onCheckedChange={() => toggleRow(row.original.id)}
              />
            </td>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={styles.td}>
                {cell.getValue() as string}
              </td>
            ))}
            <td className={styles.td}>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className={styles.dropdownTrigger}>
                  ⋮
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className={styles.dropdownMenu}>
                  <DropdownMenu.Item
                    className={styles.dropdownItem}
                    onSelect={() => alert(`Editing ${row.original.id}`)}
                  >
                    Edit
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className={styles.dropdownItem}
                    onSelect={() => alert(`Deleting ${row.original.id}`)}
                  >
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
