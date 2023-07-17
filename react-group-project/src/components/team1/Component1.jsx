import { MainTable } from "./MainTable";

import supabase from "../../supabase";
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
