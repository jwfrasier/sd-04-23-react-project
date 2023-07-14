import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";

export const MainTable = ({ esports }) => {
  const data = useMemo(() => esports, []);

  /** @type import (`@tanstack/react-table`).ColumnDef<any> */

  const columns = [
    {
      header: `Full Name`,
      accessorKey: `Full Name`,
    },
    {
      header: `Username`,
      accessorKey: `Username`,
    },
    {
      header: `Preferred Game`,
      accessorKey: `Preferred Game`,
    },
    {
      header: `Energy Drink`,
      accessorKey: `Energy Drink`,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getRowModel());
  console.log({ esports });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} id={`State-${row.original.state}`}>
                <span>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
