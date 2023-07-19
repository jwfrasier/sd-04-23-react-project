import React from "react";

const PlayerCard = ({ rowData, onClose }) => {
  return (
    <div className="bg-black">
      <button onClick={onClose} className="text-white font-bold px-2 py-1">
        Close Details
      </button>
      <h2 className="text-white">Details of the Selected Row:</h2>
      {rowData ? (
        <ul className="text-white">
          {Object.entries(rowData).map(([key, value]) => (
            <li key={key}>
              <span className="font-semibold">{key}: </span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No row selected.</p>
      )}
    </div>
  );
};

export default PlayerCard;
