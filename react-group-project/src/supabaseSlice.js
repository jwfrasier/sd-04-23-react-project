import { createClient } from "@supabase/supabase-js";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const supabase = createClient(
  import.meta.env.VITE_DB_URL,
  import.meta.env.VITE_DB_PASSWORD
);

const fetchDatabaseData = createApi({
  reducerPath: "fetchDatabaseData",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_DB_URL }),
  endpoints: (builder) => ({
    fetchTableData: builder.query({
      query: (esports) => `/${esports}`,
    }),
    fetchDataById: builder.query({
      query: (tableName, id) => `/${tableName}/${id}`,
    }),
  }),
});

export const {
  useFetchTableDataQuery,
  useLazyFetchTableDataQuery,
  useFetchDataByIdQuery,
  useLazyFetchDataByIdQuery,
} = fetchDatabaseData;
export default fetchDatabaseData;
export { supabase };
