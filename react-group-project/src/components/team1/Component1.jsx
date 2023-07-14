import { useEffect, useState } from "react";
import { MainTable } from "./MainTable";

import supabase from "../../supabase";

const Component1 = () => {
  console.log("Hello");

  const [esports, setEsports] = useState([]);

  useEffect(() => {
    const fetchEsportsData = async () => {
      const { data, error } = await supabase.from("esports").select();
      if (error) {
        console.error("Error fetching esports:", error.message);
      } else {
        setEsports(data);
      }
    };

    fetchEsportsData();
  }, []);

  console.log(esports);

  return (
    <>
      <div>
        <MainTable esports={esports} />
      </div>

      <div>Component1</div>
    </>
  );
};

export default Component1;
