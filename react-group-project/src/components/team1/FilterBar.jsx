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

  const UniqueValuesComponent = ({ values, selectedValue, onClick }) => (
    <div className="flex flex-col pt-4 justify-center">
      {values.map((item) => (
        <div key={item} className="flex justify-center">
          {" "}
          {/* Added 'flex' and 'justify-center' */}
          <button
            onClick={() => onClick(item)}
            className={`bg-[#dfd7bf] text-[#537188] px-4 py-2 rounded w-48 mt-2 ${
              selectedValue === item
                ? "bg-[#CBB279] text-white"
                : "bg-[#dfd7bf] text-[#537188]"
            } hover:bg-[#CBB279] hover:text-[#537188]`}
          >
            {item}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="h-screen flex flex-col bg-[#537188] rounded text-center pt-4">
        <div className="flex flex-col mb-4 w-64">
          {Object.entries(filters).map(([key, label], index) => (
            <div key={key} className="mb-4">
              <button
                onClick={() => handleFilterClick(key)}
                className={`w-48 px-4 py-2 rounded bg-[#dfd7bf] text-[#537188] ${
                  activeFilter === key
                    ? "bg-[#CBB279] text-white"
                    : "bg-[#dfd7bf] text-[#537188]"
                } transition-all duration-200 hover:bg-[#CBB279] hover:text-[#537188]`}
              >
                {label}
              </button>
              {activeFilter === key && (
                <UniqueValuesComponent
                  values={uniqueValues}
                  selectedValue={selectedValue}
                  onClick={(item) => handleClick(key, item)}
                />
              )}
              {index < Object.entries(filters).length && (
                <hr className="mx-auto my-4 border-[#dfd7bf] w-48" />
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleClearFilters}
          className="w-full mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-[#CBB279] hover:text-red-500 hover:font-bold"
        >
          Remove Filters
        </button>
      </div>
    </>
  );
};

const getUniqueValues = (data, key) => {
  const values = data.map((item) => item[key]);
  return [...new Set(values)];
};

export default FilterBar;
