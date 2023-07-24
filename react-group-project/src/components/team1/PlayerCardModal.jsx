import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerCardModal = ({ rowData, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#CBB279] rounded-lg p-2 max-w-2xl w-full relative">
        <button
          className="absolute top-4 right-4 text-[#537188] bg-[#CBB279] hover:text-white hover:bg-red-500 px-3 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
        <PlayerCard rowData={rowData} />
      </div>
    </div>
  );
};

export default PlayerCardModal;
