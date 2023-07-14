import { MainTable } from "./MainTable";

import supabase from "../../supabase";

const Component1 = () => {
  console.log("Hello");

  return (
    <>
      <div>
        <MainTable />
      </div>
    </>
  );
};

export default Component1;
