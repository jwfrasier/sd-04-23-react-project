import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyFilter } from "../../reducers/esportsSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

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
    setSelectedValue(value);
  };

  const handleFilterClick = (key) => {
    setActiveFilter(activeFilter === key ? null : key);
  };

  const handleClearFilters = () => {
    dispatch(applyFilter("Preferred Game", null));
    dispatch(applyFilter("Energy Drink", null));
    dispatch(applyFilter("Country", null));
    dispatch(applyFilter("Apparel", null));
    setActiveFilter(null);
    setSelectedValue(null);
  };

  return (
    <>
      <div className="bg-blue-500">
        <div className="flex flex-col mb-4 w-64">
          {Object.entries(filters).map(([key, label]) => (
            <div key={key} className="mb-4">
              <button
                onClick={() => handleFilterClick(key)}
                className={`px-4 py-2 rounded ${
                  activeFilter === key
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                } hover:bg-white hover:text-blue-500`}
              >
                {label}
              </button>
              {activeFilter === key && (
                <div className="flex flex-col mt-2">
                  {uniqueValues.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleClick(key, item)}
                      className={`px-4 py-2 rounded ${
                        selectedValue === item
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      } hover:bg-white hover:text-blue-500`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleClearFilters}
          className="w-full mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-white hover:text-red-500"
        >
          Remove Filters
        </button>
      </div>
    </>
  );
};

export default FilterBar;

const getUniqueValues = (data, key) => {
  const values = data.map((item) => item[key]);
  return [...new Set(values)];
};
