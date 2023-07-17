import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyFilter } from "../../reducers/esportsSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(null);

  const filters = {
    "Preferred Game": "Preferred Game",
    "Energy Drink": "Energy Drink",
    Country: "Country",
    Apparel: "Apparel",
  };

  const value = useSelector((state) => state.esports.value);
  const uniqueValues = getUniqueValues(value, activeFilter);

  const handleClick = (key, value) => {
    dispatch(applyFilter(key, value));
  };

  const handleFilterClick = (key) => {
    setActiveFilter(activeFilter === key ? null : key);
  };

  return (
    <>
      <div className="mb-4">FilterBar</div>
      <h1 className="mb-4">Hello!</h1>
      <div className="space-x-4">
        {Object.entries(filters).map(([key, label]) => (
          <button
            key={key}
            onClick={() => handleFilterClick(key)}
            className={`px-4 py-2 rounded ${
              activeFilter === key ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {activeFilter && (
        <div className="mt-4 space-x-4">
          {uniqueValues.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(activeFilter, item)}
              className="px-4 py-2 rounded bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => handleClick(null, null)}
        className="mt-4 px-4 py-2 rounded bg-red-500 text-white"
      >
        Remove Filters
      </button>
    </>
  );
};

export default FilterBar;

// Helper function to get unique values for a specific key
const getUniqueValues = (data, key) => {
  const values = data.map((item) => item[key]);
  return [...new Set(values)];
};
