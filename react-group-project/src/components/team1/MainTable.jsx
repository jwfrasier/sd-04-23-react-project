import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchEsports } from "../../reducers/esportsSlice";

export const MainTable = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.esports.filteredValue);
  const loading = useSelector((state) => state.esports.loading);

  useEffect(() => {
    dispatch(fetchEsports());
  }, [dispatch]);

  const data = useMemo(() => filteredData, [filteredData]);
  console.log(data);

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
    {
      header: `Twitch`,
      accessorKey: `Twitch`,
    },
    {
      header: `Country`,
      accessorKey: `Country`,
    },
    {
      header: `Age`,
      accessorKey: `Age`,
    },
    {
      header: `Apparel`,
      accessorKey: `Apparel`,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // console.log(table.getRowModel());
  // console.log({ esports });

  return (
    <>
      <div className="shadow-xl text-white text-center">
        <table className="min-w-full bg-blue-500 border rounded-lg">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-10">
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
                  <td
                    key={cell.id}
                    id={`State-${row.original.state}`}
                    className="border px-10 py-1"
                  >
                    <span>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};