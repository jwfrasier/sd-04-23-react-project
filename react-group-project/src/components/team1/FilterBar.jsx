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
      {/* <div className="mb-4">FilterBar</div> */}
      {/* <h1 className="mb-4">Hello!</h1> */}
      <div className="flex flex-col mb-4">
        {Object.entries(filters).map(([key, label]) => (
          <button
            key={key}
            onClick={() => handleFilterClick(key)}
            className={`px-4 py-2 rounded ${
              activeFilter === key ? "bg-indigo-500 text-white" : "bg-gray-200"
            } hover:bg-white hover:text-indigo-500`}
          >
            {label}
          </button>
        ))}
      </div>
      {activeFilter && (
        <div className="flex flex-col mb-4">
          {uniqueValues.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(activeFilter, item)}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-white hover:text-indigo-500"
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => handleClick(null, null)}
        className="w-full mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-white hover:text-red-500"
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
