import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchEsports } from "../../reducers/esportsSlice";
import PlayerCard from "./PlayerCard";

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

  const [selectedRowData, setSelectedRowData] = useState(null); // Local state to store selected row's data
  const [isDetailsVisible, setIsDetailsVisible] = useState(false); // Local state to toggle DetailsComponent visibility

  // Function to handle row click
  const handleRowClick = (row) => {
    setSelectedRowData(row.original); // Store the clicked row's data in local state
    setIsDetailsVisible(true); // Show DetailsComponent on row click
  };

  // Function to close DetailsComponent
  const handleCloseDetails = () => {
    setIsDetailsVisible(false); // Hide DetailsComponent
  };

  // console.log(table.getRowModel());
  // console.log({ esports });

  return (
    <>
      <div className="shadow-xl text-white text-center w-128">
        <table className="min-w-full bg-[#537188] border rounded-lg">
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
              <tr key={row.id} onClick={() => handleRowClick(row)}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    id={`State-${row.original.state}`}
                    className="border px-10 py-1 border-[#dfd7bf]"
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
        {isDetailsVisible && (
          <PlayerCard rowData={selectedRowData} onClose={handleCloseDetails} />
        )}{" "}
      </div>
    </>
  );
};
