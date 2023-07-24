import { MainTable } from "./MainTable";

import FilterBar from "./FilterBar";

import PlayerCard from "./PlayerCard";

const Component1 = () => {
  console.log("Hello");

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-64">
          <FilterBar />
        </div>
        <div className="w-full mt-4 lg:mt-0">
          <MainTable />
        </div>
      </div>
    </>
  );
};

export default Component1;
