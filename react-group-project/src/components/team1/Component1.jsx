import { MainTable } from "./MainTable";

import FilterBar from "./FilterBar";

const Component1 = () => {
  console.log("Hello");

  return (
    <>
      <div>
        <FilterBar />
        <MainTable />
      </div>
    </>
  );
};

export default Component1;
