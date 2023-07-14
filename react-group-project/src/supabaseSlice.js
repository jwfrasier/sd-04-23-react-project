// import { createClient } from "@supabase/supabase-js";
// import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// const supabaseUrl = import.meta.env.VITE_DB_URL;
// const supabaseKey = import.meta.env.VITE_DB_PASSWORD;
// console.log(supabaseUrl);
// const supabase = createClient(supabaseUrl, supabaseKey);

// const fetchDatabaseData = createApi({
//   reducerPath: "fetchDatabaseData",
//   baseQuery: fetchBaseQuery({ baseUrl: supabaseUrl }),
//   endpoints: (builder) => ({
//     fetchTableData: builder.query({
//       query: (esports) => `/${esports}`,
//     }),
//     fetchDataById: builder.query({
//       query: (tableName, id) => `/${tableName}/${id}`,
//     }),
//   }),
// });

// export const {
//   useFetchTableDataQuery,
//   useLazyFetchTableDataQuery,
//   useFetchDataByIdQuery,
//   useLazyFetchDataByIdQuery,
// } = fetchDatabaseData;
// export default fetchDatabaseData;
// export { supabase };
