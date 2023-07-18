import React, { useState } from "react";
import "../../App.css";
import { useSelector } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import supabaseConfig from "../../../../supabaseConfig";
import { useEffect } from "react";
function Players() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
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

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

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
            <tr key={row.id} onClick={() => handlePlayerClick(row.original)}>
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

      {/* Modal */}
      {selectedPlayer && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedPlayer["Full Name"]}</h2>
            <h1>EQUIPMENT</h1>
            <p>PC: {selectedPlayer["Gaming PC"]}</p>
            <p>Monitor: {selectedPlayer["Gaming Monitor"]}</p>
            <p>Chair: {selectedPlayer["Gaming Chair"]}</p>
            <p>Headset: {selectedPlayer.Headset}</p>
            <p>Microphone: {selectedPlayer.Microphone}</p>
            <h1>CONNECT</h1>
            <p>streaming platform: {selectedPlayer["Streaming Platform"]}</p>
            <p>Twitch: {selectedPlayer.Twitch}</p>
            <p>Twitter: {selectedPlayer.Twitter}</p>
            <p>Youtube: {selectedPlayer.YouTube}</p>
            <h1>FUN FACTS</h1>
            <p>Preferred Game: {selectedPlayer["Preferred Game"]}</p>
            <p>Total hours played: {selectedPlayer["Total Hours Played"]}</p>
            <p>
              Tournament experience: {selectedPlayer["Tournament Experience"]}
            </p>
            <p>Favorite Pro Player: {selectedPlayer["Favorite Pro Player"]}</p>
            <p>Favorite energy drink: {selectedPlayer["Energy Drink"]}</p>
            <button onClick={() => setSelectedPlayer(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Players;
