/** @format */

import "../../App.css";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import supabaseConfig from "../../../../supabaseConfig";

function players() {
  const [esports, setEsports] = useState([]);
  const { supabaseUrl, supabaseKey } = supabaseConfig;

  const supabase = createClient(supabaseUrl, supabaseKey);
  useEffect(() => {
    const fetchEsportsData = async () => {
      const { data, error } = await supabase.from("esports").select();
      console.log(data);
      if (error) {
        // Handle the error if needed
        console.error("Error fetching data:", error);
      } else {
        setEsports(data);
      }
    };
    fetchEsportsData();
  }, []);

  const columns = [
    {
      header: "Name",
      accessorKey: "Full Name",
    },
    {
      header: "Age",
      accessorKey: "Age",
    },
    {
      header: "Country",
      accessorKey: "Country",
    },
    {
      header: "Rank",
      accessorKey: "Rank",
    },
  ];

  const table = useReactTable({
    data: esports,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex p-10 mt-5 justify-evenly">
      <table>
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

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  <span>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default players;
