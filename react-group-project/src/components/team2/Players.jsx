import { useState } from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import {
  fetchTournamentData,
  setSelectedPlayer,
} from "./../../reducers/playersSlice";

function Players() {
  const [selectedPlayer, setSelectedPlayerState] = useState(null);
  const dispatch = useDispatch();

  const esports = useSelector((state) => state.players.value);

  useEffect(() => {
    dispatch(fetchTournamentData());
  }, [dispatch]);

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
    setSelectedPlayerState(player);
    dispatch(setSelectedPlayer(player));
  };

  return (
    <div className="flex flex-col  justify-evenly">
      <table className="players-table">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th id="table-header" key={header.id}>
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
                <td
                  key={cell.id}
                  id={`Rank-${row.original.Rank}`}
                  className=" text-white hover:bg-white hover:text-regal-blue ease-in duration-200 h-10   hover:cursor-pointer"
                >
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
        <div className="modal text-center">
          <div className="modal-content">
            <h2>{selectedPlayer["Full Name"]}</h2>
            <h1>-EQUIPMENT-</h1>
            <p>PC: {selectedPlayer["Gaming PC"]}</p>
            <p>Monitor: {selectedPlayer["Gaming Monitor"]}</p>
            <p>Chair: {selectedPlayer["Gaming Chair"]}</p>
            <p>Headset: {selectedPlayer.Headset}</p>
            <p>Microphone: {selectedPlayer.Microphone}</p>
            <h1>-CONNECT-</h1>
            <p>streaming platform: {selectedPlayer["Streaming Platform"]}</p>
            <p>Twitch: {selectedPlayer.Twitch}</p>
            <p>Twitter: {selectedPlayer.Twitter}</p>
            <p>Youtube: {selectedPlayer.YouTube}</p>
            <h1>-FUN FACTS-</h1>
            <p>Preferred Game: {selectedPlayer["Preferred Game"]}</p>
            <p>Total hours played: {selectedPlayer["Total Hours Played"]}</p>
            <p>
              Tournament experience: {selectedPlayer["Tournament Experience"]}
            </p>
            <p>Favorite Pro Player: {selectedPlayer["Favorite Pro Player"]}</p>
            <p>Favorite energy drink: {selectedPlayer["Energy Drink"]}</p>
            <button
              className="close-button"
              onClick={() => setSelectedPlayerState(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Players;
