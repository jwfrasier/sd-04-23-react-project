import React from "react";

const PlayerCard = ({ rowData, onClose }) => {
  return (
    <div className="bg-[#537188]">
      <h2 className="text-[#CBB279] font-bold pt-2">
        Details of the Selected Row:
      </h2>
      {rowData ? (
        <ul className="text-[#dfd7bf] text-left pl-2 pb-2">
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
