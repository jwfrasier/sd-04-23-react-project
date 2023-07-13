import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchDatabaseData, {
  useFetchTableDataQuery,
  useLazyFetchTableDataQuery,
} from "../../supabaseSlice";
const Component2 = () => {
  const dispatch = useDispatch();
  const [trigger, { data: tableData, isLoading, error }] =
    useLazyFetchTableDataQuery();
  const handleClick = () => {
    trigger();
  };
  return (
    <div>
      Component2
      <button onClick={handleClick}>Get table data</button>
      {tableData &&
        tableData?.results.map((data) => {
          return <p key={data.name}>{data.name}</p>;
        })}
    </div>
  );
};

export default Component2;
