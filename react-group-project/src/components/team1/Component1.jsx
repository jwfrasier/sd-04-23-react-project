import { MainTable } from "./MainTable";

import FilterBar from "./FilterBar";

import PlayerCard from "./PlayerCard";

const Component1 = () => {
  console.log("Hello");

  return (
    <>
      <div className="flex">
        <div>
          <FilterBar />
        </div>
        <div className="mx-auto">
          <MainTable />
        </div>
      </div>
    </>
  );
};

export default Component1;
