import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchEsports } from "../../reducers/esportsSlice";
import PlayerCard from "./PlayerCard";
import PlayerCardModal from "./PlayerCardModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false); // Local state to control the visibility of the modal

  // Function to handle row click
  const handleRowClick = (row) => {
    setSelectedRowData(row.original); // Store the clicked row's data in local state
    setIsModalOpen(true); // Show modal on row click
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Hide modal
  };

  // console.log(table.getRowModel());
  // console.log({ esports });

  return (
    <>
      <div className="text-white text-center">
        <div className="overflow-x-auto">
          <table className="w-full bg-[#537188] border rounded-lg">
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
                      className="border px-10 py-1 border-[#dfd7bf] whitespace-nowrap"
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
          {isModalOpen && (
            <PlayerCardModal
              rowData={selectedRowData}
              onClose={handleCloseModal}
            />
          )}{" "}
        </div>
      </div>
    </>
  );
};
